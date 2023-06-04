<template>
    <v-container>
        <v-row>
            <h5>Settings</h5>
        </v-row>
        <v-row class="jcsb item mt-1">
            Change font-size <button @click="changeFontSize">Change</button>
        </v-row>
        <v-row class="jcsb item mt-1">
            Enable high contrast theme <button @click="highContrastTheme">Enable</button>
        </v-row>
    </v-container>
</template>

<script>
// import HomeBlock from "@/components/HomeBlock.vue";

export default {
    // components: {
    //     HomeBlock,
    // },
    data() {
        return {
            root: null
        };
    },
    methods: {
        changeFontSize() {
            this.root.style.setProperty('--font', '20px')
        },
        highContrastTheme() {
            // this.root.style.setProperty('--bg', '#111')
            // this.root.style.setProperty('--main', 'yellow')
            const all = document.querySelector('body')
            all.style.background = '#222'
        }
    },
    mounted() {
        this.root = document.querySelector(':root')
    }
};
</script>
<style>
.jcc {
    justify-content: center;
}
.mt-1 {
    margin-top: 1rem;
}
.jcsb {
    justify-content: space-between;
}
.item {
    background: #ddd;
    border-radius: 8px;
    padding: 10px 15px;
}
</style>
