"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import icono from "@/media/Icono.png"
import avioneta from "@/media/Avioneta.jpg"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Main() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_ncqs3hl', 
        'template_5lmwj0u', 
        form.current,
        'z42E71FN1v8cabK5c'   
      )
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Error al enviar el mensaje.');
        }
      );
  };
  return (
    (<div className="w-full min-h-screen bg-background text-foreground">
      <header className="w-full bg-primary text-primary-foreground py-0 px-6 md:px-12">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Icon />
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
      </header>
      <main>
        <section  
          id="hero"
          className="relative w-full min-h-[35vh] py-16 md:py-24">
          <video  
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute top-0 left-0 w-full h-full object-cover object-top z-0">
            <source src="/media/banner.mp4" type="video/mp4" />
          </video>
          <div className="relative container mx-auto px-4 sm:px-6 md:px-12 text-center z-10">
            <h1 className="text-black text-3xl sm:text-4xl md:text-6xl font-bold">Vivi la Emoción de ser piloto por un dia</h1>
          </div>
        </section>
        <section id="about" className="w-full py-16 md:py-24 bg-muted px-4 sm:px-8">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-10">¿Qué es un Vuelo Bautismo?</h2>
                <p className="text-muted-foreground mb-6">
                  Son Experiencias diseñadas para aquellas personas que, sin conocer el mundo de la aviación, desean adentrarse en el y vivir la emoción de volar.
                  Durante estos vuelos, los participantes aprenden los principios básicos del vuelo y podrán tomar los mandos del avión una vez en vuelo, todo bajo la guía del piloto.
                </p>
                <p className="text-muted-foreground mb-6">
                  Esta experiencia única no solo es una oportunidad para descubrir la magia de volar, sino que también es el regalo perfecto para sorprender a alguien especial.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-10">Beneficios del Vuelo Bautismo</h2>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <CheckIcon className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="text-xl font-bold">Experiencia Única</h3>
                      <p className="text-muted-foreground">
                        Vive una aventura inolvidable y conviértete en piloto por un día.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckIcon className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="text-xl font-bold">Aprendizaje Práctico</h3>
                      <p className="text-muted-foreground">
                        Aprende los conceptos básicos de pilotaje de una manera divertida y segura.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <CheckIcon className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="text-xl font-bold">Adrenalina y Emoción</h3>
                      <p className="text-muted-foreground">
                        Siente la emoción de volar y disfrutar de una vista panorámica única.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="service"className="w-full py-16 md:py-24 px-4 sm:px-8">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Nuestros servicios</h2>
            <div className="flex gap-8 grid grid-cols-1 md:grid-cols-3 m-4">
              <div className="text-center space-y-2 ">
                <h3 className="text-xl font-bold">Vuelo de bautismo</h3>
                <p className="text-muted-foreground mb-6">Disfruta de una experiencia única si deseas volar por primera vez en un entorno seguro y controlado. Es la oportunidad perfecta para celebrar eventos especiales, como cumpleaños, o para sorprender a alguien con un regalo inolvidable.</p>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold">Piloto por un dia</h3>
                <p className="text-muted-foreground mb-6">Toma el control y experimenta la emoción de volar como un verdadero piloto. Con la supervision de nuestros expertos, vive la adrenalina de estar al mando y disfruta de una experiencia unica.</p>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold">Vuelo Panoramico</h3>
                <p className="text-muted-foreground mb-6">Vuela sobre los paisajes, ciudades y puntos de interés más hermosos de Buenos Aires. Nuestros paseos panorámicos ofrecen vistas inigualables y momentos de tranquilidad.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="w-full pb-16 md:pb-24 px-4 sm:px-8">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
            <h2 className="text-3xl font-bold mb-8 text-center">¿Qué incluye el vuelo bautismo?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src= {avioneta.src}
                  width={600}
                  height={400}
                  alt="Vuelo Bautismo"
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Descubri el Placer de Volar</h3>
                
                  <p className="text-muted-foreground mb-6">
                  <b>• Recepción y bienvenida:</b> Incluye la recepción del participante en el aeródromo, una charla introductoria acerca de la actividad, y una explicación básica sobre el vuelo. 
                  </p>
                
                  <p className="text-muted-foreground mb-6">
                  <b>• Briefing Pre Vuelo:</b> Explicación detallada de las condiciones del vuelo e información sobre el recorrido. Por ultimo se hace una revisión de normas de seguridad y procedimientos de emergencia.  
                  </p>
                
                  <p className="text-muted-foreground mb-6">
                  <b>• Equipo y preparativos:</b> Entrega de auriculares, luego se hace una explicación sobre el uso del cinturón de seguridad. 
                  </p>

                  <p className="text-muted-foreground mb-6">
                  <b>• Inspección de la aeronave:</b> Revisión externa e interna del avión junto al piloto.  
                  </p>

                  <p className="text-muted-foreground mb-6">
                  <b>• Recuerdo para el participante:</b>Capturas de fotografías en calidad 4k y videos utilizando cámara GO PRO! en cabina. Al finalizar se entrega un certificado de vuelo firmado por el piloto y una fotografía de recuerdo con el avión. 
                  </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Contacta con Nosotros</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-4 sm:p-6 md:p-8">
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" name="user_name" type="text" placeholder="Ingresa tu nombre" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" name="user_email" type="email" placeholder="Ingresa tu correo" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" type="tel" placeholder="Ingresa tu teléfono" required />
                  </div>
                  <div>
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea id="message" name="message" placeholder="Escribe tu mensaje" required />
                  </div>
                  <Button type="submit" size="lg">
                    Enviar
                  </Button>
                </form>
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-4">Información de Contacto</h3>
                <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <PhoneIcon className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-medium">Whatsapp</p>
                        <Link href="https://wa.me/+5491171210438?text=¡Hola!%20Estoy%20interesado%20en%20el%20vuelo%20bautismo." target="_blank" className="hover:underline text-muted-foreground " prefetch={false}>
                        +54 9 11-7121-0438
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <MailIcon className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-medium">Correo Electrónico</p>
                        <Link href="mailto:vuelosdebautismos@gmail.com" className="hover:underline text-muted-foreground" prefetch={false}>
                        vuelosdebautismos@gmail.com
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <InstagramIcon className="w-6 h-6 text-primary"/>
                      <div>
                        <p className="font-medium">Instagram</p>
                        <Link href="https://www.instagram.com/vuelosdebautismo.bs.as/" target="_blank" className="hover:underline text-muted-foreground" prefetch={false}> 
                        @vuelosdebautismo.bs.as
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col order-2 md:order-none">
                    <div>
                      <p className="font-medium">Dirección</p>
                      <p className="text-muted-foreground">500 Av. Figueroa Alcorta, Moron.</p>
                      <Map className="w-full mt-4 md:mt-0"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

function CheckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>)
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 1 1-4.63-4.63 4 4 0 0 1 4.63 4.63z" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>)
  );
}


function PhoneIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>)
  );
}



function Icon(props){
  return (
    <img src={icono.src} alt="Icono" width={125} height={100} />
  );
}


 function Map() {
  return (
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d820.4286226647496!2d-58.64310113032706!3d-34.66191269521972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7527bbb5a65%3A0x9fe7f7f6b8275e14!2sAv.%20Figueroa%20Alcorta%20500%2C%20B1712%20Castelar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1731070769444!5m2!1ses!2sar" 
      className="w-full h-64 md:h-80 lg:h-128 rounded-lg "
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade">
      </iframe>
  );
}

