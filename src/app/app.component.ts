import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HeroComponent } from "./hero/hero.component";
import { PetsFilterComponent } from "./pets-filter/pets-filter.component";
import { AvailablePetsComponent } from "./available-pets/available-pets.component";
import { type Pet, PETS } from "./pets.model";

@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    PetsFilterComponent,
    AvailablePetsComponent,
  ],
  template: `
    <app-header />
    <main class="grow bg-gray-50">
      <app-hero />
      <section class="w-[1200px] max-w-[95%] mx-auto my-12 flex gap-6">
        <app-pets-filter />
        <app-available-pets class="grow" [pets]="pets" />
      </section>
    </main>
    <app-footer />
  `,
})
export class AppComponent {
  title = "find-my-pet";
  pets: Pet[] = PETS;
}
