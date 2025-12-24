import React from "react";
import { Laptop, Shirt, Home, Gamepad, Watch, Camera, ArrowRight, Star } from "lucide-react";
import { siteData } from "@/config/site-data";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const iconMap = {
    Laptop,
    Shirt,
    Home,
    Gamepad,
    Watch,
    Camera,
};

const Features = () => {
    return (
        <section id="categories" className="py-16 md:py-24 space-y-24">
            {/* Categories */}
            <Container>
                <div className="flex items-end justify-between mb-12">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold text-gray-900">Popular Categories</h2>
                        <p className="text-gray-500">Curated collections just for you</p>
                    </div>
                    <button className="hidden sm:flex items-center gap-2 text-sm font-semibold text-orange-600 hover:gap-3 transition-all">
                        View All <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="flex overflow-x-auto pb-6 scrollbar-hide gap-6 -mx-4 px-4 sm:mx-0 sm:px-0">
                    {siteData.categories.map((cat, idx) => {
                        const Icon = iconMap[cat.iconName as keyof typeof iconMap] || Laptop;
                        return (
                            <div
                                key={idx}
                                className="flex-shrink-0 group cursor-pointer"
                            >
                                <div className="w-24 sm:w-32 aspect-square rounded-3xl bg-gray-50 flex flex-col items-center justify-center gap-3 transition-all duration-300 group-hover:bg-orange-50 group-hover:shadow-md group-hover:-translate-y-1">
                                    <div className="p-3 bg-white rounded-2xl shadow-sm text-gray-600 group-hover:text-orange-500 transition-colors">
                                        <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                                    </div>
                                    <span className="text-xs sm:text-sm font-bold text-gray-700 group-hover:text-orange-600">
                                        {cat.label}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>

            {/* Featured Products */}
            <Container>
                <div className="flex items-end justify-between mb-12">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
                        <p className="text-gray-500">Top picks and best sellers</p>
                    </div>
                    <button className="hidden sm:flex items-center gap-2 text-sm font-semibold text-orange-600 hover:gap-3 transition-all">
                        See More <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {siteData.featuredProducts.map((product, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="relative rounded-[2rem] overflow-hidden bg-gray-50 aspect-[4/5] mb-4">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Badge */}
                                {product.badge && (
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-white text-gray-900 shadow-sm border border-gray-100 px-3 py-1">
                                            {product.badge}
                                        </Badge>
                                    </div>
                                )}

                                {/* Wishlist Button */}
                                <button className="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-pink-500 opacity-0 group-hover:opacity-100 transition-all shadow-sm">
                                    <Star className="w-4 h-4" />
                                </button>

                                {/* Quick Add */}
                                <div className="absolute bottom-4 inset-x-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                                    <Button variant="primary" className="w-full h-11 text-xs">
                                        Quick Add to Cart
                                    </Button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                                    {product.title}
                                </h3>
                                <div className="flex items-center gap-3">
                                    <span className="text-lg font-bold text-gray-900">${product.price}</span>
                                    {product.discountPrice && (
                                        <span className="text-sm text-gray-400 line-through">${product.discountPrice}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Features;
