import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { APIService } from '../../../services/api.service';

@Component({
  selector: 'app-cform',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class CFormComponent {
    kategorianev : string | undefined
constructor(private api : APIService){}
    async AddKat(){
      console.log(this.kategorianev)
     await this.api.Insert('categories', this.kategorianev)
    }
}
