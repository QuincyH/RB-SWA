
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormControl, FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Swapi App';
  dropdown: string = '';
  searchField: string = '';
  data :object = {};
  display: object = {};
  baseUrl = 'https://swapi.co/api'
  searchForm: FormGroup

  constructor(
    private http: HttpClient, private fb: FormBuilder) { }

    ngOnInit(){
      this.searchForm= this.fb.group({
        dropdown: new FormControl(),
        searchField: new FormControl()
      })
    }

onEnter(dropdown: string, searchField: string) {
  this.dropdown = dropdown.valueOf();
  this.searchField = searchField;
  this.http.get(`${this.baseUrl}/${this.dropdown}/?search=${this.searchField}`)
  .subscribe((data => {this.data = data})
)}
}

