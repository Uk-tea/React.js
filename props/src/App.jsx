import Slider from "./components/Slider";
import Card from "./components/Card";

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Slider section */}
      <section className="py-12 px-4">
        <Slider />
      </section>

      {/* Cards section */}
      <section className="py-16 px-4">
        <h1 className="text-3xl font-bold text-center mb-10 text-emerald-400">
          Ummsi Props
        </h1>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            image="https://picsum.photos/400/300?random=1"
            title="Nature Beauty"
            description="Experience the beauty of nature with stunning views."
          />
          <Card
            image="https://picsum.photos/400/300?random=2"
            title="City Life"
            description="Feel the energy and rhythm of modern cities."
          />
          <Card
            image="https://picsum.photos/400/300?random=3"
            title="Technology"
            description="Explore the future with cutting-edge tech."
          />
          <Card
            image="https://picsum.photos/400/300?random=4"
            title="Business"
            description="Grow your skills and ideas into something impactful."
          />
          <Card
            image="https://picsum.photos/400/300?random=5"
            title="Development"
            description="Build modern apps and websites with ease."
          />
          <Card
            image="https://picsum.photos/400/300?random=6"
            title="Government"
            description="Understand governance and leadership better."
          />
        </div>
      </section>
    </main>
  );
}
