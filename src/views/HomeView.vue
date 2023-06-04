<template>
    <v-container>
        <v-row class="first">
            <v-col cols="12" md="6">
                <div class="body">
                    <h1>Embrace inclusivity and unlock new possibilities</h1>
                    <div>
                        <h2>With Empower<span>AI</span></h2>
                        <div>
                            Start the jorney
                            <img
                                :src="require('@/assets/img/arrow.svg')"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" md="6" class="img">
                <img :src="require('@/assets/img/1.png')" alt="iphone" />
            </v-col>
        </v-row>
        <div class="space"></div>
        <home-block :data="via" />
        <home-block :data="sn" />
        <home-block :data="fr" />
        <home-block :data="hm" />
    </v-container>
</template>

<script>
import HomeBlock from "@/components/HomeBlock.vue";

export default {
    components: {
        HomeBlock,
    },
    data() {
        return {
            via: {
                main: "AI Chat",
                title: "Virtual Assistant",
                body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
                features: [
                    {
                        name: "Voice to text",
                        icon: "mic",
                    },
                    {
                        name: "Text to voice",
                        icon: "dynamic",
                    },
                    {
                        name: "ChatGPT",
                        icon: "brain",
                    },
                ],
                img: "2.png",
                link: "/chat",
            },
            fr: {
                main: "Image Processing",
                title: "Face Recognition",
                body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
                features: [
                    {
                        name: "Facial expressions",
                        icon: "facial",
                    },
                    {
                        name: "Authorization",
                        icon: "lock",
                    },
                ],
                img: "3.png",
                link: "/face",
            },
            sn: {
                title: "Sign Language Recognition",
                body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
                features: [
                    {
                        name: "Training model",
                        icon: "model",
                    },
                    {
                        name: "Real time chat",
                        icon: "chat",
                    },
                ],
                img: "4.png",
                opossite: true,
                link: "/sign",
            },
            voa: {
                title: "Voice Assistant",
                body: "",
                features: [
                    {
                        name: "",
                        icon: "",
                    },
                ],
                img: "",
                link: "/voice",
            },
            hm: {
                title: "Scheduling",
                main: "Health Management",
                body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
                features: [
                    {
                        name: "Some Text",
                        icon: "health",
                    },
                    {
                        name: "Time Management",
                        icon: "time",
                    },
                ],
                img: "5.png",
                opossite: true,
                link: "/health",
            },
        };
    },
};
</script>

<style>
.space {
    width: 100%;
    height: 100px;
}

h1 {
    font-size: calc(var(--font) * 4);
    font-weight: 700;
    line-height: 81px;
    letter-spacing: 0em;
    text-align: left;
}

.first {
    height: calc(100vh - var(--header));
}

.first .body {
    max-width: 420px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-evenly;
    overflow: hidden;
    height: 100%;
}

.first > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    height: 100%;
}

.img {
    height: 100%;
    display: flex;
    align-items: center;
}

.img > img {
    object-fit: scale-down;
    max-height: 100%;
}

.body > div {
    width: 100%;
    text-align: left;
}

h2 {
    font-style: normal;
    font-weight: 300;
    font-size: calc(var(--font) * 3);
    line-height: 60px;
}

span {
    color: var(--main);
}

.first .body > div > div {
    font-size: calc(car(--font)) * 1.5;
    display: flex;
    align-items: center;
    opacity: 0.6;
    margin-top: 30px;
    z-index: 0;
}

.first .body > div img {
    width: 24px;
    height: 24px;
}

h3 {
    font-weight: 500;
    font-size: calc(var(--font) * 2.5);
    line-height: 45px;
    margin: 40px 0;
}

@media screen and (max-width: 960px) {
    h1,
    h2 {
        text-align: center;
    }
    .first .body > div > div {
        justify-content: center;
    }

    .first .img {
        display: none;
    }

    .space {
        height: 0;
    }

    h3 {
        padding: 0 !important;
    }
}
</style>
