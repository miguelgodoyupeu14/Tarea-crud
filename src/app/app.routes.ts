import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarreraComponent } from './carrera/carrera.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent,
        title:'Home'
    },
    {
        path:'carrera',
        component: CarreraComponent,
        title:'Soy carrera'
    },
    {
        path:'alumno',
        component:AlumnoComponent,
        title:'Soy alumno'
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch:'full'
    }
];
