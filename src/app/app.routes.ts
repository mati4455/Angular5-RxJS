import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { SubjectSubscriptionComponent } from './subject-subscription/subject-subscription.component';
import { HomeComponent } from './home/home.component';
import { SearchDelayComponent } from './search-delay/search-delay.component';
import { OperatorsComponent } from './operators/operators.component';
import { CombineComponent } from './combine/combine.component';

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
            },
            {
                path: 'operators',
                component: OperatorsComponent
            },
            {
                path: 'combine-observables',
                component: CombineComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];

export const AppRoutes = RouterModule.forRoot(routes);
