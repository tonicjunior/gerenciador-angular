import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestourantsComponent } from './restourants/restourants.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'restourants', component: RestourantsComponent},
    {path: 'about', component: AboutComponent}
   

]
