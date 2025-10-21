import { Component } from '@angular/core';
import { Customer } from '../../../interfaces/customers';
import { apires } from '../../../interfaces/response';
import { APIService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-culist',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './culist.component.html',
  styleUrl: './culist.component.scss'
})
export class CulistComponent {
customers: Customer[] = []

    constructor(private api : APIService){}

    async ngOnInit() {
      this.api.SelectAll("customers").then((res:apires) => {
        if(res.status == 200){
          this.customers = res.data
        }
        else{
          alert(res.message)
        }
        
      })
   }
   async Delete(asd : number){
    await this.api.Delete("customers", asd)
   }
   Update(index:number){
   }
}
