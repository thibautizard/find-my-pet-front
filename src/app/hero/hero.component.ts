import { Component } from "@angular/core";

@Component({
  selector: "app-hero",
  imports: [],
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
      <div class="flex gap-3 mt-6">
        <input
          type="text"
          name="search"
          class="rounded-md w-72 px-4 text-sm border"
          placeholder="Enter your location to find pets nearby"
          id="search"
        />
        <button
          type="button"
          class="rounded-md flex gap-2 items-center text-sm bg-red-600 px-4 py-2 text-white"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"
            />
          </svg>
          <span> Search </span>
        </button>
      </div>
    </section>
  `,
  styles: ``,
})
export class HeroComponent {}
