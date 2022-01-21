import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { DashboardInfo } from '@app/shared/models/dashboard.models';
import { DashboardService } from '@core/http/dashboard.service';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { FloatLabelType } from '@angular/material/form-field/form-field';
import * as i0 from "@angular/core";
export declare class DashboardAutocompleteComponent implements ControlValueAccessor, OnInit, AfterViewInit {
    private store;
    translate: TranslateService;
    private dashboardService;
    private fb;
    private dirty;
    selectDashboardFormGroup: FormGroup;
    modelValue: DashboardInfo | string | null;
    useIdValue: boolean;
    selectFirstDashboard: boolean;
    placeholder: string;
    dashboardsScope: 'customer' | 'tenant';
    tenantId: string;
    customerId: string;
    floatLabel: FloatLabelType;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    dashboardInput: ElementRef;
    filteredDashboards: Observable<Array<DashboardInfo>>;
    searchText: string;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, dashboardService: DashboardService, fb: FormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    selectFirstDashboardIfNeeded(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: DashboardInfo | string | null): void;
    updateView(value: DashboardInfo | string | null): void;
    displayDashboardFn(dashboard?: DashboardInfo): string | undefined;
    fetchDashboards(searchText?: string): Observable<Array<DashboardInfo>>;
    getDashboards(pageLink: PageLink): Observable<PageData<DashboardInfo>>;
    onFocus(): void;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardAutocompleteComponent, "tb-dashboard-autocomplete", never, { "useIdValue": "useIdValue"; "selectFirstDashboard": "selectFirstDashboard"; "placeholder": "placeholder"; "dashboardsScope": "dashboardsScope"; "tenantId": "tenantId"; "customerId": "customerId"; "floatLabel": "floatLabel"; "required": "required"; "disabled": "disabled"; }, {}, never, ["[tb-error]", "[tb-hint]"]>;
}
