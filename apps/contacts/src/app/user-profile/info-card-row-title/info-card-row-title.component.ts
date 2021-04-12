import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'union-starter-info-card-row-title',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
  styles: [],
})
export class InfoCardRowTitleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
