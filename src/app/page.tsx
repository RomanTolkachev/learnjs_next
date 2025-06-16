import { CarouselWrapper } from "@/shared/ui/carousel";
import { Footer } from "@/shared/ui/footer";

export default function Home() {
    return (
        <section className="">
            <div className="h-full overflow-y-scroll grid grid-cols-2">
                <div className="flex items-center justify-center">
                    <p className="text-8xl tracking-tighter text-chart-5 font-black ">TENNIS<br />STORE</p>
                </div>
                <div className="">
                    <CarouselWrapper />
                </div>
            </div>
            <Footer />
        </section>
    );
}
