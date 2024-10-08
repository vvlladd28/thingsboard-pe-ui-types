import { ChangeDetectorRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import { DataKey, DatasourceType, widgetType } from '@shared/models/widget.models';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { UtilsService } from '@core/services/utils.service';
import { DataKeysCallbacks } from '@home/components/widget/config/data-keys.component.models';
import * as i0 from "@angular/core";
export declare class AggregatedDataKeysPanelComponent implements ControlValueAccessor, OnInit, OnChanges {
    private fb;
    private dialog;
    private cd;
    private utils;
    private widgetConfigComponent;
    disabled: boolean;
    datasourceType: DatasourceType;
    keyName: string;
    dataKeyType: DataKeyType;
    keysListFormGroup: UntypedFormGroup;
    get widgetType(): widgetType;
    get callbacks(): DataKeysCallbacks;
    get noKeys(): boolean;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, dialog: MatDialog, cd: ChangeDetectorRef, utils: UtilsService, widgetConfigComponent: WidgetConfigComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private updateParams;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: DataKey[] | undefined): void;
    keysFormArray(): UntypedFormArray;
    trackByKey(index: number, keyControl: AbstractControl): any;
    removeKey(index: number): void;
    addKey(): void;
    private prepareKeysFormArray;
    static ɵfac: i0.ɵɵFactoryDeclaration<AggregatedDataKeysPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AggregatedDataKeysPanelComponent, "tb-aggregated-data-keys-panel", never, { "disabled": { "alias": "disabled"; "required": false; }; "datasourceType": { "alias": "datasourceType"; "required": false; }; "keyName": { "alias": "keyName"; "required": false; }; }, {}, never, never, false, never>;
}
