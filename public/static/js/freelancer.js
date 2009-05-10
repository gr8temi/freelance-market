$(document).ready(function(){
    console.log(localStorage)
    $.ajax({
        url:"http://localhost:3000/user",
        dataType:"json",
        contentType:'application/json',
        data:{
           format: 'json'
        },
        // dataType:'jsonp',

        success:function(data){
            console.log(data);
            var div = $(".freelance");
           
                for(var i=0; i<data.length;i++){
                    var string=
                    `
                    <div class="col-md-3">
                    <div class="card hovercard">
                            <div class="cardheader">
            
                            </div>
                            <div class="avatar">
                                <img alt="" src="static/img/adams.jpg">
                            </div>
                            <div class="info">
                                <div class="title">
                                    <a target="_blank" href="profile.html?`+data[i].id+`">`+data[i].lastname +` `+ data[i].firstname+`</a>
                                </div>
                                <div class="descr">Passionate designer</div>
                                <div class="descr">Curious developer</div>
                                <div class="descr">Tech geek</div>
                            </div>
                            <div class="bottom">
                                <a class="btn btn-primary btn-twitter btn-sm" href="https://twitter.com/webmaniac">
                                    <i class="fa fa-twitter"></i>
                                </a>
                                <a class="btn btn-danger btn-sm" rel="publisher"
                                   href="https://plus.google.com/+ahmshahnuralam">
                                    <i class="fa fa-google-plus"></i>
                                </a>
                                <a class="btn btn-primary btn-sm" rel="publisher"
                                   href="https://plus.google.com/shahnuralam">
                                    <i class="fa fa-facebook"></i>
                                </a>
                                <a class="btn btn-warning btn-sm" rel="publisher" href="https://plus.google.com/shahnuralam">
                                    <i class="fa fa-behance"></i>
                                </a>
                            </div>
                        </div>
            </div>
                    `;
                    // li.innerHTML = 
                    // localStorage.setItem('user', JSON.stringify(data))
                    div.append(string);
                
                }
                
        },
        type:'GET', 
    });
});