export interface IBlog {
  id: string;

  data: {
    title?: string;
    slug?: string;
    date?: string;
    img?: string;
    category?: string;
    key?: string;
    description_short?: string;
  };
  content: string;
}
