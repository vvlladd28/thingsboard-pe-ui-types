import { ChangeDetectorRef, DestroyRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import { DataKey, DatasourceType, JsonSettingsSchema, widgetType } from '@shared/models/widget.models';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { UtilsService } from '@core/services/utils.service';
import { DataKeysCallbacks, DataKeySettingsFunction } from '@home/components/widget/config/data-keys.component.models';
import { TimeSeriesChartYAxisId } from '@home/components/widget/lib/chart/time-series-chart.models';
import * as i0 from "@angular/core";
export declare class DataKeysPanelComponent implements ControlValueAccessor, OnInit, OnChanges, Validator {
    private fb;
    private dialog;
    private cd;
    private utils;
    private widgetConfigComponent;
    private destroyRef;
    disabled: boolean;
    panelTitle: string;
    addKeyTitle: string;
    keySettingsTitle: string;
    removeKeyTitle: string;
    noKeysText: string;
    requiredKeysText: string;
    datasourceType: DatasourceType;
    entityAliasId: string;
    deviceId: string;
    hidePanel: boolean;
    hideDataKeyColor: boolean;
    hideUnits: boolean;
    hideDecimals: boolean;
    hideDataKeyUnits: boolean;
    hideDataKeyDecimals: boolean;
    hideSourceSelection: boolean;
    timeSeriesChart: boolean;
    showTimeSeriesType: boolean;
    yAxisIds: TimeSeriesChartYAxisId[];
    dataKeyType: DataKeyType;
    keysListFormGroup: UntypedFormGroup;
    errorText: string;
    get widgetType(): widgetType;
    get callbacks(): DataKeysCallbacks;
    get hasAdditionalLatestDataKeys(): boolean;
    get datakeySettingsSchema(): JsonSettingsSchema;
    get dataKeySettingsFunction(): DataKeySettingsFunction;
    get dragEnabled(): boolean;
    get noKeys(): boolean;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, dialog: MatDialog, cd: ChangeDetectorRef, utils: UtilsService, widgetConfigComponent: WidgetConfigComponent, destroyRef: DestroyRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private updateParams;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: DataKey[] | undefined): void;
    validate(c: UntypedFormControl): {
        dataKeyRows: {
            valid: boolean;
        };
    };
    keyDrop(event: CdkDragDrop<string[]>): void;
    keysFormArray(): UntypedFormArray;
    trackByKey(index: number, keyControl: AbstractControl): any;
    removeKey(index: number): void;
    addKey(): void;
    private prepareKeysFormArray;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataKeysPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataKeysPanelComponent, "tb-data-keys-panel", never, { "disabled": { "alias": "disabled"; "required": false; }; "panelTitle": { "alias": "panelTitle"; "required": false; }; "addKeyTitle": { "alias": "addKeyTitle"; "required": false; }; "keySettingsTitle": { "alias": "keySettingsTitle"; "required": false; }; "removeKeyTitle": { "alias": "removeKeyTitle"; "required": false; }; "noKeysText": { "alias": "noKeysText"; "required": false; }; "requiredKeysText": { "alias": "requiredKeysText"; "required": false; }; "datasourceType": { "alias": "datasourceType"; "required": false; }; "entityAliasId": { "alias": "entityAliasId"; "required": false; }; "deviceId": { "alias": "deviceId"; "required": false; }; "hidePanel": { "alias": "hidePanel"; "required": false; }; "hideDataKeyColor": { "alias": "hideDataKeyColor"; "required": false; }; "hideUnits": { "alias": "hideUnits"; "required": false; }; "hideDecimals": { "alias": "hideDecimals"; "required": false; }; "hideDataKeyUnits": { "alias": "hideDataKeyUnits"; "required": false; }; "hideDataKeyDecimals": { "alias": "hideDataKeyDecimals"; "required": false; }; "hideSourceSelection": { "alias": "hideSourceSelection"; "required": false; }; "timeSeriesChart": { "alias": "timeSeriesChart"; "required": false; }; "showTimeSeriesType": { "alias": "showTimeSeriesType"; "required": false; }; "yAxisIds": { "alias": "yAxisIds"; "required": false; }; }, {}, never, never, false, never>;
}
