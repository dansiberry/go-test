import Vue from 'vue';

export default {
    data: () => ({
        goLoaded: false,
        params: null,
        gaId: 'UA-172029636-1',
        experimentsMapping: [
            {
                id: 'gJKDm_MrRWSpBlmG9umfEA',
                handle: 'colourSwapTest',
                description: '50/50 - Swap colour test to blue instead of default red.',
                variants: ['0', '1']
            },
            {
                id: 'brOdoq00096pxl3ELtNR5Q',
                handle: 'experimentNotInOptimize',
                description: 'Should show negative since this is not defined in the GO dashboard or is not an active experiment',
                variants: ['0', '1']
            }
        ],
        activeExperiments: {}
    }),

    computed: {
        variantOverride() {
            return this.params.get('go-variant');
        }
    },

    mounted() {
        this.params = new URLSearchParams(window.location.search);
        this.checkForGoogleOptimize();
    },

    methods: {
        checkForGoogleOptimize() {
            if (window.google_optimize !== undefined) {
                this.setActiveExperiements()
                this.goLoaded = true;
            }
            else {
                setTimeout(this.checkForGoogleOptimize, 100);
            }
        },

        setActiveExperiements() {
            this.experimentsMapping.forEach(experiment => {
                const activeVariant = this.variantOverride || window.google_optimize.get(experiment.id);

                if (experiment.variants.includes(activeVariant)) {
                    Vue.set(this.activeExperiments, experiment.handle, activeVariant)
                }
            })
        },
    }
};
