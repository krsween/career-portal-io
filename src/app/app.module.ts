// NG2
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// App
import { AppComponent } from './app.component';
import { CustomizationComponent } from './customization/customization.component';
import { routing } from './app.routing';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { ExtensibilityComponent } from './extensibility/extensibility.component';
import { DeploymentComponent } from './deployment/deployment.component';

@NgModule({
    declarations: [
        AppComponent,
        CustomizationComponent,
        GettingStartedComponent,
        ExtensibilityComponent,
        DeploymentComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }