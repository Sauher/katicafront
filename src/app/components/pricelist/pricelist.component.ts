import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../interfaces/products';
import { APIService } from '../../services/api.service';
import { apires } from '../../interfaces/response';

@Component({
  selector: 'app-pricelist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricelist.component.html',
  styleUrl: './pricelist.component.scss'
})
export class PricelistComponent {
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
