import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AdminService } from '@core/http/admin.service';
import { HasConfirmForm } from '@core/guards/confirm-on-exit.guard';
import { AuthService } from '@core/auth/auth.service';
import { DialogService } from '@core/services/dialog.service';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class SecuritySettingsComponent extends PageComponent implements HasConfirmForm {
    protected store: Store<AppState>;
    private router;
    private adminService;
    private authService;
    private dialogService;
    private translate;
    private fb;
    securitySettingsFormGroup: UntypedFormGroup;
    jwtSecuritySettingsFormGroup: UntypedFormGroup;
    private securitySettings;
    private jwtSettings;
    constructor(store: Store<AppState>, router: Router, adminService: AdminService, authService: AuthService, dialogService: DialogService, translate: TranslateService, fb: UntypedFormBuilder);
    buildSecuritySettingsForm(): void;
    buildJwtSecuritySettingsForm(): void;
    save(): void;
    saveJwtSettings(): void;
    private maxPasswordValidation;
    discardSetting(): void;
    discardJwtSetting(): void;
    markAsTouched(): void;
    private confirmChangeJWTSettings;
    generateSigningKey(): void;
    private processSecuritySettings;
    private processJwtSettings;
    private refreshTokenTimeGreatTokenTime;
    private base64Format;
    confirmForm(): UntypedFormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<SecuritySettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SecuritySettingsComponent, "tb-security-settings", never, {}, {}, never, never, false, never>;
}
