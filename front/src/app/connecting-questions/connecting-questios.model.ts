export class ConnectingQuestions {
  id: number;
  area_id: number;
  question: string;
  clipLeft1: string;
  clipLeft2: string;
  clipLeft3: string;
  clipLeft4: string;
  clipLeft5: string;
  clipRight1: string;
  clipRight2: string;
  clipRight3: string;
  clipRight4: string;
  clipRight5: string;
  mode: number;

  constructor(
    id: number,
    area_id: number,
    question: string,
    clipLeft1: string,
    clipLeft2: string,
    clipLeft3: string,
    clipLeft4: string,
    clipLeft5: string,
    clipRight1: string,
    clipRight2: string,
    clipRight3: string,
    clipRight4: string,
    clipRight5: string,
    mode: number
  ) {
    this.id = id;
    this.area_id = area_id;
    this.question = question;
    this.clipLeft1 = clipLeft1;
    this.clipLeft2 = clipLeft2;
    this.clipLeft3 = clipLeft3;
    this.clipLeft4 = clipLeft4;
    this.clipLeft5 = clipLeft5;
    this.clipRight1 = clipRight1;
    this.clipRight2 = clipRight2;
    this.clipRight3 = clipRight3;
    this.clipRight4 = clipRight4;
    this.clipRight5 = clipRight5;
    this.mode = mode;
  }
}
