import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  users: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('http://localhost:8000/api')
      .subscribe(response => {
        this.users = response.data
        console.log(response);
      })
  }
}
