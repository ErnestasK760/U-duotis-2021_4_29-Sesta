
//initial load
$(document).ready(function() {
var URL = "https://api.unsplash.com/photos?client_id=ypwAoVfL6vYqtraKuUSYtWDO4LF732P9XlmNyI4bPAw&page=1"
fetch("https://api.unsplash.com/photos?client_id=ypwAoVfL6vYqtraKuUSYtWDO4LF732P9XlmNyI4bPAw&page=1")
.then(res => res.json())
.then(data => {
    console.log(data);
    for(var i = 0; i < data.length; i++) {
        console.log(data[i].urls.regular);
        if(data[i].alt_description){
            data[i].alt_description
        }else{
            data[i].alt_description = "there is no description"
        }
        $(".row").append(`
        <div class="col-md-6 grid-item">
            <div class="card mb-3">
                <img src="${data[i].urls.regular}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data[i].user.username}</h5>
                <p class="card-text">"${data[i].alt_description}"</p>
                <p class="card-text"><small class="text-muted">Likes : ${data[i].likes}</small></p>
            </div>
        </div>`)
    }
    var iso = new Isotope('.grid',{
        itemSelector: '.grid-item',
        stagger: 30,
        getSortData: {
        title: '.card-title'
    },
    masonry: {
        columnWidth: '.grid-sizer',
        gutter: '.grid-gutter-sizer'
    },

    sortBy: 'title',
    sortAscending: true

    });
    var sortByGroup = document.querySelector('.sort-by-button');
    sortByGroup.addEventListener('click', function( event ){
        
        if(!matchesSelector(event.target,'.btn')){
            return;
        } 
        var sortValue = event.target.getAttribute('data-sort-value');
        var sortDirection = event.target.getAttribute('data-sort-direction');
        var isAscending = (sortDirection == 'asc');
        
        iso.arrange({
            sortBy: sortValue,
            sortAscending: isAscending
        });
        
        console.log(sortValue,sortDirection,isAscending)
        });
      }    
)});
var currentscrollHeight = 0;
        var count = 0;
        // Parenkamas skaičius puslapio nuo kurio vis scrollinant keisis 'page' nr
        var sig = 20;
        ScrollDebounce = true;
        
    $(window).on("scroll", function () {
        const scrollHeight = $(document).height();
        const scrollPos = Math.floor($(window).height() + $(window).scrollTop());
        const isBottom = scrollHeight - 100 < scrollPos;
         
        if (isBottom && currentscrollHeight < scrollHeight) { 
        
            if (ScrollDebounce) { 
                ScrollDebounce = false;
            
                fetch("https://api.unsplash.com/photos?client_id=ypwAoVfL6vYqtraKuUSYtWDO4LF732P9XlmNyI4bPAw&page="+sig)
                .then(res => res.json())
                .then(data => {

                for (var i = 0; i < data.length; i++) {
                    console.log(data[i].urls.regular);
                    if(data[i].alt_description){
                        data[i].alt_description
                    }else{
                        data[i].alt_description = "there is no description"
                    }
                    $(".row").append (`
                    <div class="col-md-6 grid-item">
                        <div class="card mb-3">
                            <img src="${data[i].urls.regular}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data[i].user.username}</h5>
                            <p class="card-text">"${data[i].alt_description}"</p>
                            <p class="card-text"><small class="text-muted">Likes : ${data[i].likes}</small></p>
                        </div>
                    </div>`)    
                        }
                        sig++;
            console.log(sig);
                        var iso = new Isotope('.grid', {
                            itemSelector: '.grid-item',
                            stagger: 30,
                            getSortData: {
                                title: '.card-title'
                            },
                            masonry: {
                                columnWidth: '.grid-sizer',
                                gutter: '.grid-gutter-sizer'
                            },
                            sortBy: 'title',
                            sortAscending: true,
                        });
                        var sortByGroup = document.querySelector('.sort-by-button');
                sortByGroup.addEventListener('click', function(event){

                    if (!matchesSelector(event.target, '.btn')) {
                        return;
                    }

                    var sortValue = event.target.getAttribute('data-sort-value');
                    var sortDirection = event.target.getAttribute('data-sort-direction');
                    var isAscending = (sortDirection == 'asc'); //true, folse

                    iso.arrange({
                        sortBy: sortValue,
                        sortAscending: isAscending
                    });


                    // console.log(isAscending);

                    // console.log(sortValue);
                    // console.log( sortDirection);
                });
            
            });
            console.log(ScrollDebounce);
            setTimeout(function () { ScrollDebounce = true; }, 100); 
            currentscrollHeight = scrollHeight;
        
    }
    }});






// var iso = new Isotope('.grid',{
//     itemSelector: '.grid-item',
//     stagger: 30,
//     getSortData: {
//         title: '.card-title'
//     },
//     masonry: {
//         columnWidth: '.grid-sizer',
//         gutter: '.grid-gutter-sizer'
//     },

//     sortBy: 'title',
//     sortAscending: true

//         });
//     }