import { DestroyRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import { FormGroupDirective, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { HasConfirmForm } from '@core/guards/confirm-on-exit.guard';
import { SelfRegistrationService } from '@core/http/self-register.service';
import { WebSelfRegistrationParams } from '@shared/models/self-register.models';
import { TranslateService } from '@ngx-translate/core';
import { EntityType } from '@shared/models/entity-type.models';
import { MatDialog } from '@angular/material/dialog';
import { BaseData } from '@shared/models/base-data';
import { EntityId } from '@shared/models/id/entity-id';
import { Operation, Resource } from '@shared/models/security.models';
import { EditorOptions } from 'tinymce';
import { DialogService } from '@core/services/dialog.service';
import * as i0 from "@angular/core";
export declare class SelfRegistrationComponent extends PageComponent implements OnInit, HasConfirmForm {
    protected store: Store<AppState>;
    private dialog;
    private dialogService;
    private selfRegistrationService;
    private translate;
    private fb;
    private destroyRef;
    selfRegistrationFormGroup: UntypedFormGroup;
    selfRegistrationParams: WebSelfRegistrationParams;
    registerLink: string;
    entityTypes: typeof EntityType;
    deleteDisabled: boolean;
    tinyMceOptions: Partial<EditorOptions>;
    showMainLoadingBar: boolean;
    readonly EntityType: typeof EntityType;
    readonly operation: typeof Operation;
    readonly resource: typeof Resource;
    constructor(store: Store<AppState>, dialog: MatDialog, dialogService: DialogService, selfRegistrationService: SelfRegistrationService, translate: TranslateService, fb: UntypedFormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    buildSelfRegistrationForm(): void;
    private updateDisabledState;
    save(): void;
    delete(form: FormGroupDirective): void;
    confirmForm(): UntypedFormGroup;
    onActivationLinkCopied(): void;
    domainChange(domain: BaseData<EntityId>): void;
    createDomain(): void;
    createTarget(): void;
    private onSelfRegistrationParamsLoaded;
    private selfRegistrationParamsFromFormValue;
    private convertTextToHTML;
    private convertHTMLToText;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelfRegistrationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelfRegistrationComponent, "tb-self-registration", never, {}, {}, never, never, false, never>;
}
