import PageContent from "pages/PageContent";

export const AppProtectedRoutes = [
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
            { id: 'Pixel to Em Converter', path: '/csses/px-to-em-converter' },
            { id: 'Selectors', path: '/csses/css-selectors' },

        ],
    },
    {
        id: 'Design',
        page: PageContent,
        path: '/designs/:child',
        inNavigation: true,
        children: [
            { id: 'Design Inspiration', path: '/designs/design-inspiration' },
            { id: 'Design Systems & Style Guides', path: '/designs/design-systems-style-guides' },
            { id: 'Downloadable Design Software', path: '/designs/downloadable-design-software' },
            { id: 'HTML & CSS Templates', path: '/designs/html-css-templates' },
            { id: 'Online Design Tools', path: '/designs/online-design-tools' },
            { id: 'UI Components & Kits', path: '/designs/ui-components-kits' },
            { id: 'UX/UI Online Resources', path: '/designs/ux-ui-online-resources' },

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
            { id: 'Javascript Animation Libraries', path: '/frameworks-libraries/javascript-animation-libraries' },
            { id: 'Angular UI', path: '/frameworks-libraries/angular-ui' },
            { id: 'React UI', path: '/frameworks-libraries/react-ui' },
            { id: 'Svelte UI', path: '/frameworks-libraries/svelte-ui' },
            { id: 'Vue UI', path: '/frameworks-libraries/vue-ui' },

        ],
    },

    {
        id: 'HTML',
        page: PageContent,
        path: '/htmls/:child',
        inNavigation: true,
        children: [
            { id: 'Semantics by Category', path: '/htmls/elements-by-category' },
            { id: 'All Attributes', path: '/htmls/all-html-attributes' },
            { id: 'Color Names', path: '/htmls/html-color-names' },
            { id: 'Event Attributes', path: '/htmls/html-event-attributes' },
            { id: 'Global Attributes', path: '/htmls/html-global-attributes' },
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
            { id: 'Array Properties', path: '/javascripts/js-array-properties' },
            { id: 'Date Methods', path: '/javascripts/js-date-methods' },
            { id: 'Math Object Methods', path: '/javascripts/js-math-object-methods' },
            { id: 'String Methods', path: '/javascripts/js-string-methods' },
        ],
    },
    {
        id: 'PHP',
        page: PageContent,
        path: '/phps/:child',
        inNavigation: true,
        children: [
            { id: 'Array Functions', path: '/phps/php-array-functions' },
            { id: 'String Functions', path: '/phps/php-string-functions' },
            { id: 'Variable Functions', path: '/phps/php-variable-functions' },
        ],
    },

    {
        id: 'Other',
        page: PageContent,
        path: '/other-resources/:child',
        inNavigation: true,
        children: [
            { id: 'Regular Expressions', path: '/other-resources/regular-expressions' },
        ],
    },
    {
        id: 'Tools',
        page: PageContent,
        path: '/tools/:child',
        inNavigation: true,
        children: [
            { id: 'Image Compression', path: '/tools/image-compression' },
            { id: 'Tools', path: '/tools/other-tools' },

        ],
    },

];


