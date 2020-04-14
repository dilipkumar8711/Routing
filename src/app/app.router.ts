import { Routes } from '@angular/router';
import { HomeRoutes } from './home/home.routes';
import { IndexRoutes } from './index/index.routes';
import { PageNotFoundRoutes } from './no-page/no-page.routes';

export const appRoutes: Routes = [...HomeRoutes, ...IndexRoutes, ...PageNotFoundRoutes]