import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutes } from './app.routes';
import { SubjectSubscriptionComponent } from './subject-subscription/subject-subscription.component';
import { HomeComponent } from './home/home.component';
import { MessageService } from './services/message.service';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        SubjectSubscriptionComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutes
    ],
    providers: [
        MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
