import type { Metadata } from "next";
import { montserrat, santana, acumin, lato } from "../components/fonts/fonts";
import 'tailwindcss/tailwind.css';

export const metadata: Metadata = {
    title: "Techi",
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
