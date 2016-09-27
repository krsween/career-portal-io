// NG2
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// App
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { CustomizationComponent } from './customization/customization.component';
import { ExtensibilityComponent } from './extensibility/extensibility.component';
import { DeploymentComponent } from './deployment/deployment.component';

const appRoutes: Routes = [
    {
        path: 'customization',
        component: CustomizationComponent
    },
    {
        path: 'extensibility',
        component: ExtensibilityComponent
    },
    {
        path: 'deployment',
        component: DeploymentComponent
    },
    {
        path: '',
        component: GettingStartedComponent
    },
    {
        path: '**',
        component: GettingStartedComponent
    }
];

// export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
