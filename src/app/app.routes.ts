import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutsComponent } from './components/abouts/abouts.component';
import { BlogComponent } from './components/blog/blog.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartItemsComponent } from './components/cart-items/cart-items.component';


export const routes: Routes = [
    { path: '', redirectTo: 'dashbord', pathMatch: 'full' },
    {
        path: 'dashbord', component: DashboardComponent, children: [
            {
                path: 'product', component: HomepageComponent,
            },
            {
                path: 'product-details/:id', component: ProductDetailsComponent
            },
            {
               path:'cart-items',component:CartItemsComponent,
            },
            {
                path: 'contact-us', component: ContactComponent
            },
            {
                path: 'contact-us', component: ContactComponent
            },
            {
                path: 'about-us', component: AboutsComponent
            },
            {
                path: 'blog', component: BlogComponent
            }
        ]
    },
    {
        path:'**',component:NotfoundComponent,
    }

];
