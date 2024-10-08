import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormControl, Validator } from '@angular/forms';
import { AceHighlightRules } from '@shared/models/ace/ace.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UtilsService } from '@core/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import { RafService } from '@core/services/raf.service';
import { TbEditorCompleter } from '@shared/models/ace/completion.models';
import { ScriptLanguage } from '@shared/models/rule-node.models';
import * as i0 from "@angular/core";
export declare class JsFuncComponent implements OnInit, OnDestroy, ControlValueAccessor, Validator {
    elementRef: ElementRef;
    private utils;
    private translate;
    protected store: Store<AppState>;
    private raf;
    private cd;
    javascriptEditorElmRef: ElementRef;
    private jsEditor;
    private editorsResizeCaf;
    private editorResize$;
    private ignoreChange;
    toastTargetId: string;
    functionTitle: string;
    functionName: string;
    functionArgs: Array<string>;
    validationArgs: Array<any>;
    resultType: string;
    disabled: boolean;
    fillHeight: boolean;
    minHeight: string;
    editorCompleter: TbEditorCompleter;
    highlightRules: AceHighlightRules;
    globalVariables: Array<string>;
    disableUndefinedCheck: boolean;
    helpId: string;
    scriptLanguage: ScriptLanguage;
    hideBrackets: boolean;
    private noValidateValue;
    get noValidate(): boolean;
    set noValidate(value: boolean);
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    functionLabel: string;
    fullscreen: boolean;
    modelValue: string;
    functionValid: boolean;
    validationError: string;
    errorShowed: boolean;
    errorMarkers: number[];
    errorAnnotationId: number;
    private functionArgsString;
    private propagateChange;
    hasErrors: boolean;
    constructor(elementRef: ElementRef, utils: UtilsService, translate: TranslateService, store: Store<AppState>, raf: RafService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private onAceEditorResize;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(c: UntypedFormControl): {
        jsFunc: {
            valid: boolean;
        };
    };
    beautifyJs(): void;
    validateOnSubmit(): void;
    focus(): void;
    private validateJsFunc;
    private cleanupJsErrors;
    writeValue(value: string): void;
    updateView(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<JsFuncComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<JsFuncComponent, "tb-js-func", never, { "functionTitle": { "alias": "functionTitle"; "required": false; }; "functionName": { "alias": "functionName"; "required": false; }; "functionArgs": { "alias": "functionArgs"; "required": false; }; "validationArgs": { "alias": "validationArgs"; "required": false; }; "resultType": { "alias": "resultType"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "fillHeight": { "alias": "fillHeight"; "required": false; }; "minHeight": { "alias": "minHeight"; "required": false; }; "editorCompleter": { "alias": "editorCompleter"; "required": false; }; "highlightRules": { "alias": "highlightRules"; "required": false; }; "globalVariables": { "alias": "globalVariables"; "required": false; }; "disableUndefinedCheck": { "alias": "disableUndefinedCheck"; "required": false; }; "helpId": { "alias": "helpId"; "required": false; }; "scriptLanguage": { "alias": "scriptLanguage"; "required": false; }; "hideBrackets": { "alias": "hideBrackets"; "required": false; }; "noValidate": { "alias": "noValidate"; "required": false; }; "required": { "alias": "required"; "required": false; }; }, {}, never, ["[toolbarPrefixButton]", "[toolbarSuffixButton]"], false, never>;
}
