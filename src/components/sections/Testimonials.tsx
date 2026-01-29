"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { siteData } from "@/config/site-data";
import Container from "@/components/ui/Container";

const Testimonials = () => {
    return (
        <section className="py-20 bg-navy-950 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 w-64 h-64 border border-gold-500 rounded-full" />
                <div className="absolute bottom-20 right-20 w-96 h-96 border border-gold-500 rounded-full" />
            </div>

            <Container className="relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Apa Kata <span className="text-gold-gradient">Klien Kami</span>
                    </h2>
                    <p className="text-slate-400">
                        Testimoni dari klien yang telah mempercayakan pencarian properti kepada kami
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {siteData.testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="relative p-8 rounded-2xl bg-navy-900 border border-navy-800 group hover:border-gold-500/30 transition-all duration-300"
                        >
                            {/* Quote Icon */}
                            <Quote className="w-10 h-10 text-gold-500/20 mb-6" />

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < testimonial.rating ? "text-gold-500 fill-gold-500" : "text-navy-700"}`}
                                    />
                                ))}
                            </div>

                            {/* Review */}
                            <p className="text-slate-300 leading-relaxed mb-6">
                                "{testimonial.review}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.photo}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-navy-700"
                                />
                                <div>
                                    <p className="font-semibold text-white">{testimonial.name}</p>
                                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;
