import { Routes } from '@angular/router';
import { DataBindingComponent } from "./components/data-binding/data-binding.component";
import {NgforPageComponent} from "./components/ngfor-page/ngfor-page.component";
import {NgifPageComponent} from "./components/ngif-page/ngif-page.component"
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';


export const routes: Routes = [
    {
        path: "DB",
        component: DataBindingComponent,
        title:"Data Binding" //If a title is not provided for a route, the title defined in index.html will be used as the default for all routes.
    },
    {
        path: "ngFor",
        component: NgforPageComponent,
        title:"Ng for"
    },
    {
        path: "ngIf",
        component: NgifPageComponent,
        title:"Ng If"
    },
    {
        path: "cntlState",
        component: ControlStatementComponent,
        title:"Control statement"
    },
    {
        path: "ngClass",
        component: NgClassComponent,
        title: "Ng Class"
    },
    {
        path: "ngStyle",
        component: NgStyleComponent,
        title: "Ng Style"
    },
    //wildcard route should be last one for better performance
    {
        path: "**",
        component: NotFoundComponent
    }
];
