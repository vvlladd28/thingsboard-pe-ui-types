import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { WidgetContext } from '@home/models/widget-component.models';
import { ComponentStyle } from '@shared/models/widget-settings.models';
import { Observable } from 'rxjs';
import { ImagePipe } from '@shared/pipe/image.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { BarChartWithLabelsWidgetSettings } from '@home/components/widget/lib/chart/bar-chart-with-labels-widget.models';
import { DataKey } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class BarChartWithLabelsWidgetComponent implements OnInit, OnDestroy, AfterViewInit {
    private imagePipe;
    private sanitizer;
    private renderer;
    private cd;
    chartShape: ElementRef<HTMLElement>;
    settings: BarChartWithLabelsWidgetSettings;
    ctx: WidgetContext;
    widgetTitlePanel: TemplateRef<any>;
    showLegend: boolean;
    legendClass: string;
    backgroundStyle$: Observable<ComponentStyle>;
    overlayStyle: ComponentStyle;
    padding: string;
    legendKeys: DataKey[];
    legendLabelStyle: ComponentStyle;
    disabledLegendLabelStyle: ComponentStyle;
    private timeSeriesChart;
    constructor(imagePipe: ImagePipe, sanitizer: DomSanitizer, renderer: Renderer2, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onInit(): void;
    onDataUpdated(): void;
    onLegendKeyEnter(key: DataKey): void;
    onLegendKeyLeave(key: DataKey): void;
    toggleLegendKey(key: DataKey): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BarChartWithLabelsWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BarChartWithLabelsWidgetComponent, "tb-bar-chart-with-labels-widget", never, { "ctx": "ctx"; "widgetTitlePanel": "widgetTitlePanel"; }, {}, never, never, false, never>;
}
