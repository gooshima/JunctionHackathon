const API_HOST = "https://api.osagari.trade/";

$(document).ready(function () {

    $('.ioBtn').click(function(){
        var val = $(this).val();
        var txt = $(this).text();
        console.log("btn " + val + " clicked...");
        alert(val + " | " + txt);

        let apiUrl = "";

        switch(val){
            case "api_item/all/":
            case "pubkey":
            case "newblock":
                apiUrl = val;
            default:
                //alert(val);
                break;
        }

        if(apiUrl){
            $.ajax(API_HOST + apiUrl, {
                type: 'GET',
                data: "heyhey"
            }).done(function (data) {
                console.log(data);
                alert("ok");
            }).fail(function () {
                alert("error");
            });
        }else{
            alert("emtpy");
        }

    });

});
