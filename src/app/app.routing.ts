// NG2
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// App
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { CustomizationComponent } from './customization/customization.component';
import { ExtensibilityComponent } from './extensibility/extensibility.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { FaqComponent } from './faq/faq.component';

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
        path: 'getting-started',
        component: GettingStartedComponent
    },
    {
        path: 'faq',
        component: FaqComponent
    },
    {
        path: '**',
        redirectTo: 'getting-started'
    }
];

// export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
