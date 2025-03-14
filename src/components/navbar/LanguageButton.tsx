"use client"

import { useTranslations } from "next-intl"

import { Languages } from "lucide-react"
import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
} from "../ui/dropdown-menu"

export default function LanguageButton(): React.ReactElement {
	const t = useTranslations("Navbar.language")

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="border-primary hover:bg-primary hover:text-secondary flex h-9 w-9 items-center justify-center rounded-none border p-2 shadow transition-colors">
				<Languages />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="border-primary relative overflow-hidden">
				<DropdownMenuLabel>{t("label")}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>{t("english")}</DropdownMenuItem>
				<DropdownMenuItem>{t("spanish")}</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
