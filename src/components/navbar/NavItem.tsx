import { Link } from "@/i18n/routing"

import type { pathnames } from "@/i18n/pathnames"

interface NavItemProps {
	href: keyof typeof pathnames
	label: string
}

export default function NavItem({ href, label }: NavItemProps): React.ReactElement {
	return (
		<li>
			<Link className="group hover:text-secondary relative px-1 py-1.5" href={href}>
				{label}
				<div className="bg-primary absolute bottom-0 -z-10 h-0.5 w-full transition-all duration-300 group-hover:h-full"></div>
			</Link>
		</li>
	)
}
