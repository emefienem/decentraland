import BodyCarousel from "@/components/BodyCarousel";
import CarouselBanner from "@/components/CarouselBanner";
import Dynamic from "@/components/Dynamic";
import First from "@/components/First";
import New from "@/components/New";
import Trending from "@/components/Trending";
import World from "@/components/World";

export default function Home() {
  return (
    <main className="h-full w-full">
      <CarouselBanner />
      <BodyCarousel />
      <New />
      <First />
      <Dynamic />
      <Trending />
      <World />
    </main>
  );
}
