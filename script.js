let username = document.getElementById("user");
let password = document.getElementById("pass");
let check = 0;
function validateForm()
{
    if(username.value == "")
    {
        document.getElementById("userError").innerHTML = "User name is empty";    
        check =0;
    }

    else if(username.value.length < 3)
    {
        document.getElementById("userError").innerHTML = "User name is required minimum of 3 character";
        check =0;
    }

    else
    {
        document.getElementById("userError").innerHTML = "";
        check= 1;
    }
    if(password.value == "")
    {
        document.getElementById("passError").innerHTML = "password  is empty";
        check =0;
    }

    else if(password.value.length < 8)
    {
        document.getElementById("passError").innerHTML = "password must be of at least 8 character";
        check =0;
    }

    else
    {
        document.getElementById("passError").innerHTML = "";   
        check =1;
    }
    
    if(check == 1)
        return true;
    else
        return false;
}