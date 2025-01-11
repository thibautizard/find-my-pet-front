export interface Contact {
  phone: string;
  email: string;
}

export interface Pet {
  id: string;
  name: string;
  type: string;
  breed: string;
  age: number;
  image: string;
  location: string;
  description: string;
  contact: Contact;
}

export const PETS: Pet[] = [
  {
    id: "1",
    name: "Max",
    type: "dog",
    breed: "Golden Retriever",
    age: 2,
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80",
    location: "Seattle, WA",
    description:
      "Friendly and energetic Golden Retriever looking for an active family.",
    contact: {
      phone: "(555) 123-4567",
      email: "shelter@example.com",
    },
  },
  {
    id: "2",
    name: "Luna",
    type: "cat",
    breed: "Siamese",
    age: 1,
    image:
      "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&q=80",
    location: "Portland, OR",
    description: "Sweet and gentle Siamese cat who loves to cuddle.",
    contact: {
      phone: "(555) 234-5678",
      email: "rescue@example.com",
    },
  },
  {
    id: "3",
    name: "Rocky",
    type: "dog",
    breed: "German Shepherd",
    age: 3,
    image:
      "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&q=80",
    location: "Vancouver, BC",
    description: "Intelligent and loyal German Shepherd, great with kids.",
    contact: {
      phone: "(555) 345-6789",
      email: "shelter@example.com",
    },
  },
  {
    id: "4",
    name: "Bella",
    type: "cat",
    breed: "Siamese",
    age: 2,
    image:
      "https://assets.elanco.com/8e0bf1c2-1ae4-001f-9257-f2be3c683fb1/fca42f04-2474-4302-a238-990c8aebfe8c/Siamese_cat_1110x740.jpg?w=3840&q=75&auto=format",
    location: "Toronto, ON",
    description: "Playful and affectionate Siamese cat, loves to cuddle.",
    contact: {
      phone: "(555) 987-6543",
      email: "adoption@example.com",
    },
  },
  {
    id: "5",
    name: "Diego",
    type: "dog",
    breed: "Labrador Retriever",
    age: 4,
    image:
      "https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1670938235.1927571/fun-facts-about-labrador-retrievers.jpg",
    location: "Calgary, AB",
    description: "Friendly and energetic Labrador, loves to play fetch.",
    contact: {
      phone: "(555) 123-4567",
      email: "info@shelter.org",
    },
  },
  {
    id: "6",
    name: "Panther",
    type: "cat",
    breed: "Maine Coon",
    age: 5,
    image:
      "https://www.catsbest.fr/wp-content/uploads//maine-coon-portrait-1024x768.jpg",
    location: "Montreal, QC",
    description: "Gentle giant, very affectionate and good with children.",
    contact: {
      phone: "(555) 234-5678",
      email: "contact@petrescue.com",
    },
  },
  {
    id: "7",
    name: "Charlie",
    type: "dog",
    breed: "Beagle",
    age: 2,
    image:
      "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fanimaux.2Fchiens-et-chats-de-race.2Fchiens-de-race.2Fle-beagle-00351.2F10309137-3-fre-FR.2Fle-beagle-doux-et-polyvalent.2Ejpg/970x545/quality/80/crop-from/center/le-beagle-un-chien-doux-et-polyvalent.jpeg",
    location: "Victoria, BC",
    description:
      "Curious and friendly Beagle, loves to explore and sniff around.",
    contact: {
      phone: "(555) 678-9012",
      email: "adopt@animalcare.org",
    },
  },
] as const;
