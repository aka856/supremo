import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-one',
  templateUrl: './input-one.component.html',
  styleUrls: ['./input-one.component.css']
})
export class InputOneComponent implements OnInit {
  @Input() PData: number;
  @Output() childEvent = new EventEmitter();
  constructor() { }
  onChange(value) {
    this.childEvent.emit(value);
  }
  ngOnInit()
  {
    
  }

}
