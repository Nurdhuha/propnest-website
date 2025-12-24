import React from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const CTA = () => {
    return (
        <section className="py-24">
            <Container>
                <div className="relative rounded-[3rem] bg-gray-900 overflow-hidden p-8 md:p-16 lg:p-24 text-center">
                    {/* Abstract background accents */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 blur-[100px] rounded-full" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 blur-[100px] rounded-full" />

                    <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Ready to upgrade your lifestyle?
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl">
                            Get 20% off your first purchase when you sign up today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button variant="primary" className="h-14 px-12 text-base">
                                Join Now
                            </Button>
                            <Button variant="secondary" className="h-14 px-12 text-base bg-white/10 border-white/20 text-white hover:bg-white/20">
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default CTA;
