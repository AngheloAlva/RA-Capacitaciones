import { useTranslations } from "next-intl"

import LanguageButton from "./LanguageButton"
import AccountButton from "./AccountButton"
import ThemeButton from "./ThemeButton"
import Logo from "../shared/Logo"
import NavItem from "./NavItem"

export default function Navbar(): React.ReactElement {
	const t = useTranslations("Navbar")

	return (
		<>
			<div className="border-primary col-span-4 flex w-full items-center justify-between border-l px-6 py-2 md:col-span-6 md:border-x">
				<div className="flex">
					<Logo className="h-12 w-fit justify-start" />
				</div>

				<nav className="hidden justify-center lg:flex">
					<ul className="flex items-center gap-4 font-medium xl:gap-8">
						<NavItem href="/" label={t("home")} />
						<NavItem href="/courses" label={t("courses")} />
						<NavItem href="/about" label={t("about")} />
						<NavItem href="/contact" label={t("contact")} />
					</ul>
				</nav>
			</div>

			<div className="border-primary col-span-6 flex flex-1 items-center justify-end gap-2 border-r px-6 md:col-span-4">
				<LanguageButton />
				<AccountButton />
				<ThemeButton />
			</div>
		</>
	)
}
