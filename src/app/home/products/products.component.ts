import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input()
  public data;
  constructor() { }

  ngOnInit(): void {
    console.log('data received', this.data)
  }

}
