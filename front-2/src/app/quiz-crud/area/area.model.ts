export class Area {
  id: number;
  title: string;
  caption: string;
  active: boolean;
  image: string;

  constructor(
    id: number,
    title: string,
    caption: string,
    active: boolean,
    image: string
  ) {
    this.id = id;
    this.title = title;
    this.caption = caption;
    this.active = active;
    this.image = image;
  }
}
