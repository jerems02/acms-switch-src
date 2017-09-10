import {Component, Input, Output, EventEmitter, ViewChild, OnInit, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'acms-switch',
  templateUrl: './acms-switch.component.html',
  styleUrls: ['./acms-switch.component.css']
})
export class AcmsSwitchComponent implements OnChanges{


  @Input() state: boolean = false;
  @Input() id;
  @Output() switchEvent: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('acmsSwitch') acmsSwitch;

  ngOnChanges(changes: SimpleChanges): void {
    this.acmsSwitch.nativeElement.checked = this.state;
  }

  constructor() { }

  change(evt) {
    this.switchEvent.emit({id: this.id, state: evt.target.checked});
  }

}
