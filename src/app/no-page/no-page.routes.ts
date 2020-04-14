import { NoPageComponent } from './no-page.component';
import { Route } from '@angular/router';

export const PageNotFoundRoutes: Route[] = [
    {
        path:'**', component: NoPageComponent
    }
]