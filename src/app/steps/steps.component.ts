import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent  implements OnInit {
  @Input() picSrc: string = 'Default Title'; // the src of the picture
  @Input() title: string = '';       // Main Tiltle
  @Input() description: string = '';       // Description of the step
  constructor() { }

  ngOnInit() {}

}
