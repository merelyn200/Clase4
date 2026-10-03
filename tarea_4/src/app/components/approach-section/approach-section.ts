import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-approach-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- SECCIÓN THE APPROACH CON FONDO BLANCO -->
    <section class="bg-white text-gray-950 py-24 px-6 md:px-12 font-sans">
      <div class="max-w-7xl mx-auto">
        
        <!-- ENCABEZADO DE LA SECCIÓN -->
        <div class="text-center mb-16">
          <span class="text-xs uppercase tracking-widest text-emerald-600 font-semibold bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            [ THE APPROACH ]
          </span>
          <h2 class="text-4xl md:text-5xl font-bold tracking-tight mt-4 text-gray-900">
            Better health starts with <br>
            <span class="text-gray-400 font-normal">better information</span>
          </h2>
        </div>

        <!-- CUADRÍCULA DE 3 TARJETAS -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          @for (card of approachCards; track card.title) {
            <div class="flex flex-col">
              <!-- Imagen de la tarjeta con esquinas redondeadas -->
              <div class="rounded-3xl overflow-hidden h-80 mb-6 bg-gray-100 bg-cover bg-center shadow-md border border-gray-100"
                   [style.backgroundImage]="'url(' + card.image + ')'">
              </div>

              <!-- Título y descripción -->
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                {{ card.title }}
              </h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                {{ card.description }}
              </p>
            </div>
          }

        </div>

      </div>
    </section>
  `
})
export class ApproachSectionComponent {
  approachCards = [
    {
      title: 'Discover',
      description: 'Gain deeper insights into your health through advanced assessments and expert analysis.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Action',
      description: 'Follow a personalized care plan built around your unique needs and objectives.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: 'Improve',
      description: 'Track progress over time and continuously refine your path toward better health.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop'
    }
  ];
}