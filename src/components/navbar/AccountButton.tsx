"use client"

import { LogIn, LogOut, User, UserPen, UserPlus } from "lucide-react"
import { createAuthClient } from "better-auth/react"
import { useTranslations } from "next-intl"

import { Link } from "@/i18n/routing"

import { Skeleton } from "../ui/skeleton"
import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
} from "../ui/dropdown-menu"

const { useSession } = createAuthClient()

export default function AccountButton(): React.ReactElement {
	const t = useTranslations("Navbar.account")

	const { data: session, isPending } = useSession()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="border-primary hover:bg-primary hover:text-secondary flex h-9 w-9 items-center justify-center border p-2 shadow transition-colors">
				<User />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="border-primary relative overflow-hidden">
				<DropdownMenuLabel>{t("label")}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{isPending ? (
					<div className="space-y-1">
						<Skeleton className="h-7 w-full" />
						<Skeleton className="h-7 w-full" />
					</div>
				) : session ? (
					<>
						<DropdownMenuItem>
							<UserPen />
							{t("profile")}
						</DropdownMenuItem>
						<DropdownMenuItem>
							<LogOut />
							{t("logout")}
						</DropdownMenuItem>
					</>
				) : (
					<>
						<Link href={"/auth/register"}>
							<DropdownMenuItem className="cursor-pointer">
								<UserPlus />
								{t("register")}
							</DropdownMenuItem>
						</Link>

						<Link href={"/auth/login"}>
							<DropdownMenuItem className="cursor-pointer">
								<LogIn />
								{t("login")}
							</DropdownMenuItem>
						</Link>
					</>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
