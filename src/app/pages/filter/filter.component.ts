import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './filter.component.html'
})
export class FilterComponent {
  
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
      delivered: true,
    },
  ];



  nOrders = this.orders.map(item => {

      return {
        ...item, tax: Math.trunc(item.total * 0.19)
      }

  })

  searchFilter = new FormControl('ver')
  ordersFilter:any

  constructor(){

    /* Carga todos los elementos en el inicio */
    this.ordersFilter = this.nOrders

    /* Detecta cambios en el input e inicia la funcion filtrar */
    this.searchFilter.valueChanges
    .subscribe(response =>{

      if (response != null) {

        this.filterItems(response)
        
      }

    })

    
  }

  filterItems(search:string){

   this.ordersFilter = this.nOrders.filter(item=> 
    item.customerName.toLowerCase().includes(search.toLowerCase())
   )

  }

}
