'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import React from 'react'

const navItems = [
    { label: "Library", href: "/" },
    { label: "Add New", href: "/books/new" },
    { label: "Pricing", href: "/subscriptions" },
]

const Navbar = () => {
    const pathName = usePathname()
    const { user } = useUser()

    return (
        <header className="w-full fixed z-50 bg-(--bg-primary)">
            <div className="wrapper navbar-height py-4 flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="flex gap-0.5 items-center">
                    <Image
                        src="/assets/logo.png"
                        alt="Bookified"
                        width={42}
                        height={26}
                    />
                    <span className="logo-text">Bookified</span>
                </Link>

                {/* Navigation */}
                <nav className="w-fit flex gap-7.5 items-center">

                    {navItems
                        .filter((item) => !(item.href === "/subscriptions" && !user))
                        .map(({ label, href }) => {
                            const isActive =
                                pathName === href ||
                                (href !== "/" && pathName.startsWith(href))

                            return (
                                <Link
                                    key={label}
                                    href={href}
                                    className={cn(
                                        "nav-link-base",
                                        isActive
                                            ? "nav-link-active"
                                            : "text-black hover:opacity-70"
                                    )}
                                >
                                    {label}
                                </Link>
                            )
                        })}

                    {/* Auth Section */}
                    <div className="flex gap-7.5 items-center">
                        {user ? (
                            <div className="nav-user-link flex items-center gap-3">
                                <UserButton />
                            </div>
                        ) : (
                            <SignInButton mode="modal" />
                        )}
                    </div>

                </nav>
            </div>
        </header>
    )
}

export default Navbar
