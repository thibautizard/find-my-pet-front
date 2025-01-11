import { Component } from "@angular/core";

@Component({
  selector: "app-pets-filter",
  imports: [],
  template: `
    <div class="p-4 rounded-md shadow space-y-4 w-72 bg-white text-slate-800">
      <h3 class="font-bold">Filters</h3>

      <div class="flex flex-col gap-2">
        <label class="text-sm" for="petType"> Pet Type</label>
        <select
          name="petType"
          class="px-2 border rounded-md text-sm py-1"
          id="petType"
        >
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="rabbit">Rabbit</option>
          <option value="bird">Bird</option>
          <option value="reptile">Reptile</option>
        </select>
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm" for="location">Location</label>
        <input
          class="border px-2 text-sm py-1 rounded-md"
          type="text"
          name="location"
          id="location"
          placeholder="Enter your location"
        />
      </div>

      <button
        type="text"
        class="bg-red-600 w-full text-sm py-2 rounded-md text-white text-center"
      >
        Apply filters
      </button>
    </div>
  `,
  styles: ``,
})
export class PetsFilterComponent {}
