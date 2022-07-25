import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
   };


  constructor(private http:HttpClient) { }


  addProduct(product:any){
    console.log("Product in service",product)
    return this.http.post<any>('http://localhost:7070/api/v2/products/addProduct',product,this.httpOptions)
  }

  getProducts(){
    return this.http.get<any>('http://localhost:7070/api/v2/products/getAllProducts',this.httpOptions)
  }

  updateProduct(product : any){
    console.log("Product in service",product)
    return this.http.put<any>('http://localhost:7070/api/v2/products/updateProduct',product,this.httpOptions)
  }

  deleteProduct(product_id:any){
    console.log("product_id in service",product_id)
    return this.http.delete<any>('http://localhost:7070/api/v2/products/deleteProduct/'+product_id,this.httpOptions)
  }
}
