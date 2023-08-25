import { Navbar } from "@/components";
import { Header, Projects, Skills, Contact } from "@/container";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
