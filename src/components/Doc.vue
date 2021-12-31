<script>
import { jsPDF } from "jspdf";
import { ref, onMounted } from '@vue/runtime-core';
import '../assets/msjh-normal' // 引入線上轉換後的字型
export default {
  setup() {
    const doc = new jsPDF(
      {
        orientation: 'p',
        unit: 'pt',
        format: 'a4',
        putOnlyUsedFonts:true,
        floatPrecision: 16 // or "smart", default is 16
      }
    );

    const content = ref('')
    console.log(doc.getFontList()); //查詢jsPDF可輸出的字型

    const save = ()=> {
      doc.html(content.value,{
        callback: (doc)=> {
          
          doc.save("Demo.pdf");
        },
        // x: 100,
        // y: 100,
        // autoPaging: 'slice'
      })
    }

    
    return {
      save,
      content
    }
  }
}
</script>

<template lang="pug">

.content(ref='content')  
  h1 jsPDF Test Demo
  p 乘舟晚來...豈同三峽不黃鶴夜身後事門，如青營萬里輪臺山川相見樓，將軍似淚沾世空山人事野老日一聲，西出日暮君罷久門前愛月江，何在向人借問之斯文金節落葉滿休。日之秋一人生仙風吹，紅顏無:悲雁之君十，萬萬里天涯第一江欲薄何為？無限不知，身長安常鼓春風，故人江水夜雨忽聞下馬，盡，徑願千載鳳凰茫茫⋯生望。生南山陲，秋一雁望秋月故人玉陽殿裡，堪哀對此，無從何處與文青天十五事不:復南斗，門前十吳氣。越溪女春，斜復理城家荊門連黃⋯醉傷船晚來鳳凰樓石，西出春，征人余亦未寒山青鳥，大悠悠高。
  .boxs
    .box.box1 
    .box.box2 
    .box.box3 
  button(@click="save") save

</template>

<style lang="stylus" scoped>
* {
  box-sizing border-box
}
.content
  margin 30px
  width  600px // A4寬約 600px
  // height 100vh // A4高約 840px
  // background-color #222
  // border 1px solid #000
  h1
    color orange
  p
    font-family 'msjh'
    margin 10px 0
    width 540px 
    border 1px dashed #000
    padding 16px
.boxs
  width 300px
  height 300px
  border-right 1px solid rgb(0,0,255)
  border-bottom 1px solid rgb(255,0,0)
  display flex
  align-items flex-start
  margin 20px 0
  .box
    width 100px
    height 100px

  .box1
    height 300px
    background-color rgb(255,0,0)
  .box2
    height 200px
    background-color rgb(0,255,0)
  .box3
    background-color rgb(0,0,255)
</style>