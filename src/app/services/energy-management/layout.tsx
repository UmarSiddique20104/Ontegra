import type { Metadata } from "next";
import 'tailwindcss/tailwind.css';
import "../../globals.css";
import { montserrat, santana, acumin, lato } from "../../components/fonts/fonts";

export const metadata: Metadata = {
    title: "Energy Management",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${santana.variable} ${acumin.variable} ${montserrat.variable} ${lato.variable} font-santana`}>{children}</body>
        </html>
    );
}
