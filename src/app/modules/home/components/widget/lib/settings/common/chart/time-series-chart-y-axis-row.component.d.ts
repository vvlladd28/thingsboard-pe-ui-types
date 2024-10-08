import { ChangeDetectorRef, EventEmitter, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AxisPosition, TimeSeriesChartYAxisSettings } from '@home/components/widget/lib/chart/time-series-chart.models';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class TimeSeriesChartYAxisRowComponent implements ControlValueAccessor, OnInit {
    private fb;
    private translate;
    private popoverService;
    private renderer;
    private viewContainerRef;
    private cd;
    axisPositions: AxisPosition[];
    timeSeriesAxisPositionTranslations: Map<AxisPosition, string>;
    disabled: boolean;
    advanced: boolean;
    axisRemoved: EventEmitter<any>;
    axisFormGroup: UntypedFormGroup;
    modelValue: TimeSeriesChartYAxisSettings;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, translate: TranslateService, popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: TimeSeriesChartYAxisSettings): void;
    editAxis($event: Event, matButton: MatButton): void;
    private updateValidators;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeSeriesChartYAxisRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeSeriesChartYAxisRowComponent, "tb-time-series-chart-y-axis-row", never, { "disabled": { "alias": "disabled"; "required": false; }; "advanced": { "alias": "advanced"; "required": false; }; }, { "axisRemoved": "axisRemoved"; }, never, never, false, never>;
}
