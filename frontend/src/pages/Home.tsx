import { useEffect, useState } from "react";
import api from "../api/Axios";
import {type ContentType } from "../types/content";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import About from "../components/About";
import Amenities from "../components/Amenities";
// import FAQ from "../components/FAQ";

export default function Home() {
  const [data, setData] = useState<ContentType | null>(null);

  useEffect(() => {
    api.get("/content").then(res => setData(res.data));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <>
      <Hero hero={data.hero} />
      <Pricing pricing={data.pricing} />
      <About about={data.aboutProject} />
      <Amenities amenities={data.amenities} />
      {/* <FAQ faqs={data.faqs} /> */}
    </>
  );
}
