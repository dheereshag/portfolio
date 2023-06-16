import { Navbar } from "@/components";
import { Header, About, Projects, Skills, Contact } from "@/container";
import { AppProvider } from "@/context/AppContext";
import Image from "next/image";

export default function Home() {
  return (
    <AppProvider>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </AppProvider>
  );
}
