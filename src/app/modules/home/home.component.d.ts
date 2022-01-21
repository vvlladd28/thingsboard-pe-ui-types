import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BreakpointObserver } from '@angular/cdk/layout';
import { User } from '@shared/models/user.model';
import { PageComponent } from '@shared/components/page.component';
import { AppState } from '@core/core.state';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthState } from '@core/auth/auth.models';
import { ISearchableComponent } from '@home/models/searchable-component.models';
import * as i0 from "@angular/core";
export declare class HomeComponent extends PageComponent implements AfterViewInit, OnInit {
    protected store: Store<AppState>;
    private window;
    breakpointObserver: BreakpointObserver;
    authState: AuthState;
    forceFullscreen: boolean;
    activeComponent: any;
    searchableComponent: ISearchableComponent;
    sidenavMode: 'over' | 'push' | 'side';
    sidenavOpened: boolean;
    logo: string;
    sidenav: MatSidenav;
    searchInputField: ElementRef;
    fullscreenEnabled: true;
    authUser$: Observable<any>;
    userDetails$: Observable<User>;
    userDetailsString: Observable<string>;
    searchEnabled: boolean;
    showSearch: boolean;
    searchText: string;
    constructor(store: Store<AppState>, window: Window, breakpointObserver: BreakpointObserver);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    sidenavClicked(): void;
    toggleFullscreen(): void;
    isFullscreen(): boolean;
    goBack(): void;
    activeComponentChanged(activeComponent: any): void;
    displaySearchMode(): boolean;
    openSearch(): void;
    closeSearch(): void;
    private searchTextUpdated;
    static ɵfac: i0.ɵɵFactoryDeclaration<HomeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HomeComponent, "tb-home", never, {}, {}, never, never>;
}
