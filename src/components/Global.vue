<script>
//store the global variables
import Vue from 'vue'
var bus=new Vue();

export default {
    bus,
    allSongs: [
        {index: 0, id: 27955653, name: '千千阙歌', singer: '陈乐基', src: '../../static/陈乐基 - 千千阙歌.mp3'},
        {index: 1, id: 27955653, name: '如梦一场', singer: '李健', src: '../../static/李健 - 梦一场.mp3'},
        {index: 2, id: 27955653, name: '我很快乐', singer: '刘惜君', src: '../../static/刘惜君 - 我很快乐.mp3'},
        {index: 3, id: 27955653, name: '你还要我怎样', singer: '薛之谦', src: '../../static/你还要我怎样.mp3'}
  ]
}
</script>
