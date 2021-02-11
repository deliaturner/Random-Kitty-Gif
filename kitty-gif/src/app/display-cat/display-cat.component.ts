import { CatService } from './../cat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-cat',
  templateUrl: './display-cat.component.html',
  styleUrls: ['./display-cat.component.css']
})
export class DisplayCatComponent implements OnInit {
  results: any;
  gif: string;
  firstCat: boolean = false;
  constructor(private catService: CatService) { }

  ngOnInit(): void {
  }
  getGif() {
    this.catService.getCatGif().subscribe((data: any) => {
      this.results = data;
      this.gif = data[0].url;
      this.firstCat = true;
    })
  }


}
