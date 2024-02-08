import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthComponent } from '../../../auth/auth.component';
import { UserService } from '../../../../State/User/user.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../Models/AppState';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private userService: UserService,
    private store: Store<AppState>
  ) {}

  isNavbarContentOpen: any;
  currentSection: any;
  userProfile: any;

  ngOnInit() {
    if (localStorage.getItem('jwt')) this.userService.getUserProfile();
    this.store.pipe(select((store) => store.user)).subscribe((user) => {
      this.userProfile = user.userProfile;
      if (user.userProfile) {
        this.dialog.closeAll();
      }
      console.log('user ',user);
      
    });
  }

  // this hadle logout logic
  hadleLogout(){
    this.userService.logout();
  }

  handleOpenLoginModel = () => {
    console.log('handle open login module');
    this.dialog.open(AuthComponent, {
      width: '400px',
      disableClose: false,
    });
  };

  // selectedSection: any;

  navigatTo(path: any) {
    this.router.navigate([path]);
  }
  openNavbarContent(section: any) {
    this.isNavbarContentOpen = true;
    this.currentSection = section;
  }
  closeNavBarContent() {
    this.isNavbarContentOpen = false;
  }
  @HostListener('document:click', [`$event`])
  onDocumentClick() {
    const modelContainer = document.querySelector('.modal-container');
    const openButtons = document.querySelectorAll('.open-button');
    let clickInsideButton = false;

    openButtons.forEach((button: Element) => {
      if (button.contains(event?.target as Node)) {
        clickInsideButton = true;
      }
    });

    if (modelContainer && !clickInsideButton && this.isNavbarContentOpen) {
      this.closeNavBarContent();
    }
  }
}
function button(
  value: Element,
  key: number,
  parent: NodeListOf<Element>
): void {
  throw new Error('Function not implemented.');


  
}
