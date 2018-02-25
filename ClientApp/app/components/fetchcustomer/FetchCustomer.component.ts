import { Component, Inject } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { Router, ActivatedRoute } from '@angular/router';

import { CustomerService } from '../../services/customer.service'

@Component({

    selector: 'fetchcustomer',

    templateUrl: './FetchCustomer.component.html',
    providers: [CustomerService]

})

export class FetchCustomerComponent {

    public custList: ICustomerData[];
 

    constructor(public http: Http, private _router: Router, private _customerService: CustomerService) {

        this.getCustomers();

    }
    ngOnInit() {

       

            this.getCustomers();
        


    }

   public getCustomers() {

        this._customerService.getCustomers().subscribe(
            data => this.custList = <ICustomerData[]>(data)
        );

    }
   
    delete(id) {

        var ans = confirm("Do you want to delete customer with Id: " + id);

        if (ans) {

            this._customerService.deleteCustomer(id).subscribe();

        }
        this.getCustomers();

    }

}

interface ICustomerData {

    id: number;

    firstName: string;

    lastName: string;

    dateOfBirth: Date;

    email: string;
    telephone: string;

}