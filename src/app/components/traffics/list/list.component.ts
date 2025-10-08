  import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
  import { RouterModule } from '@angular/router';
  import axios, { AxiosError } from 'axios'
import { Traffic } from '../../../interfaces/traffics';


  @Component({
    selector: 'app-traf-list',
    standalone: true,
    imports: [RouterModule,CommonModule],
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss'
  })
  export class ListTrafComponent {
    traffics: Traffic[] = []

    async ngOnInit() {
     try{
       const res = await axios.get('http://localhost:3000/traffics')
     this.traffics = res.data
     console.log(this.traffics)
     }
     catch (err : any){
       console.log(err.message)
       alert('Hiba történt az adatok betöltésekor!')
     }
     
   }
  }
