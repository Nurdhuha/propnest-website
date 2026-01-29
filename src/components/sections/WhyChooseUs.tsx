"use client";

import React from "react";
import { Shield, BadgeCheck, Headphones, Wallet } from "lucide-react";
import { siteData } from "@/config/site-data";
import Container from "@/components/ui/Container";

const iconMap = {
    Shield,
    BadgeCheck,
    Headphones,
    Wallet,
};

const WhyChooseUs = () => {
    return (
        <section id="about" className="py-20 bg-navy-950 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

            <Container className="relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Mengapa Memilih <span className="text-gold-gradient">PropNest</span>?
                    </h2>
                    <p className="text-slate-400">
                        Kami berkomitmen memberikan pengalaman terbaik dalam menemukan properti impian Anda
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {siteData.whyChooseUs.map((item, idx) => {
                        const Icon = iconMap[item.icon as keyof typeof iconMap] || Shield;
                        return (
                            <div
                                key={idx}
                                className="relative p-8 rounded-2xl bg-navy-900 border border-navy-800 text-center group hover:border-gold-500/30 transition-all duration-300"
                            >
                                {/* Icon */}
                                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-500/5 flex items-center justify-center group-hover:from-gold-500/30 group-hover:to-gold-500/10 transition-colors">
                                    <Icon className="w-8 h-8 text-gold-500" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>

                                {/* Decorative number */}
                                <div className="absolute top-4 right-4 text-6xl font-bold text-navy-800 group-hover:text-navy-700 transition-colors">
                                    {String(idx + 1).padStart(2, "0")}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default WhyChooseUs;
