$( document ).ready(function() {
    console.log( "ready!" );

    var txt = "";
    var res;

    $(".touche").on("click", function () {
        console.log("click");
       toucheHit($(this));
    });

    $("#egal").on("click", function () {
        txt = date2000();
        console.log(txt);
        // txt = $(".ecran").text();
        // if (txt.match('#\-#')) {
        //     res = txt.split("-")
        //     txt = soustraction(res[0], res[1]);
        //     console.log(txt);
            $(".ecran").text(txt);
        // } else  {
        //     console.log("not good");
        // }
    });

    function toucheHit(touche) {
        txt = touche.text();
        $(".ecran").append(txt);
    }


});