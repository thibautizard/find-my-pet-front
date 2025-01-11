import { Component, EventEmitter, Output } from "@angular/core";
import { SearchBarComponent } from "./search-bar/search-bar.component";

@Component({
  selector: "app-hero",
  imports: [SearchBarComponent],
  template: `
    <section class="bg-red-50 w-full  flex flex-col items-center py-16">
      <h2 class="text-4xl center font-bold mb-3">
        Find Your Perfect Pet Companion
      </h2>
      <p
        class="text-pretty text-sm  text-slate-700 w-[50ch] text-center leading-tight"
      >
        Connect with local shelters and find pets looking for their forever
        homes. Your new best friend is just a search away.
      </p>
      <app-search-bar (searchPetsEvent)="handleEvent($event)" />
    </section>
  `,
  styles: ``,
})
export class HeroComponent {
  @Output() searchPetsEvent = new EventEmitter<string>();
  handleEvent(location: string) {
    if (location) this.searchPetsEvent.emit(location);
  }
}
