/**
 *
 * @returns {Report|null}
 */
const f = () => null;

/**
 * @type {Report}
 */
const contextReport = f();

contextReport.detectedAt = 0;
contextReport.advertiserId = '123654';
contextReport.webmaster.source = 'hash';
contextReport.webmaster.value = '2342bab503583abbbbfe2234299077be';
contextReport.url = 'https://example.com';

contextReport.data.type = 'dbb';
contextReport.data.geo.continent = 'EU';
contextReport.data.geo.country = 'UA';
contextReport.data.geo.city = 'Kyiv';
contextReport.data.provider = 'googles';
contextReport.data.device = 'Blackberry PlayBook';

contextReport.data.route = [];
contextReport.data.route[0].shift = 56;
contextReport.data.route[0].code = 200;
contextReport.data.route[0].url = 'https://www.com';
contextReport.data._meta.provider = 'newprovider';
contextReport.data._meta.device = 'newdevice';

contextReport._meta.id = '100a200bc';

/**
 * @type {Report}
 */
const cookieReport = f();

contextReport.detectedAt = 1;
contextReport.advertiserId = '55631';
contextReport.webmaster.source = 'id';
contextReport.webmaster.value = 'b503583a';
contextReport.url = 'https://example.com';

cookieReport.data.type = 'iframe';
cookieReport.data.geo.continent = 'EU';
cookieReport.data.geo.country = 'FR';
cookieReport.data.geo.city = 'Paris';
cookieReport.data.device = '<mobile>';

cookieReport.data.route = [];
cookieReport.data.route[0].timestamp = 18023231;
cookieReport.data.route[0].shift = 32;
cookieReport.data.route[0].code = 302;
cookieReport.data.route[0].url = 'https://www.com';
cookieReport.data._meta.device = 'newdevice';

contextReport._meta.id = 177;
