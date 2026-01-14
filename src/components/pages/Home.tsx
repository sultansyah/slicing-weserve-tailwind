import Navbar from "../layout/Navbar";
import HeroSection from "../sections/HeroSection";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#F1F4F5] font-poppins">
            <Navbar />
            <HeroSection />
        </div>
    );
}
