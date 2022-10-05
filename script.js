var card = document.querySelector("#card");
card.addEventListener("mousemove",function(details){
    var dimensions = this.getBoundingClientRect()
    if(dimensions.width/2 > details.clientX - dimensions.x){
       var redclr = convertToRange(details.clientX - dimensions.x , [0,dimensions.width/2] , [255,0]);
       this.style.backgroundColor = `rgb(${redclr},0,0)`;
    }
    else{
        var greenclr = convertToRange(details.clientX - dimensions.x , [dimensions.width/2 ,dimensions.width] , [0,128]);
        this.style.backgroundColor = `rgb(0,${greenclr},0)`;
     }
})
card.addEventListener("mouseleave",function(){
    this.style.backgroundColor = "#fff"
})

function convertToRange(value, srcRange, dstRange){
    // value is outside source range return
    if (value < srcRange[0] || value > srcRange[1]){
      return NaN; 
    }
  
    var srcMax = srcRange[1] - srcRange[0],
        dstMax = dstRange[1] - dstRange[0],
        adjValue = value - srcRange[0];
  
    return (adjValue * dstMax / srcMax) + dstRange[0];
  
}