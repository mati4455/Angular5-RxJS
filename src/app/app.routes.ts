import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { SubjectSubscriptionComponent } from './subject-subscription/subject-subscription.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: NavigationComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'subject-subscription',
                component: SubjectSubscriptionComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];

export const AppRoutes = RouterModule.forRoot(routes);
