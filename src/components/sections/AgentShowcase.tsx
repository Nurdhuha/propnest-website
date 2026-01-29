"use client";

import React from "react";
import { Phone, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { siteData } from "@/config/site-data";
import Container from "@/components/ui/Container";

const AgentShowcase = () => {
    const handleCall = (phone: string) => {
        const message = siteData.general.whatsappMessage;
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <section className="py-20 bg-navy-900">
            <Container>
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Tim <span className="text-gold-gradient">Agen Profesional</span>
                    </h2>
                    <p className="text-slate-400">
                        Didukung oleh tim agen berpengalaman yang siap membantu Anda menemukan properti ideal
                    </p>
                </div>

                {/* Agents Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {siteData.agents.map((agent) => (
                        <div
                            key={agent.id}
                            className="relative p-6 rounded-2xl bg-navy-800 border border-navy-700 text-center group hover:border-gold-500/30 transition-all duration-300"
                        >
                            {/* Photo */}
                            <div className="relative w-32 h-32 mx-auto mb-6">
                                <img
                                    src={agent.photo}
                                    alt={agent.name}
                                    className="w-full h-full object-cover rounded-full border-4 border-navy-700 group-hover:border-gold-500/50 transition-colors"
                                />
                                {/* Online indicator */}
                                <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-navy-800" />
                            </div>

                            {/* Info */}
                            <h3 className="text-xl font-bold text-white mb-1">
                                {agent.name}
                            </h3>
                            <p className="text-gold-500 text-sm mb-4">
                                {agent.title}
                            </p>

                            {/* Stats */}
                            <div className="flex justify-center gap-6 mb-6 text-sm">
                                <div className="text-center">
                                    <p className="text-white font-bold">{agent.listings}</p>
                                    <p className="text-slate-400">Listing</p>
                                </div>
                                <div className="text-center">
                                    <div className="flex items-center justify-center gap-1 text-white font-bold">
                                        <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
                                        {agent.rating}
                                    </div>
                                    <p className="text-slate-400">Rating</p>
                                </div>
                            </div>

                            {/* CTA */}
                            <button
                                onClick={() => handleCall(agent.phone)}
                                className="w-full py-3 px-4 rounded-xl bg-navy-700 text-white font-medium flex items-center justify-center gap-2 hover:bg-gold-500 hover:text-navy-900 transition-all"
                            >
                                <Phone className="w-4 h-4" />
                                Hubungi Agen
                            </button>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default AgentShowcase;
