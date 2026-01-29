"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Search, MapPin, Home, ChevronDown } from "lucide-react";
import { siteData } from "@/config/site-data";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const Hero = () => {
    const router = useRouter();
    const [searchLocation, setSearchLocation] = useState("");

    const handleSearch = () => {
        const query = searchLocation.trim();
        if (query) {
            router.push(`/properties?search=${encodeURIComponent(query)}`);
        } else {
            router.push("/properties");
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${siteData.hero.backgroundImage})` }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/70 to-navy-900" />
            </div>

            {/* Content */}
            <Container className="relative z-10 pt-32 pb-20">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light"
                    >
                        <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-gold-500">
                            Platform Properti Terpercaya di Indonesia
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                    >
                        {siteData.hero.headline.split(" ").slice(0, 2).join(" ")}
                        <span className="text-gold-gradient block md:inline">
                            {" "}{siteData.hero.headline.split(" ").slice(2).join(" ")}
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-xl text-slate-300 max-w-2xl mx-auto"
                    >
                        {siteData.hero.subheadline}
                    </motion.p>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                        className="mt-12 p-2 glass rounded-2xl max-w-3xl mx-auto"
                    >
                        <div className="flex flex-col md:flex-row gap-2">
                            {/* Location Input */}
                            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-navy-800 rounded-xl">
                                <MapPin className="w-5 h-5 text-gold-500" />
                                <input
                                    type="text"
                                    placeholder="Lokasi (contoh: Jakarta, BSD)"
                                    value={searchLocation}
                                    onChange={(e) => setSearchLocation(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    className="flex-1 bg-transparent text-white placeholder-slate-400 outline-none"
                                />
                            </div>

                            {/* Property Type Dropdown */}
                            <div className="flex items-center gap-3 px-4 py-3 bg-navy-800 rounded-xl cursor-pointer group">
                                <Home className="w-5 h-5 text-gold-500" />
                                <span className="text-white">Tipe Properti</span>
                                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-gold-500 transition-colors" />
                            </div>

                            {/* Search Button */}
                            <Button
                                variant="primary"
                                size="lg"
                                className="whitespace-nowrap btn-animate"
                                onClick={handleSearch}
                            >
                                <Search className="w-5 h-5 mr-2" />
                                Cari Properti
                            </Button>
                        </div>
                    </motion.div>

                    {/* Quick Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8"
                    >
                        {siteData.stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1.2 + idx * 0.1 }}
                                className="text-center"
                            >
                                <p className="text-3xl md:text-4xl font-bold text-gold-500">
                                    {stat.value}
                                </p>
                                <p className="text-sm text-slate-400 mt-1">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Container>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <ChevronDown className="w-8 h-8 text-gold-500" />
            </motion.div>
        </section>
    );
};

export default Hero;

