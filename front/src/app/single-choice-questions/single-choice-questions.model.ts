export class SingleChoiceQuestion {
  id: number;
  tekstPitanja: string;
  slika: string;
  areaId: number;
  odgovor1: string;
  odgovor2: string;
  odgovor3: string;
  odgovor4: string;
  tacanOdgovor: number;
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
    tacanOdgovor: number,
    mode: number
  ) {
    this.id = id;
    this.tekstPitanja = tekstPitanja;
    this.slika = slika;
    this.areaId = areaId;
    this.odgovor1 = odgovor1;
    this.odgovor2 = odgovor2;
    this.odgovor3 = odgovor3;
    this.odgovor4 = odgovor4;
    this.tacanOdgovor = tacanOdgovor;
    this.mode = mode;
  }
}
