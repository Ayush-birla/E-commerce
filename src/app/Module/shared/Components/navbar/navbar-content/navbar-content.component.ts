import { Component, Input } from '@angular/core';
import { navigation } from './navbat-content';
import { log } from 'node:console';

@Component({
  selector: 'app-navbar-content',
  templateUrl: './navbar-content.component.html',
  styleUrl: './navbar-content.component.scss'
})
export class NavbarContentComponent {
@Input()selectedSection: any;
category: any;
currentSection:any;

ngOnInit(){
  this.category=navigation;
  console.log("Selected section :"+this.selectedSection);
  
  // console.log(this.category.item.items.name);
  console.log(this.category);
  
}


}
