import { Component, Input } from "@angular/core";
import { NgStyle } from "@angular/common";

@Component({
  selector: "app-card-available-pet",
  imports: [NgStyle],
  templateUrl: "./card-available-pet.component.html",
  styles: ``
})
export class CardAvailablePetComponent {
  @Input() name: string = "Name";
  @Input() description: string = "";
  @Input() location: string = "";
  @Input() type: string = "";
  @Input() image: string = "";
}
