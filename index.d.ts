/**
 * Admitad Fraud Tracker
 *
 * Issues collecting endpoint data types.
 */

export type IssueType = ("dbb" | "lbb" | "ubu-cpa" | "ubu");
export type IssueWebmasterSource = ("id" | "hash");
export type IssueSourceProvider = ("google" | "yahoo" | "bing" | "yandex" | "mailru");
export type IssueSourceDevice = (
    "Blackberry PlayBook" | "BlackBerry Z30" | "Galaxy Note 3" | "Galaxy Note II" | "Galaxy S III" | "Galaxy S5" |
    "Galaxy S8+" | "iPad" | "iPad Mini" | "iPad Pro" | "iPhone 4" | "iPhone 5" | "iPhone 6" | "iPhone 6 Plus" |
    "iPhone 7" | "iPhone 7 Plus" | "iPhone 8" | "iPhone 8 Plus" | "iPhone SE" | "iPhone X" | "Kindle Fire HDX" |
    "LG Optimus L70" | "Microsoft Lumia 550" | "Microsoft Lumia 950" | "Nexus 10" | "Nexus 4" | "Nexus 5" | "Nexus 5X" |
    "Nexus 6" | "Nexus 6P" | "Nexus 7" | "Nokia Lumia 520" | "Nokia N9" | "PC 1366x768" | "Pixel 2" | "Pixel 2 XL" |
    "<win>" | "<mac>" | "<nix>" | "<mobile>" | "<desktop>"
);

export interface Issue {
    timestamp: number;
    advertiserId: string;
    type: (IssueType);
    webmaster: {
        source: (IssueWebmasterSource);
        value: string;
    };
    geo: {
        continent?: string; // GeoIP code, ex. "EU"
        country: string;    // GeoIP iso code, ex. "DE"
        city: string;       // GeoIP name (en), ex. "Berlin"
    };
    provider: (IssueSourceProvider);
    device: (IssueSourceDevice);
    route: {
        code: number;
        url: string;
    }[];
    _meta?: {
        provider?: string;
        device?: string;
        [k: string]: any;
    };
}
