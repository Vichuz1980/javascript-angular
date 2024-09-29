import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-foreach',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './foreach.component.html'
})
export class ForeachComponent {

  themes:any[]=[
    {icon:'icon', title:'Shooting Stars', content:'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.'},
    {icon:'icon', title:'The Catalyzer', content:'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.'},
    {icon:'icon', title:'Neptune', content:'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.'},
    {icon:'icon', title:'Melanchole', content:'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.'},
    {icon:'icon', title:'Bunker', content:'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.'},
    {icon:'icon', title:'Ramona Falls', content:'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.'}
  ]

}
