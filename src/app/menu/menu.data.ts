// app/menu/menu.data.ts

export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    id: "brunch",
    title: "Brunch salé & sucré",
    items: [
      {
        name: "Popette Rolls",
        description:
          "Pain brioché, crevettes, avocat, pickles d’oignons, mangue, sauce blanche aux agrumes",
        price: "19,99",
      },
      {
        name: "Avocado Toast",
        description:
          "Pain de campagne, écrasé d’avocat, œuf poché, citron vert",
        price: "8,50",
      },
    ],
  },
  {
    id: "boissons",
    title: "Boissons maison",
    items: [
      {
        name: "Jus pressé maison",
        description: "Orange, citron, gingembre — 100% fraîcheur",
        price: "4,50",
      },
      {
        name: "Latte noisette",
        description: "Lait mousseux, café doux, sirop de noisette",
        price: "3,90",
      },
    ],
  },
];
