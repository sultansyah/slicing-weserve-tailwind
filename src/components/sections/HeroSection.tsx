import DeviceMessageLogo from "../common/DeviceMessageLogo";
import GlobalLogo from "../common/GlobalLogo";
import illustrationHeader from "../../assets/illustration-header.png";

export default function HeroSection() {
    return (
        <section className="hero max-w-6xl mx-auto py-12">
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-y-10">
                    <div className="w-fit gap-x-2 px-3 py-2 small-badge flex flex-row bg-white rounded-full">
                        <GlobalLogo />
                        <p className="text-base font-semibold text-indigo-950">
                            We host more than 120,000 websites
                        </p>
                    </div>

                    <div className="flex flex-col gap-y-2">
                        <h1 className="text-indigo-950 text-[70px] leading-none">
                        Grow Online
                        <br />
                        Business Faster
                    </h1>

                    <p className="text-base leading-loose text-gray-500">
                        We provide a variety of servers to grow your users <br />
                        acquisition much user-friendly and boosting up sales.
                    </p>
                    </div>

                    <div className="flex flex-row gap-x-4 items-center">
                        <a
                            href="#"
                            className="text-lg hover:bg-indigo-950 bg-violet-700 text-white py-4 px-10 rounded-full font-semibold"
                        >
                            Try Free Trial
                        </a>

                        <a href="#" className="flex gap-x-2 text-violet-700 font-semibold">
                            <DeviceMessageLogo />
                            Schedule a Demo
                        </a>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <img src={illustrationHeader} alt="" className="h-137.5" />
                </div>
            </div>
        </section>
    );
}
