document.getElementById("login").addEventListener("submit", function(event){
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username === "admin" && password === "admin"){
        alert("Log in");
        window.location.href="../Activity1/Cat/index.html"; /*file location */
                            /* [ ../ - The parent directory of the current page
                             is represented by this. In other words, by 
                             clicking the link, you would advance one level in 
                             the director.]*/
    }
    else{
        alert("Wrong Input");
    }

})