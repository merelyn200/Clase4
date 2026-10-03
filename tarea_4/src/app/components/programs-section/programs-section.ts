import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-programs-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- SECCIÓN CON FONDO BLANCO Y CONTENEDOR MÁS AMPLIO -->
    <section class="bg-[#f8f9fa] py-20 px-4 md:px-8 font-sans">
      <div class="max-w-[88rem] mx-auto bg-[#04120a] text-white py-20 px-6 md:px-16 rounded-[2.5rem] overflow-hidden relative min-h-[600px] flex flex-col justify-between shadow-2xl border border-emerald-900/30">
        
        <!-- IMAGEN DE FONDO O RETRATO CENTRAL -->
        <div class="absolute inset-0 z-0 bg-cover bg-center opacity-70" 
             style="background-image: radial-gradient(circle, rgba(4,18,10,0.3) 0%, rgba(2,8,4,0.95) 100%), url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1920&auto=format&fit=crop');">
        </div>

        <!-- CONTENIDO SUPERIOR: TÍTULO Y BOTÓN -->
        <div class="relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div class="md:col-span-6">
            <span class="text-xs uppercase tracking-widest text-emerald-400 font-semibold bg-emerald-950/60 px-3.5 py-1.5 rounded-full border border-emerald-800/50">
              [ PROGRAM ]
            </span>
            <h2 class="text-4xl md:text-6xl font-extrabold tracking-tight mt-6 mb-8 leading-[1.1]">
              Confidence starts <br>
              <span class="text-emerald-400">with feeling your best</span>
            </h2>
            <button class="bg-emerald-400 hover:bg-emerald-300 text-black font-semibold text-sm px-7 py-3 rounded-full transition shadow-lg shadow-emerald-950/50">
              Get Started
            </button>
          </div>

          <!-- TARJETAS FLOTANTES LATERALES (Derecha) -->
          <div class="md:col-span-6 flex flex-col gap-4 items-end justify-center">
            
            <!-- Tarjeta 1 (Mini superior) -->
            <div class="bg-[#081c12]/80 backdrop-blur-md border border-emerald-900/50 rounded-2xl p-4 max-w-xs w-full shadow-xl">
              <div class="flex items-center gap-2 mb-2 text-emerald-400 text-xs font-semibold">
                <span>👁️‍‍🗨️</span> <span>PERFORMANCE</span>
              </div>
              <p class="text-gray-300 text-xs leading-relaxed">
                Private, judgment-free care for sexual wellness and performance.
              </p>
            </div>

            <!-- Tarjeta 2 (Principal inferior: Sexual Health) -->
            <div class="bg-[#081c12]/90 backdrop-blur-md border border-emerald-800/60 rounded-3xl p-6 max-w-sm w-full shadow-2xl">
              <div class="flex items-center justify-between mb-3">
                <span class="text-emerald-400 text-sm">👁️</span>
                <span class="text-[10px] tracking-widest uppercase bg-emerald-950 text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-800/40 font-bold">
                  SEXUAL HEALTH
                </span>
              </div>
              <p class="text-gray-300 text-xs md:text-sm leading-relaxed mb-4">
                Private, clinician-led care designed to support sexual wellness, performance, and long-term confidence.
              </p>
              <a href="#" class="text-emerald-400 hover:text-emerald-300 text-xs font-semibold flex items-center gap-1 transition">
                Explore Program <span>↗</span>
              </a>
            </div>

          </div>
        </div>

        <!-- CONTENIDO INFERIOR: DESCRIPCIÓN Y BARRA DE PROGRESO -->
        <div class="relative z-10 w-full pt-16 flex flex-col md:flex-row justify-between items-end gap-6">
          
          <!-- Texto inferior izquierdo -->
          <div class="max-w-sm">
            <p class="text-gray-300 text-xs md:text-sm leading-relaxed">
              Whether you're looking to lose weight, improve performance, optimize hormones, or feel your best every day, our programs are tailored to your needs.
            </p>
          </div>

          <!-- Barra de progreso e indicador numérico -->
          <div class="w-full md:w-auto flex items-center gap-6">
            <div class="flex gap-2 flex-1 md:w-64">
              <div class="h-1 bg-emerald-500/40 rounded-full flex-1"></div>
              <div class="h-1 bg-emerald-500/40 rounded-full flex-1"></div>
              <div class="h-1 bg-emerald-400 rounded-full flex-1 shadow-sm shadow-emerald-400"></div>
              <div class="h-1 bg-emerald-950 rounded-full flex-1"></div>
              <div class="h-1 bg-emerald-950 rounded-full flex-1"></div>
              <div class="h-1 bg-emerald-950 rounded-full flex-1"></div>
            </div>
            <span class="text-xs font-semibold text-gray-400 tracking-widest">3/6</span>
          </div>

        </div>

      </div>
    </section>
  `
})
export class ProgramsSectionComponent {}