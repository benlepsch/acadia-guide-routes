import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pic-modal',
  templateUrl: './pic-modal.component.html',
  styleUrl: './pic-modal.component.less'
})
export class PicModalComponent {
  @Input() name!: string;
  @Input() base_url!: string;
  @Input() pics!: string;
  @Input() ptext!: string;

  constructor() {} 
  
  displayStyle = "none"; 
  
  openPopup() { 
    this.displayStyle = "block"; 
  } 
  closePopup() { 
    this.displayStyle = "none"; 
  } 
}
