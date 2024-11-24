'use client'

import { Label } from "@radix-ui/react-label"
import { InstagramIcon, MailIcon, PhoneIcon } from "lucide-react"
import Link from "next/link"
import { Input } from "../ui/input"
import emailjs from '@emailjs/browser';
import { useRef } from "react"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"


export function Contact (){
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
    return(
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
                <Input id="phone" name="user_phone" type="tel" placeholder="Ingresa tu teléfono" required />
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
    )
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

