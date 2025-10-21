  import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
  import { RouterModule } from '@angular/router';
import { Traffic } from '../../../interfaces/traffics';
import { APIService } from '../../../services/api.service';
import { apires } from '../../../interfaces/response';


  @Component({
    selector: 'app-traf-list',
    standalone: true,
    imports: [RouterModule,CommonModule],
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss'
  })
  export class ListTrafComponent {
    traffics: Traffic[] = []

    constructor(private api : APIService){}

    async ngOnInit() {
      this.api.SelectAll("traffics").then((res:apires) => {
        if(res.status == 200){
          this.traffics = res.data
          console.log(this.traffics)
        }
        else{
          alert(res.message)
        }
        
      })
   }
   async Delete(asd : number){
    await this.api.Delete("traffics", asd)
   }
   Update(index:number){
   }
  }
