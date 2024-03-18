import { HttpClient } from '@angular/common/http';
import { PageLink } from '@shared/models/page/page-link';
import { RequestConfig } from './http-utils';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { DeviceProfile, DeviceProfileInfo, DeviceTransportType } from '@shared/models/device.models';
import { ObjectLwM2M, ServerSecurityConfig, ServerSecurityConfigInfo } from '@home/components/profile/device/lwm2m/lwm2m-profile-config.models';
import { SortOrder } from '@shared/models/page/sort-order';
import { OtaPackageService } from '@core/http/ota-package.service';
import { Lwm2mSecurityType } from '@shared/models/lwm2m-security-config.models';
import { EntityInfoData } from '@shared/models/entity.models';
import * as i0 from "@angular/core";
export declare class DeviceProfileService {
    private http;
    private otaPackageService;
    private lwm2mBootstrapSecurityInfoInMemoryCache;
    constructor(http: HttpClient, otaPackageService: OtaPackageService);
    getDeviceProfiles(pageLink: PageLink, config?: RequestConfig): Observable<PageData<DeviceProfile>>;
    getDeviceProfile(deviceProfileId: string, config?: RequestConfig): Observable<DeviceProfile>;
    exportDeviceProfile(deviceProfileId: string, config?: RequestConfig): Observable<DeviceProfile>;
    getLwm2mObjects(sortOrder: SortOrder, objectIds?: string[], searchText?: string, config?: RequestConfig): Observable<Array<ObjectLwM2M>>;
    getLwm2mBootstrapSecurityInfo(isBootstrapServer: boolean, config?: RequestConfig): Observable<ServerSecurityConfigInfo>;
    getLwm2mBootstrapSecurityInfoBySecurityType(isBootstrapServer: boolean, securityMode?: Lwm2mSecurityType, config?: RequestConfig): Observable<ServerSecurityConfig>;
    getLwm2mObjectsPage(pageLink: PageLink, config?: RequestConfig): Observable<Array<ObjectLwM2M>>;
    saveDeviceProfileAndConfirmOtaChange(originDeviceProfile: DeviceProfile, deviceProfile: DeviceProfile, config?: RequestConfig): Observable<DeviceProfile>;
    saveDeviceProfile(deviceProfile: DeviceProfile, config?: RequestConfig): Observable<DeviceProfile>;
    deleteDeviceProfile(deviceProfileId: string, config?: RequestConfig): Observable<Object>;
    setDefaultDeviceProfile(deviceProfileId: string, config?: RequestConfig): Observable<DeviceProfile>;
    getDefaultDeviceProfileInfo(config?: RequestConfig): Observable<DeviceProfileInfo>;
    getDeviceProfileInfo(deviceProfileId: string, config?: RequestConfig): Observable<DeviceProfileInfo>;
    getDeviceProfileInfos(pageLink: PageLink, transportType?: DeviceTransportType, config?: RequestConfig): Observable<PageData<DeviceProfileInfo>>;
    getDeviceProfilesByIds(deviceProfileIds: Array<string>, config?: RequestConfig): Observable<Array<DeviceProfileInfo>>;
    getDeviceProfileDevicesAttributesKeys(deviceProfileId?: string, config?: RequestConfig): Observable<Array<string>>;
    getDeviceProfileDevicesTimeseriesKeys(deviceProfileId?: string, config?: RequestConfig): Observable<Array<string>>;
    getDeviceProfileNames(activeOnly?: boolean, config?: RequestConfig): Observable<Array<EntityInfoData>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeviceProfileService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DeviceProfileService>;
}
