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
            { id: 'Tags by Category', path: '/htmls/tags-by-category' },
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
            { id: 'Selectors', path: '/csses/css-selectors' },
            { id: 'Frameworks', path: '/csses/css-frameworks' },
            { id: 'Animations', path: '/csses/css-animations' },
        ],
    },
    {
        id: 'Javascript',
        page: PageContent,
        path: '/javascripts/:child',
        inNavigation: true,
        children: [
            { id: 'General', path: '/javascripts/js-general' },
            { id: 'Functions & Methods', path: '/javascripts/js-functions-methods' },
            { id: 'ES6+', path: '/javascripts/js-es6-plus' },
            { id: 'jQuery', path: '/javascripts/jquery' },
            { id: 'JSON', path: '/javascripts/json' },
            { id: 'Typescript', path: '/javascripts/typescript' },
            { id: 'NPM', path: '/javascripts/npm' },
            { id: 'Animations Libraries', path: '/javascripts/javascript-animation-libraries' },
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
    // {
    //     id: 'Frameworks & Libraries',
    //     page: PageContent,
    //     path: '/frameworks-libraries/:child',
    //     inNavigation: true,
    //     children: [
    //         { id: 'Javascript Animation', path: '/frameworks-libraries/javascript-animation-libraries' },
    //     ],
    // },
    {
        id: 'React',
        page: PageContent,
        path: '/reacts/:child',
        inNavigation: true,
        children: [
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
            { id: 'SEO Checklist', path: '/website-optimizations/seo' },
            { id: 'Online Tools', path: '/website-optimizations/online-tools' },

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
            { id: 'Software / Tools', path: '/designs/design-software-tools' },
            { id: 'Inspiration / Templates', path: '/designs/design-inspiration-templates' },
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
            // { id: 'Regular Expressions', path: '/other-resources/regular-expressions' },
        ],
    },
    {
        id: 'Tools',
        page: PageContent,
        path: '/tools/:child',
        inNavigation: true,
        children: [
            { id: 'Online Tools', path: '/tools/other-tools' },
        ],
    },
    {
        id: 'Server',
        page: PageContent,
        path: '/servers/:child',
        inNavigation: true,
        children: [
            { id: 'HTTP Codes', path: '/servers/http-status-codes' },
        ],
    },
    {
        id: 'Devops',
        page: PageContent,
        path: '/devops/:child',
        inNavigation: true,
        children: [
            { id: 'Docker', path: '/devops/docker' },
            { id: 'Linux', path: '/devops/linux-cli' },
            { id: 'System Admin', path: '/devops/system-admin' },
        ],
    },
    {
        id: 'Project Info',
        page: PageContent,
        path: '/project-statuses/:child',
        icon: 'star',
        inNavigation: true,
        children: [
            { id: 'Upcoming', path: '/project-statuses/upcoming' },
            { id: 'Contributers', path: '/project-statuses/contributers' },
            { id: 'Support Project', path: '/project-statuses/support' },
        ],
    },
];


