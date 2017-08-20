import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EstateDetailComponent } from './estate-detail.component';
import { EstateService } from './estate.service';

@NgModule({
    declarations: [
        AppComponent,
        EstateDetailComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [
        EstateService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
