var btn=document.getElementsByClassName("btn");
var Comment1=document.getElementsById("Comment1");
var Comment2=document.getElementsById("Comment2");
var Comment3=document.getElementsById("Comment3");
var Comment4=document.getElementsById("Comment4");
        function sendEmail()
        {
    Email.send({
     Host : "smtp.gmail.com",
     Username : "gs2014057@sgsitsindore.in",
     Password : "TOnu@6300",
     To : 'pragatig013@gmail.com',
     From : document.getElementById("email").value,
     Subject : "New contact form Enquiry",
     Body : "Name: "+ document.getElementById("name").value
             +"<br> Email: " + document.getElementById("email").value
             +"<br> Message : " + document.getElementById("message").value
             
   }).then(
        message => alert("message send successfully")
 );
   }

   btn[0].onclick=(()=>
   {
        Comment1.style.display="block";
   } )
   btn[1].onclick=(()=>
   {
        Comment2.style.display="block";
   } )
   btn[2].onclick=(()=>
   {
        Comment3.style.display="block";
   } )
   btn[3].onclick=(()=>
   {
        Comment4.style.display="block";
   } )
   
   