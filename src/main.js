import marquee from "../src/components/index";

const ComponentLibrary = {
    install (Vue, options = {}) {
        Vue.component(marquee.name, marquee);
    }
}

export { default as Marquee } from "../src/components/index";
export default ComponentLibrary

if (
    typeof window !== "undefined" &&
    window.Vue
) {
    window.Vue.use(ComponentLibrary);
}
