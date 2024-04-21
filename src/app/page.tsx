import Navigation from "@/components/Navigation/Navigation";
import WeddingDate from "@/components/WeddingDate/WeddingDate";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="container mx-auto relative">
        <WeddingDate />
      </div>
    </>
  );
}
