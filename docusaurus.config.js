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
            additionalLanguages: ['java', 'csharp', 'ruby', 'rust', 'swift', 'dart', 'php'],
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
                    href: 'https://github.com/flagsmith/flagsmith',
                    label: 'GitHub',
                    position: 'left',
                },
                {
                    label: 'Discord',
                    href: 'https://discord.gg/hFhxNtXzgm',
                    position: 'left',
                },
                {
                    type: 'docsVersionDropdown',
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
        announcementBar: {
            id: 'support_us',
            content: `If you like Flagsmith, give us a star 🌟 on <a target="_blank" rel="noopener noreferrer" href="https://github.com/Flagsmith/flagsmith">GitHub</a> and follow us ❤️ on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/getflagsmith">Twitter</a>`,
            backgroundColor: '#5d60cc',
            textColor: '#ffffff',
            isCloseable: true,
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
                    // includeCurrentVersion: false,
                    versions: {
                        current: {
                            label: 'v3.0 🚧',
                        },
                        'v2.0': {
                            label: 'v2.0',
                            badge: false,
                        },
                    },
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
