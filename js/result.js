
var result = new Array();

      function GetCookies()
	{
	    var allcookies = document.cookie;
	    if( allcookies != '' )
	    {
		var cookies = allcookies.split(';');
		for( var i = 0; i < cookies.length; i++ )
		{
		    var cookie = cookies[i].split('=');
		    // クッキーの名前をキーとして 配列に追加する
		    result[cookie[0]] = decodeURIComponent(cookie[1]);
		}
	    }else{
                alert("error,there is no cookie");
            }

	    return result;
	}

var result = GetCookies();

var win = result['keywin'];
var lose = result[' keylose'];
var all = result[' keyall'];

console.debug(result);
console.debug(win);
console.debug(all);

var score = Math.floor(win / all * 100);


$(function(){
      $(".scoreArea").text(score + "%");
});


