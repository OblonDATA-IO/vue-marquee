/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

import Marquee from "../../src/main";

export default (
    { Vue, options, router, siteData }
) => {
    Vue.use(Marquee);
}
