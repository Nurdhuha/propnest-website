"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MapPin, Bed, Bath, Maximize, Heart, Search, SlidersHorizontal, X } from "lucide-react";
import { siteData } from "@/config/site-data";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FloatingWA from "@/components/FloatingWA";

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

function PropertiesContent() {
    const searchParams = useSearchParams();
    const typeFromUrl = searchParams.get("type") || "all";

    const [activeType, setActiveType] = useState(typeFromUrl);
    const [searchQuery, setSearchQuery] = useState("");
    const [showFilters, setShowFilters] = useState(false);

    const waNumber = siteData.general.whatsappNumbers[0];

    const handleInquiry = (propertyTitle: string) => {
        const message = `Halo, saya tertarik dengan properti "${propertyTitle}". Mohon info lebih lanjut.`;
        window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, "_blank");
    };

    // Filter properties
    const filteredProperties = useMemo(() => {
        let results = siteData.featuredProperties;

        if (activeType !== "all") {
            results = results.filter((p) => p.type === activeType);
        }

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            results = results.filter(
                (p) =>
                    p.title.toLowerCase().includes(query) ||
                    p.location.toLowerCase().includes(query)
            );
        }

        return results;
    }, [activeType, searchQuery]);

    return (
        <main className="min-h-screen bg-navy-900">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-12 bg-navy-950">
                <Container>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Jelajahi <span className="text-gold-gradient">Semua Properti</span>
                        </h1>
                        <p className="text-slate-400 text-lg">
                            Temukan properti impian Anda dari koleksi premium yang telah kami kurasi
                        </p>
                    </div>
                </Container>
            </section>

            {/* Search & Filter Bar */}
            <section className="sticky top-20 z-30 bg-navy-900 border-b border-navy-800 py-4">
                <Container>
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search Input */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Cari berdasarkan nama atau lokasi..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-navy-800 border border-navy-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-400 focus:outline-none focus:border-gold-500 transition-colors"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            )}
                        </div>

                        {/* Filter Toggle (Mobile) */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="md:hidden flex items-center justify-center gap-2 px-4 py-3 bg-navy-800 border border-navy-700 rounded-xl text-white"
                        >
                            <SlidersHorizontal className="w-5 h-5" />
                            Filter
                        </button>
                    </div>

                    {/* Type Filters */}
                    <div className={`mt-4 ${showFilters ? "block" : "hidden md:block"}`}>
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setActiveType("all")}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeType === "all"
                                    ? "bg-gold-500 text-navy-900"
                                    : "bg-navy-800 text-slate-300 hover:bg-navy-700"
                                    }`}
                            >
                                Semua
                            </button>
                            {siteData.propertyTypes.map((type) => (
                                <button
                                    key={type.slug}
                                    onClick={() => setActiveType(type.slug)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeType === type.slug
                                        ? "bg-gold-500 text-navy-900"
                                        : "bg-navy-800 text-slate-300 hover:bg-navy-700"
                                        }`}
                                >
                                    {type.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Properties Grid */}
            <section className="py-12">
                <Container>
                    {/* Results Count */}
                    <p className="text-slate-400 mb-8">
                        Menampilkan <span className="text-white font-semibold">{filteredProperties.length}</span> properti
                        {activeType !== "all" && (
                            <> dalam kategori <span className="text-gold-500 font-semibold">{siteData.propertyTypes.find((t) => t.slug === activeType)?.label}</span></>
                        )}
                    </p>

                    {filteredProperties.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProperties.map((property) => (
                                <div key={property.id} className="group relative bg-navy-800 rounded-2xl overflow-hidden border border-navy-700 card-hover">
                                    {/* Image */}
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <img
                                            src={property.image}
                                            alt={property.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-transparent" />

                                        {property.badge && (
                                            <span className="absolute top-4 left-4 px-3 py-1 bg-gold-500 text-navy-900 text-xs font-bold rounded-full">
                                                {property.badge}
                                            </span>
                                        )}

                                        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-navy-900/60 backdrop-blur-sm flex items-center justify-center text-white hover:text-red-400 transition-all opacity-0 group-hover:opacity-100">
                                            <Heart className="w-5 h-5" />
                                        </button>

                                        <div className="absolute bottom-4 left-4">
                                            <p className="text-2xl font-bold text-white">{formatPrice(property.price)}</p>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 space-y-4">
                                        <h3 className="text-lg font-bold text-white group-hover:text-gold-500 transition-colors">
                                            {property.title}
                                        </h3>

                                        <div className="flex items-center gap-2 text-slate-400">
                                            <MapPin className="w-4 h-4 text-gold-500" />
                                            <span className="text-sm">{property.location}</span>
                                        </div>

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
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-slate-400 text-lg mb-4">Tidak ada properti yang ditemukan.</p>
                            <Button variant="outline" onClick={() => { setActiveType("all"); setSearchQuery(""); }}>
                                Reset Filter
                            </Button>
                        </div>
                    )}
                </Container>
            </section>

            <Footer />
            <FloatingWA />
        </main>
    );
}

export default function PropertiesPage() {
    return (
        <Suspense fallback={
            <main className="min-h-screen bg-navy-900 flex items-center justify-center">
                <div className="text-white">Loading...</div>
            </main>
        }>
            <PropertiesContent />
        </Suspense>
    );
}
