import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { Datasource, DatasourceType, JsonSettingsSchema, Widget, widgetType } from '@shared/models/widget.models';
import { AlarmSearchStatus } from '@shared/models/alarm.models';
import { Dashboard } from '@shared/models/dashboard.models';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import { IAliasController } from '@core/api/widget-api.models';
import { EntityAliasSelectCallbacks } from '@home/components/alias/entity-alias-select.component.models';
import { FilterSelectCallbacks } from '@home/components/filter/filter-select.component.models';
import { DataKeysCallbacks, DataKeySettingsFunction } from '@home/components/widget/config/data-keys.component.models';
import { EntityType } from '@shared/models/entity-type.models';
import { DatasourcesComponent } from '@home/components/widget/config/datasources.component';
import { WidgetConfigCallbacks } from '@home/components/widget/config/widget-config.component.models';
import * as i0 from "@angular/core";
export declare class DatasourceComponent implements ControlValueAccessor, OnInit, Validator {
    private fb;
    private datasourcesComponent;
    private widgetConfigComponent;
    get basicMode(): boolean;
    get widgetType(): widgetType;
    get aliasController(): IAliasController;
    get entityAliasSelectCallbacks(): EntityAliasSelectCallbacks;
    get filterSelectCallbacks(): FilterSelectCallbacks;
    get callbacks(): WidgetConfigCallbacks;
    get dataKeysCallbacks(): DataKeysCallbacks;
    get hasAdditionalLatestDataKeys(): boolean;
    get dataKeysOptional(): boolean;
    get datasourcesOptional(): boolean;
    get maxDataKeys(): number;
    get dataKeySettingsSchema(): JsonSettingsSchema;
    get dataKeySettingsDirective(): string;
    get latestDataKeySettingsSchema(): JsonSettingsSchema;
    get latestDataKeySettingsDirective(): string;
    get dataKeySettingsFunction(): DataKeySettingsFunction;
    get dashboard(): Dashboard;
    get widget(): Widget;
    get hideDatasourceLabel(): boolean;
    get displayDatasourceFilterForBasicMode(): boolean;
    get hideDataKeyLabel(): boolean;
    get hideDataKeyColor(): boolean;
    get hideDataKeyUnits(): boolean;
    get hideDataKeyDecimals(): boolean;
    get hideDataKeys(): boolean;
    get hideLatestDataKeys(): boolean;
    disabled: boolean;
    widgetTypes: typeof widgetType;
    entityType: typeof EntityType;
    datasourceType: typeof DatasourceType;
    datasourceTypes: Array<DatasourceType>;
    datasourceTypesTranslations: Map<DatasourceType, string>;
    alarmSearchStatus: typeof AlarmSearchStatus;
    datasourceFormGroup: UntypedFormGroup;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, datasourcesComponent: DatasourcesComponent, widgetConfigComponent: WidgetConfigComponent);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnInit(): void;
    writeValue(datasource?: Datasource): void;
    validate(c: UntypedFormControl): {
        datasource: {
            valid: boolean;
        };
    };
    isDataKeysOptional(type?: DatasourceType): boolean;
    private datasourceUpdated;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatasourceComponent, [null, { optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatasourceComponent, "tb-datasource", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}
