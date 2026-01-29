import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

const Button = ({
    children,
    variant = "primary",
    size = "md",
    className = "",
    onClick,
    type = "button",
}: ButtonProps) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-900 rounded-lg";

    const variants = {
        primary: "bg-gold-500 hover:bg-gold-400 text-navy-900 shadow-lg shadow-gold-500/20 focus:ring-gold-500",
        secondary: "bg-navy-700 hover:bg-navy-600 text-white border border-navy-600 focus:ring-navy-500",
        ghost: "bg-transparent text-slate-300 hover:bg-navy-800 hover:text-white focus:ring-navy-600",
        outline: "bg-transparent text-gold-500 border-2 border-gold-500 hover:bg-gold-500 hover:text-navy-900 focus:ring-gold-500",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
