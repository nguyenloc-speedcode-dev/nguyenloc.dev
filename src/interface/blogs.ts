export interface IBlog {
  id: string;

  data: {
    title?: string;
    slug?: string;
    date?: string;
  };
  content: string;
}
