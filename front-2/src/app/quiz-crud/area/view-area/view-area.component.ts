import { Component } from '@angular/core';

@Component({
  selector: 'app-view-area',
  templateUrl: './view-area.component.html',
  styleUrls: ['./view-area.component.css'],
})
export class ViewAreaComponent {
  showTooltipFlag: boolean = false;
  
  showTooltip() {
    this.showTooltipFlag = true;
  }

  hideTooltip() {
    this.showTooltipFlag = false;
  }
}
