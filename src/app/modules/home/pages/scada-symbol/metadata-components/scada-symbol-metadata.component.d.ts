import { DestroyRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { ScadaSymbolMetadata } from '@home/components/widget/lib/scada/scada-symbol.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ToggleHeaderOption } from '@shared/components/toggle-header.component';
import { TranslateService } from '@ngx-translate/core';
import { ScadaSymbolMetadataTagsComponent } from '@home/pages/scada-symbol/metadata-components/scada-symbol-metadata-tags.component';
import { TbEditorCompleter } from '@shared/models/ace/completion.models';
import { CustomTranslatePipe } from '@shared/pipe/custom-translate.pipe';
import { IAliasController } from '@core/api/widget-api.models';
import { WidgetActionCallbacks } from '@home/components/widget/action/manage-widget-actions.component.models';
import { WhiteLabelingService } from '@core/http/white-labeling.service';
import * as i0 from "@angular/core";
export declare class ScadaSymbolMetadataComponent extends PageComponent implements OnInit, OnChanges, ControlValueAccessor, Validator {
    protected store: Store<AppState>;
    private fb;
    private translate;
    private customTranslate;
    private destroyRef;
    private wl;
    symbolMetadataTags: ScadaSymbolMetadataTagsComponent;
    aliasController: IAliasController;
    callbacks: WidgetActionCallbacks;
    disabled: boolean;
    tags: string[];
    private modelValue;
    private propagateChange;
    metadataFormGroup: UntypedFormGroup;
    headerOptions: ToggleHeaderOption[];
    selectedOption: string;
    generalStateRenderFunctionCompleter: TbEditorCompleter;
    elementStateRenderFunctionCompleter: TbEditorCompleter;
    clickActionFunctionCompleter: TbEditorCompleter;
    highlightRules: import("../../../../../shared/models/ace/ace.models").AceHighlightRules;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder, translate: TranslateService, customTranslate: CustomTranslatePipe, destroyRef: DestroyRef, wl: WhiteLabelingService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: ScadaSymbolMetadata): void;
    editTagStateRenderFunction(tag: string): void;
    editTagClickAction(tag: string): void;
    validate(c: UntypedFormControl): {
        metadata: {
            valid: boolean;
        };
    };
    private updateModel;
    private updateFunctionCompleters;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScadaSymbolMetadataComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScadaSymbolMetadataComponent, "tb-scada-symbol-metadata", never, { "aliasController": { "alias": "aliasController"; "required": false; }; "callbacks": { "alias": "callbacks"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "tags": { "alias": "tags"; "required": false; }; }, {}, never, [".tb-scada-symbol-metadata-header-prefix", ".tb-scada-symbol-metadata-header-suffix"], false, never>;
}
