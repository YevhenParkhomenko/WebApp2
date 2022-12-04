import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent implements OnInit {

  items : string[] = []
  sum : number = 15;
  direction : string = ""

  ngOnInit(): void {
  }

  constructor() {
    this.appendItems();
  }


  onScrollDown(ev: any) {
    console.log("Never gonna give you scroll down...", ev);

    this.sum += 15;
    this.appendItems();

    this.direction = "Never gonna let you scroll down...";
  }

  onScrollUp(ev: any) {
    console.log("Never gonna give you scroll up...", ev);
    this.sum += 15;
    this.prependItems();

    this.direction = "Never gonna give scroll you up...";
  }

  appendItems() {
    this.addItems("push");
  }

  prependItems() {
    this.addItems("unshift");
  }

  addItems(_method: string) {
    for (let i = 0; i < this.sum; ++i) {
      if( _method === 'push'){
        this.items.push([i].join(""));
      }else if( _method === 'unshift'){
        this.items.unshift([i].join(""));
      }
    }
  }

}
