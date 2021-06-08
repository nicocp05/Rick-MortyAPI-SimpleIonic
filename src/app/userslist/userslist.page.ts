import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.page.html',
  styleUrls: ['./userslist.page.scss'],
})
export class UserslistPage implements OnInit {

  public characters = [];

  constructor( private http: HttpClient ) { }

  ngOnInit() {
    this.http.get('https://rickandmortyapi.com/api/character')
      .subscribe( (res: any) => {
        this.characters = res.results;
      });
  }

}
