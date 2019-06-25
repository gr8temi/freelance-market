$(function(){
    let query=location.search.substring(1);
    $.ajax({
        type:'GET',
        url:"http://localhost:3000/user/"+query,
        dataType:"json",
        contentType:'application/json',
        data:{
           format: 'json'
        },
        success:function(data){
            var div3 = $(".name");
   
                
                    var strings=data.firstname+ ` `+data.lastname ;
                    
                    div3.append(strings);  
            let div4=$(".info");
            
            
            var string4=`
            <div>
                <label for="">Firstname: </label><h5>`+data.firstname+`</h5>   
            </div>
            <div>
                <label for="">Lastname: </label><h5>`+data.lastname+`</h5>   
            </div>
            <div>
                <label for="">Address: </label><h5>`+data.address+`</h5>   
            </div>
            <div>
                <label for="">Email: </label><h5>`+data.email+`</h5>   
            </div>
            
            ` ;
   
                    
            div4.append(string4);
            var string2=`
                   <div class="service account-form" style="display:none;">
                   
                        <legend>Update Details</legend>
                    
                        <div class="form-group">
                            <label>Firstname</label>
                            <input type="text" class="form-control" id="firstname" value="`+data.firstname+`">
                        </div>
                        <div class="form-group">
                        <label>lastname</label>
                            <input type="text" class="form-control" id="lastname" value="`+data.lastname+`">
                        </div>
                        <div class="form-group">
                        <label>Email</label>
                            <input type="email" class="form-control" id="email" value="`+data.email+`">
                        </div>
                        <div class="form-group">
                        <label>Address</label>
                            <input type="text" class="form-control" id="address" value="`+data.address+`">
                        </div>
                        <div class="form-group">
                        <label>Image URL</label>
                            <input type="text" class="form-control" id="imgUrl" value="`+data.imgUrl+`">
                        </div>
                        <div class="form-group">
                        <label>password</label>
                            <input type="password" class="form-control" id="password" value="`+data.password+`">
                        </div>
                        <input type="hidden" class="form-control" id="user" value="`+query+`" placeholder="Service Description">    
                        
                    
                        <button id="subTest" class="btn btn-primary">Submit</button>
                    
                    </div>
                   `;
            div4.append(string2); 
            submitForm();
            

        },

    });  
   
         //Load Skills 
         $.ajax({
    
   
               url:"http://localhost:3000/user/"+query+"?_embed=skills",
               dataType:"json",
               contentType:'application/json',
               data:{
                  format: 'json'
               },
               
          
               success:function(data){
   
                   var div = $(".skillset");
                   skill=data.skills;
                   count=0;
                   var string1=`
                   <div class="service skill-form" style="display:none;">
                   
                        <legend>Add Skill</legend>
                    
                        <div class="form-group">
                            
                            <input type="text" class="form-control" id="skill-input" placeholder="Skill Name">
                        </div>
                        <div class="form-group">
                            
                            <input type="number" min="1" max="5" class="form-control" id="rating-input" placeholder="Skill rating /5">
                        </div>
                        <input type="hidden" class="form-control" id="user" value="`+query+`" placeholder="Service Description">    
                        
                    
                        <button id="submit-skill" class="btn btn-primary">Submit</button>
                    
                    </div>
                    <div class="service edit-skill" style="display:none">                        
                        <div class="form-group">   
                        <select name="skill-option" id="skill-option" class="form-control" required="required">
                        <option value="">-------------</option>
                        ${skill.map((item,i)=>`

                        
                        <option value="${item.id}" values="${item.skill}" rate="${item.rating}">${item.skill}</option>
                        `
                        )}
                        </select>
                        <a class="pencil-skill" href="#"  >
                            <button style="margin:2px;" class="btn btn-primary">Edit</button>
                        </a>
                        <a class="skill-delete" href="#">
                        <input type="hidden" class="skill-delete-id">
                        <button style="margin:2px;" class="btn btn-danger">Delete</button>
                        </a>
                        </div>
                        <div class="form-group pencil-form-skill" id="" style="display:none;">
                        <label>Skill Name</label>
                            <input type="text" class="form-control" id="skill-name" required>
                            <input type="hidden" id="skill-hidden-id">
                        <label>Ratings</label>
                            <input  type="number" min="1" max="5" class="form-control" id="skill-description" placeholder="Skill rating /5" required>
                       <button  class="skill-edit-button btn btn-primary">Submit</button>
                            </div>
                    
                        
                    
                        
                    
                </div>
                   `;
                     div.append(string1); 
                     drop= $("#drop1")
                   for(var i=0; i<skill.length;i++){
                       count++
                      var string5= 
                      `<option value="">jaguda</option>
                      `;
                      drop.append(string5)
                       var string=
                       `
                       <div class="service">
                                    <label for="">Skill:</label><h5>`+skill[i].skill+` </h5>
                                   <p>Rating:`+skill[i].rating+`/5</p>

                                   
                        </div>
                        
                       `;
                       
                       div.append(string);
                   
                   }
 
                     submitForm()          
               },
               type:'GET',
           });  
       //Load Past Jobs
       $.ajax({
    
   
           url:"http://localhost:3000/user/"+query+"?_embed=pastJob",
           dataType:"json",
           contentType:'application/json',
           data:{
              format: 'json'
           },
          
      
           success:function(data){
                 
               var div = $(".past-jobs");
               pastJob=data.pastJob;
               var string1=`
               <div class="service pastjob-form" style="display:none;">
               
                    <legend>Add Past Jobs</legend>
                
                    <div class="form-group">
                        
                        <input type="text" class="form-control" id="pastjob-input" placeholder="Past Job Title">
                    </div>
                    <div class="form-group">
                        
                        <input type="text" class="form-control" id="p-description" placeholder="Job Description">
                    </div>
                    <input type="hidden" class="form-control" id="user" value="`+query+`" placeholder="Service Description">    
                    
                
                    <button id="submit-pastjob" class="btn btn-primary">Submit</button>
                
                </div>

                <div class="service pastjob-edit-form" style="display:none">                        
                <div class="form-group">   
                <select name="pastjob-option" id="pastjob-option" class="form-control" required="required">
                <option value="">-------------</option>
                ${pastJob.map((item,i)=>`

                
                <option value="${item.id}" pvalues="${item.pastJob}" describe="${item.description}">${item.pastJob}</option>
                `
                )}
                </select>
                <a class="pencil-pastjob" href="#"  >
                    <button style="margin:2px;" class="btn btn-primary">Edit</button>
                </a>
                <a class="pastjob-delete" href="#">
                <input type="hidden" class="pastjob-delete-id">
                <button style="margin:2px;" class="btn btn-danger">Delete</button>
                </a>
                </div>
                <div class="form-group pencil-form-pastjob" id="" style="display:none;">
                <label>Past Job</label>
                    <input type="text" class="form-control" id="pastjob-name" required>
                    <input type="hidden" id="pastjob-hidden-id">
                <label>Description</label>
                    <input type="text" class="form-control" id="pastjob-description" required>
               <button  class="pastjob-edit-button btn btn-primary">Submit</button>
                    </div>
               `;
                 div.append(string1);
               for(var i=0; i<pastJob.length;i++){
                   
                    var string=
                   `
   
                   <div class="service">
                        <label for="">Title: </label><h5>`+` `+pastJob[i].pastJob+`</h5>
                        <p>`+pastJob[i].description+`
                        </p>
                    </div>
                   
                   
                   `;
                   div.append(string);
               
               }
                
                 submitForm()
                       
                       
                   
               
           },
           type:'GET',
       });  
       //Load Services
       $.ajax({
    
   
           url:"http://localhost:3000/user/"+query+"?_embed=services",
           dataType:"json",
           contentType:'application/json',
           data:{
              format: 'json'
           },
           // dataType:'jsonp',
      
           success:function(data){
            
               var div = $(".service-render");
               service=data.services;
               count=0;
               var string1=`
               <div class="service-form" style="display:none;">
               
               
               <legend>Add Services</legend>
           
               <div class="form-group">
                   
                   <input type="text" class="form-control" id="Title" placeholder="Service Title">
               </div>
               <div class="form-group">
                   
                   <input type="text" class="form-control" id="description" placeholder="Service Description">
               </div>
               <input type="hidden" class="form-control" id="user" value="`+query+`" placeholder="Service Description">    
               
           
               <button id="service-submit" class="btn btn-primary">Submit</button>
                </div>
                <div class="service service-edit-form" style="display:none">                        
                <div class="form-group">   
                <select name="service-option" id="service-option" class="form-control" required="required">
                <option value="">-------------</option>
                ${service.map((item,i)=>`

                
                <option value="${item.id}" pvalues="${item.title}" describe="${item.description}">${item.title}</option>
                `
                )}
                </select>
                <a class="pencil-service" href="#"  >
                    <button style="margin:2px;" class="btn btn-primary">Edit</button>
                </a>
                <a class="service-delete" href="#">
                <input type="hidden" class="service-delete-id">
                <button style="margin:2px;" class="btn btn-danger">Delete</button>
                </a>
                </div>
                <div class="form-group pencil-form-service" id="" style="display:none;">
                <label>Service</label>
                    <input type="text" class="form-control" id="service-name" required>
                    <input type="hidden" id="service-hidden-id">
                <label>Description</label>
                    <input type="text" class="form-control" id="service-description" required>
               <button  class="service-edit-button btn btn-primary">Submit</button>
                    </div>

               `;
                 div.append(string1); 
               for(var i=0; i<service.length;i++){
                   count++
                   var string=
                   `
   
                   <div class="service">
                                <label for="">Service Title: </label><h5>`+service[i].title +`</h5>
                                <p>`+service[i].description+`</p>
                    </div>
                   
                   `;
                   // li.innerHTML = 
                   // localStorage.setItem('user', JSON.stringify(data))
                   div.append(string);
               
               }

                 submitForm() 
                   
               
           },
           type:'GET',
       }); 

    $(".service-edit").click(function(){
         $(".service-form").toggle();  
         $(".service-edit-form").hide(); 
       
    });
    $(".skill-edit").click(function(){
        $(".skill-form").toggle();
        $(".edit-skill").hide();
    });

    $(".pastjob-edit").click(function(){
        $(".pastjob-form").toggle();
        $(".pastjob-edit-form").hide();
    });
    $(".account-edit").click(function(){
        $(".account-form").toggle();
    });
    

    $(".edit-skills").on("click",function(){
        // console.log("working")
        $(".edit-skill").toggle();
        $(".skill-form").hide();
    });
    $("#edit-pastjobs").unbind().click(function(e){
        // console.log("working")
        $(".pastjob-edit-form").toggle();
        $(".pastjob-form").hide();
    });
    $("#edit-services").unbind().click(function(e){
        // console.log("working")
        $(".service-edit-form").toggle();
        $(".service-form").hide();
    });
})

function submitForm(){
    
    let query1=location.search.substring(1);
        $("#subTest").unbind().click(function(e){
        e.preventDefault();
        $.ajax({
            
            url:"http://localhost:3000/user/"+query1,
            dataType:'json',
            contentType:'application/json',
            data :JSON.stringify({
                "firstname":$('#firstname').val(),
                "lastname":$("#lastname").val(),
                "email":$("#email").val(),
                "address":$("#address").val(),
                "imgUrl":$("#imgUrl").val(),
                "password":$("#password").val()
            }),
            processData:false,
            success:function(){
                alert("uploaded")
            },
            error : function(){
                alert("error");
            },
            type:'PUT'
        })
    })
    $("#submit-skill").unbind().click(function(e){
        e.preventDefault();
            let user=parseInt($("#user").val())
        $.ajax({
            url:"http://localhost:3000/skills",
            dataType:'json',
            contentType:'application/json',
            data :JSON.stringify({
                "skill":$('#skill-input').val(),
                "rating":$("#rating-input").val(),
                "userId":user,
            }),
            processData:false,
            success:function(data){
                var div=$(".skillset");
                var string=
                `
                <div class="service skillset">
                             <label for="">Skill:</label><h5>`+data.skill+` </h5>
                             <p>Rating:`+data.rating+`/5</p>    
                 </div>
                 
                `;
                
                div.append(string);
            },
            error : function(){
                alert("error");
            },
            type:'POST'
        })
    })
    $("#service-submit").unbind().click(function(e){
        e.preventDefault();
            let user=parseInt($("#user").val())
        $.ajax({
            url:"http://localhost:3000/services",
            dataType:'json',
            contentType:'application/json',
            data :JSON.stringify({
                "title":$('#Title').val(),
                "description":$("#description").val(),
                "userId":user,
            }),
            processData:false,
            success:function(data){
                var div=$(".service-render");
                var string=
                `

                <div class="service">
                             <label for="">Service Title: </label><h5>`+data.title +`</h5>
                             <p>`+data.description+`</p>
                 </div>
                
                `;
                // li.innerHTML = 
                // localStorage.setItem('user', JSON.stringify(data))
                div.append(string);
            },
            error : function(){
                alert("error");
            },
            type:'POST'
        })
    })
    $("#submit-pastjob").unbind().click(function(e){


        console.log($("#user").val())
        e.preventDefault();
            let user=parseInt($("#user").val())
        $.ajax({
            url:"http://localhost:3000/pastJob",
            dataType:'json',
            contentType:'application/json',
            data :JSON.stringify({
                "pastJob":$('#pastjob-input').val(),
                "description":$("#p-description").val(),
                "userId":user,
            }),
            processData:false,
            success:function(data){
                var div = $(".past-jobs");
               
              
                   
                    var string=
                   `
   
                   <div class="service">
                        <label for="">Title: </label><h5>`+` `+data.pastJob+`</h5>
                        <p>`+data.description+`
                        </p>
                    </div>
                   
                   
                   `;
                   div.append(string);
               
              
            },
            error : function(){
                alert("error");
            },
            type:'POST'
        })
    })
    
$("#delete-user").unbind().click(function(e){
    
    e.preventDefault();
    let yes= confirm("Confirm Delete")
    if (yes==true){
    let query1=location.search.substring(1);
    $.ajax({
        
        url:"http://localhost:3000/user/"+query1,
        dataType:'json',
        contentType:'application/json',
        processData:false,
        success:function(){
            
                location.assign('http://localhost:3000/')
        },
        error : function(){
            alert("error");
        },
        type:'DELETE'
    })
}
    })    

//Edit Skills
    $(".pencil-skill").unbind().click(function(e){
        e.preventDefault();
        // console.log("working")
        $(".pencil-form-skill").toggle();
    });
    $("#skill-option").unbind().change(function(e){
        e.preventDefault();
        //skill-name
        $("#skill-hidden-id").val($("#skill-option").val())
        $(".skill-delete-id").val($("#skill-option").val())
        $("#skill-name").val($('option:selected',this).attr('values'))
        $("#skill-description").val($('option:selected',this).attr('rate'))
    });

$(".skill-edit-button").unbind().click(function(e){
let value=$("#skill-name").val();
let skillDesc=parseInt($("#skill-description").val());
let skillId=parseInt($("#skill-hidden-id").val());
$.ajax({
            
    url:"http://localhost:3000/skills/"+skillId,
    dataType:'json',
    type:'PATCH',
    contentType:'application/json',
    data :JSON.stringify({
        "skill":value,
        "rating":skillDesc,
        "userId":parseInt(query1)
    }),
    processData:false,
    success:function(){
        alert("Your skill has been updated")
        location.reload();
    },
    error : function(){
        alert("error");
    },
    
})

})
$(".skill-delete").unbind().click(function(e){
    
    // console.log(skillId);
    let txt="";
    let yes= confirm("Confirm Delete")
    if (yes==true){
    let skillId=parseInt($(".skill-delete-id").val());
     $.ajax({
        
        url:"http://localhost:3000/skills/"+skillId,
        dataType:'json',
        contentType:'application/json',
        processData:false,
        success:function(){
            alert("Skill successfully deleted")
            location.reload();
        },
        error : function(){
            alert("error");
        },
        type:'DELETE'
    })       
    }
    else{
        txt="canceled";
    }

})

$(".pencil-skill").unbind().click(function(e){
    e.preventDefault();
    // console.log("working")
    $(".pencil-form-skill").toggle();
});
//Edit Pastjobs
$(".pencil-pastjob").unbind().click(function(e){
    e.preventDefault();
    // console.log("working")
    $(".pencil-form-pastjob").toggle();
});
$("#pastjob-option").unbind().change(function(e){
    e.preventDefault();
    //skill-name
    $("#pastjob-hidden-id").val($("#pastjob-option").val())
    $(".pastjob-delete-id").val($("#pastjob-option").val())
    $("#pastjob-name").val($('option:selected',this).attr('pvalues'))
    $("#pastjob-description").val($('option:selected',this).attr('describe'))
});

$(".pastjob-edit-button").unbind().click(function(e){
let value=$("#pastjob-name").val();
let pastDesc=$("#pastjob-description").val();
let pastjobId=parseInt($("#pastjob-hidden-id").val());
$.ajax({
        
url:"http://localhost:3000/pastJob/"+pastjobId,
dataType:'json',
type:'PATCH',
contentType:'application/json',
data :JSON.stringify({
    "pastJob":value,
    "description":pastDesc,
    "userId":parseInt(query1)
}),
processData:false,
success:function(){
    alert("Your Past jobs has been updated")
    location.reload();
},
error : function(){
    alert("error");
},

})

})
$(".pastjob-delete").unbind().click(function(e){

// console.log(skillId);
let txt="";
let yes= confirm("Confirm Delete")
if (yes==true){
let pastjobId=parseInt($(".pastjob-delete-id").val());
console.log(pastjobId)
 $.ajax({
    
    url:"http://localhost:3000/pastJob/"+pastjobId,
    dataType:'json',
    contentType:'application/json',
    processData:false,
    success:function(){
        alert("Past job successfully deleted")
        location.reload();
        
    },
    error : function(){
        alert("error");
    },
    type:'DELETE'
})       
}
else{
    txt="canceled";
}

})

//Edit Services
$(".pencil-service").unbind().click(function(e){
    e.preventDefault();
    // console.log("working")
    $(".pencil-form-service").toggle();
});
$("#service-option").unbind().change(function(e){
    e.preventDefault();
    //skill-name
    $("#service-hidden-id").val($("#service-option").val())
    $(".service-delete-id").val($("#service-option").val())
    $("#service-name").val($('option:selected',this).attr('pvalues'))
    $("#service-description").val($('option:selected',this).attr('describe'))
});

$(".service-edit-button").unbind().click(function(e){
let value=$("#service-name").val();
let serDesc=$("#service-description").val();
let serviceId=parseInt($("#service-hidden-id").val());
$.ajax({
        
url:"http://localhost:3000/services/"+serviceId,
dataType:'json',
type:'PATCH',
contentType:'application/json',
data :JSON.stringify({
    "title":value,
    "description":serDesc,
    "userId":parseInt(query1)
}),
processData:false,
success:function(){
    alert("Your Service has been updated");
    location.reload();
},
error : function(){
    alert("error");
},

})

})
$(".service-delete").unbind().click(function(e){

// console.log(skillId);
let txt="";
let yes= confirm("Confirm Delete")
if (yes==true){
let serviceId=parseInt($(".service-delete-id").val());
console.log(serviceId)
 $.ajax({
    
    url:"http://localhost:3000/services/"+serviceId,
    dataType:'json',
    contentType:'application/json',
    processData:false,
    success:function(){
        alert("Service successfully deleted")
        location.reload();
        
    },
    error : function(){
        alert("error");
    },
    type:'DELETE'
})       
}
else{
    txt="canceled";
}

})
}