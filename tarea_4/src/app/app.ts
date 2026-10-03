import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { ProductsGridComponent } from './components/products-grid/products-grid';
import { MetricsSectionComponent } from './components/metrics-section/metrics-section';
import { ProgramsSectionComponent} from './components/programs-section/programs-section';
import { ApproachSectionComponent } from './components/approach-section/approach-section';
import { FooterComponent } from './components/footer/footer';

@Component({
  imports: [RouterOutlet, HeaderComponent, ProductsGridComponent, MetricsSectionComponent,
    ProgramsSectionComponent, ApproachSectionComponent, FooterComponent
  ],
  selector: 'app-root',
  styles: [],
  template: `
    <app-header></app-header>
    <app-products-grid></app-products-grid>
    <app-metrics-section></app-metrics-section>
    <app-programs-section></app-programs-section>
    <app-approach-section></app-approach-section>
    <app-footer></app-footer>

    <router-outlet />
  `,
})
export class App {
  protected readonly title = signal('tarea_4');
}
