import { Component, OnChanges, Input,
Output, EventEmitter } from '@angular/core';

import { LoggerService } from '../core/logger.service';

@Component({
  selector: 'ai-star',
  moduleId: module.id,
  templateUrl: 'star.component.html',
  styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> =
  new EventEmitter<string>();
  starWidth: number;

  constructor(private loggerService: LoggerService) {
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
  }

  onClick(): void {
    this.loggerService.log('Star clicked [' + this.rating + ']');
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
