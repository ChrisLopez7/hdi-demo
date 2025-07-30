"use client";
import Image from "next/image";
import Header from "../Components/Header/Header";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Menú fijo */}
      <Header />

      

      {/* Columna de imagen */}
      <div className="relative w-full h-[400px] border-l-[6px] border-green-600 bg-white flex justify-center items-center">
          <Image
            src="/Images/ciclista3.png"
            alt="HDI Banner"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div 
        className="px-6 md:px-20 py-16 text-center bg-white">
          <h2 className="text-green-800 text-[14px] font-semibold tracking-wide uppercase">
            Seguros de Autos
          </h2>
          <h3 className="text-[28px] md:text-[32px] font-bold mt-2 mb-8">
            ¿Por qué elegir a HDI SEGUROS para tu seguro de auto?
          </h3>
          <ul className="space-y-4 text-left max-w-3xl mx-auto text-[18px] leading-relaxed text-gray-700">
            <li className="flex">• Porque nunca estás solo, te respaldamos en todos tus trayectos, incluso fuera de tu auto.</li>
            <li className="flex">• Nuestros expertos están disponibles todo el año, todos los días y a cualquier hora.</li>
            <li className="flex">• Contamos con más de 500 ajustadores en todo el país que te brindarán atención personalizada y ágil.</li>
            <li className="flex">• Con la cobertura Responsabilidad Civil Familiar, te cubrimos frente a cualquier daño que tú o tu familia provoquen a otra persona.</li>
          </ul>
        </div>
    </div>
  );
}
