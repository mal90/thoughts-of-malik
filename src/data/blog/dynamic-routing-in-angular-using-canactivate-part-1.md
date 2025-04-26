---
title: "Dynamic routing in Angular using canActivate() Part 1"
pubDatetime: 2018-02-28T00:00:00.000Z
description: "Use case : Assume a scenario where you have to add dynamic routing to an Angular application which accommodate following requirements."
---

## Dynamic routing in Angular using canActivate() Part 1

Use case : Assume a scenario where you have to add dynamic routing to an Angular application which accommodate following requirements.

- User should be able to add or remove "existing components" to the route object dynamically.
- After adding a specific routing dynamically , user should be able to access the component by typing the URL.
- The newly added routing should persistent.
- When page reloads(and application context reinitialize)  , dynamically added routing should be applied.
- Angular provides an interface , canActivate , to provide the capability of activating a specific routing on-the-fly . This interface contains canActivate() which returns a Boolean.

This gist demonstrates a simple example on how we can use [canActivate](https://angular.io/api/router/CanActivate) to achieve dynamic routing.

[This](https://gist.github.com/mal90/a2cd5233da039be35cb61e17a135b62f) gist demonstrates a simple example on how we can use canActivate to achieve dynamic routing.

```
import { RouteGuardService } from './routeguard.service';
import { Component, OnInit } from '@angular/core';
import { Router , Route }    from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private router: Router,private routeGuardService : RouteGuardService) {}

  ngOnInit(){
  }

  addRoute(){
    this.routeGuardService.setRouteGuard();
  }

  removeRoute(){
    this.routeGuardService.removeRouteGuard();
  }
}
```

```
import { Module2Component } from './module2/module2.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DynamicModuleComponent } from './dynamicmodule/dynamicmodule.component';
import { RouteGuardService } from './routeguard.service';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent
  },
  {
    path: 'dynamicmodule',
    component: DynamicModuleComponent,
    /** following line needs to be added to trigger canActivate() in routeguardservice class*/
    canActivate: [RouteGuardService],
    data: {
      module: "dynamicmodule"
    }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DynamicModuleComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( routes)
  ],
  providers: [RouteGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router , Route }    from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RouteGuardService implements CanActivate{
    activate : boolean = false;

    constructor(private router: Router){

    }

    setRouteGuard(){
       this.activate = true ;
    }

    removeRouteGuard(){
       this.activate = false ;
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean{
        /**
         * Here the logic can be implemented to activate and deactivate the route service.
         *
         */
        return this.activate;
    }

}
```

However this solution leads to the following problem…

Dynamically added routing will not be accessible by URL . Which means whatever the newly added routing is not persistent. Part II of this blog post series will cover persistence of dynamically added routing. Stay tuned …! 