import React from "react";
import { MessageCircle } from "lucide-react";
import { siteData } from "@/config/site-data";

const FloatingWA = () => {
    const message = encodeURIComponent("Hello! I'm interested in your products.");
    const whatsappUrl = `https://wa.me/${siteData.general.whatsappNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle className="w-6 h-6" />
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-900 px-3 py-1.5 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Chat with us!
            </span>
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        </a>
    );
};

export default FloatingWA;
