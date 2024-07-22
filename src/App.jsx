import Benefits from "@/components/Benefits";
import FoodStories from "@/components/FoodStories";
import Footer from "@/components/Footer";
import HealthyBite from "@/components/HealthyBite";
import Hero from "@/components/HeroComponent";
import LifeStyle from "@/components/LifeStyle";
import Navbar from "@/components/Navbar/Navbar";
import NutriNexus from "@/components/NutriNexus";
import Plans from "@/components/Plans";
import Products from "@/components/Products";
import Projects from "@/components/ProjectsComponent";
import Reviews from "@/components/Reviews";
import Slogan from "@/components/Slogan";
import Start from "@/components/Start";
import WhatIs from "@/components/WhatIs";
import Layout from "@/components/ui/Layout";
import WaveBottom from "@/components/ui/WaveBottom";

// IA PARA ANTICIPAR TENDENCIAS Y DETECTAR CAMBIOS EN LOS HÁBITOS DE ALIMENTACIÓN DE LOS CONSUMIDORES
// (Plataforma Para Los Hábitos Alimentarios De Personas Y Mascotas)

function App() {
  return (
    <main>
      <Navbar />

      <div className="relative">
        <Hero />
        <WaveBottom className="" />
      </div>

      <Layout>
        <section className="py-[100px]">
          <LifeStyle />
        </section>
        <section className="py-[100px]">
          <NutriNexus />
        </section>
        <section className="py-[100px]">
          <Plans />
        </section>
        <section className="py-[100px]">
          <HealthyBite />
        </section>
        <section className="py-[100px]">
          <Projects />
        </section>
        <section className="py-[100px]">
          <WhatIs />
        </section>
        <section className="py-[100px]">
          <Products />
        </section>
        <section className="py-[100px]">
          <FoodStories />
        </section>
        <section className="py-[100px]">
          <Benefits />
        </section>
        <section className="py-[100px]">
          <Start />
        </section>

        <section className="py-[100px]">
          <Slogan />
        </section>
      </Layout>
      <Footer />
    </main>
  );
}

export default App;
