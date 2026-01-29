"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Building2, Castle, Landmark, Building, Warehouse } from "lucide-react";
import { siteData } from "@/config/site-data";
import Container from "@/components/ui/Container";

const iconMap = {
    Home,
    Building2,
    Castle,
    Landmark,
    Building,
    Warehouse,
};

const PropertyTypes = () => {
    return (
        <section className="py-20 bg-navy-950">
            <Container>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Jelajahi <span className="text-gold-gradient">Tipe Properti</span>
                    </h2>
                    <p className="text-slate-400">
                        Temukan berbagai pilihan properti yang sesuai dengan kebutuhan dan gaya hidup Anda
                    </p>
                </motion.div>

                {/* Property Type Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                    {siteData.propertyTypes.map((type, idx) => {
                        const Icon = iconMap[type.icon as keyof typeof iconMap] || Home;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <Link
                                    href={`/properties?type=${type.slug}`}
                                    className="group block"
                                >
                                    <div className="relative p-6 rounded-2xl bg-navy-800 border border-navy-700 text-center transition-all duration-300 hover:border-gold-500/50 hover:bg-navy-800/80 hover-lift hover-glow">
                                        {/* Icon */}
                                        <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-navy-700 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                                            <Icon className="w-7 h-7 text-gold-500" />
                                        </div>

                                        {/* Label */}
                                        <h3 className="text-white font-semibold mb-1 group-hover:text-gold-500 transition-colors">
                                            {type.label}
                                        </h3>

                                        {/* Count */}
                                        <p className="text-sm text-slate-400">
                                            {type.count} properti
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default PropertyTypes;

