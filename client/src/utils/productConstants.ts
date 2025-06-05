import {
  productHeroImages,
  productHighlightImages,
  productDetailImages,
  productAIImages,
  productModels,
  productVisualImages,
} from "./productIndex";

export const productDetails = [
  {
    id: 1,
    title: "iPhone 16",
    isBlack: false,
    hero: productHeroImages.ip16,
    highlights: productHighlightImages.ip16,
    details: productDetailImages.ip16,
    list: productModels.ip16,
    ai: productAIImages.ip16,
    visual: productVisualImages.ip16,
    colors: ["Ultramarine", "Teal", "Pink", "White", "Black"],
  },
  {
    id: 2,
    title: "iPhone 16e",
    isBlack: false,
    hero: productHeroImages.ip16e,
    highlights: productHighlightImages.ip16e,
    details: productDetailImages.ip16e,
    ai: productAIImages.ip16e,
    visual: productVisualImages.ip16e,
    colors: ["White"]
  },
  {
    id: 3,
    title: "iPhone 16 Pro",
    isBlack: true,
    hero: productHeroImages.ip16Pro,
    highlights: productHighlightImages.ip16Pro,
    details: productDetailImages.ip16Pro,
    list: productModels.ip16Pro,
    ai: productAIImages.ip16Pro,
    visual: productVisualImages.ip16Pro,
    colors: ["Black Titanium", "White Titanium", "Natural Titanium", "Desert Titanium"]
  },
];

export const productOptions = {
  names: productDetails.map((product) => product.title),
  storages: ["128GB", "256GB", "512GB", "1TB"],
  getColorsByName: (name: string) => {
    const product = productDetails.find((p) => p.title === name);
    return product ? product.colors : [];
  }
};
