import Image from "next/image";
import NavBar from "./components/navbar";
import LandingHero from "./components/landingHero";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex flex-col bg-base-200 items-center min-h-screen">
      <NavBar />
      <LandingHero />
      <Footer />
    </main>
  );
}
