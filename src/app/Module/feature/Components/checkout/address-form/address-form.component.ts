import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderServie } from '../../../../../State/Order/order.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss',
})
export class AddressFormComponent {
  constructor(private formBuilder: FormBuilder,private orderService:OrderServie) {}

  handleSubmit() {
    const formValue=this.myForm.value;
    console.log('form data' , formValue);
    this.orderService.createOrder(formValue)
    
  }

  handleCreateOrder(_t7: any) {
    throw new Error('Method not implemented.');
  }

  adresses = [2, 3, 4, 4];

  myForm: FormGroup = this.formBuilder.group({
    firstName:["",Validators.required],
    lastName:["",Validators.required],
    streetAddress:["",Validators.required],
    city:["",Validators.required],
    state:["",Validators.required],
    zipCode:["",Validators.required],
    mobile:["",Validators.required],
  });
}
