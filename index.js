{
    /*
    * *
    * * author ÜBEYİD KOŞSALUN
    * * check out my android java camera2 api  
    * * github url https://github.com/ubeyid/Camera2-Android
    * * 
    * *check my instagram home page clone web app
    * github url https://github.com/ubeyid/Instagram-Home-Page-Clone
    * */
    
}
{
    //get draggable div with id
    var main=document.getElementById("main");
//cursor's first x position from left
var firstX;
//cursor's first y position from top
var firstY;
//cursor's last x position from left
var lastX;
//cursor's last x position from left
var lastY;
//final x distance from left 
var left;
//final y distance from top 
var topp;
//div's first distance from top
var firstTop;
//div's first distance from left
var firstLeft;

//when div is started to dragging 
main.ondragstart=function(ev){
        
        firstLeft=this.style.left;
        //if left distance is not equals to ''
        if(firstLeft!=''){
            //remove "px" string from left  distance
            firstLeft=Number.parseInt(firstLeft.substr(0,firstLeft.length-2));
        }
        
        firstTop=this.style.top;
        //if top distance is not equals to ''
        if(firstTop!=''){
            //remove "px" string from top distance
            firstTop=Number.parseInt(firstTop.substr(0,firstTop.length-2));
        }
    
    console.log(firstLeft);
    console.log(firstTop);
    //when drag start is started get cursor's x and y coordinate
    firstX=ev.offsetX;
    firstY=ev.offsetY;
   
};

//when div dragging event is finished
main.ondragend=function(ev){
    //when drag is ended
    //get cursor's last x and y coordinate
    lastX=ev.offsetX;
    lastY=ev.offsetY;
    //find total elements dragging distance in x and y 
    left=lastX - firstX;
    topp=lastY - firstY;
    
    //finally set img top distance in "px"
    this.style.top=firstTop+topp+"px";
    // set img left distance in "px"
    this.style.left=firstLeft+left+"px";
   
};


}
