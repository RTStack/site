export type Menu = {
  id: number;
  name: string | null;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
};
