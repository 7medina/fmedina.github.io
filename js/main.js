$(document).ready(function(){
	var hash = window.location.hash.replace("#","");	
	//Eventos
	ajaxCallData('get', "_library/load.php", {cid:"me"}, function(data){
        $("#divMain .divMainWrap").html(data);
    });
    $(document.body).on("click", ".divAsideWrap header li a", function(e){
		e.stopPropagation();
		$link_ = $(this);
		$MainWrapC_ = $("#divMain .divMainWrap");
		$MainWrapC_.html('<div class="loading"></div>')		
		$(".divAsideWrap header li a").removeClass("active");
		$link_.addClass("active");
		ajaxCallData('get', "_library/load.php", {cid:$link_.attr("href").replace("#","")}, function(data){
			$MainWrapC_.html(data);
		});
		//e.preventDefault();
	});

    $(document.body).on("click", "#bullSwipe li", function(e){
        $("#bullSwipe li").removeClass("on");
        $(this).addClass("on");
    });

    $(document.body).on("click", "._li", function(e){
        $("#slider").attr("style", "visibility:hidden;");
        $(".wrap-container-prew").css("display", "none");
        $("#bullSwipe").hide();
        $(".wrap-container-prew[atr-num="+$(this).attr("atr-num")+"]").css("display", "block");
        $(".wrap-prew").fadeIn("fast");
    });

    $(document.body).on("click", ".close, .background-alfa img", function(e){
        $("html, body").css("overflow","auto");
        $(".background-alfa img").attr("src", "").parent().hide();
    });

    $(document.body).on("click", ".wrap-prew .close", function(e){
        $(".wrap-prew").hide();
        $("#slider").attr("style", "visibility:visible;");
        $("#bullSwipe").show();
        
    });

    $(document.body).on("mouseenter", ".wrapview",function(e){
        $(".wrap-prew .loadImg").fadeIn(100);
    });

    $(document.body).on("mouseleave", ".wrapview", function(e){
        $(".wrap-prew .loadImg").fadeOut(100);
    });

    $(document.body).on("click", ".loadImg", function(e){
        $("html, body").css("overflow","hidden");
        var $img = $(".background-alfa img");
        $img.attr("src", $(this).attr("atr-full"));
        $img.parent().fadeIn("fast");
    })

	console.log($(".divAsideWrap header li a[href=#"+hash+"]").click());	
	$(".divAsideWrap header li a[href=#"+hash+"]").click();

});

function ajaxCallData(type, url, data, callback){
    debug(function(){
        console.log("function / ajaxCallData");
        console.time("time / Ajax Time (ajaxCallData)");
    });
    $.ajax({
        type: type,
        data: data,
        url: url,
        timeout: 60000,
        cache: false
    }).done(function(data){
        debug(function(){
            console.timeEnd("time / Ajax Time (ajaxCallData)");
            console.log("ajax / data");
        });                
        callback(data);
    }).fail(function(jqXHR, textStatus){
        if(textStatus == 'timeout'){
            debug(function(){
                throw "Problema al cargar la peticion ajax";
                console.timeEnd("time / Ajax Time (ajaxCallData)");
                console.log("ajax / Error la petición tarda demasiado");
            });
            alert("Está tardando demasiado, actualiza la web y vuelve a intentar");                    
        }
    });
}

 //Debuggin
function debug(callback){
    if(true){
        callback();
    }
}
