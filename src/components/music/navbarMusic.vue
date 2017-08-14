<template>
  <div id="content">
    <div class="nav-top">
        <div class="nav-main" @click="jump($event)">
            <table style="width:100%">
                <tbody>
                    <tr>
            <td class="personalSuggest" v-bind:class="{activeBbr: activeSuggest}" id="personalSuggest">
                <span id="personalSuggest">个性推荐</span>
            </td>
             <td class="songsList" v-bind:class="{activeBbr: activeSongs}" id="songsList">
                <span id="songsList">歌单</span>
            </td>
            <td class="singerList" v-bind:class="{activeBbr: activeSingers}" id="singerList">
                <span id="singerList">歌手</span>
            </td>
            <td class="rankList" v-bind:class="{activeBbr: activeRank}" id="rankList">
                <span id="rankList">排行榜</span>
            </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'navbarMusic',
    data() {
        return{
            activeSuggest: true,
            activeSongs: false,
            activeSingers: false,
            activeRank: false,
        }
    },
    methods: {
        jump: function(event) {
            if (event.target.id == 'personalSuggest'){
                this.activeSuggest = true;
                this.activeSongs = this.activeSingers = this.activeRank = false;
            }else if (event.target.id == 'songsList'){
                this.activeSongs = true;
                this.activeSuggest = this.activeSingers = this.activeRank = false;
            }else if (event.target.id == 'singerList'){
                this.activeSingers = true;
                this.activeSuggest = this.activeRank = this.activeSongs = false;
            }else if (event.target.id == 'rankList'){
                this.activeRank = true;
                this.activeSuggest = this.activeSongs = this.activeSingers = false;
            }if (event.target.id) {
                this.$router.push({ path: '/music/' + event.target.id })
            }
        }
    }
}
</script>

<style>
/* .nav-main{
    height: 25px;
} */
table{
    border-collapse: collapse;
}
#personalSuggest.personalSuggest,#songsList.songsList,#singerList.singerList,#rankList.rankList{
    
   width: 25%;
}
.activeBbr {
    /* //background-color: red; */
    color: red;
    border-bottom: 2px solid red;
    /* border: 2px solid red; */
}
</style>
