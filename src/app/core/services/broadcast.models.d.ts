export interface BroadcastMessage {
    name: string;
    args?: Array<any>;
}
export interface BroadcastEvent {
    name: string;
}
export declare type BroadcastListener = (event: BroadcastEvent, ...args: Array<any>) => void;
