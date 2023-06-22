import { Navbar } from "@/components";
import { Header, About, Projects, Skills, Contact } from "@/container";
import { AppProvider } from "@/context/AppContext";

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
