import FeatureItem from "../common/FeatureItem";
import HierarchySquareIcon from "../common/HierarchySquareIcon";

export default function FeaturesSection() {
    return (
        <section className="features max-w-6xl mx-auto py-12">
            <h3 className="text-indigo-950 text-5xl font-semibold text-center mb-7">
                Your Best Choice
            </h3>
            <div className="grid grid-cols-4 gap-x-8">
                <FeatureItem
                    icon={<HierarchySquareIcon />}
                    title="Extra Layers"
                    description="Making your project more secure avoiding DDoS"
                    href="#"
                />
                <FeatureItem
                    icon={<HierarchySquareIcon />}
                    title="Extra Layers"
                    description="Making your project more secure avoiding DDoS"
                    href="#"
                />
                <FeatureItem
                    icon={<HierarchySquareIcon />}
                    title="AI Automation"
                    description="Making your project more secure avoiding DDoS"
                    href="#"
                    titleColor="text-white"
                    descriptionColor="text-[#8D90A8]"
                    backgroundColor="bg-[#080C2E]"
                    linkColor="text-white"
                    showShadow={true}
                />
                <FeatureItem
                    icon={<HierarchySquareIcon />}
                    title="Extra Layers"
                    description="Making your project more secure avoiding DDoS"
                    href="#"
                />
            </div>
        </section>
    );
}
