/**
 *
 * @returns {Issue|null}
 */
const f = () => null;

/**
 * @type {Issue}
 */
const contextIssue = f();

contextIssue.detectedAt = 0;
contextIssue.advertiserId = '123654';
contextIssue.webmaster.source = 'hash';
contextIssue.webmaster.value = '2342bab503583abbbbfe2234299077be';
contextIssue.reportUrl = 'https://example.com';

contextIssue.data.type = 'dbb';
contextIssue.data.geo.continent = 'EU';
contextIssue.data.geo.country = 'UA';
contextIssue.data.geo.city = 'Kyiv';
contextIssue.data.provider = 'googles';
contextIssue.data.device = 'Blackberry PlayBook';

contextIssue.data.route = [];
contextIssue.data.route[0].code = 200;
contextIssue.data.route[0].url = 'https://www.com';
contextIssue.data._meta.provider = 'newprovider';
contextIssue.data._meta.device = 'newdevice';

contextIssue._meta.id = '100a200bc';

/**
 * @type {Issue}
 */
const cookieIssue = f();

contextIssue.detectedAt = 1;
contextIssue.advertiserId = '55631';
contextIssue.webmaster.source = 'id';
contextIssue.webmaster.value = 'b503583a';
contextIssue.reportUrl = 'https://example.com';

cookieIssue.data.type = 'iframe';
cookieIssue.data.geo.continent = 'EU';
cookieIssue.data.geo.country = 'FR';
cookieIssue.data.geo.city = 'Paris';
cookieIssue.data.device = '<mobile>';

cookieIssue.data.route = [];
cookieIssue.data.route[0].timestamp = 18023231;
cookieIssue.data.route[0].shift = 32;
cookieIssue.data.route[0].code = 302;
cookieIssue.data.route[0].url = 'https://www.com';
cookieIssue.data._meta.device = 'newdevice';

contextIssue._meta.id = '177';
