"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { siteData } from "@/config/site-data";

const FloatingWA = () => {
    const features = siteData.features;
    const numbers = siteData.general.whatsappNumbers;

    // Use first number as default for SSR, then randomize on client
    const [selectedNumber, setSelectedNumber] = useState(numbers[0]);

    useEffect(() => {
        if (features.waRotator && numbers.length > 1) {
            setSelectedNumber(numbers[Math.floor(Math.random() * numbers.length)]);
        }
    }, [features.waRotator, numbers]);

    const waMessage = siteData.general.whatsappMessage;
    const whatsappUrl = `https://wa.me/${selectedNumber}?text=${encodeURIComponent(waMessage)}`;

    // Feature flag check
    if (!features.enableFloatingWA) {
        return null;
    }

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 group"
            aria-label="Contact us on WhatsApp"
        >
            {/* Pulse Ring */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />

            {/* Button */}
            <div className="relative bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300">
                <MessageCircle className="w-6 h-6" />
            </div>

            {/* Tooltip */}
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-navy-800 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-navy-700">
                Chat dengan kami!
            </span>
        </a>
    );
};

export default FloatingWA;
