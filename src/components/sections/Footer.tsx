import React from "react";
import Link from "next/link";
import { siteData } from "@/config/site-data";
import Container from "@/components/ui/Container";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-100 py-12 md:py-20">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1 space-y-6">
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                            {siteData.general.brandName}
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Your one-stop destination for the latest in technology, fashion, and lifestyle. Premium quality, guaranteed.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                                <button key={i} className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-orange-50 hover:text-orange-500 hover:border-orange-100 transition-all">
                                    <Icon className="w-5 h-5" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-1">
                        <h4 className="font-bold text-gray-900 mb-6">Explore</h4>
                        <ul className="space-y-4">
                            {siteData.navbar.links.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-gray-500 hover:text-orange-500 transition-colors text-sm">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-1">
                        <h4 className="font-bold text-gray-900 mb-6">Customer Service</h4>
                        <ul className="space-y-4">
                            {["Shipping Policy", "Refund Policy", "Terms of Service", "Privary Policy"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-500 hover:text-orange-500 transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-1">
                        <h4 className="font-bold text-gray-900 mb-6">Newsletter</h4>
                        <p className="text-gray-500 text-sm mb-6">Subscribe to get special offers and once-in-a-lifetime deals.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-gray-50 border border-gray-100 rounded-full py-3 px-6 pr-12 text-sm focus:bg-white focus:border-orange-200 focus:ring-4 focus:ring-orange-50 transition-all"
                            />
                            <button className="absolute right-2 top-1.5 bottom-1.5 px-4 bg-gray-900 text-white rounded-full text-xs font-bold hover:bg-orange-500 transition-colors">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>© {currentYear} {siteData.general.brandName} Studio. All rights reserved.</p>
                    <div className="flex gap-8">
                        <button className="hover:text-gray-600 transition-colors">English (US)</button>
                        <button className="hover:text-gray-600 transition-colors">Privacy</button>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
