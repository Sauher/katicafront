import { Routes } from '@angular/router';
import { ListCatComponent } from './components/categories/list/list.component';
import { ListTrafComponent } from './components/traffics/list/list.component';
import { TFormComponent } from './components/traffics/form/form.component';
import { CFormComponent } from './components/categories/form/form.component';
import { CuformComponent } from './components/customers/cuform/cuform.component';
import { CulistComponent } from './components/customers/culist/culist.component';
import { PformComponent } from './components/products/pform/pform.component';
import { PlistComponent } from './components/products/plist/plist.component';
import { PricelistComponent } from './components/pricelist/pricelist.component';

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
    },
    {
        path:'customersform',
        component: CuformComponent
    },
    {
        path:'customers',
        component: CulistComponent
    },
    {
        path:'productsform',
        component: PformComponent
    },
    {
        path:'products',
        component: PlistComponent
    },
    {
        path:'pricelist',
        component: PricelistComponent
    }
];
