'use server'

import { RegisterInputProps } from "@/types/register"
import {prisma} from '@/lib/db'
import EmailTemplate from "@/components/Emails/EmailTemplate";
import bcrypt from "bcrypt";
import { Resend } from "resend";

type RegInputProps = {
    email: string
    fullName: string
    password: string
}

export async function createUser(data: RegInputProps) {
    console.log(data)
    const {fullName, email, password, } = data
    try {
        const existingUser = await prisma.user.findUnique({
            where: {
              email,
            },
          });
          if (existingUser) {
            return {
              data: null,
              error: `User with this email ( ${email})  already exists in the Database`,
              status: 409,
            };
          }
        
        // Encrypt the Password =>bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    //Generate Token
    const generateToken = () => {
      const min = 100000; // Minimum 6-figure number
      const max = 999999; // Maximum 6-figure number
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const userToken = generateToken();
    const newUser = await prisma.user.create({
      data: {
        name: fullName,
        email,
        //phone,
        password: hashedPassword,
        //role,
        token: userToken,
      },
    });
    //Send an Email with the Token on the link as a search param
    const resend = new Resend(process.env.RESEND_API_KEY)
    const token = newUser.token;
    const userId = newUser.id;
    const name = newUser.name.split(" ")[0];
    const linkText = "Verify your Account ";
    const message =
      "Thank you for registering with Medlance. To complete your registration and verify your email address, please enter the following 6-digit verification code on our website :";
    const sendMail = await resend.emails.send({
      from: 'onboarding@resend.dev', //"Medlance <info@medlance.com>",
      to: email,
      subject: "Verify Your Email Address",
      react: EmailTemplate({ name, token, linkText, message }),
    });
    console.log('token', token);
    console.log('sendMail', sendMail);
    console.log('newUser', newUser);
    return {
      data: newUser,
      error: null,
      status: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
}

export async function getUserById(id: string) {
    try {
        const user = await prisma.user.findUnique({
            where: {id}
        })

        return user
    } catch (error) {
        console.log(error)
    }
}

export async function updateUserById(id: string) {
    try {
        const updatedUser = await prisma.user.update({
            where: {id},
            data: {
                isVerfied: true
            }
        })

        return updatedUser
    } catch (error) {
        console.log(error)
    }
}