import { Component, OnChanges, Input,
Output, EventEmitter } from '@angular/core';

import { LoggerService } from '../core/logger.service';

@Component({
  selector: 'sm-shared-rating',
  moduleId: module.id,
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnChanges {
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> =
  new EventEmitter<string>();
  ratingWidth: number;

  constructor(private loggerService: LoggerService) { }

  ngOnChanges(): void {
    this.ratingWidth = this.rating * 86 / 5;
  }

  onClick(): void {
    this.loggerService.log('Rating clicked [' + this.rating + ']');
    this.ratingClicked.emit(`User rating is up to [${this.rating}]`); 
  }
}
