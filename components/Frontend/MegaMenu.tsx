"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const megaMenu = [
    {
        title: 'Top Booked',
        services: [
            {
                title: "Telehealth",
                slug: 'telehealth',
                description: 'medics medics medics medics  medics medics medics medics medics medics medics medics'
            },
            {
                title: "Video prescription refill",
                slug: 'telehealth',
                description: 'medics medics medics medics  medics medics medics medics medics medics medics medics'
            },
            {
                title: "In-person doctor visit",
                slug: 'telehealth',
                description: 'medics medics medics medics  medics medics medics medics medics medics medics medics'
            },
            {
                title: "UTI consult",
                slug: 'telehealth',
                description: 'medics medics medics medics  medics medics medics medics medics medics medics medics'
            },
        ]
    },
    {
        title: 'Doctors',
        services: [
            {
                title: "Telehealth",
                slug: 'telehealth',
                description: 'medics medics medics medics  medics medics medics medics medics medics medics medics'
            },
            {
                title: "Video prescription refill",
                slug: 'telehealth',
                description: 'medics medics medics medics  medics medics medics medics medics medics medics medics'
            },
            {
                title: "In-person doctor visit",
                slug: 'telehealth',
                description: 'medics medics medics medics  medics medics medics medics medics medics medics medics'
            },
            {
                title: "UTI consult",
                slug: 'telehealth',
                description: 'medics medics medics medics  medics medics medics medics medics medics medics medics'
            },
        ]
    },
    {
        title: 'Specialties',
        services: [
            {
                title: "Telehealth",
                slug: 'telehealth',
                description: 'medics medics medics medics  medics medics medics medics medics medics medics medics'
            },
            {
                title: "Video prescription refill",
                slug: 'telehealth',
                description: 'medics medics medics medics  medics medics medics medics medics medics medics medics'
            },
            {
                title: "In-person doctor visit",
                slug: 'telehealth',
                description: 'medics medics medics medics  medics medics medics medics medics medics medics medics'
            },
            {
                title: "UTI consult",
                slug: 'telehealth',
                description: 'medics medics medics medics  medics medics medics medics medics medics medics medics'
            },
        ]
    },
    {
        title: 'Symptoms',
        services: [
            {
                title: "Telehealth",
                slug: 'telehealth',
                description: 'medics medics medics medics  medics medics medics medics medics medics medics medics'
            },
            {
                title: "Video prescription refill",
                slug: 'telehealth',
                description: 'medics medics medics medics  medics medics medics medics medics medics medics medics'
            },
            {
                title: "In-person doctor visit",
                slug: 'telehealth',
                description: 'medics medics medics medics  medics medics medics medics medics medics medics medics'
            },
            {
                title: "UTI consult",
                slug: 'telehealth',
                description: 'medics medics medics medics  medics medics medics medics medics medics medics medics'
            },
        ]
    },
]

export default function MegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-4">
      {megaMenu.map((item, index) => (
        <NavigationMenuItem key={index}>
          <NavigationMenuTrigger className="bg-blue-500 text-white">{item.title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {item.services.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={`/services/${component.slug}`}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
