import Navbar from "../layout/Navbar";
import HeroSection from "../sections/HeroSection";
import PatnersSection from "../sections/PatnersSection";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#F1F4F5] font-poppins">
            <Navbar />
            <HeroSection />
            <PatnersSection />
        </div>
    );
}
