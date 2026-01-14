import FeatureItem from "../common/FeatureItem";
import Cube3DIcon from "../icons/Cube3DIcon";
import DriverRefreshIcon from "../icons/DriverRefreshIcon";
import HierarchySquareIcon from "../icons/HierarchySquareIcon";
import StatusUpIcon from "../icons/StatusUpIcon";

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
                    icon={<Cube3DIcon />}
                    title="Customizable"
                    description="Only install what your business needs to grow"
                    href="#"
                />
                <FeatureItem
                    icon={<StatusUpIcon />}
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
                    icon={<DriverRefreshIcon />}
                    title="Auto-Scaling"
                    description="Have a long weekend without worrying any loss"
                    href="#"
                />
            </div>
        </section>
    );
}
