import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"

import { routing } from "@/i18n/routing"

import { ThemeProvider } from "@/components/providers/ThemeProvider"

import "@fontsource/cormorant-garamond"
import "@fontsource-variable/work-sans"

import type { Metadata } from "next"

import "./globals.css"

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
						<div className="grid w-screen grid-cols-12 grid-rows-2">
							<div className="col-span-1 row-span-1 h-16 border-t border-neutral-800 dark:border-neutral-200" />
							<div className="col-span-10 row-span-1 h-16 border-x border-t border-neutral-800 md:col-span-6 dark:border-neutral-200" />
							<div className="row-span-1 hidden h-16 border-t border-r border-neutral-800 md:col-span-4 md:block dark:border-neutral-200" />
							<div className="col-span-1 row-span-1 h-16 border-t border-neutral-800 dark:border-neutral-200" />

							{/* <Navbar /> */}
						</div>

						{children}
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
