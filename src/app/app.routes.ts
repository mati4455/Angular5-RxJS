import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { SubjectSubscriptionComponent } from './subject-subscription/subject-subscription.component';
import { HomeComponent } from './home/home.component';
import { SearchDelayComponent } from './search-delay/search-delay.component';

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
            },
            {
                path: 'search-delay',
                component: SearchDelayComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];

export const AppRoutes = RouterModule.forRoot(routes);
