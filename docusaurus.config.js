/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Flagsmith Docs',
    tagline: 'Open Source Feature Flags',
    url: 'https://docs.flagsmith.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'Flagsmith',
    projectName: 'flagsmith',
    plugins: ['@ionic-internal/docusaurus-plugin-tag-manager'],
    themeConfig: {
        prism: {
            additionalLanguages: ['java', 'csharp', 'ruby', 'rust', 'swift', 'dart'],
        },
        algolia: {
            apiKey: 'd207a6e4abfead06cecba47adc7d1515',
            indexName: 'flagsmith',
        },
        tagManager: {
            trackingID: 'GTM-5ZV5K5G',
        },
        navbar: {
            title: 'Flagsmith',
            logo: {
                alt: 'Flagsmith Logo',
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
                    href: 'https://flagsmith.com',
                    label: 'Flagsmith.com',
                    position: 'left',
                },
                {
                    label: 'Discord',
                    href: 'https://discord.gg/hFhxNtXzgm',
                    position: 'left',
                },
                {
                    href: 'https://github.com/flagsmith/flagsmith',
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
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/hFhxNtXzgm',
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
                    editUrl: 'https://github.com/flagsmith/flagsmith-docs/tree/main',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
        localeConfigs: {
            en: {
                label: 'English',
                direction: 'ltr',
            },
        },
    },
};
