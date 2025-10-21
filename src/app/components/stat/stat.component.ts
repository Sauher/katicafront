import { Component } from '@angular/core';
import { APIService } from '../../services/api.service';
import { apires } from '../../interfaces/response';
import { CommonModule } from '@angular/common';
import { Stats } from '../../interfaces/stats';

@Component({
  selector: 'app-stat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat.component.html',
  styleUrl: './stat.component.scss'
})
export class StatComponent {
stats: Stats | undefined;

    constructor(private api : APIService){}

    async ngOnInit() {
      this.api.SelectAll("statistics").then((res:apires) => {
        if(res.status == 200){
          this.stats = res.data
          console.log(this.stats)
        }
        else{
          alert(res.message)
        }
        
      })
   }
}
