import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moviebox',
  templateUrl: './moviebox.component.html',
  styleUrls: ['./moviebox.component.css']
})
export class MovieboxComponent {
  @Input() movie:any;
}
