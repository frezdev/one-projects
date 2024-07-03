export interface Photo {
  title: string;
  source: string;
  path: string;
  id: string;
  tagId: number;
}

export interface PopularPhoto {
  path: string;
  alt: string;
  id: number;
}

export interface Tag {
  id: number;
  title: string,
  tag: number;
}