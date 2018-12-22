/**
 *
 * @returns {Issue}
 */
const f = () => null;

/**
 * @type {Issue}
 */
const r = f();

r.timestamp = 0;
r.advertiserId = '123654';
r.type = 'dbb';

r.webmaster.source = 'hash';
r.webmaster.value = '2342bab503583abbbbfe2234299077be';

r.geo.city = 'Kyiv';
r.geo.country = 'UA';
r.geo.continent = 'EU';

r.provider = 'google';
r.device = 'Blackberry PlayBook';

r.route[0].code = 200;
r.route[0].url = 'http://www.com';

r._meta.provider = 'xxx';
