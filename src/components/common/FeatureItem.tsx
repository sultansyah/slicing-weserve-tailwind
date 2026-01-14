import FeatureShadowIcon from "../icons/FeatureShadowIcon";

type Props = {
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
    className?: string;

    titleColor?: string;
    descriptionColor?: string;
    backgroundColor?: string;
    linkColor?: string;
    showShadow?: boolean;
};

export default function FeatureItem({
    icon,
    title,
    description,
    href,

    titleColor = "text-indigo-950",
    descriptionColor = "text-gray-500",
    backgroundColor = "bg-white",
    linkColor = "text-violet-700",
    showShadow = false,
    className,
}: Props) {
    return (
        <>
            <div
                className={
                    className
                        ? className
                        : `${showShadow ? "relative" : ""
                        } my-card flex flex-col gap-y-8 rounded-2xl py-8 px-5 ${backgroundColor}`
                }
            >
                {icon}

                <div className="flex flex-col gap-y-1 z-10">
                    <h3 className={`font-bold text-xl ${titleColor}`}>{title}</h3>

                    <p className={`text-base leading-relaxed ${descriptionColor}`}>
                        {description}
                    </p>
                </div>

                <a href={href} className={`font-semibold ${linkColor}`}>
                    Learn More
                </a>

                {showShadow && (
                    <div className="absolute -top-4 right-5">
                        <FeatureShadowIcon />
                    </div>
                )}
            </div>
        </>
    );
}
