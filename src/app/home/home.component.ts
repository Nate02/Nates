import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public form: FormGroup;
  public valid;
  constructor(public fb: FormBuilder, public http: HttpClient, public router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.compose([Validators.email, Validators.required])],
    })
  }
  onSubmit() {
    this.valid = null;
    if (this.form.valid) {
      console.log("Form Submitted!");
      this.http.post('http://localhost:3000/beef', this.form.value).subscribe((result: any) => {
        this.form.reset();
        this.valid = true;
      }),
        (err) => {
          console.log(err)
        };
    }else{
      console.log('not valid')
      this.valid = false;
    }
  }
}
