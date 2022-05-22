let sketch=function(p){
 let canvas;
 p.setup=function(){
     //creating Canvas
     canvas=p.createCanvas(640,480);
     canvas.id("canvas");
     //setting the color mode
     p.colorMode(p.HSB);
     //setting the color
     p.stroke(255);
     //setting the weight of the stroke
     p.strokeWeight(3);
 }
 p.draw=function(){
     //making the background clear
     p.clear();
     //if detections are not undefined and one or more than one faces are detected do the following
     if(detections != undefined){
        if(detections.multiFaceLandmarks != undefined && detections.multiFaceLandmarks.length >= 1){
          p.faceMesh();
        }
      }

 }
 p.faceMesh=function(){
     //beginShape() function will tell the type of object to be drawn and in this case it is points
     p.beginShape(p.POINTS);
     for(let j=0;j<detections.multiFaceLandmarks[0].length;j++){
         let x=detections.multiFaceLandmarks[0][j].x*p.width;
         let y=detections.multiFaceLandmarks[0][j].y*p.height;
         p.vertex(x,y);
     }
     p.endShape();
 }

}
let myp5=new p5 (sketch);