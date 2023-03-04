

   $(document).ready(() => {
        $("#form").submit((e) => {
            e.preventDefault();
            var uname = $("#name").val();
            var pass = $("#password").val();
            var email = $("#email").val();
            var pattern = /^[^\[ ]+@northeastern.edu/;
            let flag = "true";
            //  var passPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

            if(uname == "") {
            // alert("welcome");
                $(".unameErr").html("Enter username" + "" );
                $(".unameErr").css('color', 'red');
                flag = "false";
            } else if (uname){
            // alert("exit");
                $(".unameErr").html("username is valid");
                $(".unameErr").css('color', 'green');
            }
            if(pass == "") {
                // alert("welcome");
                    $(".passErr").html("Enter valid password must contain a number and special character" + "" );
                    $(".passErr").css('color', 'red');
                    flag = "false";
            
                } else if (pass.match(/([!,%,&,@,#,$,^,*,?,_,~])/) &&  pass.match(/([0-9])/) && pass.match(/([a-zA-Z])/)){
                    // alert("exit");
                        $(".passErr").html("password is valid");
                    $(".passErr").css('color', 'green');
                }
                    else {
                        $(".passErr").html("Enter valid password must contain a number and special character");
                    $(".passErr").css('color', 'red'); 
                    flag = "false";
                    } 
            if(email == "") {
            // alert("welcome");
                $(".emailErr").html("Enter email" + "" );
                $(".emailErr").css('color', 'red');
                flag = "false";

            } else if (email.match(pattern)){
                // alert("exit");
                    $(".emailErr").html("email is valid");
                $(".emailErr").css('color', 'green');

            
                } else {
                    $(".emailErr").html("only northeastern mail id is accepted");
                $(".emailErr").css('color', 'red');
                flag = "false";

                }

                if(flag == "true"){
                    window.localStorage.setItem("name", uname);
                    window.location.replace("calculator.html");
                    // /profiler/
                }

            console.log(window.localStorage.getItem("name"));
        });
    });