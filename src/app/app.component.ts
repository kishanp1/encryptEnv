import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'encryptEnv';
  encrypted = '';
  constructor(private http:HttpClient) {
    }
  encryptPassword(form: NgForm) {
   console.log("YEEES");
   console.log(form.value.password);
   console.log(form.value.env);
   let header = new HttpHeaders();
   let body = new HttpParams();
   body = body.append("password",form.value.password);
   body = body.append("environment",form.value.env);
   console.log(body);

   this.http.get('https://api.github.com/users/gunjank').subscribe(response => console.log(response));
   this.encrypted='done';
 }
 onSubmit(f: NgForm) {
}
}
