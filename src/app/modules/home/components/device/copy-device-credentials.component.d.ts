import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { EntityId } from '@shared/models/id/entity-id';
import { DeviceService } from '@core/http/device.service';
import { DeviceCredentials } from '@shared/models/device.models';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class CopyDeviceCredentialsComponent implements OnInit, OnDestroy {
    private store;
    private translate;
    private deviceService;
    private cd;
    private deviceId$;
    private tooltipMessage;
    hideButton: boolean;
    credential: string;
    loading: boolean;
    buttonLabel: string;
    set deviceId(deviceId: EntityId);
    disabled: boolean;
    credentials$: Subject<DeviceCredentials>;
    private credentialsSubscription;
    constructor(store: Store<AppState>, translate: TranslateService, deviceService: DeviceService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private processingValue;
    private convertObjectToString;
    onCopyCredential(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CopyDeviceCredentialsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CopyDeviceCredentialsComponent, "tb-copy-device-credentials", never, { "deviceId": "deviceId"; "disabled": "disabled"; "credentials$": "credentials$"; }, {}, never, never>;
}
