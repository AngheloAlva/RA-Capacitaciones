"use client"

import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "../ui/button"

export default function ThemeButton(): React.ReactElement {
	const { theme, setTheme } = useTheme()

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light")
	}

	return (
		<Button
			onClick={toggleTheme}
			className="border-primary hover:bg-primary hover:text-secondary text-primary flex h-9 w-9 items-center justify-center border bg-transparent"
		>
			{theme === "light" ? <Sun /> : <Moon />}
		</Button>
	)
}
