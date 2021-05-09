// const container = document.querySelector('.grid-container')
// const URL = 'https://source.unsplash.com/random/1280x721'


// function loadImages(numImages = 4) {
//     let i = 0;
//     while(i < numImages){
//         const img = document.createElement('img')
//         img.src = `${URL}`;
//         container.appendChild(img);
//         i++;
//     }
// }

// loadImages()

// var img = document.createElement("img");
// img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
// var src = document.getElementById("header");
// src.appendChild(img);

var currentscrollHeight = 0;
var count = 0;
let sig = 20;
ScrollDebounce = true;
 
$(window).on("scroll", function () {
 
  const scrollHeight = $(document).height();
  const scrollPos = Math.floor($(window).height() + $(window).scrollTop());
  const isBottom = scrollHeight - 100 < scrollPos;
  // const list = $(".row");
  // console.log(list);
  const list2 = $(".container-fluid ");
  // console.log(list2);
  
 
  if (isBottom && currentscrollHeight < scrollHeight) { 
 
      
   
    if (ScrollDebounce) { 
        ScrollDebounce = false;
      
    for(var i = 0; i < 2; i++) {
   
      sig++;
      // console.log(sig);
      list2.append(`  <div class="row ">
      <div class="col-sm-6">
        <div class="thumbnail">
          <img class="float-left" src="https://source.unsplash.com/random/1800x1400?sig=`+sig+`'" alt="unsplash" >
        </div>
      </div>
      <div class="col-sm-6">
        <div class="thumbnail">
          <img class="img float-right" src="https://source.unsplash.com/random/1800x1400?sig=`+ ++sig +`"  alt="unsplash">
        </div>
    </div>
  </div>`
      );
      count++;
     
    }
    console.log(ScrollDebounce);
    setTimeout(function () { ScrollDebounce = true; }, 700); 
    currentscrollHeight = scrollHeight;
  }
}
});