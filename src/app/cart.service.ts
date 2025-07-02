import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {items} from './food.json';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  cartItems:any[]=[];
  cartEvent =new BehaviorSubject<any>([]);
  addItemToCart(item:any){
    item.count=1;
    this.cartItems.push(item);
    this.cartEvent.next(this.cartItems)
  }
  incItemCount(item:any){
    this.cartItems=this.cartItems.map((citem)=>{
      if(item.id===citem.id){
        item.count++;
      }
      return citem;
    })
    this.cartEvent.next(this.cartItems)

  }
  decItemCount(item:any){
    this.cartItems=this.cartItems.map((citem)=>{
      if(item.id===citem.id){
        item.count--;
      }
      return citem;
    })
    this.cartEvent.next(this.cartItems) 
  }
  getItemDetailsById(id:any){
    return items.find(item=>item.id===id)
  }
}
