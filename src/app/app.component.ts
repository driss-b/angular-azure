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
    this.http.get<any>('https://azure-laravel-demo.azurewebsites.net/api')
      .subscribe(response => {
        console.log(response)
        this.users = response.data.map((item: any, index: any) => {
            item.color = this.colorGenerator();
            return item;
        });
        console.log(response);
      })
  }

  colorGenerator() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgba(${r}, ${g}, ${b}, 0.3)`;
  }
}
