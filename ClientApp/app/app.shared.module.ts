import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchCustomerComponent } from './components/fetchcustomer/fetchcustomer.component';

import { createcustomer } from './components/addcustomer/Addcustomer.component';
import { CustomerService } from './Services/customer.service';

@NgModule({
    declarations: [
        AppComponent,

        NavMenuComponent,

        HomeComponent,

        FetchCustomerComponent,

        createcustomer

    ],
    providers: [CustomerService],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },

            { path: 'home', component: HomeComponent },

            { path: 'fetch-customer', component: FetchCustomerComponent },

            { path: 'register-customer', component: createcustomer },


            { path: 'customer/edit/:id', component: createcustomer },

            { path: '**', redirectTo: 'home' }


        ])


    ]


})
export class AppModuleShared {
}
