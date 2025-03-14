import { defineRouting } from "next-intl/routing"
import { createNavigation } from "next-intl/navigation"
import { pathnames } from "./pathnames"

export const routing = defineRouting({
	locales: ["en", "es"],
	defaultLocale: "es",
	pathnames,
})

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
