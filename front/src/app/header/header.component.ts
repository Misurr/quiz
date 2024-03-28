import { Component, OnInit } from '@angular/core';
import { AreaServiceService } from '../area/area-service.service';
import { Area } from '../area/area.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  options : Area[] | undefined;
  
  constructor(  private areaService: AreaServiceService) {
  }
  
  async ngOnInit(): Promise<void> {
    this.options = await this.areaService.getAreas()
  }

}
