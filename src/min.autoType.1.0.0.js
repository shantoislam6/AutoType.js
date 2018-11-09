/*
 * Auto Typing Effect
 * @version 1.0.0
 * @author Shanto Islam
 * @todo Baner Title Antimtion
  https://github.com/shantoislam6/
 * 
*/
class AutoTyping{constructor(obj){this.object=obj;this.charIndex=0;this.arrIndex=0;this.colorIndex=0}
start(){let container=this.object.container;if(this.object.blink==!0){if(this.object.blinkType=='flatted'){container.innerHTML+='<span ></span><span class="a-t-c2">_</span>'}else{container.innerHTML+='<span ></span><span class="a-t-c1">|</span>'}}else{container.innerHTML+='<span></span>'}
container.lastElementChild.style.animation='blink-caret '+this.object.blinkSpeed/1000+'s step-end infinite';let that=this;function autoType(){let loopIngTime;if(that.charIndex==that.object.text[that.arrIndex].length){that.charIndex=0;that.arrIndex++;if(that.object.color!=undefined){that.colorIndex++}
if(that.object.loop===!0){if(that.arrIndex==that.object.text.length){that.arrIndex=0}
if(that.object.color!=undefined){if(that.colorIndex==that.object.color.length){that.colorIndex=0}}}else{clearTimeout(loopIngTime)}
setTimeout(()=>{container.firstElementChild.innerHTML='';if(that.object.color!=undefined){if(that.object.blink){container.lastElementChild.style.background=that.object.color[that.colorIndex]}
container.style.color=that.object.color[that.colorIndex]}
setTimeout(autoType,that.object.typeSpeed)},that.object.loopSpeed)}else{loopIngTime=setTimeout(autoType,that.object.typeSpeed);charAt()}}
function charAt(){if(that.object.color!=undefined){container.style.color=that.object.color[that.colorIndex];if(that.object.blink){container.lastElementChild.style.background=that.object.color[that.colorIndex]}}
container.firstElementChild.innerHTML+=that.object.text[that.arrIndex].charAt(that.charIndex);that.charIndex++}
autoType()}}
function autoTyping(obj){return new AutoTyping(obj)}