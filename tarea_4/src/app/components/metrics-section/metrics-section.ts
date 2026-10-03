import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-metrics-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- SECCIÓN DE MÉTRICAS IDÉNTICA A LA REFERENCIA -->
    <section class="bg-white text-gray-950 py-24 px-6 md:px-12 border-t border-gray-100 font-sans">
      <div class="max-w-7xl mx-auto">
        
        <!-- TÍTULO PRINCIPAL -->
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight">
            Built for measurable <br>
            <span class="text-gray-400 font-normal">progress</span>
          </h2>
        </div>

        <!-- CONTENEDOR DE LAS 3 COLUMNAS CON LÍNEAS DIVISORIAS -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 items-center">
          
          <!-- COLUMNA 1: 92% -->
          <div class="flex flex-col items-center md:items-start text-center md:text-left md:px-10">
            <span class="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">92%</span>
            <p class="text-gray-600 text-sm md:text-base max-w-xs leading-relaxed">
              of members report feeling more in control of their health.
            </p>
          </div>

          <!-- COLUMNA 2: 4.8/5 (Con divisores laterales en desktop) -->
          <div class="flex flex-col items-center md:items-start text-center md:text-left md:px-10 md:border-x md:border-gray-200">
            <span class="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">4.8/5</span>
            <p class="text-gray-600 text-sm md:text-base max-w-xs leading-relaxed">
              average member satisfaction rating across care programs.
            </p>
          </div>

          <!-- COLUMNA 3: 87% -->
          <div class="flex flex-col items-center md:items-start text-center md:text-left md:px-10">
            <span class="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">87%</span>
            <p class="text-gray-600 text-sm md:text-base max-w-xs leading-relaxed">
              of members stay engaged with their personalized health plans.
            </p>
          </div>

        </div>

        <!-- TEXTO INFERIOR DE PIE DE SECCIÓN -->
        <div class="mt-20 text-center">
          <p class="text-xs md:text-sm text-gray-400 tracking-wide">
            Thousands of members are taking a more proactive approach to their health through personalized care.
          </p>
        </div>

      </div>
    </section>
  `
})
export class MetricsSectionComponent {}