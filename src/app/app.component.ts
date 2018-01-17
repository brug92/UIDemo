import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  results = 'results';
  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
//   var url = 'https://api.github.com/users/seeschweiler';
   var url = "/api/api_GET?key=EE158886-64E4-3EB1-8DB8-ACD658FBD322&sector_desc=ENVIRONMENTAL&commodity_desc=CORN&agg_level_desc=STATE&state_alpha=WA&&format=JSON";
   // var url = 'http://services.groupkt.com/country/search?text=un';

    this.http.get(url).subscribe(data => {
      console.log(data);
       });
  }
}  