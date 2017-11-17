import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutes } from './app.routes';
import { SubjectSubscriptionComponent } from './subject-subscription/subject-subscription.component';
import { HomeComponent } from './home/home.component';
import { MessageService } from './services/message.service';
import { SearchDelayComponent } from './search-delay/search-delay.component';
import { SearchService } from './services/search.service';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        SubjectSubscriptionComponent,
        HomeComponent,
        SearchDelayComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutes
    ],
    exports: [
        HttpClientModule
    ],
    providers: [
        MessageService,
        SearchService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
