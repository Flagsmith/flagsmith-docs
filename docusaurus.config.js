/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Flagsmith Docs',
    tagline: 'Open Source Feature Flags',
    url: 'https://docs.flagsmith.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.
    themeConfig: {
        prism: {
            additionalLanguages: ['java', 'csharp', 'ruby', 'rust', 'swift', 'dart'],
        },
        googleAnalytics: {
            trackingID: 'UA-120237963-2',
        },
        navbar: {
            title: 'Flagsmith',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Docs',
                },
                {
                    to: 'https://flagsmith.com',
                    label: 'Flagsmith.com',
                    position: 'left',
                },
                {
                    href: 'https://github.com/flagsmith/flagsmith-api',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Flagsmith',
                    items: [
                        {
                            label: 'Flagsmith.com',
                            to: 'https://flagsmith.com/',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/getflagsmith',
                        },
                    ],
                },
                {
                    title: 'Open Source',
                    items: [
                        {
                            label: 'Github',
                            href: 'https://github.com/Flagsmith',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: 'https://flagsmith.com/blog/',
                        },
                        {
                            label: 'Podcast',
                            href: 'https://flagsmith.com/podcast/',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Bullet Train Ltd. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                    // Please change this to your repo.
                    editUrl: 'https://github.com/flagsmith/flagsmith-api/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
