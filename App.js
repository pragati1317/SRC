const array =
        [
                {
                        id: 0,
                        Post:"CEO",
                        Name: "Panshul Dixit",
                        Des: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos est necessitatibus eius aliquam cumque quam saepe nihil in aliquid. Expedita porro eius molestias?"
                },
                {
                        id: 1,
                        Post : "CFO",
                        Name: "Yash Tokekar",
                        Des: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos est necessitatibus eius aliquam cumque quam saepe nihil in aliquid. Expedita porro eius molestias?"
                }
                ,
                {
                        id: 2,
                        Post:"CFO",
                        Name: "Kanshika Yadav",
                        Des: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos est necessitatibus eius aliquam cumque quam saepe nihil in aliquid. Expedita porro eius molestias?"
                },
                {
                        id: 3,
                        Post:"CTO",
                        Name: "Anant Singhal",
                        Des: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos est necessitatibus eius aliquam cumque quam saepe nihil in aliquid. Expedita porro eius molestias?"
                },
                {
                        id: 4,
                        Post :"CTO",
                        Name: "Harsh Chopra",
                        Des: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos est necessitatibus eius aliquam cumque quam saepe nihil in aliquid. Expedita porro eius molestias?"
                },
                {
                        id: 5,
                        Post:"CTO",
                        Name: "Harshit Garhewa",
                        Des: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos est necessitatibus eius aliquam cumque quam saepe nihil in aliquid. Expedita porro eius molestias?"
                },
                {
                        id: 6,
                        Post:"COO",
                        Name: "Utpal Savaliya",
                        Des: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos est necessitatibus eius aliquam cumque quam saepe nihil in aliquid. Expedita porro eius molestias?"
                },
                {
                        id: 7,
                        Post:"COO",
                        Name: "Jayesh Marmat",
                        Des: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos est necessitatibus eius aliquam cumque quam saepe nihil in aliquid. Expedita porro eius molestias?"
                },
                {
                        id: 8,
                        Post:"CIO",
                        Name: "Ambrosia Patel",
                        Des: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos est necessitatibus eius aliquam cumque quam saepe nihil in aliquid. Expedita porro eius molestias?"
                },

                {
                        id: 9,
                        Post:"CRM",
                        Name: "Ashish Darshima",
                        Des: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos est necessitatibus eius aliquam cumque quam saepe nihil in aliquid. Expedita porro eius molestias?"
                },

        ];

const CommentsArray=[
        {
               clientview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, illum! Maiores, libero suscipit rerum repellat optio officia consequatur repudiandae earum." ,
               clientName:"Jhavi",
               clientField:" Developer"
        
        },
        {
                clientview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, illum! Maiores, libero suscipit rerum repellat optio officia consequatur repudiandae earum." ,
                clientName:"shaily",
                clientField:"Designer"
         
         },
         {
                clientview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, illum! Maiores, libero suscipit rerum repellat optio officia consequatur repudiandae earum." ,
                clientName:"William baker",
                clientField:"Developer"
         
         },
         {
                clientview: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, illum! Maiores, libero suscipit rerum repellat optio officia consequatur repudiandae earum." ,
                clientName:"Roshni",
                clientField:"Bloger"
         
         },
]

var btn = document.getElementsByClassName("btn");
var TeamContent = document.querySelector('.Team-Content');
var Comment=document.getElementsByClassName('comment');
var w=document.documentElement.clientWidth || window.innerWidth;
var ClientImage =document.getElementsByClassName('Client-image');
var ClientName=document.getElementsByClassName('clientName');
var currentTeamMember =0;
var CommentIndex=-1;

array.map((data) => {
        const MemberContainer = document.createElement('div');
        MemberContainer.id = data.id;
        MemberContainer.classList.add("Member-Container");
        const MemberPhoto = document.createElement('img');
        MemberContainer.appendChild(MemberPhoto);

        const Details = document.createElement('div');
        Details.classList.add("details");
        MemberContainer.appendChild(Details);

        // const Post =document.createElement('div');
        // Post.classList.add("Name");
        // Details.appendChild(Post);

        const Name = document.createElement('div');
        Name.classList.add("Name");
        Details.appendChild(Name);

        const Description = document.createElement('div');
        Description.classList.add("Description");
        Details.appendChild(Description);

        const DescriptionParagraph = document.createElement('p');
        Description.appendChild(DescriptionParagraph);

        TeamContent.appendChild(MemberContainer);

        //Post.innerHTML=data.Post;
        Name.innerHTML = data.Post +" "+ data.Name;
        DescriptionParagraph.innerHTML = data.Des;
          document.getElementById(data.id).style.display = "none"
})
const reset=(()=>
        {
           array.map((data)=>
           {
                document.getElementById(data.id).style.display = "none";
           })
        }
)
window.onresize = function() {
           
        // Setting the current height & width
        // to the elements
        //height.innerHTML = window.innerHeight; 
        w = document.documentElement.clientWidth || window.innerWidth;
    };
function slideRight()
{   reset();
    if(w>=1124)
    { 
        if(currentTeamMember+3 <array.length)
        {
                 document.getElementById(currentTeamMember++).style.display='block'; 
                 document.getElementById(currentTeamMember++).style.display='block'; 
                 document.getElementById(currentTeamMember++).style.display='block'; 
        
        }
       else 
        {   currentTeamMember=0;
        } 
    }
    else if(w>480 && w<1124)
    {
        if(currentTeamMember+2 <array.length )
        {
                 document.getElementById(currentTeamMember++).style.display='block'; 
                 document.getElementById(currentTeamMember++).style.display='block'; 
        
        }
       else
        {   currentTeamMember=0;
        } 
    }
    else if(w<=480)
    {
        if(currentTeamMember<array.length)
        {
             document.getElementById(currentTeamMember).style.display='block';
             currentTeamMember++;
        }else 
        {
        currentTeamMember=0;
       }
    }
    else 
    { currentTeamMember=0;
        slideRight();
    }
    
   
}
setInterval(slideRight, 1000);

function sendEmail() {
        Email.send({
             Host: "smtp.elasticemail.com",
                 Username: "pggupta1317@gmail.com",
                // This password for server emails 
               Password:"888FB833C88471EAE88B02CF59AA98B8D8EC",
                //password:"pra@1317",
                // SecureToken: "e1beb599-10b4-4a1c-8905-f68d5073332f",
                // To:  document.getElementById("email").value,
                To:  "pggupta1317@gmail.com" ,
                From:  "pggupta1317@gmail.com" ,
                Subject: "New contact form Enquiry",
                Body: "Name: " + document.getElementById("name").value
                        + "<br> Email: " + document.getElementById("email").value
                        + "<br> Message : " + document.getElementById("message").value

        }).then(
                message => alert("message send successfully")
        );
}
