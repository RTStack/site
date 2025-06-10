export type Service = {
  id?: number;
  name?: string;
  title?: string;
  description?: string;
  slug?: string;
  url?: string;
  newTab?: boolean;
  img?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  icon?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};
