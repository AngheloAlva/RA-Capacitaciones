import Navbar from "./Navbar"

export default function Header(): React.ReactElement {
	return (
		<div className="text-primary grid w-screen grid-cols-12">
			<div className="border-primary col-span-1 row-span-1 h-16 border-t" />
			<div className="border-primary col-span-10 row-span-1 h-16 border-x border-t md:col-span-6" />
			<div className="border-primary row-span-1 hidden h-16 border-t border-r md:col-span-4 md:block" />
			<div className="border-primary col-span-1 row-span-1 h-16 border-t" />

			<header className="border-primary col-span-12 grid grid-cols-12 overflow-hidden border-y bg-transparent font-medium">
				<div className="col-span-1" />
				<Navbar />
				<div className="col-span-1" />
			</header>
		</div>
	)
}
