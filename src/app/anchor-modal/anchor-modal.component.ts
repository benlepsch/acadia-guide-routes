import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-anchor-modal',
  templateUrl: './anchor-modal.component.html',
  styleUrl: './anchor-modal.component.less'
})
export class AnchorModalComponent {
  @Input() name!: string;
  @Input() base_url!: string;
  @Input() pics!: Array<string>;

  constructor() {} 
  
  displayStyle = "none"; 
  
  openPopup() { 
    this.displayStyle = "block"; 
  } 
  closePopup() { 
    this.displayStyle = "none"; 
  } 
}
