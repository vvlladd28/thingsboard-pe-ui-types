import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { BasicWidgetConfigComponent } from '@home/components/widget/config/widget-config.component.models';
import { WidgetConfigComponentData } from '@home/models/widget-component.models';
import { TargetDevice } from '@shared/models/widget.models';
import { WidgetConfigComponent } from '@home/components/widget/widget-config.component';
import { ValueType } from '@shared/models/constants';
import { SliderLayout } from '@home/components/widget/lib/rpc/slider-widget.models';
import * as i0 from "@angular/core";
export declare class SliderBasicConfigComponent extends BasicWidgetConfigComponent {
    protected store: Store<AppState>;
    protected widgetConfigComponent: WidgetConfigComponent;
    private fb;
    get targetDevice(): TargetDevice;
    sliderLayout: typeof SliderLayout;
    sliderLayouts: SliderLayout[];
    sliderLayoutTranslationMap: Map<SliderLayout, string>;
    sliderLayoutImageMap: Map<SliderLayout, string>;
    valueType: typeof ValueType;
    sliderWidgetConfigForm: UntypedFormGroup;
    valuePreviewFn: any;
    constructor(store: Store<AppState>, widgetConfigComponent: WidgetConfigComponent, fb: UntypedFormBuilder);
    protected configForm(): UntypedFormGroup;
    protected onConfigSet(configData: WidgetConfigComponentData): void;
    protected prepareOutputConfig(config: any): WidgetConfigComponentData;
    protected validatorTriggers(): string[];
    protected updateValidators(emitEvent: boolean, trigger?: string): void;
    private getCardButtons;
    private setCardButtons;
    private _valuePreviewFn;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderBasicConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderBasicConfigComponent, "tb-slider-basic-config", never, {}, {}, never, never, false, never>;
}
