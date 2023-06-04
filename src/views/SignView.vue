<template>
    <v-container>
        <h2>Sign Language Recognition</h2>
        <v-row class="features">
            <v-col cols="12" md="4">
                <div class="feature">
                    <div class="icon">
                        <img :src="require('@/assets/img/mic.svg')" alt="" />
                    </div>
                    <div class="body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to ma
                    </div>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div class="feature">
                    <div class="icon">
                        <img :src="require('@/assets/img/lock.svg')" alt="" />
                    </div>
                    <div class="body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to ma
                    </div>
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div class="feature">
                    <div class="icon">
                        <img :src="require('@/assets/img/brain.svg')" alt="" />
                    </div>
                    <div class="body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to ma
                    </div>
                </div>
            </v-col>
        </v-row>
        <h3>Try Yourself</h3>
        <v-row class="Example">
            <v-col cols="12" md="7" class="test">
                <div>
                    <button class="load" @click="loadFrame" v-if="!active">
                        Load
                    </button>
                    <iframe :src="url" scrolling="no"></iframe>
                </div>
            </v-col>
            <v-col class="img" cols="12" md="5">
                <img :src="require('@/assets/img/sign.jpg')" alt="" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            active: false,
            url: "",
        };
    },
    methods: {
        loadFrame() {
            this.url = "http://localhost:5000/video_feed";
            this.active = true;
        },
    },
};
</script>

<style scoped>
h2 {
    width: 100%;
    text-align: center;
    font-weight: 500;
    margin: 50px 0;
}

.feature {
    box-shadow: 0px 0px 20px #e5e2e2;
    background: #fff;
    border-radius: 10px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.icon {
    display: flex;
    justify-content: center;
    padding-bottom: 14px;
}

.test > div {
    position: relative;
    display: flex;
    justify-content: center;
    height: 400px;
    max-width: 800px;
}

.test iframe {
    height: 100%;
    width: 100%;
    border: none;
}

.load {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    background: #fff;
}

.img {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    object-fit: contain;
    max-width: 100%;
}
</style>
