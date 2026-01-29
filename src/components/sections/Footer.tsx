"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { siteData } from "@/config/site-data";
import Container from "@/components/ui/Container";

const socialIcons = {
    facebook: Facebook,
    instagram: Instagram,
    twitter: Twitter,
    youtube: Youtube,
    linkedin: Linkedin,
};

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const handleSocialClick = (platform: keyof typeof siteData.social) => {
        const url = siteData.social[platform];
        if (url) {
            window.open(url, "_blank");
        }
    };

    return (
        <footer className="bg-navy-950 border-t border-navy-800 pt-16 pb-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
                                <span className="text-navy-900 font-bold text-xl">P</span>
                            </div>
                            <span className="text-2xl font-bold text-white">
                                {siteData.general.brandName}
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {siteData.footer.description}
                        </p>
                        <div className="flex gap-3">
                            {Object.entries(socialIcons).map(([key, Icon]) => (
                                <button
                                    key={key}
                                    onClick={() => handleSocialClick(key as keyof typeof siteData.social)}
                                    className="w-10 h-10 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-400 hover:bg-gold-500 hover:text-navy-900 hover:border-gold-500 transition-all"
                                >
                                    <Icon className="w-5 h-5" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Navigasi</h4>
                        <ul className="space-y-3">
                            {siteData.navbar.links.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-gold-500 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Property Types */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Tipe Properti</h4>
                        <ul className="space-y-3">
                            {siteData.propertyTypes.slice(0, 5).map((type) => (
                                <li key={type.slug}>
                                    <Link
                                        href={`/properties?type=${type.slug}`}
                                        className="text-slate-400 hover:text-gold-500 transition-colors text-sm"
                                    >
                                        {type.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Hubungi Kami</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-400 text-sm">{siteData.general.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                                <span className="text-slate-400 text-sm">{siteData.general.phone}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                                <span className="text-slate-400 text-sm">{siteData.general.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {currentYear} {siteData.general.brandName}. Hak cipta dilindungi.</p>
                    <div className="flex gap-6">
                        {siteData.footer.quickLinks.slice(0, 2).map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="hover:text-gold-500 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
