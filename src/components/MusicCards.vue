<template>
  <div id="music-card" v-cloak>
        <div class="artist_list" v-for="artist in MusicCards" :style="{'background-image': 'url(' + artist.ArtistPic + ')'}" :key="artist.Artist">
            <div class="music_card_group" :style="{'background-color': artist.BackgroundColor }">
                <h2 class="artist_name">{{artist.Artist}}</h2>
                <div class="music_card" v-for="card in artist.Albums" :key="card.albumName">
                    <img class="card_album" :src="card.albumPic" :alt="card.albumName">
                    <div class="card_bg_cover above_layer"></div>
                    <div class="card_bg_cover" :style="{background: 'linear-gradient(to bottom,rgba(' + card.themeColor+',0.8),rgba('+ card.themeColor +',0.4) 80%,transparent)'}"></div>
                    <div class="card_info">
                        <h3 class="card_title">{{card.songTitle}}</h3>
                        <h4 class="card_album_name_artist"><span>{{card.albumName}}</span><span>{{card.albumYear}}</span></h4>
                        <p class="card_intro" v-html="card.albumIntro"></p>
                    </div>
                    <div class="card_bt_content">
                        <div class="bt_content_cover" :style="{'background-color': 'rgba(' + card.themeColor+',0.5)'}"></div>
                        <div class="bt_content_blur" :style="{'background-image': 'url(' + card.albumPic + ')'}"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MusicData from '../assets/js/music.json'
export default {
    name: 'MusicCard',
    data() {
        return {
            MusicCards: MusicData
        }
  }
}
</script>

<style lang="scss" scoped>
 #music-card {
    background-color: rgba(90, 90, 90, 0.95);
    .artist_list {
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        .music_card_group {
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            justify-content: flex-end;
            flex-wrap: wrap;
            padding: 150px 0 150px;
            .artist_name {
                position: absolute;
                left: -25px;
                top: 100px;
                color: rgba(255, 255, 255, 0.5);
                font-size: 5em;
                letter-spacing: 2px;
                writing-mode: vertical-lr;
            }
            .music_card {
                flex-shrink: 0;
                color: #fff;
                width: 650px;
                padding: 20px 20px 30px;
                margin: 60px 150px;
                position: relative;
                box-shadow: #000 0 0 10px;
                border-radius: 10px;
                .card_album {
                    position: absolute;
                    z-index: 6;
                    left: -100px;
                    top: 30px;
                    width: 300px;
                    box-shadow: #000 0 0 30px;
                }
                .card_bg_cover {
                    &.above_layer {
                        background: linear-gradient(to bottom, rgba(100, 100, 100, 0.4), rgba(100, 100, 100, 0));
                        z-index: 3;
                    }
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    z-index: 2;
                    border-radius: 10px 10px 0 0;
                }
                .card_info {
                    position: relative;
                    display: inline-block;
                    width: 375px;
                    left: 245px;
                    z-index: 5;
                    .card_title {
                        font-size: 1.6em;
                    }
                    .card_intro {
                        line-height: 1.5em;
                        span {
                            display: block;
                        }
                    }
                }
                .card_bt_content {
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    position: absolute;
                    top: 0;
                    left: 0;
                    border-radius: 10px;
                    z-index: 1;
                    .bt_content_cover {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        z-index: 1;
                        left: 0;
                    }
                    .bt_content_blur {
                        background-size: cover;
                        filter: blur(8px);
                        width: 100%;
                        height: 100%;
                        position: relative;
                        z-index: 0;
                    }
                }
                .card_album_name_artist {
                    span+span {
                        margin-left: 3em;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1000px) {
    #music-card .artist_list .music_card_group {
        justify-content: center;
        padding: 10px 0;
        .artist_name {
            position: relative;
            left: 0;
            top: 0;
            writing-mode: initial;
            margin: 10px 0 0;
            color: rgba(136, 136, 136, 0.8);
        }
    }
}

@media screen and (max-device-width: 1000px) {
    #music-card .artist_list {
        background-attachment: initial;
    }
}


@media screen and (max-width: 800px) {
    #music-card .artist_list .music_card_group {
        .artist_name {
            font-size: 3em;
        }
        .music_card {
            width: 400px;
            margin: 60px auto;
            .card_album {
                display: none;
            }
            .card_info {
                left: 0;
                width: 100%;
                padding: 0 30px;
                box-sizing: border-box;
            }
        }
    }
}


@media screen and (max-width: 600px) {
    #music-card .artist_list .music_card_group .music_card {
        width: 80%;
        margin:  60px auto;
        .card_album {
            display: none;
        }
        .card_info {
            left: 0;
            width: 100%;
            padding: 0 10px;
            box-sizing: border-box;
        }
    }
}

</style>
