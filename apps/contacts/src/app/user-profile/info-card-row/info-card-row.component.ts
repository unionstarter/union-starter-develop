import { Component, ContentChildren, Input, OnInit } from '@angular/core';

@Component({
  selector: 'union-starter-info-card-row',
  template: `
    <div class="row">
      <div class="title">
        <ng-content select="union-starter-info-card-row-title"></ng-content>
      </div>
      <div class="content">
        <ng-content></ng-content>
      </div>
      <div class="action" *ngIf="action" (click)="action()">
        <mat-icon aria-hidden="false" aria-label="Left Carrot" class="icon">
          arrow_forward_ios
        </mat-icon>
      </div>
    </div>
  `,
  styleUrls: ['./user-profile-row.component.scss'],
})
export class InfoCardRowComponent implements OnInit {
  @Input() action: () => void;
  constructor() {}

  ngOnInit(): void {}
}
