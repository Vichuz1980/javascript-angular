import { Routes } from '@angular/router';
import { ForeachComponent } from './pages/foreach/foreach.component';
import { MainComponent } from './pages/main/main.component';
import { MapComponent } from './pages/map/map.component';
import { FilterComponent } from './pages/filter/filter.component';

export const routes: Routes = [
    {path:'', component:MainComponent},
    {path:'foreach', component:ForeachComponent},
    {path:'map', component:MapComponent},
    {path:'filter', component:FilterComponent}
];
