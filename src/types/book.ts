export interface iBook {
  id: string;

  cover?: string;
  colour?: string;
  title: string;
  subtitle?: string;
  description?: string;
  authors: string[];
  pages?: number;
  averageRating?: number;

  startedAt?: Date;
  finishedAt?: Date;
  progress?: number;
  rating?: number;
}
