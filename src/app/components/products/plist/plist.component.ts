import { Component } from '@angular/core';
import { Product } from '../../../interfaces/products';
import { APIService } from '../../../services/api.service';
import { apires } from '../../../interfaces/response';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-plist',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './plist.component.html',
  styleUrl: './plist.component.scss'
})
export class PlistComponent {
products: Product[] = []

    constructor(private api : APIService){}

    async ngOnInit() {
      this.api.SelectAll("products").then((res:apires) => {
        if(res.status == 200){
          this.products = res.data
        }
        else{
          alert(res.message)
        }
        
      })
   }
   async Delete(asd : number){
    await this.api.Delete("products", asd)
   }
   Update(index:number){
   }
  }

