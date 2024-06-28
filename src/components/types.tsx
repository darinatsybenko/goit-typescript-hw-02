export interface Images {
  id: string;
  src: string;
  alt_description: string;
  description: string;
  likes: number;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
}
