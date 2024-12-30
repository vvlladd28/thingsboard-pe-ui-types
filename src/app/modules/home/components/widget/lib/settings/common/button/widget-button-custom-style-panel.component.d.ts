import { ChangeDetectorRef, DestroyRef, EventEmitter, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { WidgetButtonAppearance, WidgetButtonCustomStyle, WidgetButtonState } from '@shared/components/button/widget-button.models';
import { WidgetButtonComponent } from '@shared/components/button/widget-button.component';
import * as i0 from "@angular/core";
export declare class WidgetButtonCustomStylePanelComponent extends PageComponent implements OnInit {
    private fb;
    protected store: Store<AppState>;
    private cd;
    private destroyRef;
    widgetButtonPreview: WidgetButtonComponent;
    appearance: WidgetButtonAppearance;
    borderRadius: string;
    autoScale: boolean;
    state: WidgetButtonState;
    customStyle: WidgetButtonCustomStyle;
    private popoverValue;
    set popover(popover: TbPopoverComponent<WidgetButtonCustomStylePanelComponent>);
    get popover(): TbPopoverComponent<WidgetButtonCustomStylePanelComponent>;
    customStyleApplied: EventEmitter<WidgetButtonCustomStyle>;
    widgetButtonStateTranslationMap: Map<WidgetButtonState, string>;
    widgetButtonState: typeof WidgetButtonState;
    previewAppearance: WidgetButtonAppearance;
    copyFromStates: WidgetButtonState[];
    customStyleFormGroup: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder, store: Store<AppState>, cd: ChangeDetectorRef, destroyRef: DestroyRef);
    ngOnInit(): void;
    copyStyle(state: WidgetButtonState): void;
    cancel(): void;
    applyCustomStyle(): void;
    private setStyle;
    private updateValidators;
    private updatePreviewAppearance;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetButtonCustomStylePanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetButtonCustomStylePanelComponent, "tb-widget-button-custom-style-panel", never, { "appearance": { "alias": "appearance"; "required": false; }; "borderRadius": { "alias": "borderRadius"; "required": false; }; "autoScale": { "alias": "autoScale"; "required": false; }; "state": { "alias": "state"; "required": false; }; "customStyle": { "alias": "customStyle"; "required": false; }; "popover": { "alias": "popover"; "required": false; }; }, { "customStyleApplied": "customStyleApplied"; }, never, never, false, never>;
}
