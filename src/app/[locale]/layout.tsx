import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"

import { routing } from "@/i18n/routing"

import { ThemeProvider } from "@/components/providers/ThemeProvider"

import "@fontsource/cormorant-garamond"
import "@fontsource-variable/work-sans"

import type { Metadata } from "next"

import "./globals.css"
import Header from "@/components/navbar/Header"

export const metadata: Metadata = {
	title: "RA Capacitaciones",
	description: "RA Capacitaciones is a platform for students to learn and teachers to teach.",
}

export default async function RootLayout({
	params,
	children,
}: Readonly<{
	children: React.ReactNode
	params: Promise<{ locale: string }>
}>) {
	const { locale } = await params

	if (!routing.locales.includes(locale as never)) {
		notFound()
	}

	const messages = await getMessages()

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className="font-general selection:bg-a-secondary overflow-x-hidden antialiased selection:text-white">
				<ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
					<NextIntlClientProvider messages={messages}>
						<Header />

						{children}
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
