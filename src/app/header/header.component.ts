import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  imports: [],
  template: `
    <header class="bg-red-600 text-white flex justify-between items-center px-12 py-4">
      <h1 class="text-xl flex items-center gap-2">
        <svg
          class="rotate-45"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M8.35 3c1.18-.17 2.43 1.12 2.79 2.9c.36 1.77-.29 3.35-1.47 3.53c-1.17.18-2.43-1.11-2.8-2.89c-.37-1.77.3-3.35 1.48-3.54m7.15 0c1.19.19 1.85 1.77 1.5 3.54c-.38 1.78-1.63 3.07-2.81 2.89c-1.19-.18-1.84-1.76-1.47-3.53c.36-1.78 1.61-3.07 2.78-2.9M3 7.6c1.14-.49 2.69.4 3.5 1.95c.76 1.58.5 3.24-.63 3.73s-2.67-.39-3.46-1.96S1.9 8.08 3 7.6m18 0c1.1.48 1.38 2.15.59 3.72s-2.33 2.45-3.46 1.96s-1.39-2.15-.63-3.73C18.31 8 19.86 7.11 21 7.6m-1.67 10.78c.04.94-.68 1.98-1.54 2.37c-1.79.82-3.91-.88-5.9-.88s-4.13 1.77-5.89.88c-1-.49-1.69-1.79-1.56-2.87c.18-1.49 1.97-2.29 3.03-3.38c1.41-1.41 2.41-4.06 4.42-4.06c2 0 3.06 2.61 4.41 4.06c1.11 1.22 2.96 2.25 3.03 3.88"
          />
        </svg>
        <span class="font-bold"> Find My Pet </span>
      </h1>
      <ul class="flex gap-4 text-sm">
        <li><a href="/">Home</a></li>
        <li><a href="">Search</a></li>
        <li><a href="">Shelters</a></li>
        <li><a href="">About</a></li>
      </ul>
    </header>
  `
})
export class HeaderComponent {}
