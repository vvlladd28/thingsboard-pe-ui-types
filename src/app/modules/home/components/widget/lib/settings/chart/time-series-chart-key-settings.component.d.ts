import { WidgetSettings, WidgetSettingsComponent } from '@shared/models/widget.models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TimeSeriesChartSeriesType, TimeSeriesChartType, TimeSeriesChartYAxisId } from '@home/components/widget/lib/chart/time-series-chart.models';
import { WidgetConfigComponentData } from '@home/models/widget-component.models';
import * as i0 from "@angular/core";
export declare class TimeSeriesChartKeySettingsComponent extends WidgetSettingsComponent {
    protected store: Store<AppState>;
    private fb;
    TimeSeriesChartType: typeof TimeSeriesChartType;
    timeSeriesChartTypeTranslations: Map<TimeSeriesChartType, string>;
    TimeSeriesChartSeriesType: typeof TimeSeriesChartSeriesType;
    timeSeriesChartSeriesTypes: TimeSeriesChartSeriesType[];
    timeSeriesChartSeriesTypeTranslations: Map<TimeSeriesChartSeriesType, string>;
    timeSeriesChartKeySettingsForm: UntypedFormGroup;
    chartType: TimeSeriesChartType;
    yAxisIds: TimeSeriesChartYAxisId[];
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    protected settingsForm(): UntypedFormGroup;
    protected onWidgetConfigSet(widgetConfig: WidgetConfigComponentData): void;
    protected defaultSettings(): WidgetSettings;
    protected onSettingsSet(settings: WidgetSettings): void;
    protected validatorTriggers(): string[];
    protected updateValidators(_emitEvent: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeSeriesChartKeySettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeSeriesChartKeySettingsComponent, "tb-time-series-chart-key-settings", never, {}, {}, never, never, false, never>;
}
