import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-review-box',
  templateUrl: './review-box.component.html',
  styleUrls: ['./review-box.component.css']
})
export class ReviewBoxComponent {
  @Input() review:any;
}
