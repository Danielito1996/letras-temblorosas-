<style>
.jc{
position:relative;
}
</style>

<script language="JavaScript1.2">

//Trembling message script- (c) Dynamic Drive (www.dynamicdrive.com)
//For full source code, 100's more DHTML scripts, and TOS,
//visit http://www.dynamicdrive.com

var ns6=document.getElementById&&!document.all
var ie=document.all

var customcollect=new Array()
var i=0

function jiggleit(num){
if ((!document.all&&!document.getElementById)) return;
customcollect[num].style.left=(parseInt(customcollect[num].style.left)==-1)? customcollect[num].style.left=1 : customcollect[num].style.left=-1
}

function init(){
if (ie){
while (eval("document.all.jiggle"+i)!=null){
customcollect[i]= eval("document.all.jiggle"+i)
i++
} 
}
else if (ns6){
while (document.getElementById("jiggle"+i)!=null){
customcollect[i]= document.getElementById("jiggle"+i)
i++
}
}

if (customcollect.length==1)
setInterval("jiggleit(0)",80)
else if (customcollect.length>1)
for (y=0;y<customcollect.length;y++){
var tempvariable='setInterval("jiggleit('+y+')",'+'100)'
eval(tempvariable)
}
}

window.onload=init

</script>
