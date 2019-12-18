import { Component, OnInit,Input ,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

 @Input() sureshAppParent: string;

 @Output() santhosh = new EventEmitter();

  // receivedChildMessage: string;

  // messageToSendP: string = 'yasher';

  constructor() { }

  ngOnInit() {
    this.santhosh.emit('test santhosh');
  }



  // sendToChild(message: string) {
  //   this.messageToSendP = message;
  // }



  // getMessage(message: string) {
  //   this.receivedChildMessage = message;
  // }



}
