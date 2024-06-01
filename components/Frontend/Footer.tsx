'use client'

import { Facebook, Instagram, Linkedin, Twitter, X, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    const socialLinks = [
        {
            title: 'Linkedin',
            href: 'https://www.linkedin.com/company/medlance',
            icon: Linkedin,
            color: 'text-blue-600'
        },
        {
            title: 'Facebook',
            href: 'https://www.linkedin.com/company/medlance',
            icon: Facebook,
            color: 'text-blue-400'
        },
        // {
        //     title: 'Youtube',
        //     href: 'https://www.linkedin.com/company/medlance',
        //     icon: Youtube,
        // },
        {
            title: 'Twitter',
            href: 'https://www.linkedin.com/company/medlance',
            icon: Twitter,
            color: 'text-blue-400'
        },
        {
            title: 'Instagram',
            href: 'https://www.linkedin.com/company/medlance',
            icon: Instagram,
            color: 'text-pink-300'
        },
    ]

    const footerNavs = [
        {
            label: "Company",
            items: [
                {
                    href: '/join/doctors',
                    name: 'List your Practice'
                },
                {
                    href: 'javascript:void()',
                    name: 'Blog'
                },
                {
                    href: 'javascript:void()',
                    name: 'Team'
                },
                {
                    href: 'javascript:void()',
                    name: 'Careers'
                },
            ],
        },
        {
            label: "Resources",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'contact'
                },
                {
                    href: 'javascript:void()',
                    name: 'Support'
                },
                {
                    href: 'javascript:void()',
                    name: 'Docs'
                },
                {
                    href: 'javascript:void()',
                    name: 'Pricing'
                },
            ],
        },
        {
            label: "About",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Terms'
                },
                {
                    href: 'javascript:void()',
                    name: 'License'
                },
                {
                    href: 'javascript:void()',
                    name: 'Privacy'
                },
                {
                    href: 'javascript:void()',
                    name: 'About US'
                },
            ]
        }
    ]

    return (
        <footer className="bg-card text-card-foreground px-4 py-5 max-w-screen-xl mx-auto md:px-8 mt-12 md:mt-24">
            <div className="gap-6 justify-between md:flex">
                <div className="flex-1">
                    <div className="max-w-xs">
                        {/* <img src="https://www.floatui.com/logo.svg" className="w-32" /> */}
                        <p className="leading-relaxed mt-2 text-[15px]">
                            Lorem Ipsum has been the industry standard dummy text ever since the 1500s.
                        </p>
                    </div>
                    
                </div>
                <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4"
                                key={idx}
                            >
                                <h4 className="font-medium">
                                    { item.label }
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <a 
                                                href={el.href}
                                                className="hover:underline hover:text-indigo-600 text-muted-foreground"
                                            
                                            >
                                                { el.name }
                                            </a>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
            </div>
            <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; {new Date().getFullYear()} Medlance All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        {socialLinks.map((item, i) => {
                            const Icon = item.icon
                            return (
                                <li key={i} className="w-10 h-10 border rounded-full flex items-center justify-center">
                                    <Link href={item.href} className={item.color}>
                                        <Icon className='h-6 w-6 text-blue-95' />
                                    </Link>
                                </li>
                        )})}
                    </ul>
                </div>
            </div>
        </footer>
    )
}
