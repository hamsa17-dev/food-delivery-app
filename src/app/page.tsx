"use client";

import { Container } from "@mui/material";
import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import Features from "@/src/components/Features";
import About from "@/src/components/About";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <Container>
        <Hero />
        <About />
        <Features />
        <Contact />
      </Container>

      <Footer />
    </>
  );
}