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
  public loginInvalid = false;
  private formSubmitAttempt = false;
  private isLoggedIn = false;
  private returnUrl: string;
  private users: User[] = data;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  async ngOnInit(): Promise<void> {}

  async onSubmit(): Promise<void> {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
      try {
        const username = this.form.get('username')?.value;
        const password = this.form.get('password')?.value;
        this.users.forEach((user) => {
          if (user.username === username && user.password === password) {
            console.log("yay!");
            this.loginInvalid = false;
            this.router.navigate(['search']);
          }
        });
      } catch (err) {
        this.loginInvalid = true;
      }

    console.log(this.loginInvalid);
  }
}
