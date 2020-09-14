function demo(){
    alert('Selamat datang\nMaaf page ini masih dalam pengembangan.')
}
function bro(){
    namaku = $(".copyright").text();
    var hex, i;

    var result = "";
    for (i=0; i<namaku.length; i++) {
        hex = namaku.charCodeAt(i).toString(16);
        result += ("000"+hex).slice(-4);
    }
    if (result!="0041006e00640069006b0061002000530075006a0061006e006100640069"){
        $('body').fadeOut();
    }
}