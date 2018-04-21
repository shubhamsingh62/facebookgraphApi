let mytoken;
$(document).ready( ()=>{

    $('#btn2').on('click',token2)

})

  let token2 = () =>{
  mytoken = document.getElementById("recipient-name").value;

    if(mytoken == null || mytoken == "" ){


    	alert("not valid token");
}
    	else{

  	getdata();
    }
}


let getdata = () =>{

    $.ajax({

    	type: 'GET',
    	datatype: 'json',
    	url: 'https://graph.facebook.com/me?fields=id,name,cover,picture,feed{message,story,picture,created_time,type,description}&access_token='+mytoken,
  		async:true,

    	success:(response) =>{
    			console.log('success');
            
            $('#profilePhoto').html('<img src="' + response.picture.data.url + '" class="img-fluid profileHeight"/>');

           $('#cover').css('background-image','Url('+response.cover.source+')');
         
 //scrpting for feed page

    $('#time').append(response.feed.data[0].created_time)
    $('#story').append(response.feed.data[0].story)
    $('#story').append(response.feed.data[0].message)
    $('#des').append(response.feed.data[0].description)
    $('#t').append(response.feed.data[0].type)
    $('#image').html('<img src="' + response.feed.data[0].picture + '" class="img-fluid"/>');


    $('#time1').append(response.feed.data[2].created_time)
    $('#story1').append(response.feed.data[2].message)
    $('#story1').append(response.feed.data[2].story) 
    $('#des1').append(response.feed.data[2].description)
    $('#t1').append(response.feed.data[2].type)
    $('#image1').html('<img src="' + response.feed.data[2].picture + '" class="img-fluid"/>');

   
    
    $('#time2').append(response.feed.data[3].created_time)
    $('#story2').append(response.feed.data[3].story)
    $('#story2').append(response.feed.data[3].message)
    $('#des2').append(response.feed.data[3].description)
    $('#t2').append(response.feed.data[3].type)
    $('#image2').html('<img src="' + response.feed.data[3].picture + '" class="img-fluid"/>');

     $('#time3').append(response.feed.data[5].created_time)
    $('#t3').append(response.feed.data[5].type)
    $('#story3').append(response.feed.data[5].message)
    $('#story3').append(response.feed.data[5].story)  
    $('#des3').append(response.feed.data[5].description) 
    $('#image3').html('<img src="' + response.feed.data[5].picture + '" class="img-fluid"/>');


            
    	},
    error: (err) => {

            console.log(err.responseJSON.error.message);
            alert(err.responseJSON.error.message)

        },
        timeout:4000

 })
}


