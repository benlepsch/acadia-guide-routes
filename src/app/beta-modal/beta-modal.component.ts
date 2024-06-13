import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-beta-modal',
  templateUrl: './beta-modal.component.html',
  styleUrl: './beta-modal.component.less'
})
export class BetaModalComponent {
  @Input() beta!:string;
  @Input() name!:string;

  constructor() {} 
  
  displayStyle = "none"; 
  
  openPopup() { 
    this.displayStyle = "block"; 
  } 
  closePopup() { 
    this.displayStyle = "none"; 
  } 
}
