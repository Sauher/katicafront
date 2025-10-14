import { Injectable } from '@angular/core';
import axios from 'axios';
import { apires } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  SERVER = 'http://localhost:3000'
  constructor() { }

  // Get all records from table
  async SelectAll(table: string): Promise<apires>{
    try{
      const res = await axios.get(`${this.SERVER}/${table}`)
    return {
      status:200,
      data : res.data
    }
    }
    catch (err : any){
      return {
        status:500,
        message: "Hiba történt az adatok lekéréskor"
      }
    }
    
  }
  // GET ONE record by id from table
  async Select(table:string, id:number):Promise<apires>{
    try{
      const res = await axios.get(`${this.SERVER}/${table}/${id}`)
    return {
      status:200,
      data : res.data
    }
    }
    catch (err : any){
      return {
        status:500,
        message: "Hiba történt az adatok lekéréskor"
      }
    }
  }

  async Insert(table: string, data: any){
    try{
      const res = await axios.post(`${this.SERVER}/${table}` , data)
    return {
      status:200,
      message: "Rekord felvéve",
      data : res.data
    }
    }
    catch (err : any){
      return {
        status:500,
        message: "Hiba történt az adatok felvitelekor"
      }
    }
  }
  async Update(table: string, id : number, data: any){
    try{
      const res = await axios.patch(`${this.SERVER}/${table}/${id}` , data)
    return {
      status:200,
      message: "Rekord módosítva",
      data : res.data
    }
    }
    catch (err : any){
      return {
        status:500,
        message: "Hiba történt az adatok módosításakor"
      }
    }
  }

  async Delete(table: string, id:number):Promise<apires>{
    try{
      const res = await axios.delete(`${this.SERVER}/${table}/${id}`)
    return {
      status:200,
      message: "Belo"
    }
    }
    catch (err : any){
      return {
        status:500,
        message: "Hiba történt az adatok lekéréskor"
      }
    }
  }

  async DeleteAll(table: string):Promise<apires>{
    try{
      const res = await axios.delete(`${this.SERVER}/${table}`)
    return {
      status:200,
      message : "Összes rekord törölve"
    }
    }
    catch (err : any){
      return {
        status:500,
        message: "Hiba történt az adatok lekéréskor"
      }
    }
  }

}
