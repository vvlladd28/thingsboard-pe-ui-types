import { OnDestroy } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormArray, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { Instance, ResourceSettingTelemetry } from './lwm2m-profile-config.models';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class Lwm2mObserveAttrTelemetryInstancesComponent implements ControlValueAccessor, Validator, OnDestroy {
    private fb;
    translate: TranslateService;
    instancesFormGroup: FormGroup;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    private valueChange$;
    private propagateChange;
    constructor(fb: FormBuilder, translate: TranslateService);
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: Instance[]): void;
    validate(control: AbstractControl): ValidationErrors | null;
    get instancesFormArray(): FormArray;
    private updateInstances;
    private createInstanceFormGroup;
    private updateModel;
    changeInstanceResourcesCheckBox: (value: boolean, instance: AbstractControl, type: ResourceSettingTelemetry) => void;
    private updateValidators;
    trackByParams: (index: number, instance: Instance) => number;
    getIndeterminate: (instance: AbstractControl, type: ResourceSettingTelemetry) => boolean;
    getChecked: (instance: AbstractControl, type: ResourceSettingTelemetry) => boolean;
    disableObserve(instance: AbstractControl): boolean;
    get isExpend(): boolean;
    getNameInstance(instance: Instance): string;
    disableObserveInstance: (instance: AbstractControl) => boolean;
    observeInstance: (instance: AbstractControl) => boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<Lwm2mObserveAttrTelemetryInstancesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Lwm2mObserveAttrTelemetryInstancesComponent, "tb-profile-lwm2m-observe-attr-telemetry-instances", never, { "required": "required"; "disabled": "disabled"; }, {}, never, never>;
}
