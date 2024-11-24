'use client'

export function Hero (){
    return(
        <div>
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
        </div>
    )
}