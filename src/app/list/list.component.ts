import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  // this will hold the results from the api
  brews: object;
  // dependecny injection
  constructor(private _http: HttpService) {}
  // lifeCycle hook

  ngOnInit() {
    this._http.getBeer().subscribe(data => {
      // store the data
      this.brews = data;
      console.log(this.brews);
    });
  }
}
