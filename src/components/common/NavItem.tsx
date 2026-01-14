type Props = {
    href: string;
    children: React.ReactNode;
    className?: string;
};

export default function NavItem({
    href,
    children,
    className = "text-base text-indigo-950 hover:text-violet-700 hover:font-semibold",
}: Props) {
    return (
        <li>
            <a href={href} className={className}>
                {children}
            </a>
        </li>
    );
}
