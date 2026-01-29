"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { siteData } from "@/config/site-data";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const waNumber = siteData.general.whatsappNumbers[0];
    const waMessage = siteData.general.whatsappMessage;
    const logoSrc = siteData.general.logo || "/propnest-logo.png";

    const handleContact = () => {
        const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
        window.open(url, "_blank");
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-3" : "bg-transparent py-5"
            }`}>
            <Container>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src={logoSrc}
                            alt={siteData.general.brandName}
                            width={44}
                            height={44}
                            className="w-11 h-11 object-contain"
                        />
                        <span className="hidden sm:block text-2xl font-bold text-white">
                            {siteData.general.brandName}
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {siteData.navbar.links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-slate-300 hover:text-gold-500 transition-colors font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Button variant="outline" size="sm" onClick={handleContact}>
                            <Phone className="w-4 h-4 mr-2" />
                            Hubungi Kami
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 text-white hover:bg-navy-800 rounded-lg transition-colors"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden mt-4 py-4 border-t border-navy-700">
                        <div className="flex flex-col gap-2">
                            {siteData.navbar.links.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="px-4 py-3 text-slate-300 hover:bg-navy-800 hover:text-gold-500 rounded-lg font-medium transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Button
                                variant="primary"
                                className="mt-4"
                                onClick={handleContact}
                            >
                                <Phone className="w-4 h-4 mr-2" />
                                Hubungi Kami
                            </Button>
                        </div>
                    </div>
                )}
            </Container>
        </nav>
    );
};

export default Navbar;
