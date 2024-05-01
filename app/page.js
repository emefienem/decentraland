import BodyCarousel from "@/components/BodyCarousel";
import CarouselBanner from "@/components/CarouselBanner";
import Dynamic from "@/components/Dynamic";
import First from "@/components/First";
import New from "@/components/New";
import Questions from "@/components/Questions";
import Trending from "@/components/Trending";
import World from "@/components/World";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden md:overflow-x-visible">
      <CarouselBanner />
      <BodyCarousel />
      <New />
      <First />
      <Dynamic />
      <Trending />
      <World />
      <Questions />
    </main>
  );
}
