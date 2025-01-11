import { Component, Input } from "@angular/core";
import { NgFor } from "@angular/common";
import { CardAvailablePetComponent } from "../card-available-pet/card-available-pet.component";
@Component({
  selector: "app-available-pets",
  imports: [CardAvailablePetComponent, NgFor],
  template: `
    <section class="space-y-3">
      <h3 class="font-bold text-xl mb-3">Available pets nearby</h3>
      <div class="grid lg:grid-cols-2 gap-3 w-full">
        <app-card-available-pet
          *ngFor="let pet of pets"
          name="{{ pet.name }}"
          image="{{ pet.image }}"
          description="{{ pet.description }}"
          type="{{ pet.type }}"
          location="{{ pet.location }}"
        ></app-card-available-pet>
      </div>
    </section>
  `,
  styles: ``
})
export class AvailablePetsComponent {
  @Input() pets: any[] = [];
}
