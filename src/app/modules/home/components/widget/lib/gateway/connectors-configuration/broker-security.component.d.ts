import { ChangeDetectorRef, ElementRef, NgZone, OnDestroy, ViewContainerRef } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from '@core/services/dialog.service';
import { Overlay } from '@angular/cdk/overlay';
import { UtilsService } from '@core/services/utils.service';
import { EntityService } from '@core/http/entity.service';
import { ControlValueAccessor, FormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { BrokerSecurityType } from '@home/components/widget/lib/gateway/gateway-widget.models';
import * as i0 from "@angular/core";
export declare class BrokerSecurityComponent extends PageComponent implements ControlValueAccessor, Validator, OnDestroy {
    protected store: Store<AppState>;
    translate: TranslateService;
    dialog: MatDialog;
    private overlay;
    private viewContainerRef;
    private dialogService;
    private entityService;
    private utils;
    private zone;
    private cd;
    private elementRef;
    private fb;
    BrokerSecurityType: typeof BrokerSecurityType;
    securityTypes: BrokerSecurityType[];
    SecurityTypeTranslationsMap: Map<BrokerSecurityType, string>;
    securityFormGroup: UntypedFormGroup;
    private destroy$;
    private propagateChange;
    constructor(store: Store<AppState>, translate: TranslateService, dialog: MatDialog, overlay: Overlay, viewContainerRef: ViewContainerRef, dialogService: DialogService, entityService: EntityService, utils: UtilsService, zone: NgZone, cd: ChangeDetectorRef, elementRef: ElementRef, fb: FormBuilder);
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(deviceInfo: any): void;
    validate(): ValidationErrors | null;
    updateView(value: any): void;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<BrokerSecurityComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BrokerSecurityComponent, "tb-broker-security", never, {}, {}, never, never, false, never>;
}