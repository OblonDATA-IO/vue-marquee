const {
    description
} = require("../../package.json");

module.exports = {
    title: "Vue Marquee",
    description,
    head: [
        [ "meta", { name: "theme-color", content: "#3eaf7c" } ],
        [ "meta", { name: "apple-mobile-web-app-capable", content: "yes" } ],
        [ "meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" } ]
    ],
    base: "/test/",
    themeConfig: {
        repo: "",
        editLinks: false,
        docsDir: "",
        editLinkText: "",
        lastUpdated: true,
        nav: [
            {
                text: "Guide",
                link: "/guide/",
            },
            {
                text: "API",
                link: "/api/"
            },
            {
                text: "Examples",
                link: "/examples/"
            },
            {
                text: "GitHub",
                link: "https://github.com/OblonDATA-IO/vue-marquee"
            }
        ],
        sidebar: {
            "/guide/": [
                {
                    title: "Guide",
                    collapsable: false,
                    children: [
                        '',
                        "using-vue",
                    ]
                }
            ],
        }
    },
    plugins: [
        "@vuepress/plugin-back-to-top",
        "@vuepress/plugin-medium-zoom",
    ]
};
