import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { BasicWidgetConfigComponent } from '@home/components/widget/config/widget-config.component.models';
import { WidgetConfigComponentData } from '@home/models/widget-component.models';
import { DataKey, Datasource } from '@shared/models/widget.models';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import { DoughnutLayout, DoughnutTooltipValueType } from '@home/components/widget/lib/chart/doughnut-widget.models';
import * as i0 from "@angular/core";
export declare class DoughnutBasicConfigComponent extends BasicWidgetConfigComponent {
    protected store: Store<AppState>;
    protected widgetConfigComponent: WidgetConfigComponent;
    private fb;
    get datasource(): Datasource;
    get displayTimewindowConfig(): boolean;
    onlyHistoryTimewindow(): boolean;
    doughnutLayouts: DoughnutLayout[];
    doughnutLayoutTranslationMap: Map<DoughnutLayout, string>;
    horizontal: boolean;
    doughnutLayoutImageMap: Map<DoughnutLayout, string>;
    legendPositions: import("@shared/models/widget.models").LegendPosition[];
    legendPositionTranslationMap: Map<import("@shared/models/widget.models").LegendPosition, string>;
    doughnutTooltipValueTypes: DoughnutTooltipValueType[];
    doughnutTooltipValueTypeTranslationMap: Map<DoughnutTooltipValueType, string>;
    doughnutWidgetConfigForm: UntypedFormGroup;
    valuePreviewFn: any;
    tooltipValuePreviewFn: any;
    get totalEnabled(): boolean;
    constructor(store: Store<AppState>, widgetConfigComponent: WidgetConfigComponent, fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected setupConfig(widgetConfig: WidgetConfigComponentData): void;
    protected defaultDataKeys(configData: WidgetConfigComponentData): DataKey[];
    protected onConfigSet(configData: WidgetConfigComponentData): void;
    protected prepareOutputConfig(config: any): WidgetConfigComponentData;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean, trigger?: string): void;
    private getSeries;
    private setSeries;
    private getCardButtons;
    private setCardButtons;
    private _valuePreviewFn;
    private _tooltipValuePreviewFn;
    static ɵfac: i0.ɵɵFactoryDeclaration<DoughnutBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DoughnutBasicConfigComponent, "tb-doughnut-basic-config", never, {}, {}, never, never, false, never>;
}
