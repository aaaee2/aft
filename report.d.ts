/**
 * Admitad Fraud Tracker
 *
 * Reports collecting endpoint data types.
 */

export type ReportDataDevice = (
    "Blackberry PlayBook" | "BlackBerry Z30" | "Galaxy Note 3" | "Galaxy Note II" | "Galaxy S III" | "Galaxy S5" |
    "Galaxy S8+" | "iPad" | "iPad Mini" | "iPad Pro" | "iPhone 4" | "iPhone 5" | "iPhone 6" | "iPhone 6 Plus" |
    "iPhone 7" | "iPhone 7 Plus" | "iPhone 8" | "iPhone 8 Plus" | "iPhone SE" | "iPhone X" | "Kindle Fire HDX" |
    "LG Optimus L70" | "Microsoft Lumia 550" | "Microsoft Lumia 950" | "Nexus 10" | "Nexus 4" | "Nexus 5" | "Nexus 5X" |
    "Nexus 6" | "Nexus 6P" | "Nexus 7" | "Nokia Lumia 520" | "Nokia N9" | "PC 1366x768" | "Pixel 2" | "Pixel 2 XL" |
    "<desktop>" | "<win>" | "<mac>" | "<nix>" | "<mobile>" | "<android>" | "<ios>"
);

export type ReportContextDataType = ("dbb" | "lbb" | "lbb-l0" | "ubu-cpa" | "ubu" | "check");
export type ReportContextDataProvider = ("google" | "yahoo" | "bing" | "yandex" | "mailru" | "<other>");
export type ReportContextData = {
    type: (ReportContextDataType);
    geo: {
        continent?: string; // GeoIP code, ex. "EU"
        country: string;    // GeoIP iso code, ex. "DE"
        city?: string;      // GeoIP name (en), ex. "Berlin"
    };
    provider: (ReportContextDataProvider);
    device: (ReportDataDevice);
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

export type ReportCookieDataType = ("iframe" | "image" | "script" | "extension" | "embed");
export type ReportCookieData = {
    type: (ReportCookieDataType);
    geo?: {
        continent?: string; // GeoIP code, ex. "EU"
        country: string;    // GeoIP iso code, ex. "DE"
        city?: string;      // GeoIP name (en), ex. "Berlin"
    };
    device: (ReportDataDevice);
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

export type ReportWebmasterSource = ("id" | "hash");
export interface Report {
    detectedAt: number;     // UNUX timestamp
    advertiserId: string;
    webmaster?: {
        source: (ReportWebmasterSource);
        value: string;
    };
    url: string;
    data: ReportContextData | ReportCookieData  // fraud kind specific report data
    _meta?: {
        id?: number | string;
    };
}
