import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'acms-switch',
  templateUrl: './acms-switch.component.html',
  styleUrls: ['./acms-switch.component.css']
})
export class AcmsSwitchComponent {

  @Input() id;
  @Output() switchEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  change(evt) {
    this.switchEvent.emit({id: this.id, state: evt.target.checked});
  }

}
