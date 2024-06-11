import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.less'
})
export class ModalComponent {
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
