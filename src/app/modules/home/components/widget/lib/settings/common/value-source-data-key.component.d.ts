import { ChangeDetectorRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { IAliasController } from '@core/api/widget-api.models';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { Datasource, DatasourceType } from '@app/shared/models/widget.models';
import { DataKeysCallbacks } from '@home/components/widget/config/data-keys.component.models';
import { ValueSourceConfig, ValueSourceType } from '@shared/models/widget-settings.models';
import * as i0 from "@angular/core";
export declare class ValueSourceDataKeyComponent extends PageComponent implements OnInit, ControlValueAccessor {
    protected store: Store<AppState>;
    private fb;
    private cd;
    dataKeyType: typeof DataKeyType;
    datasourceType: typeof DatasourceType;
    valueSourceDataKeyType: typeof ValueSourceType;
    valueSourceDataKeyTypes: ValueSourceType[];
    valueSourceDataKeyTypeTranslation: Map<ValueSourceType, string>;
    disabled: boolean;
    aliasController: IAliasController;
    dataKeyCallbacks: DataKeysCallbacks;
    datasource: Datasource;
    valueSourceFormGroup: UntypedFormGroup;
    latestKeyFormControl: UntypedFormControl;
    entityKeyFormControl: UntypedFormControl;
    private modelValue;
    private propagateChange;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder, cd: ChangeDetectorRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: ValueSourceConfig): void;
    private updateModel;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<ValueSourceDataKeyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ValueSourceDataKeyComponent, "tb-value-source-data-key", never, { "disabled": { "alias": "disabled"; "required": false; }; "aliasController": { "alias": "aliasController"; "required": false; }; "dataKeyCallbacks": { "alias": "dataKeyCallbacks"; "required": false; }; "datasource": { "alias": "datasource"; "required": false; }; }, {}, never, never, false, never>;
}
