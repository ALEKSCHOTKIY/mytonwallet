import type { PluginListenerHandle } from '@capacitor/core';
export type BottomSheetKeys = 'initial' | 'receive' | 'invoice' | 'transfer' | 'swap' | 'stake' | 'unstake' | 'staking-info' | 'staking-claim' | 'vesting-info' | 'vesting-confirm' | 'transaction-info' | 'swap-activity' | 'backup' | 'add-account' | 'import-account' | 'settings' | 'qr-scanner' | 'dapp-connect' | 'dapp-transfer' | 'dapp-sign-data' | 'disclaimer' | 'backup-warning' | 'onramp-widget' | 'mint-card' | 'renew-domain' | 'link-domain';
export interface BottomSheetPlugin {
    prepare(): Promise<void>;
    applyScrollPatch(): Promise<void>;
    clearScrollPatch(): Promise<void>;
    disable(): Promise<void>;
    enable(): Promise<void>;
    hide(): Promise<void>;
    show(): Promise<void>;
    delegate(options: {
        key: BottomSheetKeys;
        globalJson: string;
    }): Promise<void>;
    release(options: {
        key: BottomSheetKeys | '*';
    }): Promise<void>;
    openSelf(options: {
        key: BottomSheetKeys;
        height: string;
        backgroundColor: string;
    }): Promise<void>;
    closeSelf(options: {
        key: BottomSheetKeys;
    }): Promise<void>;
    toggleSelfFullSize(options: {
        isFullSize: boolean;
    }): Promise<void>;
    openInMain(options: {
        key: BottomSheetKeys;
    }): Promise<void>;
    isShown(): Promise<{
        value: boolean;
    }>;
    addListener(eventName: 'delegate', handler: (options: {
        key: BottomSheetKeys;
        globalJson: string;
    }) => void): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(eventName: 'move', handler: () => void): Promise<PluginListenerHandle> & PluginListenerHandle;
    addListener(eventName: 'openInMain', handler: (options: {
        key: BottomSheetKeys;
    }) => void): Promise<PluginListenerHandle> & PluginListenerHandle;
}
