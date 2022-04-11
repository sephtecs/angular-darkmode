import { Component } from '@angular/core';
import { LoginInfo } from './models/LoginInfo';
import { LoginService } from './services/login.service';
import { DarkModeService } from "angular-dark-mode";
import { Observable } from "rxjs";
import { User } from './models/User';
import { NewPostService } from './services/new-post.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RevSpaceWebApp';
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  constructor(private loginService: LoginService, private darkModeService: DarkModeService) { }
  isLoggedIn() {
    return (this.loginService.getLoginInfo() != null);
  }
  getUserName(): string {
    let user = this.loginService.getLoginInfo().user;
    return user.firstName + " " + user.lastName;
  }
  getUserId() {
    let user = this.loginService.getLoginInfo().user;
    return user.userId;
  }

  onToggle(): void {
    this.darkModeService.toggle();
  }
}

