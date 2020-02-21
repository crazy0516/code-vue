Vue.component("mybtn", {
    props: {
        banned: {
            type: Boolean,
            default: true
        }
    },
    template: `
        <button @click="handeClick" :disabled="banned">
            <slot></slot>
        </button>
    `,
    methods: {
        handeClick: function () {
            this.$emit("click")
        }
    }
})