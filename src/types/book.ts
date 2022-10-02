interface iBook {
  id: string;

  cover?: string;
  title: string;
  author: string;
  pages?: number;

  startedAt?: Date;
  finishedAt?: Date;
  progress?: number;
  rating?: number;
}
