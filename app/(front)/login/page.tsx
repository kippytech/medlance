import LoginForm from '@/components/Auth/LoginForm'
import React from 'react'

function Login() {
  return (
    <div className='text-slate-300 p-0'>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-3xl mx-auto p-4 bg-white border border-gray-200 rounded-md shadow sm:p-6 md:p-8 text-slate-700">
            <div className='hidden md:flex'>
                {/* image */}
            </div>
            <div>
                <LoginForm />
            </div>
        </div>
    </div>
  )
}

export default Login