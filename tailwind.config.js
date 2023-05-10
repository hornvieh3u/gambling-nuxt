module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.vue', './components/**/*.vue', './layouts/**/*.vue'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                background: '#1E1E1E',
                hf: '#292C35',
                side: '#292C35',

                select: '#319795',
                selectHover: '#38B2AC',
                selectText: '#FFFFFF',
                selectPlaceholder: '#A0AEC0',
            },

            
            boxShadow: {
                select: '0 0 0 1px #EBF8FF, 0 4px 14px 0 rgba(75, 85, 99, 0.16)',
            },
            borderRadius: {
                select: '.5rem',
                selectBtn: '.375rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
