'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useSession } from "next-auth/react"
import DatePickerInput from "./DatePickerInput"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import ImageInput from "../ImageInput"

export default function Biodata() {
    const session = useSession()
  return (
    <Card className="mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Bio Data</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder={session.data?.user.name!.split(" ")[0]} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="first-name">Middle name (Optional)</Label>
              <Input id="middle-name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder={session.data?.user.name!.split(" ")[1]} required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder={session.data?.user.email!}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="dob">Date of Birth</Label>
            <div id='dob'>
                <DatePickerInput />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="gender">Gender</Label>
            <div id='gender'>
                <RadioGroup defaultValue="male" className='flex gap-4 items-center'>
                    <div className="flex items-center gap-2">
                        <RadioGroupItem value="male" id="r1" />
                        <Label htmlFor="r1">Male</Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <RadioGroupItem value="female" id="r2" />
                        <Label htmlFor="r2">Female</Label>
                    </div>
                </RadioGroup>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="pic">Profile photo</Label>
            <div id='pic'>
                <ImageInput />
            </div>
          </div>
          </div>
      </CardContent>
    </Card>
  )
}
