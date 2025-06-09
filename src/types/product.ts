import { Category } from "./category";
export type Product = {
  id: number;
  categoryId?: Category["id"];
  slug: string;
  title: string;
  promo?: string;
  promoDesc?: string;
  name?: string;
  desc?: string;
  description?: string;
  information?: string;
  spec?: string;
  specifications?: Record<string, string>;
  reviews?: number;
  rating?: number;
  price?: number;
  discountedPrice?: number;
  discountText?: string;
  featured?: boolean;
  popular?: boolean;
  bestSeller?: boolean;
  priority?: number;
  url?: {
    url: string;
    title?: string;
    newTab?: boolean;
  };
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
  freeDelivery?: boolean;
  freeDeliveryDesc?: string;
  rentDuration?: {
    daily?: boolean;
    weekly?: boolean;
    monthly?: boolean;
    yearly?: boolean;
    all?: boolean;
    custom?: string;
  };
  client?: {
    company?: boolean;
    startup?: boolean;
    event_organizer?: boolean;
    government?: boolean;
    school?: boolean;
    professional?: boolean;
    individual?: boolean;
  };
};