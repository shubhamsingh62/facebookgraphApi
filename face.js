let mytoken;



 let token1 = () =>{
  mytoken = document.getElementById("recipient-name").value;
     

    if(mytoken == null || mytoken == "" ){


    	alert("not valid token");
}
    	else{

  	getdata();
    }
}


$(document).ready( ()=>{

    $('#btn1').on('click',token1)

})

let getdata = () =>{

    $.ajax({

    	type: 'GET',
    	datatype: 'json',
    	url: 'https://graph.facebook.com/me?fields=id,name,cover,birthday,picture,books,age_range,movies,gender,music,hometown&access_token='+mytoken,
  		async:true,

    	success:(response) =>{
    			console.log('success');
            $('.allitem').css('display','block');
            
            $('#userName').append(response.name);
            $('#gender').append(response.gender);

            $('#birthday').append(response.birthday);
             $('#age').append(response.age_range.min);
             $('#home').append(response.hometown.name);
            $('#profilePhoto').html('<img src="' + response.picture.data.url + '" class="img-fluid profileHeight"/>');

           $('#cover').css('background-image','Url('+response.cover.source+')');
         
            let a = "";
           let book = () =>{
               for( let x of response.books.data){
                   a+=x.name+" , ";

               }
             return a;
           }

           $('#books').append(book());
             
           let b = "";
           let movie =() =>{
              for(y of response.movies.data){

              	b+=y.name+" , ";
              }
             return b;
           }
   
           $('#movie').append(movie());
          let c = "";
           let musics =() =>{
              for(z of response.music.data){

              	c+=z.name+" , ";
              }
             return c;
           }
   
           $('#music').append(musics());

},
    error: (err) => {

            console.log(err.responseJSON.error.message);
            alert(err.responseJSON.error.message)

        },
        Timeout: 4000

 })
}


