'use client'

import { Item } from "@radix-ui/react-navigation-menu";
import { Tabs } from "flowbite-react";
import { Activity, ArrowBigRight, ArrowBigRightIcon, Microscope, Repeat, Stethoscope } from "lucide-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import ServiceList from "./services/ServiceList";
import LinkCard from "./doctors/LinkCard";
//import { MdDashboard } from "react-icons/md";

const services = [
    {
        title: 'Telehealth',
        image: '/oppo-reno8.jpeg',
        slug: 'telehealth'
    },
    {
        title: 'Video Prescription',
        image: '/oppo-reno8.jpeg',
        slug: 'video-prescription'
    },
    {
        title: 'UTI Consult',
        image: '/oppo-reno8.jpeg',
        slug: 'uti-consult'
    },
    {
        title: 'Mental Health',
        image: '/oppo-reno8.jpeg',
        slug: 'mental-health'
    },
    {
        title: 'Dermatology Consult',
        image: '/oppo-reno8.jpeg',
        slug: 'mental-health'
    },
    {
        title: 'ED Consult',
        image: '/oppo-reno8.jpeg',
        slug: 'mental-health'
    },
    {
        title: 'Urgent Consult',
        image: '/oppo-reno8.jpeg',
        slug: 'mental-health'
    },
]

const tabs = [
    {
        title: 'Top-Booked',
        icon: Microscope ,
        component: <ServiceList services={services} />,
        content: []
    },
    {
        title: 'Doctors',
        icon: Stethoscope,
        component: <LinkCard className="bg-pink-900"/>,
        content: []
    },
    {
        title: 'Specialties',
        icon: Repeat ,
        component: <LinkCard className="bg-blue-600"/>,
        content: []
    },
    {
        title: 'Symptoms',
        icon: Activity ,
        component: <LinkCard className="bg-purple-950"/>,
        content: []
    },
]

export default function HomeTabs() {
  return (
            <Tabs aria-label="Tabs with underline" style="default" className="bg-blue-900 p-4 rounded-sm">
                {tabs.map((tab, i) => (                        
            <Tabs.Item key={i} active title={tab.title} icon={tab.icon}>
                {/* <ServiceList /> */}
                {tab.component}
            </Tabs.Item>
            ))}
            </Tabs>
  );
}
