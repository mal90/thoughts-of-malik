---
title: "Dynamic routing in Angular using canActivate() Part II"
pubDatetime: 2018-03-11T00:00:00.000Z
description: "In the first part we have looked at how we can have dynamic routing using canActivate()."
---

## Dynamic routing in Angular using canActivate() Part II

In the first part we have looked at how we can have dynamic routing using canActivate(). However there is a fundamental issue we will face here .

Dynamic routing created in front-end is not persistent. When the user refreshes the browser or when he tries to access the new route using URL , it will not load.

To overcome this problem the solution is to persisting the new route data temporarily in local-storage of the browser .

Following gist demonstrate how to implement persistence with dynamic routing.

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

    constructor(private router: Router){

    }

    setRouteGuard(newModule){
        let isAdded = false;
        var moduleObjArr = this.getStorageItems();

        for (let moduleObj of moduleObjArr) {
            /*Check if the new module is already added to localstorage routing json obj*/
            if(moduleObj.module === newModule){
                isAdded = true;
            }
        }

        if(!isAdded){
            /* Add the new dynamic module to the local storage json obj*/
            moduleObjArr.push({module:newModule});
            localStorage.setItem("modules",JSON.stringify(moduleObjArr));
        }
    }

    removeRouteGuard(newModule){
        /* When removing a dynamic module from routing*/
        var moduleObjArr = this.getStorageItems();
        var newModuleObjArr = moduleObjArr.filter(item => item.module !== newModule);
        localStorage.setItem("modules",JSON.stringify(newModuleObjArr));
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        var moduleObjArr = this.getStorageItems();
        console.log(next.data["module"]);
        let canActivate = false;
        /* Activate routing based on the routing json obj*/
        for (let module of moduleObjArr) {
            if(module.module === next.data["module"]){
                canActivate = true ;
            }
        };
        return canActivate;
    }

    getStorageItems(){
        /* Common method to retrive route module obj array from localstorage*/
        let moduleObjArr = eval('(' + localStorage.getItem("modules") + ')');
        return moduleObjArr === null ? [{}] : moduleObjArr;
    }

}
```

Few important things to notice in the gist.

- local-storage of the browser is used to persist route data as a json object.
- canActivate takes this array to apply the dynamic routing to the modules.
- When applying a new module to dynamic routing first we need to check whether it is already existing the route obj array.
- This data is  volatile , means that it depends on user's browser.

I have created a sample angular application based on what we have covered in dynamic routing. https://github.com/mal90/ng-dynamic-route 