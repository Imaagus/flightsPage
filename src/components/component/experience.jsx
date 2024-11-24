'use client'

import Image from 'next/image';

export function Experience (){
    return(
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">¿Qué incluye el vuelo bautismo?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/media/Avioneta.jpg"
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
    )
}