'use client'
import React, { useRef } from 'react';
import { Navbar } from './nav-bar';
import { Hero } from './hero';
import { About } from './about';
import { Service } from './service';
import { Experience } from './experience';
import { Contact } from './contact';


export function Main() {
  return (
    (<div className="w-full min-h-screen bg-background text-foreground">
      <header className="w-full bg-primary text-primary-foreground py-0 px-6 md:px-12">
        <Navbar/>
      </header>
      <main>
        <section  
          id="hero"
          className="relative w-full min-h-[35vh] py-16 md:py-24">
          <Hero/>
        </section>
        <section id="about" className="w-full py-16 md:py-24 bg-muted px-4 sm:px-8">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
            <About/>
          </div>
        </section>
        <section id="service"className="w-full py-16 md:py-24 px-4 sm:px-8">
          <Service/>
        </section>
        <section id="experience" className="w-full pb-16 md:pb-24 px-4 sm:px-8">
          <Experience/>
        </section>
        <section id="contact" className="w-full py-16 md:py-24 bg-muted">
          <Contact/>
        </section>
      </main>
      <footer className="w-full bg-primary text-primary-foreground py-6 px-6 md:px-12">
        <div className="container mx-auto  md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center">&copy; 2024 Vuelo Bautismo. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>)
  );
}




