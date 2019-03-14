/**
 * Admitad Fraud Tracker
 *
 * Issues collecting endpoint data types.
 */

export type IssueDataDevice = (
    "Blackberry PlayBook" | "BlackBerry Z30" | "Galaxy Note 3" | "Galaxy Note II" | "Galaxy S III" | "Galaxy S5" |
    "Galaxy S8+" | "iPad" | "iPad Mini" | "iPad Pro" | "iPhone 4" | "iPhone 5" | "iPhone 6" | "iPhone 6 Plus" |
    "iPhone 7" | "iPhone 7 Plus" | "iPhone 8" | "iPhone 8 Plus" | "iPhone SE" | "iPhone X" | "Kindle Fire HDX" |
    "LG Optimus L70" | "Microsoft Lumia 550" | "Microsoft Lumia 950" | "Nexus 10" | "Nexus 4" | "Nexus 5" | "Nexus 5X" |
    "Nexus 6" | "Nexus 6P" | "Nexus 7" | "Nokia Lumia 520" | "Nokia N9" | "PC 1366x768" | "Pixel 2" | "Pixel 2 XL" |
    "<desktop>" | "<win>" | "<mac>" | "<nix>" | "<mobile>" | "<android>" | "<ios>"
);

export type IssueContextDataType = ("dbb" | "lbb" | "ubu-cpa" | "ubu");
export type IssueContextDataProvider = ("google" | "yahoo" | "bing" | "yandex" | "mailru");
export type IssueContextData = {
    type: (IssueContextDataType);
    geo: {
        continent?: string; // GeoIP code, ex. "EU"
        country: string;    // GeoIP iso code, ex. "DE"
        city: string;       // GeoIP name (en), ex. "Berlin"
    };
    provider: (IssueContextDataProvider);
    device: (IssueDataDevice);
    route: {
        shift?: number;     // milliseconds
        code: number;       // HTTP status code 2xx, 3xx
        url: string;
    }[];
    _meta?: {
        provider?: string;  // unlisted provider
        device?: string;    // unlisted device
    }
}

export type IssueCookieDataType = ("iframe" | "image" | "script" | "extension" | "embed");
export type IssueCookieData = {
    type: (IssueCookieDataType);
    geo?: {
        continent?: string; // GeoIP code, ex. "EU"
        country: string;    // GeoIP iso code, ex. "DE"
        city: string;       // GeoIP name (en), ex. "Berlin"
    };
    device: (IssueDataDevice);
    route: {
        timestamp: number;  // UNUX timestamp
        shift?: number;     // milliseconds
        code: number;       // HTTP status code 2xx, 3xx
        url: string;
    }[];
    _meta?: {
        device?: string;    // unlisted device
    }
}

export type IssueWebmasterSource = ("id" | "hash");
export interface Issue {
    detectedAt: number;     // UNUX timestamp
    advertiserId: string;
    webmaster: {
        source: (IssueWebmasterSource);
        value: string;
    };
    reportUrl: string;
    data: IssueContextData | IssueCookieData    // fraud kind specific issue data
    _meta?: {
        id?: number | string;
    };
}
