
// transform 1s cubic-bezier(.19,1,.22,1) .1s
// transform .35s cubic-bezier(.23,1,.32,1)


export const variants = {

    positioner: {
        initial: {
            opacity: 0
        },
        collapsed: {
            height: 100,
            opacity: 1,
            y: -100,
        },
        expanded: {
            height: 375,
            y: -100,
        },
    },

    title: {
        collapsed: {
            opacity: 1,
            y: -18,
            fontWeight: 300
        },
        expanded: {
            opacity: 1,
            y: -10,
            fontWeight: 420
        },
    },

    date: {
        collapsed: {
            opacity: 0,
            y: 10,
        },
        expanded: {
            opacity: 1,
            y: -10,

        },

    },

    descript: {
        collapsed: {
            opacity: 0,
            y: 20,
        },
        expanded: {
            opacity: 1,
            y: -40,
        },

    },

    number: {
        collapsed: {
            y: 5,
        },
        expanded: {
            y: -10,
        },

    },

    circle: {
        initial: {
            duration: 3, times: [0, 0.2, 1]
        }
    }
}
}

