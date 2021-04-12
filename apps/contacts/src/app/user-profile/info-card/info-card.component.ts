import { Component, Input } from '@angular/core';

@Component({
  selector: 'union-starter-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent {
  @Input() title: string;

  constructor() {}
}
