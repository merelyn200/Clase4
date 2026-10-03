import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- SECCIÓN CON FONDO BLANCO Y EL TÍTULO SUPERIOR -->
    <section class="bg-[#f8f9fa] text-gray-950 py-20 px-6 md:px-10">
      <div class="max-w-7xl mx-auto">
        
        <!-- TÍTULO Y ETIQUETA SUPERIOR -->
        <div class="text-center mb-16">
          <span class="text-xs uppercase tracking-widest text-emerald-600 font-semibold bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-200">
            [ THE PROCESS ]
          </span>
          <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight mt-4 text-gray-900">
            Healthcare built <br>
            <span class="text-gray-400 font-normal">around your data</span>
          </h2>
        </div>

        <!-- CONTENEDOR DE LAS 2 TARJETAS -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- TARJETA 1: ATLETA (Fondo oscuro con la persona corriendo) -->
          <div class="relative rounded-3xl overflow-hidden p-8 md:p-12 flex flex-col justify-between min-h-[500px] bg-cover bg-center text-white shadow-xl"
               style="background-image: linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2)), url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop');">
            
            <!-- Elementos superiores de la tarjeta 1 -->
            <div class="relative z-10 flex flex-col items-start gap-2.5">
              @for (item of cardOneTags; track item) {
                <span class="text-xs text-gray-200 font-medium flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> {{ item }}
                </span>
              }
            </div>

            <!-- Texto descriptivo superior derecho e inferior -->
            <div class="relative z-10 mt-auto pt-16">
              <p class="text-gray-300 text-xs md:text-sm max-w-xs mb-8 ml-auto text-right leading-relaxed">
                Advanced assessments help identify hidden factors affecting your health, performance, and daily wellbeing.
              </p>

              <h3 class="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 leading-tight">
                Discover What's <br>Holding You Back
              </h3>

              <button class="bg-emerald-400 hover:bg-emerald-300 text-black font-semibold text-xs px-6 py-3 rounded-full transition shadow-lg">
                Get Started
              </button>
            </div>
          </div>

          <!-- TARJETA 2: FRASCO DE PRODUCTO (Con imagen real y la barra translúcida) -->
          <div class="relative rounded-3xl overflow-hidden p-8 md:p-12 flex flex-col justify-between min-h-[500px] bg-[#0c2317] text-white border border-emerald-900/30 shadow-xl bg-cover bg-center"
               style="background-image: linear-gradient(to top, rgba(8,24,16,0.95), rgba(8,24,16,0.5)), url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop');">
            
            <!-- Píldoras superiores de la tarjeta 2 -->
            <div class="relative z-10 flex justify-center gap-2">
              <span class="bg-black/40 border border-emerald-800/50 text-[10px] tracking-wider px-3 py-1 rounded-full text-gray-400">GUIDANCE</span>
              <span class="bg-white text-black font-semibold text-[10px] tracking-wider px-3 py-1 rounded-full shadow">PERSONALIZED</span>
              <span class="bg-black/40 border border-emerald-800/50 text-[10px] tracking-wider px-3 py-1 rounded-full text-gray-400">SUPPORT</span>
            </div>

            <!-- Franja translúcida flotante sobre la imagen central -->
            <div class="relative z-10 my-auto py-6 flex justify-center">
              <div class="w-full max-w-sm bg-[#081c12]/80 backdrop-blur-md border-y border-emerald-500/40 py-3 px-6 text-center shadow-2xl rounded-xl">
                <span class="text-xs md:text-sm tracking-widest text-emerald-300 font-bold uppercase">
                  FOLLOW A PLAN DESIGNED FOR YOU
                </span>
              </div>
            </div>

            <!-- Texto inferior de la tarjeta 2 -->
            <div class="relative z-10">
              <p class="text-gray-300 text-xs md:text-sm max-w-sm leading-relaxed">
                Get expert guidance, personalized treatments, and continuous support that adapts as your needs change.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  `
})
export class ProductsGridComponent {
  cardOneTags = [
    'Energy Boost',
    'Fat Burn',
    'Sexual Health'
  ];
}