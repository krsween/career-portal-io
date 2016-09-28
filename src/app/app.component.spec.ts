/* tslint:disable:no-unused-variable */
// NG2
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
// APP
import { AppComponent } from './app.component';
import { CustomizationComponent } from './customization/customization.component';
import { ExtensibilityComponent } from './extensibility/extensibility.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { FaqComponent } from './faq/faq.component';
import { routing } from './app.routing';

describe('App: CareerPortalIo', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                CustomizationComponent,
                ExtensibilityComponent,
                DeploymentComponent,
                GettingStartedComponent,
                FaqComponent
            ],
            imports: [RouterTestingModule.withRoutes(routing)],
        });
    });

    it('should create the app', async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have as title 'app works!'`, async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app works!');
    }));

    it('should render title in a h1 tag', async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        let compiled = fixture.debugElement.nativeElement;
        expect(compiled.innerHTML).toContain('Getting Started');
        expect(compiled.innerHTML).toContain('Customization');
        expect(compiled.innerHTML).toContain('Extensibility');
        expect(compiled.innerHTML).toContain('Deployment');
        expect(compiled.innerHTML).toContain('FAQ');
    }));
});
