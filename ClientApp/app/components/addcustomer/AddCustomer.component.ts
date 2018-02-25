import { Component, OnInit } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

import { FetchCustomerComponent } from '../fetchcustomer/fetchcustomer.component';

import { CustomerService } from '../../services/customer.service';
import { DatePipe } from '@angular/common'
import { Observable } from 'rxjs';



@Component({

    selector: "createcustomer",

    templateUrl: './AddCustomer.component.html',
    providers:[CustomerService,FetchCustomerComponent]

})

export class createcustomer implements OnInit {

    customerForm: FormGroup;

    title: string = "Create";

    id: number;
  
    errorMessage: any;
    

    constructor(private fb: FormBuilder, private _avRoute: ActivatedRoute,

        private customerService: CustomerService, private _router: Router) {

        if (this._avRoute.snapshot.params["id"]) {

            this.id = this._avRoute.snapshot.params["id"];

        }

        this.customerForm = this.fb.group({
            id: 0,

            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            dateOfBirth: ['', [Validators.required]],

            email: ['', [Validators.required,Validators.email]],

            telephone: [""]

        });

    }

    ngOnInit() {

        if (this.id > 0) {

            this.title = "Edit";
           
            
            var cdata = this.customerService.getCustomerById(this.id);

       
            cdata.subscribe(resp => this.customerForm.setValue(resp)

                , error => this.errorMessage = error);


        }


    }
  

    save() {

        if (!this.customerForm.valid) {

            return;

        }

        if (this.title === "Create") {

            this.customerService.saveCustomer(this.customerForm.value)
                .subscribe();
            alert("Customer details has been saved " );
            this._router.navigate(['/fetch-customer']);

        }

        else if (this.title === "Edit") {

            this.customerService.updateCustomer(this.customerForm.value)
                .subscribe();
            alert("Customer details has been updated");
            this._router.navigate(['/fetch-customer']);
           

        }

    }

    cancel() {

        this._router.navigate(['/fetch-customer']);

    }

    get firstName() { return this.customerForm.get('firstName'); }

    get lastName() { return this.customerForm.get('lastName'); }

    get dateOfBirth() { return this.customerForm.get('dateOfBirth'); }
    get email() { return this.customerForm.get('email'); }

    get telephone() { return this.customerForm.get('telephone'); }

}