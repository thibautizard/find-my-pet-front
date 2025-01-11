import { Component, EventEmitter, Output } from "@angular/core";
import { IconMagnifyingGlass } from "./magnifying-glass.component";
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";

@Component({
  selector: "app-search-bar",
  imports: [IconMagnifyingGlass, ReactiveFormsModule],
  template: ` <form
    class="flex gap-3 mt-6"
    [formGroup]="searchForm"
    (ngSubmit)="onSubmit()"
  >
    <input
      type="text"
      name="search"
      formControlName="location"
      class="rounded-md w-72 px-4 text-sm border"
      placeholder="Enter your location to find pets nearby"
      id="search"
    />
    <button
      type="submit"
      class="rounded-md flex gap-2 items-center text-sm bg-red-600 px-4 py-2 text-white"
    >
      <icon-magnifying-glass />
      <span> Search </span>
    </button>
  </form>`,
})
export class SearchBarComponent {
  @Output() searchPetsEvent = new EventEmitter<string>();

  searchPets(location: string) {
    this.searchPetsEvent.emit(location);
  }

  protected readonly searchForm = new FormGroup({
    location: new FormControl("", Validators.required),
  });

  onSubmit() {
    if (this.searchForm.valid) {
      const location = this.searchForm.get("location")?.value;
      if (location) this.searchPets(location);
    }
  }
}
