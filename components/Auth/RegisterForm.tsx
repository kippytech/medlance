'use client'

import { RegisterInputProps } from '@/types/register'
import Link from 'next/link'
import {useForm} from 'react-hook-form'
import {useState} from 'react'
import {createUser} from '@/actions/users'
import { toast } from 'react-hot-toast'

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false)
    const {register, reset, handleSubmit, formState: {errors}} = useForm<RegisterInputProps>()

    const onSubmit = async (data: RegisterInputProps) => {
        console.log('data', data)
        setIsLoading(true)

        const fullName = `${data.firstName} ${data.lastName}`
        const {email, password} = data
        const data2 = {password , email, fullName}
        try {
            const user = await createUser(data2)

            if(user && user.status === 200) {
                console.log('account created successfully', user.data)
                toast.success('account created successfully')
            } else {
                console.log('error creating account', user.error)
            }
        } catch (error) {
            console.log(error)
        } finally {
            reset()
            setIsLoading(false)
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
          Create an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" >
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
              First Name
            </label>
            <div className="mt-2">
              <input
              {...register('firstName', {required: true})}
                id="firstName"
                name="firstName"
                type="text"
                //autoComplete="lname"
                
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.firstName && <span className='text-red-500 text-sm'>This field must be filled.</span>}
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
              Last Name
            </label>
            <div className="mt-2">
              <input
              {...register('lastName', {required: true})}
                id="lastName"
                name="lastName"
                type="text"
                //autoComplete="lname"
                
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.lastName && <span className='text-red-500 text-sm'>This field must be filled.</span>}
            </div>
          </div>
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
              {/* <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div> */}
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
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>

)
}
