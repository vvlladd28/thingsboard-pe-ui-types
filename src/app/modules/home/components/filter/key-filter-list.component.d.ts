import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { EntityKeyType, KeyFilterInfo } from '@shared/models/query/query.models';
import { MatDialog } from '@angular/material/dialog';
import { EntityId } from '@shared/models/id/entity-id';
import * as i0 from "@angular/core";
export declare class KeyFilterListComponent implements ControlValueAccessor, Validator, OnInit, OnDestroy {
    private fb;
    private dialog;
    disabled: boolean;
    displayUserParameters: boolean;
    allowUserDynamicSource: boolean;
    telemetryKeysOnly: boolean;
    entityId: EntityId;
    keyFilterListFormGroup: UntypedFormGroup;
    entityKeyTypeTranslations: Map<EntityKeyType, string>;
    keyFiltersControl: UntypedFormControl;
    private destroy$;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, dialog: MatDialog);
    ngOnInit(): void;
    ngOnDestroy(): void;
    get keyFiltersFormArray(): UntypedFormArray;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    writeValue(keyFilters: Array<KeyFilterInfo>): void;
    removeKeyFilter(index: number): void;
    addKeyFilter(): void;
    editKeyFilter(index: number): void;
    private openKeyFilterDialog;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<KeyFilterListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<KeyFilterListComponent, "tb-key-filter-list", never, { "disabled": { "alias": "disabled"; "required": false; }; "displayUserParameters": { "alias": "displayUserParameters"; "required": false; }; "allowUserDynamicSource": { "alias": "allowUserDynamicSource"; "required": false; }; "telemetryKeysOnly": { "alias": "telemetryKeysOnly"; "required": false; }; "entityId": { "alias": "entityId"; "required": false; }; }, {}, never, never, false, never>;
}
