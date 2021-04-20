import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import data from '@utils/users.json';
import { User } from '@utils/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  private formSubmitAttempt = false;
  private isLoggedIn = false;
  private returnUrl: string;
  private users: User[] = data;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.formSubmitAttempt = false;
      try {
        const username = this.form.get('username')?.value;
        const password = this.form.get('password')?.value;
        this.users.forEach((user) => {
          if (user.username === username && user.password === password) {
            this.isLoggedIn = true;
            this.router.navigate(['search']);
          }
        });
      } catch (err) {
        this.isLoggedIn = false;
      }
  }
}
