import React from "react";
import Card from "./Card";

function App() {
  return (
    <>
    <div className="min-h-screen min-w-screen flex-col items-center justify-center bg-black">
      <h1 className="flex mb-20 py-5 justify-center items-center bg-black text-green-600 ">Ummsi Props</h1>
      <div className="grid md:grid-cols-3 gap-10 m-10">
        <Card
          image="https://picsum.photos/400/300?random=1"
          title="Nature Beauty"
          description="Experience the beauty of nature with stunning views."
        />
        <Card
          size={50}
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
          title="Bussniess"
          description="Explore the future with cutting-edge tech."
        />
        <Card
          image="https://picsum.photos/400/300?random=5"
          title="Development"
          description="Explore the future with cutting-edge tech."
        />
        <Card
          image="https://picsum.photos/400/300?random=6"
          title="Goverment"
          description="Explore the future with cutting-edge tech."
        />
      </div>
    </div>
    </>
  );

}

export default App;
