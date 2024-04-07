import BodyCarousel from "@/components/BodyCarousel";
import CarouselBanner from "@/components/CarouselBanner";

export default function Home() {
  return (
    <main className="h-full w-full">
      <CarouselBanner />
      <BodyCarousel />
    </main>
  );
}
