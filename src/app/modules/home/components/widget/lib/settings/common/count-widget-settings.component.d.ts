import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { CountCardLayout, CountWidgetSettings } from '@home/components/widget/lib/count/count-widget.models';
import { PageComponent } from '@shared/components/page.component';
import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CountWidgetSettingsComponent extends PageComponent implements OnInit, ControlValueAccessor {
    protected store: Store<AppState>;
    private fb;
    disabled: boolean;
    alarmElseEntity: boolean;
    private propagateChange;
    countCardLayouts: CountCardLayout[];
    countCardLayoutTranslationMap: Map<CountCardLayout, string>;
    countCardLayoutImageMap: Map<CountCardLayout, string>;
    countWidgetConfigForm: UntypedFormGroup;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: CountWidgetSettings): void;
    private updateModel;
    protected updateValidators(): void;
    protected readonly valueCardLayoutTranslations: Map<import("@home/components/widget/lib/cards/value-card-widget.models").ValueCardLayout, string>;
    protected readonly valueCardLayoutImages: Map<import("@home/components/widget/lib/cards/value-card-widget.models").ValueCardLayout, string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CountWidgetSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CountWidgetSettingsComponent, "tb-count-widget-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; "alarmElseEntity": { "alias": "alarmElseEntity"; "required": false; }; }, {}, never, never, false, never>;
}
