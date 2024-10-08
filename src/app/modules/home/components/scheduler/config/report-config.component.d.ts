import { AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, Validator, ValidationErrors } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { ReportConfig } from '@shared/models/report.models';
import { UtilsService } from '@core/services/utils.service';
import { EntityType } from '@shared/models/entity-type.models';
import { MatDialog } from '@angular/material/dialog';
import { PageComponent } from '@shared/components/page.component';
import { ReportService } from '@core/http/report.service';
import { DialogService } from '@core/services/dialog.service';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class ReportConfigComponent extends PageComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy, Validator {
    protected store: Store<AppState>;
    private utils;
    private reportService;
    private dialogService;
    private translate;
    private dialog;
    private fb;
    private modelValue;
    reportConfigFormGroup: UntypedFormGroup;
    reportsServerEndpointUrl: string;
    disabled: boolean;
    authUser: import("../../../../../shared/public-api").AuthUser;
    isTenantAdmin: boolean;
    entityType: typeof EntityType;
    reportTypesList: import("@shared/models/report.models").ReportType[];
    reportTypeNames: Map<import("@shared/models/report.models").ReportType, string>;
    private destroy$;
    private propagateChange;
    constructor(store: Store<AppState>, utils: UtilsService, reportService: ReportService, dialogService: DialogService, translate: TranslateService, dialog: MatDialog, fb: UntypedFormBuilder);
    private updateEnabledState;
    selectDashboardState(): void;
    generateTestReport(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: ReportConfig | null): void;
    validate(): ValidationErrors | null;
    private createDefaultReportConfig;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportConfigComponent, "tb-report-config", never, { "reportsServerEndpointUrl": { "alias": "reportsServerEndpointUrl"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
