$(document).ready(function () {
    assign_width()
    $(".html-button").click(function () {
        $(".textarea-html").toggleClass("toggle-class")
        assign_width();

    })
    $(".css-button").click(function () {
        $(".textarea-css").toggleClass("toggle-class")
        assign_width();
    })
    $(".js-button").click(function () {
        $(".textarea-js").toggleClass("toggle-class")
        assign_width();
    })
    $(".result-button").click(function () {
        $(".textarea-result").toggleClass("toggle-class")
        assign_width();
    })
    $(".result").click(function() {
        var html = $(".textarea-html-content").val();
        var css = $(".textarea-css-content").val();
        var js = $(".textarea-js-content").val();
        var iframe_content = `<html><head><style>${css}</style><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script></head><body>${html}<script>${js}</script></body></html>`
        $("iframe").attr("srcdoc",iframe_content)
    })

})

function assign_width()
{
    var divs = $('div').filter(".toggle-class");
        var total_divs=4-divs.length;
        var width = 100/total_divs;
        var width1 = `${width}%`
        $(".textarea").css("width",width1)
}

document.getElementsByClassName