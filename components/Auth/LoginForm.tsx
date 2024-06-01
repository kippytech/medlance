'use client'

import { LoginInputProps } from '@/types/register'
import Link from 'next/link'
import {useForm} from 'react-hook-form'
import {useState} from 'react'
import {useRouter} from 'next/navigation'
import toast from 'react-hot-toast'
import {signIn} from 'next-auth/react'
import { Alert } from 'flowbite-react'
import { HiInformationCircle } from 'react-icons/hi'

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
    const {register, reset, handleSubmit, formState: {errors}} = useForm<LoginInputProps>()

    const router = useRouter()

    const onSubmit = async (data: LoginInputProps) => {
      try {
        setIsLoading(true);
        console.log("Attempting to sign in with credentials:", data);
        const loginData = await signIn("credentials", {
          ...data,
          redirect: false,
        });
        console.log("SignIn response:", loginData);
        if (loginData?.error) {
          setIsLoading(false);
          toast.error("Sign in error: Check your credentials");
          setShowNotification(true);
        } else {
          // Sign-in was successful
          setShowNotification(false);
          reset();
          setIsLoading(false);
          toast.success("Login Successful");
          router.push("/dashboard");
        }
      } catch (error) {
        setIsLoading(false);
        console.error("Network Error:", error);
        toast.error("Its seems something is wrong with your Network");
      }
    }
return (  
    <div className="flex min-h-full flex-1 flex-col justify-center ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {showNotification && (
            <Alert color='failure' icon={HiInformationCircle}>
              <span className='font-medium'>Sign in error! Please check your credentials.</span>
            </Alert>
          )}
        <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
              {...register('email', {required: true})}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.email && <span className='text-red-500 text-sm'>This field must be filled.</span>}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
              {...register('password', {required: true})}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.password && <span className='text-red-500 text-sm'>This field must be filled.</span>}
            </div>
          </div>

          <div>
            <button
              disabled={isLoading}
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>

)
}
