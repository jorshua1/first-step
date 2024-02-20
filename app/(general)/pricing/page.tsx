import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing Page",
    description: "Pricing Page Description",
    keywords: "Pricing, Page, Description, Keywords",
};

export default function PricingPage(){
    return (
        <>
            <span className={
                "text-7xl font-bold text-center"
            }>Pricing Page</span>
        </>
    )
}