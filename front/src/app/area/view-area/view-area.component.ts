import { Component, OnInit } from '@angular/core';
import { Area } from '../area.model';
import { Router } from '@angular/router';
import { AreaServiceService } from '../area-service.service';

@Component({
  selector: 'app-view-area',
  templateUrl: './view-area.component.html',
  styleUrls: ['./view-area.component.css'],
})
export class ViewAreaComponent implements OnInit {
  areaArray: Array<Area> = [];

  constructor(
    private router: Router,
    private areaService: AreaServiceService
  ) {}

  async ngOnInit() {
    // Kada budete imali završene endpointe ovdje pozivate metodu iz vašeg servisa za dohvatanje svih oblasti, getArea()
    this.areaArray = await this.areaService.getAreas();
  }

  deleteArea(id: number): void {
    // Implementirajte logiku brisanja oblasti
    this.areaArray = this.areaArray.filter((area) => area.id !== id);
  }

  imagePath: string = 'assets/redesign.png';
}
