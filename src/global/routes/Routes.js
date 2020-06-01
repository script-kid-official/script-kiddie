import PageContent from "pages/PageContent";

export const AppProtectedRoutes = [

    {
        id: 'HTML',
        page: PageContent,
        path: '/htmls/:child',
        inNavigation: true,
        children: [
            { id: 'All Attributes', path: '/htmls/all-html-attributes' },
            { id: 'Color Names', path: '/htmls/html-color-names' },
            { id: 'Event Attributes', path: '/htmls/html-event-attributes' },
            { id: 'Global Attributes', path: '/htmls/html-global-attributes' },
            { id: 'Semantics by Category', path: '/htmls/elements-by-category' },
        ],
    },
    {
        id: 'CSS',
        page: PageContent,
        path: '/csses/:child',
        inNavigation: true,
        children: [
            { id: 'All Properties', path: '/csses/all-properties' },
            { id: 'Animatable Properties', path: '/csses/animatable-properties' },
            { id: 'Functions', path: '/csses/css-functions' },
            { id: 'Pseudo Elements', path: '/csses/css-pseudo-elements' },
            { id: 'Selectors', path: '/csses/css-selectors' },
        ],
    },
    {
        id: 'Javascript',
        page: PageContent,
        path: '/javascripts/:child',
        inNavigation: true,
        children: [
            { id: 'General', path: '/javascripts/js-general' },
            { id: 'ES6+', path: '/javascripts/js-es6-plus' },
            { id: 'jQuery', path: '/javascripts/jquery' },
            { id: 'JSON', path: '/javascripts/json' },
            { id: 'Typescript', path: '/javascripts/typescript' },
            { id: 'Arrays', path: '/javascripts/js-array-properties' },
            { id: 'Date', path: '/javascripts/js-date-methods' },
            { id: 'Math', path: '/javascripts/js-math-object-methods' },
            { id: 'String', path: '/javascripts/js-string-methods' },
        ],
    },
    {
        id: 'PHP',
        page: PageContent,
        path: '/phps/:child',
        inNavigation: true,
        children: [
            { id: 'General', path: '/phps/general' },
            { id: 'Array', path: '/phps/php-array-functions' },
            { id: 'Math', path: '/phps/math-functions' },
            { id: 'MySqli', path: '/phps/mysqli' },
            { id: 'String', path: '/phps/php-string-functions' },
            { id: 'Variable', path: '/phps/php-variable-functions' },
        ],
    },
    {
        id: 'Database',
        page: PageContent,
        path: '/databases/:child',
        inNavigation: true,
        children: [
            { id: 'MongoDB', path: '/databases/mongodb' },
            { id: 'MySql', path: '/databases/mysql' },
        ],
    },
    {
        id: 'Frameworks & Libraries',
        page: PageContent,
        path: '/frameworks-libraries/:child',
        inNavigation: true,
        children: [
            { id: 'CSS Frameworks', path: '/frameworks-libraries/css-frameworks' },
            { id: 'CSS Animations', path: '/frameworks-libraries/css-animations' },
            { id: 'Javascript Animation', path: '/frameworks-libraries/javascript-animation-libraries' },
            { id: 'Angular UI', path: '/frameworks-libraries/angular-ui' },
            { id: 'Svelte UI', path: '/frameworks-libraries/svelte-ui' },
            { id: 'Vue UI', path: '/frameworks-libraries/vue-ui' },
        ],
    },
    {
        id: 'React',
        page: PageContent,
        path: '/reacts/:child',
        inNavigation: true,
        children: [
            { id: 'React UI', path: '/frameworks-libraries/react-ui' },
            { id: 'React Reusability', path: '/reacts/react-reusability' },
            { id: 'React/Redux snippets', path: '/reacts/react-redux-snippets' },
        ],
    },
    {
        id: 'Website Optimization',
        page: PageContent,
        path: '/website-optimizations/:child',
        inNavigation: true,
        children: [
            { id: 'SEO', path: '/website-optimizations/seo' },
            { id: 'Image Compression', path: '/tools/image-compression' },

        ],
    },
    {
        id: 'Theory',
        page: PageContent,
        path: '/theories/:child',
        inNavigation: true,
        children: [
            { id: 'Javascript', path: '/theories/javascript' },

        ],
    },
    {
        id: 'Design',
        page: PageContent,
        path: '/designs/:child',
        inNavigation: true,
        children: [
            { id: 'Downloadable Software', path: '/designs/downloadable-design-software' },
            { id: 'HTML & CSS Templates', path: '/designs/html-css-templates' },
            { id: 'Inspiration', path: '/designs/design-inspiration' },
            { id: 'Online Tools', path: '/designs/online-design-tools' },
            { id: 'Style Guides', path: '/designs/design-systems-style-guides' },
            { id: 'UI Components & Kits', path: '/designs/ui-components-kits' },
            { id: 'UX/UI Online', path: '/designs/ux-ui-online-resources' },
        ],
    },
    {
        id: 'Other',
        page: PageContent,
        path: '/other-resources/:child',
        inNavigation: true,
        children: [
            { id: 'Git', path: '/other-resources/git' },
            { id: 'Markdown', path: '/other-resources/markdown' },
            { id: 'Regular Expressions', path: '/other-resources/regular-expressions' },
        ],
    },
    {
        id: 'Tools',
        page: PageContent,
        path: '/tools/:child',
        inNavigation: true,
        children: [
            { id: 'Docker', path: '/tools/docker' },
            { id: 'Online Tools', path: '/tools/other-tools' },
        ],
    },
    {
        id: 'Server',
        page: PageContent,
        path: '/servers/:child',
        inNavigation: true,
        children: [
            { id: 'HTTP Codes', path: '/other-resources/http' },
            { id: 'Nodejs', path: '/servers/nodejs' },
            { id: 'Linux CLI', path: '/other-resources/linux-cli' },
            { id: 'System Admin CLI', path: '/other-resources/system-admin' },
        ],
    },
    {
        id: 'Project Status',
        page: PageContent,
        path: '/project-statuses/:child',
        icon: 'star',
        inNavigation: true,
        children: [
            { id: 'Upcoming', path: '/project-statuses/upcoming' },
            { id: 'Support Project', path: '/project-statuses/support' },
        ],
    },
];


