import { BaseData, ExportableEntity } from '@shared/models/base-data';
import { TenantId } from '@shared/models/id/tenant-id';
import { WidgetTypeId } from '@shared/models/id/widget-type-id';
import { AggregationType, ComparisonDuration, Timewindow } from '@shared/models/time/time.models';
import { EntityType } from '@shared/models/entity-type.models';
import { DataKeyType } from './telemetry/telemetry.models';
import { EntityId } from '@shared/models/id/entity-id';
import { AlarmFilter, AlarmFilterConfig, EntityDataPageLink, EntityFilter, KeyFilter } from '@shared/models/query/query.models';
import { PopoverPlacement } from '@shared/components/popover.models';
import { PageComponent } from '@shared/components/page.component';
import { AfterViewInit, DestroyRef, EventEmitter, OnInit, Type } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Dashboard } from '@shared/models/dashboard.models';
import { IAliasController } from '@core/api/widget-api.models';
import { WidgetConfigComponentData } from '@home/models/widget-component.models';
import { ComponentStyle, Font, TimewindowStyle } from '@shared/models/widget-settings.models';
import { HasTenantId, HasVersion } from '@shared/models/entity.models';
import { DataKeysCallbacks, DataKeySettingsFunction } from '@home/components/widget/config/data-keys.component.models';
import { WidgetConfigCallbacks } from '@home/components/widget/config/widget-config.component.models';
import { TbFunction } from '@shared/models/js-function.models';
import * as i0 from "@angular/core";
export declare enum widgetType {
    timeseries = "timeseries",
    latest = "latest",
    rpc = "rpc",
    alarm = "alarm",
    static = "static"
}
export interface WidgetTypeTemplate {
    fullFqn: string;
}
export interface WidgetTypeData {
    name: string;
    icon: string;
    configHelpLinkId: string;
    template: WidgetTypeTemplate;
}
export declare const widgetTypesData: Map<widgetType, WidgetTypeData>;
export interface WidgetResource {
    url: string;
    isModule?: boolean;
}
export interface WidgetActionSource {
    name: string;
    value: string;
    multiple: boolean;
    hasShowCondition?: boolean;
}
export declare const widgetActionSources: {
    [acionSourceId: string]: WidgetActionSource;
};
export interface WidgetTypeDescriptor {
    type: widgetType;
    resources: Array<WidgetResource>;
    templateHtml: string;
    templateCss: string;
    controllerScript: TbFunction;
    settingsSchema?: string | any;
    dataKeySettingsSchema?: string | any;
    latestDataKeySettingsSchema?: string | any;
    settingsDirective?: string;
    dataKeySettingsDirective?: string;
    latestDataKeySettingsDirective?: string;
    hasBasicMode?: boolean;
    basicModeDirective?: string;
    defaultConfig: string;
    sizeX: number;
    sizeY: number;
}
export interface WidgetTypeParameters {
    useCustomDatasources?: boolean;
    maxDatasources?: number;
    maxDataKeys?: number;
    datasourcesOptional?: boolean;
    dataKeysOptional?: boolean;
    stateData?: boolean;
    hasDataPageLink?: boolean;
    singleEntity?: boolean;
    hasAdditionalLatestDataKeys?: boolean;
    warnOnPageDataOverflow?: boolean;
    ignoreDataUpdateOnIntervalTick?: boolean;
    processNoDataByWidget?: boolean;
    previewWidth?: string;
    previewHeight?: string;
    embedTitlePanel?: boolean;
    overflowVisible?: boolean;
    hideDataSettings?: boolean;
    defaultDataKeysFunction?: (configComponent: any, configData: any) => DataKey[];
    defaultLatestDataKeysFunction?: (configComponent: any, configData: any) => DataKey[];
    dataKeySettingsFunction?: DataKeySettingsFunction;
    displayRpcMessageToast?: boolean;
    targetDeviceOptional?: boolean;
}
export interface WidgetControllerDescriptor {
    widgetTypeFunction?: any;
    settingsSchema?: string | any;
    dataKeySettingsSchema?: string | any;
    latestDataKeySettingsSchema?: string | any;
    typeParameters?: WidgetTypeParameters;
    actionSources?: {
        [actionSourceId: string]: WidgetActionSource;
    };
}
export interface BaseWidgetType extends BaseData<WidgetTypeId>, HasTenantId, HasVersion {
    tenantId: TenantId;
    fqn: string;
    name: string;
    deprecated: boolean;
    scada: boolean;
}
export declare const fullWidgetTypeFqn: (type: BaseWidgetType) => string;
export declare const widgetTypeFqn: (fullFqn: string) => string;
export declare const isValidWidgetFullFqn: (fullFqn: string) => boolean;
export interface WidgetType extends BaseWidgetType {
    descriptor: WidgetTypeDescriptor;
}
export interface WidgetTypeInfo extends BaseWidgetType {
    image: string;
    description: string;
    tags: string[];
    widgetType: widgetType;
}
export interface WidgetTypeDetails extends WidgetType, ExportableEntity<WidgetTypeId> {
    image: string;
    description: string;
    tags: string[];
    resources?: Array<any>;
}
export declare enum DeprecatedFilter {
    ALL = "ALL",
    ACTUAL = "ACTUAL",
    DEPRECATED = "DEPRECATED"
}
export declare enum LegendDirection {
    column = "column",
    row = "row"
}
export declare const legendDirectionTranslationMap: Map<LegendDirection, string>;
export declare enum LegendPosition {
    top = "top",
    bottom = "bottom",
    left = "left",
    right = "right"
}
export declare const legendPositions: LegendPosition[];
export declare const legendPositionTranslationMap: Map<LegendPosition, string>;
export interface LegendConfig {
    position: LegendPosition;
    direction?: LegendDirection;
    sortDataKeys: boolean;
    showMin: boolean;
    showMax: boolean;
    showAvg: boolean;
    showTotal: boolean;
    showLatest: boolean;
}
export declare const defaultLegendConfig: (wType: widgetType) => LegendConfig;
export declare enum ComparisonResultType {
    PREVIOUS_VALUE = "PREVIOUS_VALUE",
    DELTA_ABSOLUTE = "DELTA_ABSOLUTE",
    DELTA_PERCENT = "DELTA_PERCENT"
}
export declare const comparisonResultTypeTranslationMap: Map<ComparisonResultType, string>;
export interface KeyInfo {
    name: string;
    aggregationType?: AggregationType;
    comparisonEnabled?: boolean;
    timeForComparison?: ComparisonDuration;
    comparisonCustomIntervalValue?: number;
    comparisonResultType?: ComparisonResultType;
    label?: string;
    color?: string;
    funcBody?: TbFunction;
    postFuncBody?: TbFunction;
    units?: string;
    decimals?: number;
}
export declare const dataKeyAggregationTypeHintTranslationMap: Map<AggregationType, string>;
export interface DataKey extends KeyInfo {
    type: DataKeyType;
    pattern?: string;
    title?: string;
    settings?: any;
    usePostProcessing?: boolean;
    hidden?: boolean;
    inLegend?: boolean;
    isAdditional?: boolean;
    origDataKeyIndex?: number;
    _hash?: number;
}
export type CellClickColumnInfo = Pick<DataKey, 'name' | 'label'>;
export declare enum DataKeyConfigMode {
    general = "general",
    advanced = "advanced"
}
export declare enum DatasourceType {
    function = "function",
    device = "device",
    entity = "entity",
    entityCount = "entityCount",
    alarmCount = "alarmCount"
}
export declare const datasourceTypeTranslationMap: Map<DatasourceType, string>;
export interface Datasource {
    type?: DatasourceType | any;
    name?: string;
    aliasName?: string;
    dataKeys?: Array<DataKey>;
    latestDataKeys?: Array<DataKey>;
    entityType?: EntityType;
    entityId?: string;
    entityName?: string;
    deviceId?: string;
    entityAliasId?: string;
    filterId?: string;
    unresolvedStateEntity?: boolean;
    dataReceived?: boolean;
    entity?: BaseData<EntityId>;
    entityLabel?: string;
    entityDescription?: string;
    generated?: boolean;
    isAdditional?: boolean;
    origDatasourceIndex?: number;
    pageLink?: EntityDataPageLink;
    keyFilters?: Array<KeyFilter>;
    entityFilter?: EntityFilter;
    alarmFilterConfig?: AlarmFilterConfig;
    alarmFilter?: AlarmFilter;
    dataKeyStartIndex?: number;
    latestDataKeyStartIndex?: number;
    [key: string]: any;
}
export declare const datasourceValid: (datasource: Datasource) => boolean;
export declare enum TargetDeviceType {
    device = "device",
    entity = "entity"
}
export interface TargetDevice {
    type?: TargetDeviceType;
    deviceId?: string;
    entityAliasId?: string;
}
export declare const targetDeviceValid: (targetDevice?: TargetDevice) => boolean;
export declare const datasourcesHasAggregation: (datasources?: Array<Datasource>) => boolean;
export declare const datasourcesHasOnlyComparisonAggregation: (datasources?: Array<Datasource>) => boolean;
export interface FormattedData {
    $datasource: Datasource;
    entityName: string;
    deviceName: string;
    entityId: string;
    entityType: EntityType;
    entityLabel: string;
    entityDescription: string;
    aliasName: string;
    dsIndex: number;
    dsName: string;
    deviceType: string;
    [key: string]: any;
}
export interface ReplaceInfo {
    variable: string;
    valDec?: number;
    dataKeyName: string;
}
export type DataEntry = [number, any, [number, number]?];
export type DataSet = DataEntry[];
export interface IndexedData {
    [id: number]: DataSet;
}
export interface DataSetHolder {
    data: DataSet;
}
export interface DatasourceData extends DataSetHolder {
    datasource: Datasource;
    dataKey: DataKey;
}
export interface LegendKey {
    dataKey: DataKey;
    dataIndex: number;
}
export interface LegendKeyData {
    min: string;
    max: string;
    avg: string;
    total: string;
    latest: string;
    hidden: boolean;
}
export interface LegendData {
    keys: Array<LegendKey>;
    data: Array<LegendKeyData>;
}
export declare enum WidgetActionType {
    doNothing = "doNothing",
    openDashboardState = "openDashboardState",
    updateDashboardState = "updateDashboardState",
    openDashboard = "openDashboard",
    custom = "custom",
    customPretty = "customPretty",
    mobileAction = "mobileAction",
    openURL = "openURL"
}
export declare enum WidgetMobileActionType {
    takePictureFromGallery = "takePictureFromGallery",
    takePhoto = "takePhoto",
    mapDirection = "mapDirection",
    mapLocation = "mapLocation",
    scanQrCode = "scanQrCode",
    makePhoneCall = "makePhoneCall",
    getLocation = "getLocation",
    takeScreenshot = "takeScreenshot"
}
export declare const widgetActionTypes: WidgetActionType[];
export declare const widgetActionTypeTranslationMap: Map<WidgetActionType, string>;
export declare const widgetMobileActionTypeTranslationMap: Map<WidgetMobileActionType, string>;
export declare enum WidgetExportType {
    csv = "csv",
    xls = "xls",
    xlsx = "xlsx"
}
export declare const widgetExportTypeTranslationMap: Map<WidgetExportType, string>;
export interface MobileLaunchResult {
    launched: boolean;
}
export interface MobileImageResult {
    imageUrl: string;
}
export interface MobileQrCodeResult {
    code: string;
    format: string;
}
export interface MobileLocationResult {
    latitude: number;
    longitude: number;
}
export type MobileActionResult = MobileLaunchResult & MobileImageResult & MobileQrCodeResult & MobileLocationResult;
export interface WidgetMobileActionResult<T extends MobileActionResult> {
    result?: T;
    hasResult: boolean;
    error?: string;
    hasError: boolean;
}
export interface ProcessImageDescriptor {
    processImageFunction: TbFunction;
}
export interface ProcessLaunchResultDescriptor {
    processLaunchResultFunction?: TbFunction;
}
export interface LaunchMapDescriptor extends ProcessLaunchResultDescriptor {
    getLocationFunction: TbFunction;
}
export interface ScanQrCodeDescriptor {
    processQrCodeFunction: TbFunction;
}
export interface MakePhoneCallDescriptor extends ProcessLaunchResultDescriptor {
    getPhoneNumberFunction: TbFunction;
}
export interface GetLocationDescriptor {
    processLocationFunction: TbFunction;
}
export type WidgetMobileActionDescriptors = ProcessImageDescriptor & LaunchMapDescriptor & ScanQrCodeDescriptor & MakePhoneCallDescriptor & GetLocationDescriptor;
export interface WidgetMobileActionDescriptor extends WidgetMobileActionDescriptors {
    type: WidgetMobileActionType;
    handleErrorFunction?: TbFunction;
    handleEmptyResultFunction?: TbFunction;
}
export interface CustomActionDescriptor {
    customFunction?: TbFunction;
    customResources?: Array<WidgetResource>;
    customHtml?: string;
    customCss?: string;
    customImports?: Type<any>[];
}
export interface WidgetAction extends CustomActionDescriptor {
    type: WidgetActionType;
    targetDashboardId?: string;
    targetDashboardStateId?: string;
    openRightLayout?: boolean;
    openNewBrowserTab?: boolean;
    openInPopover?: boolean;
    popoverHideDashboardToolbar?: boolean;
    popoverPreferredPlacement?: PopoverPlacement;
    popoverHideOnClickOutside?: boolean;
    popoverWidth?: string;
    popoverHeight?: string;
    popoverStyle?: {
        [klass: string]: any;
    };
    openInSeparateDialog?: boolean;
    dialogTitle?: string;
    dialogHideDashboardToolbar?: boolean;
    dialogWidth?: number;
    dialogHeight?: number;
    setEntityId?: boolean;
    stateEntityParamName?: string;
    mobileAction?: WidgetMobileActionDescriptor;
    url?: string;
}
export interface WidgetActionDescriptor extends WidgetAction {
    id: string;
    name: string;
    icon: string;
    displayName?: string;
    useShowWidgetActionFunction?: boolean;
    showWidgetActionFunction?: TbFunction;
    columnIndex?: number;
}
export declare const actionDescriptorToAction: (descriptor: WidgetActionDescriptor) => WidgetAction;
export declare const defaultWidgetAction: (isEntityGroup?: boolean, setEntityId?: boolean) => WidgetAction;
export interface WidgetComparisonSettings {
    comparisonEnabled?: boolean;
    timeForComparison?: ComparisonDuration;
    comparisonCustomIntervalValue?: number;
}
export interface DataKeyComparisonSettings {
    showValuesForComparison: boolean;
    comparisonValuesLabel: string;
    color: string;
}
export interface DataKeySettingsWithComparison {
    comparisonSettings?: DataKeyComparisonSettings;
}
export declare const isDataKeySettingsWithComparison: (settings: any) => settings is DataKeySettingsWithComparison;
export interface WidgetSettings {
    [key: string]: any;
}
export declare enum WidgetConfigMode {
    basic = "basic",
    advanced = "advanced"
}
export interface WidgetConfig {
    configMode?: WidgetConfigMode;
    title?: string;
    titleFont?: Font;
    titleColor?: string;
    titleIcon?: string;
    showTitle?: boolean;
    showTitleIcon?: boolean;
    iconColor?: string;
    iconSize?: string;
    titleTooltip?: string;
    dropShadow?: boolean;
    enableFullscreen?: boolean;
    enableDataExport?: boolean;
    useDashboardTimewindow?: boolean;
    displayTimewindow?: boolean;
    timewindow?: Timewindow;
    timewindowStyle?: TimewindowStyle;
    resizable?: boolean;
    preserveAspectRatio?: boolean;
    desktopHide?: boolean;
    mobileHide?: boolean;
    mobileHeight?: number;
    mobileOrder?: number;
    color?: string;
    backgroundColor?: string;
    padding?: string;
    margin?: string;
    borderRadius?: string;
    widgetStyle?: ComponentStyle;
    widgetCss?: string;
    titleStyle?: ComponentStyle;
    units?: string;
    decimals?: number;
    noDataDisplayMessage?: string;
    pageSize?: number;
    actions?: {
        [actionSourceId: string]: Array<WidgetActionDescriptor>;
    };
    settings?: WidgetSettings;
    alarmSource?: Datasource;
    alarmFilterConfig?: AlarmFilterConfig;
    datasources?: Array<Datasource>;
    targetDevice?: TargetDevice;
    [key: string]: any;
}
export interface BaseWidgetInfo {
    id?: string;
    typeFullFqn: string;
    type: widgetType;
}
export interface Widget extends BaseWidgetInfo, ExportableEntity<WidgetTypeId> {
    typeId?: WidgetTypeId;
    sizeX: number;
    sizeY: number;
    row: number;
    col: number;
    config: WidgetConfig;
}
export interface WidgetInfo extends BaseWidgetInfo {
    title: string;
    image?: string;
    description?: string;
    deprecated?: boolean;
}
export interface GroupInfo {
    formIndex: number;
    GroupTitle: string;
}
export interface JsonSchema {
    type: string;
    title?: string;
    properties: {
        [key: string]: any;
    };
    required?: string[];
}
export interface JsonSettingsSchema {
    schema?: JsonSchema;
    form?: any[];
    groupInfoes?: GroupInfo[];
}
export interface WidgetPosition {
    row: number;
    column: number;
}
export interface WidgetSize {
    sizeX: number;
    sizeY: number;
    preserveAspectRatio: boolean;
    resizable: boolean;
}
export interface IWidgetSettingsComponent {
    aliasController: IAliasController;
    callbacks: WidgetConfigCallbacks;
    dataKeyCallbacks: DataKeysCallbacks;
    dashboard: Dashboard;
    widget: Widget;
    widgetConfig: WidgetConfigComponentData;
    functionScopeVariables: string[];
    settings: WidgetSettings;
    settingsChanged: Observable<WidgetSettings>;
    validateSettings(): boolean;
    [key: string]: any;
}
export declare abstract class WidgetSettingsComponent extends PageComponent implements IWidgetSettingsComponent, OnInit, AfterViewInit {
    protected store: Store<AppState>;
    aliasController: IAliasController;
    callbacks: WidgetConfigCallbacks;
    dataKeyCallbacks: DataKeysCallbacks;
    dashboard: Dashboard;
    widget: Widget;
    widgetConfigValue: WidgetConfigComponentData;
    set widgetConfig(value: WidgetConfigComponentData);
    get widgetConfig(): WidgetConfigComponentData;
    functionScopeVariables: string[];
    settingsValue: WidgetSettings;
    private settingsSet;
    set settings(value: WidgetSettings);
    get settings(): WidgetSettings;
    settingsChangedEmitter: EventEmitter<WidgetSettings>;
    settingsChanged: Observable<WidgetSettings>;
    protected destroyRef: DestroyRef;
    protected constructor(store: Store<AppState>);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    validateSettings(): boolean;
    protected setupSettings(settings: WidgetSettings): void;
    protected updateSettings(settings: WidgetSettings): void;
    protected updateValidators(emitEvent: boolean, trigger?: string): void;
    protected validatorTriggers(): string[];
    protected onSettingsChanged(updated: WidgetSettings): void;
    protected doUpdateSettings(settingsForm: UntypedFormGroup, settings: WidgetSettings): void;
    protected prepareInputSettings(settings: WidgetSettings): WidgetSettings;
    protected prepareOutputSettings(settings: any): WidgetSettings;
    protected abstract settingsForm(): UntypedFormGroup;
    protected abstract onSettingsSet(settings: WidgetSettings): any;
    protected defaultSettings(): WidgetSettings;
    protected onWidgetConfigSet(widgetConfig: WidgetConfigComponentData): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetSettingsComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<WidgetSettingsComponent, never, never, {}, {}, never, never, false, never>;
}
