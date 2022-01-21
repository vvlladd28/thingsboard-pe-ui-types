import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { TenantProfileId } from '@shared/models/id/tenant-profile-id';
import { EntityInfoData } from '@shared/models/entity.models';
import { TenantProfileService } from '@core/http/tenant-profile.service';
import { TruncatePipe } from '@shared//pipe/truncate.pipe';
import { TenantProfile } from '@shared/models/tenant.model';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class TenantProfileAutocompleteComponent implements ControlValueAccessor, OnInit {
    private store;
    translate: TranslateService;
    truncate: TruncatePipe;
    private tenantProfileService;
    private fb;
    private dialog;
    selectTenantProfileFormGroup: FormGroup;
    modelValue: TenantProfileId | null;
    selectDefaultProfile: boolean;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    showDetailsPageLink: boolean;
    tenantProfileUpdated: EventEmitter<TenantProfileId>;
    tenantProfileInput: ElementRef;
    filteredTenantProfiles: Observable<Array<EntityInfoData>>;
    searchText: string;
    tenantProfileURL: string;
    private dirty;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, truncate: TruncatePipe, tenantProfileService: TenantProfileService, fb: FormBuilder, dialog: MatDialog);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    selectDefaultTenantProfileIfNeeded(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: TenantProfileId | null): void;
    onFocus(): void;
    updateView(value: TenantProfileId | null): void;
    displayTenantProfileFn(profile?: EntityInfoData): string | undefined;
    fetchTenantProfiles(searchText?: string): Observable<Array<EntityInfoData>>;
    clear(): void;
    textIsNotEmpty(text: string): boolean;
    tenantProfileEnter($event: KeyboardEvent): void;
    createTenantProfile($event: Event, profileName: string): void;
    editTenantProfile($event: Event): void;
    openTenantProfileDialog(tenantProfile: TenantProfile, isAdd: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TenantProfileAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TenantProfileAutocompleteComponent, "tb-tenant-profile-autocomplete", never, { "selectDefaultProfile": "selectDefaultProfile"; "required": "required"; "disabled": "disabled"; "showDetailsPageLink": "showDetailsPageLink"; }, { "tenantProfileUpdated": "tenantProfileUpdated"; }, never, never>;
}
