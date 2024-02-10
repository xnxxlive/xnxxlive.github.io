/*function login(){ loggedin=false; password=""; password=prompt("Password:",""); password=password.toLowerCase(); 
if (password=="ahm555") 
https://footlivephp-kowai1.replit.app/expired/1.1.2024.php"; } 
if (password=="ams22222") 
{ loggedin=true; window.location="https://footlivephp.kowai1.repl.co/expired/1.1.2024.php";
}
 if (password=="unw33334")
{ loggedin=true; window.location="https://footlivephp.kowai1.repl.co/expired/1.1.2024.php";
  } 
   if (password=="t11111") 
{ loggedin=true; window.location="https://footlivephp.kowai1.repl.co/expired/1.1.2024.php";
}
                 if (password=="nt55555") 
{ loggedin=true; window.location="https://footlivephp.kowai1.repl.co/expired/1.1.2024.php";
}
                 if (password=="tto111") 
{ loggedin=true; window.location="https://footlivephp.kowai1.repl.co/expired/1.1.2024.php"; } 
                 if (loggedin==false) { alert("Viber-09946369791ကိုဆက်သွယ်ပါ/AppထဲရှိUserGroupမှဆက်သွယ်လဲရပါတယ်");}} 
*/
const LogIn = () => {
    var loggedInStatus = localStorage.getItem("loggedIn");
    if (loggedInStatus === "true") {
      var password = localStorage.getItem("password");
      redirectToPage(password);
      return;
    }

    var password = "";
    password = prompt("Password:", "");
    password = password.toLowerCase();

    if (password === "ahm555") {
       localStorage.setItem("loggedIn", "true");
      localStorage.setItem("password", password);
      redirectToPage(password);
    } else if (password === "uns111") {
      loggedIn = "true";  window.location="https://40f0cd47-5b08-4846-815a-154830637e85-00-3kfucwm1ywejb.sisko.replit.dev/loginwelcome/loginwelcome/1.1.2024.html";
    }
     localStorage.setItem("password", password);
      redirectToPage(password);
    } else if (password === "test003") {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("password", password);
      redirectToPage(password);
    } else {
  alert("Viber-09946369791ကိုဆက်သွယ်ပါ/AppထဲရှိUserGroupမှဆက်သွယ်လဲရပါသည်");
    }
  }

  const redirectToPage = (password) => {
    switch (password) {
     case "ahm555":
        if(password == "ahm555")

        window.location = "https://40f0cd47-5b08-4846-815a-154830637e85-00-3kfucwm1ywejb.sisko.replit.dev/loginwelcome/1.1.2024.html";
      
        break;
      case "test003":

        window.location = "https://footlivephp.kowai1.repl.co/expired/1.1.2024.php";
        break;
      default:
        alert("Viber-09946369791ကိုဆက်သွယ်ပါ/AppထဲရှိUserGroupမှဆက်သွယ်လဲရပါသည်");
    }
  }