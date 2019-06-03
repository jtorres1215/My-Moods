var happyFace = ["https://www.garrettspecialties.com/images/products/1364-315009/happy-face-emoji-stress-reliever-3-1364-315009.jpg"];
var sadFace = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBUqx5Z3eNq24ADD7UroMUeQzsHNJul-rHAscW7pfQ8i9Jcc0FMw"];
var angryFace = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPLJi5tDAbYxJJ_1QR_tgQd0JQtAiQ8pfslxKgeV3CjU1rG09Y"];
var tiredFace = ["http://www.myiconfinder.com/uploads/iconsets/256-256-bfadd776f03c906cf984fcde6c3f1d31-emoticons.png"];

$('button').click(function(){
    var input = $('input').val();
    $(".images").html("");
    if(input === "happy"){
        happyMood();
        
    } else if(input==="sad"){
        sadMood();
    }else if(input==="angry"){
        angryMood();
    }else if (input==="tired"){
        tiredMood();
    }else{
     alert("Please enter happy, sad, angry, or tired!");   
    }
});


function happyMood(){
    changeBackground("http://clipart-library.com/images/ziX5G6qAT.png");
    changeTextColor("orange");
    displayImage(happyFace);
}
function sadMood(){
    changeBackground("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1lc-JCE2z-sMeo562j2ZD3tXPfyKKCCNjfeb_B1ZF9mOfY4y8w");
    changeTextColor("grey");
    displayImage(sadFace);
}
function angryMood(){
    changeBackground("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd3Ug0flSAGJYbaI68KUCeHWl8LIObtXj_iWRBBBJjCPYVriY2");
    changeTextColor("red");
    displayImage(angryFace);
}
function tiredMood(){
    changeBackground("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUMvN0Tlj26JQSkFxRt1AjNDCUp0cn1JbO3QN2lg1d1o0KGYMq-w");
    changeTextColor("blue");
    displayImage(tiredFace);
}


function changeBackground(backgroundImage){
    $('body').css('background-image', "url("+backgroundImage+")");
}

function changeTextColor(color){
    $('body').css('color', color);
}

function displayImage(image){
    $('.images').append('<img src ='+ image + '>');

}