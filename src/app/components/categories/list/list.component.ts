import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Category } from '../../../interfaces/categories';
import { APIService } from '../../../services/api.service';
import { apires } from '../../../interfaces/response';



@Component({
  selector: 'app-cat-list',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})

export class ListCatComponent implements OnInit{
  categories: Category[] = []
  constructor(private api : APIService){}

   async ngOnInit() {
this.api.SelectAll("categories").then((res:apires) => {
        if(res.status == 200){
          this.categories = res.data
        }
        else{
          alert(res.message)
        }
        
      })
    
  }
}
