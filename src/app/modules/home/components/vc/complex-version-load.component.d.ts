import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { EntityTypeLoadResult, VersionLoadResult } from '@shared/models/vc.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntitiesVersionControlService } from '@core/http/entities-version-control.service';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ComplexVersionLoadComponent extends PageComponent implements OnInit, OnDestroy {
    protected store: Store<AppState>;
    private entitiesVersionControlService;
    private cd;
    private translate;
    private sanitizer;
    private fb;
    versionName: string;
    versionId: string;
    onClose: (result: VersionLoadResult | null) => void;
    popoverComponent: TbPopoverComponent;
    loadVersionFormGroup: UntypedFormGroup;
    versionLoadResult: VersionLoadResult;
    entityTypeLoadResults: Array<EntityTypeLoadResult>;
    errorMessage: SafeHtml;
    hasError: boolean;
    versionLoadResult$: Observable<VersionLoadResult>;
    private versionLoadResultSubscription;
    constructor(store: Store<AppState>, entitiesVersionControlService: EntitiesVersionControlService, cd: ChangeDetectorRef, translate: TranslateService, sanitizer: DomSanitizer, fb: UntypedFormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    entityTypeLoadResultMessage(result: EntityTypeLoadResult): string;
    cancel(): void;
    restore(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ComplexVersionLoadComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ComplexVersionLoadComponent, "tb-complex-version-load", never, { "versionName": { "alias": "versionName"; "required": false; }; "versionId": { "alias": "versionId"; "required": false; }; "onClose": { "alias": "onClose"; "required": false; }; "popoverComponent": { "alias": "popoverComponent"; "required": false; }; }, {}, never, never, false, never>;
}
