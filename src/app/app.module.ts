import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { HttpClientModule } from '@angular/common/http';
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ImputMovieComponent } from './imput-movie/imput-movie.component';

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { TNSFontIconModule , TNSFontIconService } from 'nativescript-ngx-fonticon';


import { GlobalService } from './services/global.service';
import { NativeScriptModule } from "@nativescript/angular";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        HttpClientModule,
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUIDataFormModule,
        TNSFontIconModule.forRoot({
            'fa': './assets/css/fontawesome.css'
        })
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        ItemsComponent,
        ItemDetailComponent,
        RegisterComponent,
        ImputMovieComponent
    ],
    providers: [
        GlobalService,
        ItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
