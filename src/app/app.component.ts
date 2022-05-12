import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  film:string[] = [];
  src:string = "";

  constructor(private http:HttpClient){} //creiamo oggetto di tipo HttpClient x rich li fi

  mostra() {
    this.src = "";
    this.http.get("https://mcuapi.herokuapp.com/api/v1/movies").subscribe( //us og us get pass li es sub
      (res:any) => { //ris AP
        var movies = res['data'];
        [...movies].forEach(x => { //11
          this.film.push(x['title']); // ric ar fi x agg el 
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
