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
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HeroComponent, PetsFilterComponent, AvailablePetsComponent],
  templateUrl: "./app.component.html"
})
export class AppComponent {
  title = "find-my-pet";
  pets: Pet[] = PETS;
}
