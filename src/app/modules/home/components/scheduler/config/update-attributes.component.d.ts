import { AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, Validator, ValidationErrors } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { SchedulerEventConfiguration } from '@shared/models/scheduler-event.models';
import { EntityType } from '@shared/models/entity-type.models';
import { AttributeScope } from '@shared/models/telemetry/telemetry.models';
import * as i0 from "@angular/core";
export declare class UpdateAttributesComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy, Validator {
    private store;
    private fb;
    modelValue: SchedulerEventConfiguration | null;
    updateAttributesFormGroup: UntypedFormGroup;
    currentGroupType: EntityType;
    attributeScopes: AttributeScope[];
    attributeScope: typeof AttributeScope;
    telemetryTypeTranslationsMap: Map<import("@shared/models/telemetry/telemetry.models").TelemetryType, string>;
    entityType: typeof EntityType;
    private destroy$;
    disabled: boolean;
    private propagateChange;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    private updateValidators;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: SchedulerEventConfiguration | null): void;
    validate(): ValidationErrors | null;
    private prepareInputConfig;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<UpdateAttributesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UpdateAttributesComponent, "tb-update-attributes-event-config", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
