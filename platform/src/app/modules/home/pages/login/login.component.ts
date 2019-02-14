import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  password: string;
  url: string;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    localStorage.clear();
  }

  onClickLogin(): void {
    this.authService.login(this.password, 'peter@klaven').subscribe(response => {
      this.router.navigateByUrl('/corrections');
    }, err => console.log("Error: ", err));
  }

}
