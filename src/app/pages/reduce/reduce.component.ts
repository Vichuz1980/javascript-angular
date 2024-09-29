import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reduce',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './reduce.component.html'
})
export class ReduceComponent {

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

  gtotal = this.nOrders.reduce((sum, item) => sum + item.total, 0)
  gtaxes = this.nOrders.reduce((sum, item) => sum + item.tax, 0)

}
