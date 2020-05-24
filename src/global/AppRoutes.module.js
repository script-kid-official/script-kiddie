import PageContent from "pages/PageContent";

export const AppProtectedRoutes = [

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
        id: 'Other',
        page: PageContent,
        path: '/other-resources/:child',
        inNavigation: true,
        children: [
            { id: 'Regular Expressions', path: '/other-resources/regular-expressions' },
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
];


