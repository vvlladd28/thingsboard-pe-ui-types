import { BackgroundSettings, Font } from '@shared/models/widget-settings.models';
import { LegendPosition } from '@shared/models/widget.models';
import { DeepPartial } from '@shared/models/common';
import { TimeSeriesChartGridSettings, TimeSeriesChartKeySettings, TimeSeriesChartNoAggregationBarWidthSettings, TimeSeriesChartSettings, TimeSeriesChartThreshold, TimeSeriesChartTooltipWidgetSettings, TimeSeriesChartXAxisSettings, TimeSeriesChartYAxisSettings } from '@home/components/widget/lib/chart/time-series-chart.models';
import { ChartAnimationSettings, ChartFillSettings } from '@home/components/widget/lib/chart/chart.models';
export interface BarChartWithLabelsWidgetSettings extends TimeSeriesChartTooltipWidgetSettings {
    dataZoom: boolean;
    showBarLabel: boolean;
    barLabelFont: Font;
    barLabelColor: string;
    showBarValue: boolean;
    barValueFont: Font;
    barValueColor: string;
    showBarBorder: boolean;
    barBorderWidth: number;
    barBorderRadius: number;
    barBackgroundSettings: ChartFillSettings;
    noAggregationBarWidthSettings: TimeSeriesChartNoAggregationBarWidthSettings;
    grid: TimeSeriesChartGridSettings;
    yAxis: TimeSeriesChartYAxisSettings;
    xAxis: TimeSeriesChartXAxisSettings;
    animation: ChartAnimationSettings;
    thresholds: TimeSeriesChartThreshold[];
    showLegend: boolean;
    legendPosition: LegendPosition;
    legendLabelFont: Font;
    legendLabelColor: string;
    background: BackgroundSettings;
    padding: string;
}
export declare const barChartWithLabelsDefaultSettings: BarChartWithLabelsWidgetSettings;
export declare const barChartWithLabelsTimeSeriesSettings: (settings: BarChartWithLabelsWidgetSettings) => DeepPartial<TimeSeriesChartSettings>;
export declare const barChartWithLabelsTimeSeriesKeySettings: (settings: BarChartWithLabelsWidgetSettings, decimals: number) => DeepPartial<TimeSeriesChartKeySettings>;