import CustomAccordion from '@/components/Frontend/CustomAccordion'
import Pricing from '@/components/Frontend/Pricing'
import { Button, buttonVariants } from '@/components/ui/button'
import { ListBulletIcon } from '@heroicons/react/20/solid'
import { Check, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='p-8 text-slate-300'>
        <section className='max-w-6xl mx-auto pb-8 px-4'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-2xl md:text-4xl leading-5 md:leading-10 font-bold'>Build a thriving {" "}<span className='text-blue-600 font-semibold'>direct-pay</span>{" "}practice with Medlance</h2>
                    <p className='text-2xl'>Medlance streamlines patient care, whether in-person, virtually, or even both.</p>
                    <Button asChild className='max-w-[300px] text-lg font-semibold uppercase'>
                        <Link href='#' className=''>
                            <Mail className='h-4 w-4 mr-2 ' />
                            List your practice
                        </Link>
                    </Button>
                    <div className='flex flex-col text-xg'>
                        <div className="flex items-center font-semibold">
                            <Check className='w-4 h-4 mr-2 shrink-0' />
                            Medlance brings patients to you
                        </div>
                        <div className="flex items-center font-semibold">
                            <Check className='w-4 h-4 mr-2  shrink-0' />
                            Seamless e-prescription experience
                        </div>
                        <div className="flex items-center font-semibold">
                            <Check className='w-4 h-4 mr-2 shrink-0' />
                            Integrate clinical note-taking
                        </div>
                        <div className="flex items-center font-semibold">
                            <Check className='w-4 h-4 mr-2 ' />
                            No fees for providers
                        </div>
                    </div>
                </div>
                <Image src='/doctor.jpeg' alt='doctor' height={184} width={257} className='w-full' />
            </div>
        </section>
        <section className='max-w-6xl mx-auto pb-8 px-4'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <Image src='/doctor.jpeg' alt='doctor' height={184} width={257} className='w-full hidden md:block' />
                <div className='flex flex-col gap-4'>
                    <h2 className='text-2xl md:text-4xl leading-5 md:leading-10 font-bold'>Join {" "}<span className='text-blue-600 font-semibold'>Medlance</span>{" "}to increase your revenue today!</h2>
                    <div className='flex flex-col text-xg gap-4'>
                        <div className="flex items-center gap-2 font-semibold">
                            <ListBulletIcon className='w-4 h-4 shrink-0 text-blue-600' />
                            <div className='flex flex-col'>
                                <p className='font-semibold text-lg'>List your practice</p>
                                <p className='text-muted-foreground'>It&apos;s easy to join.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 font-semibold">
                            <ListBulletIcon className='w-4 h-4 shrink-0 text-blue-600' />
                            <div className='flex flex-col'>
                                <p className='font-semibold text-lg'>Create competitive offerings</p>
                                <p className='text-muted-foreground'>We help you tailor your offerings to attract new patients and build your practice.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 font-semibold">
                            <ListBulletIcon className='w-4 h-4 shrink-0 text-blue-600' />
                            <div className='flex flex-col'>
                                <p className='font-semibold text-lg'>Start seeing patients</p>
                                <p className='text-muted-foreground'>Patients can book appointments with you minutes after your profile goes live.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                        <div className="p-4 rounded-lg shadow-2xl bg-white text-slate-700 space-y-4">
                            <h3 className="text-2xl font-semibold capitalize">Begin your journey</h3>
                            <p>Start a new application to join our network of healthcare providers</p>
                            <Button asChild className=' font-semibold uppercase'>
                                <Link href='#' className=''>
                                    Start a new application
                                </Link>
                            </Button>
                        </div>
                        <div className="p-4 rounded-lg shadow-2xl bg-white text-slate-700 space-y-4">
                            <h3 className="text-2xl font-semibold capitalize">Resume your application</h3>
                            <p>Pick up where you left off and complete your onboarding process</p>
                            <Button asChild className=' font-semibold uppercase'>
                                <Link href='#' className=''>
                                    Resume your application
                                </Link>
                            </Button>
                        </div>
                        <div className="p-4 rounded-lg shadow-2xl bg-white text-slate-700 space-y-4">
                            <h3 className="text-2xl font-semibold capitalize">Schedule a call</h3>
                            <p>Arrange for a call to finalize your application</p>
                            <Button asChild className=' font-semibold uppercase'>
                                <Link href='#' className=''>
                                    Schedule a call
                                </Link>
                            </Button>
                        </div>
                        <div className="p-4 rounded-lg shadow-2xl bg-white text-slate-700 space-y-4">
                            <h3 className="text-2xl font-semibold capitalize">Track your progress</h3>
                            <p>Monitor the status of your application & approval in real-time</p>
                            <Button asChild className=' font-semibold uppercase'>
                                <Link href='#' className=''>
                                    Check status
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className=''>
            <Pricing />
        </section>
        <section className='max-w-2xl mx-auto px-4'>
            <CustomAccordion FAQ={FAQ} />
        </section>
    </div>
  )
}

export default page

const FAQ = [
    {
        qn: 'whats Medlance',
        ans: 'The best online consultation site'
    },
    {
        qn: 'Are your doctors certified',
        ans: 'Our providers are not only certified but they also undergo rigorous verification before going live'
    },
    {
        qn: 'What medical services do you offer',
        ans: 'We offer a variety of services. Please check our services'
    },
]