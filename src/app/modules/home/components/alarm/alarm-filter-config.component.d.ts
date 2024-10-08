import { ElementRef, InjectionToken, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AlarmFilterConfig } from '@shared/models/query/query.models';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { AlarmSearchStatus, AlarmSeverity } from '@shared/models/alarm.models';
import { TranslateService } from '@ngx-translate/core';
import { EntityType } from '@shared/models/entity-type.models';
import { UtilsService } from '@core/services/utils.service';
import * as i0 from "@angular/core";
export declare const ALARM_FILTER_CONFIG_DATA: InjectionToken<any>;
export interface AlarmFilterConfigData {
    panelMode: boolean;
    userMode: boolean;
    alarmFilterConfig: AlarmFilterConfig;
    initialAlarmFilterConfig?: AlarmFilterConfig;
}
export declare class AlarmFilterConfigComponent implements OnInit, OnDestroy, ControlValueAccessor {
    private data;
    private overlayRef;
    private fb;
    private translate;
    private overlay;
    private nativeElement;
    private viewContainerRef;
    private utils;
    alarmFilterPanel: TemplateRef<any>;
    disabled: boolean;
    buttonMode: boolean;
    userMode: boolean;
    propagatedFilter: boolean;
    initialAlarmFilterConfig: AlarmFilterConfig;
    panelMode: boolean;
    alarmSearchStatuses: AlarmSearchStatus[];
    alarmSearchStatusTranslationMap: Map<AlarmSearchStatus, string>;
    alarmSeverities: string[];
    alarmSeverityEnum: typeof AlarmSeverity;
    alarmSeverityTranslationMap: Map<AlarmSeverity, string>;
    buttonDisplayValue: any;
    alarmFilterConfigForm: UntypedFormGroup;
    alarmFilterOverlayRef: OverlayRef;
    panelResult: AlarmFilterConfig;
    entityType: typeof EntityType;
    private alarmFilterConfig;
    private resizeWindows;
    private propagateChange;
    constructor(data: AlarmFilterConfigData | undefined, overlayRef: OverlayRef, fb: UntypedFormBuilder, translate: TranslateService, overlay: Overlay, nativeElement: ElementRef, viewContainerRef: ViewContainerRef, utils: UtilsService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(alarmFilterConfig?: AlarmFilterConfig): void;
    toggleAlarmFilterPanel($event: Event): void;
    cancel(): void;
    update(): void;
    reset(): void;
    private updateAlarmConfigForm;
    private alarmConfigUpdated;
    private alarmFilterConfigFromFormValue;
    private updateButtonDisplayValue;
    private customTranslate;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmFilterConfigComponent, [{ optional: true; }, { optional: true; }, null, null, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmFilterConfigComponent, "tb-alarm-filter-config", never, { "disabled": { "alias": "disabled"; "required": false; }; "buttonMode": { "alias": "buttonMode"; "required": false; }; "userMode": { "alias": "userMode"; "required": false; }; "propagatedFilter": { "alias": "propagatedFilter"; "required": false; }; "initialAlarmFilterConfig": { "alias": "initialAlarmFilterConfig"; "required": false; }; }, {}, never, never, false, never>;
}
