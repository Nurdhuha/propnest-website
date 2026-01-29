"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Bed, Bath, Maximize, Heart, ArrowRight } from "lucide-react";
import { siteData } from "@/config/site-data";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

// Format price to Indonesian Rupiah
const formatPrice = (price: number) => {
    if (price >= 1000000000) {
        return `Rp ${(price / 1000000000).toFixed(1)} M`;
    }
    if (price >= 1000000) {
        return `Rp ${(price / 1000000).toFixed(0)} Jt`;
    }
    return `Rp ${price.toLocaleString("id-ID")}`;
};

const FeaturedListings = () => {
    const waNumber = siteData.general.whatsappNumbers[0];

    const handleInquiry = (propertyTitle: string) => {
        const message = `Halo, saya tertarik dengan properti "${propertyTitle}". Mohon info lebih lanjut.`;
        window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, "_blank");
    };

    return (
        <section id="properties" className="py-20 bg-navy-900">
            <Container>
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Properti <span className="text-gold-gradient">Unggulan</span>
                        </h2>
                        <p className="text-slate-400 max-w-xl">
                            Pilihan properti terbaik yang telah kami kurasi untuk Anda
                        </p>
                    </div>
                    <Link href="/properties" className="hidden md:flex items-center gap-2 text-gold-500 hover:text-gold-400 font-medium transition-colors">
                        Lihat Semua <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Property Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {siteData.featuredProperties.slice(0, 6).map((property) => (
                        <div key={property.id} className="group relative bg-navy-800 rounded-2xl overflow-hidden border border-navy-700 card-hover">
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-transparent" />

                                {/* Badge */}
                                {property.badge && (
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-gold-500 text-navy-900 text-xs font-bold rounded-full">
                                            {property.badge}
                                        </span>
                                    </div>
                                )}

                                {/* New Badge */}
                                {property.isNew && (
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                                            Baru
                                        </span>
                                    </div>
                                )}

                                {/* Wishlist Button */}
                                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-navy-900/60 backdrop-blur-sm flex items-center justify-center text-white hover:text-red-400 hover:bg-navy-900/80 transition-all opacity-0 group-hover:opacity-100">
                                    <Heart className="w-5 h-5" />
                                </button>

                                {/* Price */}
                                <div className="absolute bottom-4 left-4">
                                    <p className="text-2xl font-bold text-white price-tag">
                                        {formatPrice(property.price)}
                                    </p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 space-y-4">
                                {/* Title */}
                                <h3 className="text-lg font-bold text-white group-hover:text-gold-500 transition-colors line-clamp-1">
                                    {property.title}
                                </h3>

                                {/* Location */}
                                <div className="flex items-center gap-2 text-slate-400">
                                    <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0" />
                                    <span className="text-sm line-clamp-1">{property.location}</span>
                                </div>

                                {/* Specs */}
                                <div className="flex items-center gap-4 pt-2 border-t border-navy-700">
                                    {property.bedrooms > 0 && (
                                        <div className="flex items-center gap-1.5 text-slate-400">
                                            <Bed className="w-4 h-4" />
                                            <span className="text-sm">{property.bedrooms}</span>
                                        </div>
                                    )}
                                    {property.bathrooms > 0 && (
                                        <div className="flex items-center gap-1.5 text-slate-400">
                                            <Bath className="w-4 h-4" />
                                            <span className="text-sm">{property.bathrooms}</span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-1.5 text-slate-400">
                                        <Maximize className="w-4 h-4" />
                                        <span className="text-sm">{property.area} m²</span>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <Button
                                    variant="secondary"
                                    size="sm"
                                    className="w-full"
                                    onClick={() => handleInquiry(property.title)}
                                >
                                    Hubungi Agen
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View All */}
                <div className="mt-8 text-center md:hidden">
                    <Link href="/properties">
                        <Button variant="outline">
                            Lihat Semua Properti
                        </Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
};

export default FeaturedListings;
