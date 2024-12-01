import { Component, Input } from "@angular/core";
import { NgFor } from "@angular/common";
import { CardAvailablePetComponent } from "../card-available-pet/card-available-pet.component";
@Component({
  selector: "app-available-pets",
  imports: [CardAvailablePetComponent, NgFor],
  templateUrl: "./available-pets.component.html",
  styles: ``
})
export class AvailablePetsComponent {
  @Input() pets: any[] = [];
}
