import Image from "next/image";
import NavBar from "./comonents/navbar";
import LandingHero from "./comonents/landingHero";
import Footer from "./comonents/footer";

export default function Home() {
  return (
    <main className="flex flex-col bg-base-200 items-center min-h-screen">
      <NavBar />
      <LandingHero />
      <Footer />
    </main>
  );
}
