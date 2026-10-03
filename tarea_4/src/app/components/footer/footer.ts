import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- SECCIÓN FINAL: CTA Y FOOTER -->
    <footer class="bg-[#021008] text-white font-sans overflow-hidden pt-24 pb-12 px-6 md:px-12 border-t border-emerald-950">
      
      <!-- CONTENEDOR SUPERIOR: CTA (Invest in the most important asset...) -->
      <div class="max-w-7xl mx-auto mb-28">
        
        <!-- Píldoras de etiquetas superiores -->
        <div class="flex flex-wrap gap-2 mb-8">
          <span class="text-[10px] uppercase tracking-wider bg-emerald-950 text-emerald-400 px-3.5 py-1 rounded-full border border-emerald-900/50 font-semibold">GUIDANCE</span>
          <span class="text-[10px] uppercase tracking-wider bg-emerald-400 text-black px-3.5 py-1 rounded-full font-bold">PERSONALIZED</span>
          <span class="text-[10px] uppercase tracking-wider bg-emerald-950 text-emerald-400 px-3.5 py-1 rounded-full border border-emerald-900/50 font-semibold">SUPPORT</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <!-- Texto y botón -->
          <div class="md:col-span-7">
            <h2 class="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Invest in the most <br>
              important asset you have!
            </h2>
            <p class="text-gray-400 text-sm md:text-base max-w-md mb-8 leading-relaxed">
              Your health influences every part of your life. Start building a stronger foundation with care designed around you.
            </p>
            <button class="bg-emerald-400 hover:bg-emerald-300 text-black font-semibold text-sm px-8 py-3.5 rounded-full transition shadow-lg shadow-emerald-950/50">
              GET STARTED
            </button>
          </div>

          <!-- Tarjeta de producto lateral -->
          <div class="md:col-span-5 flex justify-end">
            <div class="bg-[#05180e] border border-emerald-900/60 p-6 rounded-3xl max-w-xs w-full shadow-2xl">
              <div class="h-48 bg-cover bg-center rounded-2xl mb-4" 
                   style="background-image: url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop');">
              </div>
            </div>
          </div>

        </div>

        <!-- Enlaces rápidos de categorías centrales -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-20 pt-10 border-t border-emerald-950/80 text-xs text-gray-400">
          <span>Performance</span>
          <span>Weight Loss</span>
          <span>Hormone Health</span>
          <span>Energy Boost</span>
          <span>Fat Burn</span>
          <span>Sexual Health</span>
        </div>

      </div>

      <!-- LOGOTIPO GIGANTE CENTRAL -->
      <div class="max-w-7xl mx-auto text-center my-16 overflow-hidden">
        <h1 class="text-6xl sm:text-8xl md:text-[11rem] font-black tracking-tighter text-emerald-400 uppercase select-none opacity-90 leading-none">
          solacecare
        </h1>
      </div>

      <!-- BARRA INFERIOR DEL FOOTER -->
      <div class="max-w-7xl mx-auto pt-10 border-t border-emerald-950 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400">
        
        <!-- Enlaces de navegación izquierda (con contenedor sutil) -->
        <div class="bg-[#05160d] border border-emerald-900/40 p-4 rounded-2xl grid grid-cols-2 gap-x-12 gap-y-2">
          <a href="#" class="hover:text-emerald-400 transition">HOME</a>
          <a href="#" class="hover:text-emerald-400 transition">WELLNESS+</a>
          <a href="#" class="hover:text-emerald-400 transition">ABOUT US</a>
          <a href="#" class="hover:text-emerald-400 transition">PRODUCT</a>
        </div>

        <!-- Redes sociales y correo -->
        <div class="flex flex-col items-center md:items-center gap-3">
          <div class="flex gap-3">
            <a href="#" class="w-9 h-9 bg-emerald-400 text-black rounded-full flex items-center justify-center font-bold hover:bg-emerald-300 transition">in</a>
            <a href="#" class="w-9 h-9 bg-emerald-400 text-black rounded-full flex items-center justify-center font-bold hover:bg-emerald-300 transition">ig</a>
            <a href="#" class="w-9 h-9 bg-emerald-400 text-black rounded-full flex items-center justify-center font-bold hover:bg-emerald-300 transition">x</a>
          </div>
          <a href="mailto:INFO&#64;SOLACECARE.COM" class="text-emerald-400 hover:underline tracking-wider font-medium">INFO&#64;SOLACECARE.COM</a>
        </div>

        <!-- Enlaces legales y Copyright -->
        <div class="flex flex-col items-end gap-2 text-right">
          <a href="#" class="hover:text-emerald-400 transition">TERMS OF SERVICE</a>
          <a href="#" class="hover:text-emerald-400 transition">REFUND & RETURN POLICY</a>
          <a href="#" class="hover:text-emerald-400 transition">PRIVACY AND COOKIE POLICY</a>
          <span class="text-gray-600 mt-2">© 2026 SOLACECARE</span>
        </div>

      </div>

    </footer>
  `
})
export class FooterComponent {}