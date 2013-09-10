

  
     // 0 : chuei
     // 1 : syuzo
     // 2 : syoei
     // 3 : syoji
     // 4 : ebichiri
     var imgOrg = [
           ["images/imgdata/chuei01.png","0"],
           ["images/imgdata/chuei02.png","0"],
           ["images/imgdata/chuei03.png","0"],
           ["images/imgdata/chuei04.png","0"],
           ["images/imgdata/chuei05.png","0"],
           ["images/imgdata/chuei01.png","0"],
           ["images/imgdata/chuei02.png","0"],
           ["images/imgdata/chuei03.png","0"],
           ["images/imgdata/chuei04.png","0"],
           ["images/imgdata/chuei05.png","0"],
           ["images/imgdata/shouji.png","3"],
           ["images/imgdata/shouei.png","2"],
           ["images/imgdata/syuzou.png","1"],
           ["images/imgdata/syuzou02.png","1"],
           ["images/imgdata/ebichiri.png","4"],
                 ];

     var boss = [["images/imgdata/syuzou02.png","1"]];

     //count img number 
     var count = imgOrg.length;

     //shuffle array
     function arrayShuffle(list){
          var d,
          c,
          b = list.length,
          newArray = new Array();
          for(var i in list){
           newArray[i] = list[i];
          }
            while(b){
                c = Math.floor(Math.random() * b); // 配列の数だけ乱数生成
                d = newArray[--b];                     // dは配列の数マイナス１
                newArray[b] = newArray[c];                 // 配列の乱数番目に
                newArray[c] = d;
            }
            return newArray;
     }
     var imgShuffle = arrayShuffle(imgOrg);

         var win = 0;
         var lose = 0;

    //num  : image src
    //goal : landing position
    //start: starting position
    //array: random or property 
    function set(num, goal, start, arr){
 
         var randomX = Math.floor(Math.random() * 20); 
         var position = randomX * start *50;
         if (position > 800){
            position = 800;
         }

         //set images
         $('.startfield').append("<img src='" + arr[num][0] +"'class='"+num+"' id='change"+num+"'>");      

         var src = $('#change'+num).attr("src");
         if(src.match(/syuzou02/)){
             $('.'+num).css('left', "100px");
         }else{
             $('.'+num).css('left', position);
         }

         //for big syuzo
         if(src.match(/syuzou02/)){
             $('#change'+num).css("width", "800px");
         }

         //start to move
         //for big syuzo
         if(src.match(/syuzou02/)){
         $('.'+num).animate({
             'top' : '700px',
             'left' : '100px',
         }, {
                'duration': 2000,  //falling speed
                'easing': 'linear',
                'complete': function(){

                    var lastStanding = $(this).attr("src"); 
                    if(lastStanding.match(/chuei/) || lastStanding.match(/no/)){
                        lose++ ;
                    }else{
                        win++ ;
                    }

                    $(this).css("display","none");


                }
          }); 
          }else{
             $('.'+num).animate({
                 'top' : '700px',
                 'left' : goal,
             }, {
                    'duration': 2000,  //falling speed
                    'easing': 'linear',
                    'complete': function(){

                        var lastStanding = $(this).attr("src"); 
                        if(lastStanding.match(/chuei/) || lastStanding.match(/no/)){
                            lose++ ;
                        }else{
                            win++ ;
                        }


                    }
              }); 

          }

        //when on mouse image
        $('.'+num).hover(function(){
      
            if (arr[num][1] == 0){
                $('.'+num).attr('src','images/yes.png')
            }else{
                $('.'+num).attr('src','images/no.png')
            }

        });  

    }

    function goResult(){
        // save to cookie
        document.cookie = "keywin=" + win + ";";
        document.cookie = "keylose=" + lose + ";";
        document.cookie = "keyall=" + count + ";";
        location.href = "result.html";
    }

    function game(){



    }

    $(function(){
       var timer;
       var i = 0;

       timer = setInterval((function(){

                            set(i, '200px', 1, imgShuffle);

                            if (i ==  count-1){
                                clearInterval(timer);
                                setTimeout('goResult()',4000);
                            }
                            i++;
           
       }),1000);
    }); 
     


