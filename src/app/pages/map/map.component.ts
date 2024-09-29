import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './map.component.html'
})
export class MapComponent {

  orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true
    },
  ];



nOrders = this.orders.map(item => {

    return {
      ...item, tax: Math.trunc(item.total * 0.19)
    }
})


}
