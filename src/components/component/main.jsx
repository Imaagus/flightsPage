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
            <Link href="#" className="hover:underline" prefetch={false}>
              Sobre Nosotros
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              La Experiencia
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contacto
            </Link>
          </nav>
          <Button variant="secondary" size="sm">
            Reservar Vuelo
          </Button>
        </div>
      </header>
      <main>
        <section  
          id="hero"
          className="relative w-full py-16 md:py-24">
          <video  
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute top-0 left-0 w-full h-full object-cover object-top z-0">
            <source src="/media/banner.mp4" type="video/mp4" />
          </video>
          <div className="relative container mx-auto px-6 md:px-12 text-center z-10">
            <h1 className="text-black text-4xl md:text-6xl font-bold mb-4">Vive la Emoción del Vuelo Bautismo</h1>
            <p className="text-black text-lg md:text-xl mb-8">
              Descubre la magia de pilotear una avioneta con un instructor experto.
            </p>
            <Button size="lg">Reservar Ahora</Button>
        </div>
        </section>
        <section id="about" className="w-full py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">¿Qué es un Vuelo Bautismo?</h2>
                <p className="text-muted-foreground mb-6">
                  Un vuelo bautismo es una experiencia única donde las personas que nunca han pilotado una avioneta
                  pueden tomar los controles y volar junto a un instructor experimentado. Es una oportunidad para vivir
                  la emoción de ser piloto por un día.
                </p>
                <p className="text-muted-foreground mb-6">
                  Durante el vuelo, el instructor te guiará a través de las maniobras básicas de pilotaje, como
                  despegue, ascenso, virajes y aterrizaje. Tendrás la oportunidad de tomar los controles y sentir la
                  adrenalina de volar.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Beneficios del Vuelo Bautismo</h2>
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
        <section id="experience" className="w-full py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-8 text-center">La Experiencia del Vuelo Bautismo</h2>
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
                <h3 className="text-2xl font-bold mb-4">Descubre el Placer de Volar</h3>
                <p className="text-muted-foreground mb-6">
                  Durante el vuelo bautismo, tendrás la oportunidad de tomar los controles de la avioneta y experimentar
                  la emoción de pilotear. Bajo la supervisión de un instructor experimentado, aprenderás las maniobras
                  básicas de vuelo, como despegue, ascenso, virajes y aterrizaje.
                </p>
                <p className="text-muted-foreground mb-6">
                  Disfruta de una vista panorámica única mientras sobrevuelas la ciudad o el campo. Siente la adrenalina
                  y la libertad de volar. Es una experiencia que te dejará con una sonrisa en el rostro y un recuerdo
                  imborrable.
                </p>
                <Button size="lg">Reservar Vuelo</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Contacta con Nosotros</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
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
              <div>
                <h3 className="text-2xl font-bold mb-4">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <PhoneIcon className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
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
                    <LocateIcon className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-medium">Dirección</p>
                      <p className="text-muted-foreground">500 Av. Figueroa Alcorta, Moron.</p>
                      <Map className="w-full py-12 md:py-20 "/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-primary text-primary-foreground py-6 px-6 md:px-12">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm">&copy; 2024 Vuelo Bautismo. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              Términos y Condiciones
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Política de Privacidad
            </Link>
          </div>
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


function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>)
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


function PlaneIcon(props) {
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
        d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
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
      width="500px" 
      height="300px" 
      style={{ border: 0 }}
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
      </iframe>
  );
}

