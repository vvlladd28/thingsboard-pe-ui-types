import { FormBuilder } from '@angular/forms';
import { IntegrationType } from '@shared/models/integration.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { HttpIntegrationFormComponent } from './http-integration-form.component';
import * as i0 from "@angular/core";
export declare class OceanConnectIntegrationFormComponent extends HttpIntegrationFormComponent {
    protected fb: FormBuilder;
    protected store: Store<AppState>;
    protected translate: TranslateService;
    showSecurity: boolean;
    protected integrationType: IntegrationType;
    constructor(fb: FormBuilder, store: Store<AppState>, translate: TranslateService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OceanConnectIntegrationFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OceanConnectIntegrationFormComponent, "tb-ocean-connect-integration-form", never, {}, {}, never, never>;
}
