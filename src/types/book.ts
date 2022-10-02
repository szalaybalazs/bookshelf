export interface iBook {
  id: string;
  url?: string;

  source?: string;

  cover?: string;
  colour?: string;
  title: string;
  subtitle?: string;
  description?: string;
  authors: string[];
  pages?: number;
  averageRating?: number;

  addedAt?: Date;
  startedAt?: Date;
  finishedAt?: Date;
  progress?: number;
  rating?: number;
}

export interface iShelf {
  books: iBook[];
}
