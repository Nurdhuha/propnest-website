"use client";

import React from "react";
import Link from "next/link";
import { Search, ShoppingCart, Heart, User, Menu } from "lucide-react";
import { siteData } from "@/config/site-data";
import Container from "@/components/ui/Container";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
            <Container>
                <div className="flex items-center justify-between h-20 gap-4">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent shrink-0">
                        {siteData.general.brandName}
                    </Link>

                    {/* Search Bar - Hidden on mobile, visible on medium+ */}
                    <div className="hidden md:flex flex-1 max-w-md relative group">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full bg-gray-100 border-transparent focus:bg-white focus:border-orange-200 focus:ring-4 focus:ring-orange-100 rounded-full py-2.5 pl-12 pr-4 text-sm transition-all"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>

                    {/* Nav Links - Hidden on mobile */}
                    <div className="hidden lg:flex items-center gap-8">
                        {siteData.navbar.links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors md:hidden">
                            <Search className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors relative">
                            <Heart className="w-5 h-5" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full ring-2 ring-white" />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors relative">
                            <ShoppingCart className="w-5 h-5" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full ring-2 ring-white" />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
                            <User className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors lg:hidden">
                            <Menu className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
