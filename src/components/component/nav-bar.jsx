'use client'
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button"

export function Navbar (){
    return(
        <div className="container mx-auto flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Image src="/media/icono.png" alt="Icono" width={125} height={100} />
        </Link>
        <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <Link href="#service" className="hover:underline" prefetch={false}>
            La Experiencia
          </Link>
          <Link href="#contact" className="hover:underline" prefetch={false}>
            Contacto
          </Link>
        </nav>
        <Button variant="secondary" size="sm">
          <Link href="https://wa.me/+5491171210438?text=¡Hola!%20Estoy%20interesado%20en%20el%20vuelo%20bautismo." target="blank" prefetch={false}>
            Reservar Vuelo
          </Link>
        </Button>
      </div>
    )
}