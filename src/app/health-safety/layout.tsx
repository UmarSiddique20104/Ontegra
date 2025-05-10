import type { Metadata } from "next";
import 'tailwindcss/tailwind.css';
import { montserrat, santana, acumin, lato } from "../components/fonts/fonts";

export const metadata: Metadata = {
    title: "Health and safty",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body suppressHydrationWarning={true} className={`${acumin.variable} ${montserrat.variable} ${lato.variable} font-santana`}>{children}</body>
        </html>
    );
}
