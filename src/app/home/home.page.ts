import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpservicesService } from '../services/httpservices.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  ProductForm : any;
  showAddForm : any;
  showUpdateForm: any;

  showProductsList : any;
  productList: any;
  index: any;

  updatedproduct : any;
  constructor(private formGroup: FormBuilder, private service:HttpservicesService) {}

  ngOnInit(): void {
    
    this.ProductForm = new FormGroup({
      ProductName : new FormControl(''),
      price : new FormControl(''),
      quantity : new FormControl(''),
      inStock : new FormControl('')
    })
  }

  showForm(){
    this.showAddForm = true;
    this.showProductsList = false;
  }

  showGrid(){
    this.showProductsList = true;
    this.showAddForm = false;
    this.showUpdateForm=false;
    this.service.getProducts().subscribe({
      next : (data) =>{
        console.log("getProducts", data.result)
        this.productList = data.result
      }
    })
  }

  onSubmit(){
    console.log("formValue",this.ProductForm.value)
    this.service.addProduct(this.ProductForm.value).subscribe({
      next: (data)=>{
        console.log("data", data)
      },
      error : (err)=>{
        console.log("Error", err)
      }
    })
  }

  ShowUpdateForm(i : any){
    this.showUpdateForm=true
    this.showProductsList=false;
    this.showAddForm = false;
     console.log("index", i)
     this.index = i
     this.ProductForm = new FormGroup({
      ProductName : new FormControl(this.productList[i].ProductName),
      price : new FormControl(this.productList[i].price),
      quantity : new FormControl(this.productList[i].quantity),
      inStock : new FormControl(this.productList[i].inStock)
     }) 
  }
  onUpdateSubmit(product : any){
    console.log("formValue",this.ProductForm.value)
    this.updatedproduct  = this.ProductForm.value;
    this.updatedproduct["uuid"] = this.productList[this.index].uuid; 
    this.service.updateProduct(this.updatedproduct).subscribe({
      next: (data)=>{
        console.log("data", data)
        this.showGrid();
      },
      error : (err)=>{
        console.log("Error", err)
      }
    })
  }

  DeleteForm(i : any){
    this.showUpdateForm=false
    this.showProductsList=false;
     console.log("index", i)
     console.log("formValue",this.ProductForm.value)
    this.service.deleteProduct(this.productList[i].uuid).subscribe({
      next: (data)=>{
        console.log("data", data)
        this.showGrid();
      },
      error : (err)=>{
        console.log("Error", err)
      }
    })
  }
}
