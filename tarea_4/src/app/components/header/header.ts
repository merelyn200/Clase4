import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- SECCIÓN HERO COMPLETA IDÉNTICA A LA REFERENCIA -->
    <section class="relative bg-[#06140d] text-white min-h-screen flex flex-col justify-between p-6 md:p-10 overflow-hidden font-sans bg-cover bg-center" 
             style="background-image: linear-gradient(to bottom, rgba(6,20,13,0.7), rgba(3,10,6,0.95)), url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920&auto=format&fit=crop');">
      
      <!-- 1. BARRA DE NAVEGACIÓN SUPERIOR (Píldora flotante translúcida) -->
      <header class="relative z-20 max-w-7xl mx-auto w-full bg-[#0a1a12]/60 backdrop-blur-md border border-emerald-900/40 rounded-full px-6 py-3 flex justify-between items-center">
        <!-- Logotipo -->
        <div class="text-emerald-400 font-bold tracking-widest text-sm uppercase">
          solacecare
        </div>

        <!-- Enlaces de navegación centrales con bucle @for -->
        <nav class="hidden md:flex items-center gap-8 text-xs tracking-wider font-medium text-gray-300">
          @for (item of menuItems; track item) {
            <a href="#" class="hover:text-emerald-400 transition">{{ item }}</a>
          }
        </nav>

        <!-- Controles derechos (Carrito + Botón Contact Us) -->
        <div class="hidden md:flex items-center gap-4">
          <button class="bg-black/40 border border-emerald-900/50 hover:border-emerald-500 text-xs px-3 py-1.5 rounded-full flex items-center gap-2 transition">
            <span class="text-gray-400">0</span>
            <span class="text-emerald-400">🛒</span>
          </button>
          <button class="bg-black text-white border border-emerald-500/40 hover:bg-emerald-500 hover:text-black font-semibold text-xs px-5 py-2 rounded-full transition">
            CONTACT US
          </button>
        </div>

        <!-- Botón menú móvil con @if -->
        <button (click)="toggleMenu()" class="md:hidden text-emerald-400 focus:outline-none">
          @if (isMenuOpen) {
            <span>✕</span>
          } @else {
            <span>☰</span>
          }
        </button>
      </header>

      <!-- Menú móvil desplegable condicional -->
      @if (isMenuOpen) {
        <div class="md:hidden relative z-30 bg-[#091e13] border border-emerald-900/60 rounded-3xl p-6 flex flex-col gap-4">
          @for (item of menuItems; track item) {
            <a href="#" class="text-gray-300 hover:text-emerald-400 text-sm font-medium">{{ item }}</a>
          }
          <div class="flex items-center justify-between pt-4 border-t border-emerald-900/50">
            <span class="text-xs text-gray-400">Carrito (0)</span>
            <button class="bg-emerald-500 text-black font-bold text-xs px-5 py-2 rounded-full">
              CONTACT US
            </button>
          </div>
        </div>
      }

      <!-- 2. CONTENIDO CENTRAL (Titular izquierdo + Texto/Botón derecho) -->
      <div class="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 items-center my-auto py-12 gap-8">
        <!-- Título grande a la izquierda -->
        <div class="md:col-span-7">
          <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
            Your next level starts <br>
            <span class="text-emerald-400">with better health.</span>
          </h1>
        </div>

        <!-- Párrafo descriptivo y botón Get Started a la derecha -->
        <div class="md:col-span-5 flex flex-col items-start md:items-end justify-center text-left md:text-right">
          <p class="text-gray-300 text-sm md:text-base max-w-sm mb-6 leading-relaxed">
            Comprehensive telehealth programs for weight loss, longevity, hormone balance, and preventive care.
          </p>
          <button class="bg-emerald-400 hover:bg-emerald-300 text-black font-semibold text-sm px-7 py-3 rounded-full transition shadow-lg shadow-emerald-950/50">
            Get Started
          </button>
        </div>
      </div>

      <!-- 3. ETIQUETAS INFERIORES CON ICONOS (Usando bucle @for) -->
      <div class="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 pt-6 border-t border-emerald-900/30 text-xs text-gray-300">
        @for (category of categories; track category.name) {
          <div class="flex items-center gap-2 hover:text-emerald-400 cursor-pointer transition">
            <span class="text-emerald-400 text-sm">{{ category.icon }}</span>
            <span class="font-medium">{{ category.name }}</span>
          </div>
        }
      </div>

    </section>
  `
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  menuItems = ['HOME', 'ABOUT US', 'WELLNESS+', 'PRODUCT'];

  categories = [
    { name: 'Performance', icon: '⚡' },
    { name: 'Weight-Loss', icon: '⚖️' },
    { name: 'Hormone Health', icon: '🧬' },
    { name: 'Energy Boost', icon: '🔋' },
    { name: 'Fat Burn', icon: '🔥' },
    { name: 'Sexual Health', icon: '✨' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}