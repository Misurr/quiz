export class MultipleChoiceQuestion {
  id: number;
  tekstPitanja: string;
  slika: string;
  areaId: number;
  odgovor1: string;
  odgovor2: string;
  odgovor3: string;
  odgovor4: string;
  odgovor5: string;
  odgovor6: string;
  tacanOdgovor: number[];
  mode: number;

  constructor(
    id: number,
    tekstPitanja: string,
    slika: string,
    areaId: number,
    odgovor1: string,
    odgovor2: string,
    odgovor3: string,
    odgovor4: string,
    odgovor5: string,
    odgovor6: string,
    tacanOdgovor: number[],
    mode: number,
  ) {
    this.id = id;
    this.tekstPitanja = tekstPitanja;
    this.slika = slika;
    this.areaId = areaId;
    this.odgovor1 = odgovor1;
    this.odgovor2 = odgovor2;
    this.odgovor3 = odgovor3;
    this.odgovor4 = odgovor4;
    this.odgovor5 = odgovor5;
    this.odgovor6 = odgovor6;
    this.tacanOdgovor = tacanOdgovor;
    this.mode = mode;
  }
}
