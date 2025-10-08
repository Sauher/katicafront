import { Routes } from '@angular/router';
import { ListCatComponent } from './components/categories/list/list.component';
import { ListTrafComponent } from './components/traffics/list/list.component';
import { TFormComponent } from './components/traffics/form/form.component';
import { CFormComponent } from './components/categories/form/form.component';

export const routes: Routes = [
    {
        path: 'categories',
        component: ListCatComponent
    },
    {
        path: 'traffics',
        component: ListTrafComponent
    },
    {
        path: 'trafficsform',
        component: TFormComponent
    },
    {
        path:'categoriesform',
        component: CFormComponent
    }
];
