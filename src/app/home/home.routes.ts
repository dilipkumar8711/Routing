import { SettingsComponent } from './settings/settings.component';
import { ForgotComponent } from './../index/forgot/forgot.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../gaurd/auth.guard';

export const HomeRoutes: Route[] = [
    {
        path:'', component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            {path:'', component: DashboardComponent},
            {path:'products', component: ProductsComponent},
            {path:'settings', component: SettingsComponent}
        ]
    }
]