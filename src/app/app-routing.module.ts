import { MainCrossAxisComponent } from './main-cross-axis/main-cross-axis.component';
import { BasicRowColumnComponent } from './basic-row-column/basic-row-column.component';
import { ContainerBasicsComponent } from './container-basics/container-basics.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { ProductListComponent } from './products/index';
import { StartComponent } from './start/start.component';
import { ReversedRowColumnComponent } from './reversed-row-column/reversed-row-column.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'start',
        component: StartComponent
    },
    {
        path: 'containerbasics',
        component: ContainerBasicsComponent
    },
    {
        path: 'baiscrowcolumn',
        component: BasicRowColumnComponent
    },
    {
        path: 'reversedrowcolumn',
        component: ReversedRowColumnComponent
    },
    {
        path: 'manrowcrossaxis',
        component: MainCrossAxisComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent, ProductListComponent];