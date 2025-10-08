import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import axios, { AxiosError } from 'axios'
import { Category } from '../../../interfaces/categories';



@Component({
  selector: 'app-cat-list',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})

export class ListCatComponent implements OnInit{
  categories: Category[] = []

   async ngOnInit() {
    try{
      const res = await axios.get('http://localhost:3000/categories')
    this.categories = res.data
    console.log(this.categories)
    }
    catch (err : any){
      console.log(err.message)
      alert('Hiba történt az adatok betöltésekor!')
    }
    
  }
}
