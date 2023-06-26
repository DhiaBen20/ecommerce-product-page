function NavLink({ href = "#", ...props }) {
    return (
        <a
            href={href}
            className="text-lg font-bold md:inline-flex md:items-center md:border-[hsl(26,100%,55%)] md:text-base md:font-normal md:text-[hsl(219,9%,45%)] hover:md:mt-1 hover:md:border-b-4"
            {...props}
        />
    );
}

export default function Navigation() {
    return (
        <nav className="flex flex-col gap-4 md:flex-row md:gap-8">
            <NavLink>Collections</NavLink>
            <NavLink>Men</NavLink>
            <NavLink>Women</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contact</NavLink>
        </nav>
    );
}
