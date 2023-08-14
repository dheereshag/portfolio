import { Navbar } from "@/components";
import { Header, Projects, Skills, Contact } from "@/container";
import { AppProvider } from "@/context/AppContext";

export default function Home() {
  return (
    <AppProvider>
      <Navbar />
      <Header />
      <Projects />
      <Skills />
      <Contact />
    </AppProvider>
  );
}
