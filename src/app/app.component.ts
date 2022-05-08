import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paese:string = "";
  film:string[] = [];
  src:string = "";

  constructor(private http:HttpClient){}

  mostra() {
    this.src = "";
    this.http.get("https://mcuapi.herokuapp.com/api/v1/movies").subscribe(
      (res:any) => {
        var movies = res['data'];
        [...movies].forEach(x => {
          this.film.push(x['title']);
        });
      },
      err => {
        console.log(err);
      }
    )
  }

  nonMostra() {
    this.film = [];
    this.src = "../assets/addio.jpg";
  }
}
