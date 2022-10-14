$('#approval').hide()
  
//  $(document).ready(function(){ 
    console.log('555')  
   function sub(){
    $('#submit').on("click", function(e){
        // console.log(e); 
        e.preventDefault();
        if( $("input[name='0']:checked").val()==="Yes" ||  $("input[name='1']:checked").val()==="Yes" || $("input[name='2']:checked").val()==="Yes" || $("input[name='3']:checked").val()==="Yes" || $("input[name='4']:checked").val()==="Yes" || $("input[name='5']:checked").val()==="Yes" ){
            $('#donation').hide()
            console.log("hello  ");
            $('#error').append("<p> You can't donate , we are sorry ! </p>") 
        } else if ($("input[name='0']:checked").val()==="No" ||  $("input[name='1']:checked").val()==="No" || $("input[name='2']:checked").val()==="No" || $("input[name='3']:checked").val()==="No" || $("input[name='4']:checked").val()==="No" || $("input[name='5']:checked").val()==="No"){
            $('#form').hide()
            $('#approval').show()
        }
    })
}

sub() ;

// })


var hospitals = [{governorates:'Ariana', hospital: 'Hospital Mahmoud El Matri', location: 'Khair eddin Becha Ariana', num:'71 821 621'},
{governorates:'Beja', hospital: 'Hopital Regional de Beja', location: 'Avenue él kbir mta3 Beja', num:'78 455 431'},
{governorates:'Ben Arous', hospital: 'Dispensary Cité Stade Ben Arous', location: '9bal megrine béchwaya', num:'78 556 202'},
{governorates:'Bizerte', hospital: 'Hôpital militaire de bizerte', location: 'fél grottes 3al imin', num:'72 433 066'}, 
{governorates:'Gabès', hospital: 'Regional Hospital of Gabes Mohammed Ben Sassi', location: 'fi gabès 7assilou', num:' 75 292 700'},
{governorates:'Gafsa', hospital: 'Hospital Regional Houcine Bouzaiene', location: 'es2él awél wé7éd yo3rdhék', num:'76 100 200'},
{governorates:'Mannouba', hospital: 'Groupement De Santé De Base Mannouba', location: 'R456+CC3, rue de baghded, Denden', num:'28 838 370'},
{governorates:'Tunis', hospital: 'Hôpital Habib Thameur', location: 'Q5PG+CJ7, Rue Ali Ben Ayed', num:'71 397 000'}]

var Username = $('#name').val()
var Email = $('#email').val()


 //function sub(){
    $('#submit').one("click", function(e){
        // console.log(e);
        Username = $('#name').val()
        Email = $('#email').val()
        var testStorage = false
            console.log('second'+localStorage.name)
            if (localStorage['name'] == $('#name').val().toString() || localStorage['email'] == $('#email').val().toString()){  //if username and email in local storage
                testStorage=true
                alert('You have already requested for blood donation')
                location.reload();
            }
            if (testStorage === false){
        e.preventDefault();
        console.log(Username)
        if( $("input[name='0']:checked").val()==="Yes" ||  $("input[name='1']:checked").val()==="Yes" || $("input[name='2']:checked").val()==="Yes" || $("input[name='3']:checked").val()==="Yes" || $("input[name='4']:checked").val()==="Yes" || $("input[name='5']:checked").val()==="Yes" ){
            $('#donation').hide()
            console.log("hello  ");
            $('#error').append("<p> You can't donate , we are sorry ! </p>")
        } else if ($("input[name='0']:checked").val()==="No" ||  $("input[name='1']:checked").val()==="No" || $("input[name='2']:checked").val()==="No" || $("input[name='3']:checked").val()==="No" || $("input[name='4']:checked").val()==="No" || $("input[name='5']:checked").val()==="No"){
            $('#form').hide()
            $('#approval').show()
            window.localStorage.setItem('name',Username) //storing the username in the localStorage
            window.localStorage.setItem('email', Email) //storing the email in the localStorage
        }
   }})
//}



$('#ok').one("click" , function() {
    var governorate=$('#demo').val()
    for(var i=0 ; i<hospitals.length ; i++){
        console.log(governorate===hospitals[i].governorates);
       if (governorate===hospitals[i].governorates) {
           $('#location').append('Hello '+ Username +"<br>We are inviting you this saturday at<br>"+hospitals[i].hospital+"<br> which is located in "+hospitals[i].location+".<br>Here is our number to confirm the date: "+hospitals[i].num )
       }
    }
})





$('#ok').on("click", function(){
    var loc=$("input[name='inp']:checked").val()
        console.log(loc , 'hhh')
   if( $("input[name='inp']:checked").val()==="A+"){
           $('#type').append("Your type of blood will be saving the lives of peoples with AB+ and A+ blood.Be proud !")
     } else if($("input[name='inp']:checked").val()==="A-"){
           $('#type').append("Your type of blood will be saving the lives of peoples with A- , A+ , AB- and AB+ blood.Be proud !")
   } else if($("input[name='inp']:checked").val()==="B+"){
       $('#type').append("Your type of blood will be saving the lives of peoples with AB+ and B+ blood.Be proud !") 
   } else if($("input[name='inp']:checked").val()==="B-"){
       $('#type').append("Your type of blood will be saving the lives of peoples with B- , B+ , AB-  and AB+ blood.Be proud !") 
   }
   else if($("input[name='inp']:checked").val()==="O+"){
       $('#type').append("Your type of blood will be saving the lives of peoples with O+ , A+ , B+ and AB+ blood.Be proud !")
   }else if($("input[name='inp']:checked").val()==="O-"){
       $('#type').append("Your type of blood will be saving the lives of peoples with all types of blood. Be proud !")
   }else if($("input[name='inp']:checked").val()==="AB+"){
       $('#type').append("Your type of blood will be saving the lives of peoples with AB+ blood.Be proud !")
   }else if($("input[name='inp']:checked").val()==="AB-"){
       $('#type').append("Your type of blood will be saving the lives of peoples with AB+ and AB- blood.Be proud !")
   }}
)