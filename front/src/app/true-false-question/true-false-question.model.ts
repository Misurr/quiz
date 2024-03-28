export class TrueFalseQuestion {
  id: number;
  question: string;
  image: string;
  area_id: number;
  correctAnswer: number;
  mode: number;

  constructor(
    id: number,
    question: string,
    image: string,
    area_id: number,
    correctAnswer: number,
    mode: number
  ) {
    this.id = id;
    this.question = question;
    this.image = image;
    this.area_id = area_id;
    this.correctAnswer = correctAnswer;
    this.mode = mode;
  }
}
