"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { siteData } from "@/config/site-data";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const CTA = () => {
    const waNumber = siteData.general.whatsappNumbers[0];
    const waMessage = siteData.general.whatsappMessage;

    const handleWhatsApp = () => {
        window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`, "_blank");
    };

    const handleCall = () => {
        window.location.href = `tel:${siteData.general.phone}`;
    };

    return (
        <section id="contact" className="py-20 bg-navy-900">
            <Container>
                <div className="relative rounded-3xl overflow-hidden">
                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 via-navy-800 to-navy-900" />
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10" />

                    {/* Content */}
                    <div className="relative z-10 py-16 md:py-24 px-8 md:px-16 text-center">
                        <div className="max-w-3xl mx-auto space-y-8">
                            {/* Headline */}
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                {siteData.cta.headline}
                            </h2>

                            {/* Subheadline */}
                            <p className="text-xl text-slate-300">
                                {siteData.cta.subheadline}
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    onClick={handleWhatsApp}
                                >
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    Chat via WhatsApp
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={handleCall}
                                >
                                    <Phone className="w-5 h-5 mr-2" />
                                    Telepon Kami
                                </Button>
                            </div>

                            {/* Contact Info */}
                            <div className="pt-8 flex flex-col md:flex-row justify-center gap-8 text-sm text-slate-400">
                                <div>
                                    <span className="text-white font-medium">Email:</span> {siteData.general.email}
                                </div>
                                <div>
                                    <span className="text-white font-medium">Telepon:</span> {siteData.general.phone}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CTA;
