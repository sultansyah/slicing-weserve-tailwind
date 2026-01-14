import Logo from "../icons/Logo";
import NavItem from "../common/NavItem";

export default function Navbar() {
    return (
        <nav className="flex flex-row max-w-6xl mx-auto justify-between pt-10 pb-12">
            <Logo />

            <ul className="flex flex-row gap-x-7">
                <NavItem href="#">Products</NavItem>
                <NavItem href="#">Services</NavItem>
                <NavItem href="#">Pricing</NavItem>
                <NavItem href="#">Testimonials</NavItem>
                <NavItem href="#">Blog</NavItem>
            </ul>

            <a
                href="#"
                className="text-base hover:bg-violet-700 bg-indigo-950 text-white py-3 px-8 rounded-full font-semibold"
            >
                Sign In
            </a>
        </nav>
    );
}
