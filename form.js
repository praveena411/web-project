 

<html>
<head>
<style>

</style>

#container{
width:500px;
height: 400px;
overflow:hidden;
}

#sliderbox{
white-space:320px;
	position:relative;
	width:3000px;
	animation-name: slideranimation;
	animation-duration: 10s;
	animation-iteration-count:infinite;
	}
	@keyframes slideranimation{
	0%
	{
	left:0px;
	}
	20%  /*15 second*/
	{
	left:0px;
	}
	25% /*10 second*/
	{
	 left:-500px;
	 }
	 45% /*15 second*/
	 {
	  left:-500px;
	  }
	 50% /*20 second*/
	  {
	 left:-1000px;
	   }
	  70%  /*25 second*/ 
	   {
	  left:-1500px;
	   }
	}
#sliderbox img{
float: left;
}
*{
 margin:0px;
 padding:0px;
 }
 <div id="container">
<div id="sliderbox">
<br><br><br><br><br><br><img src="f6.jpg" width="500" />
<img src="fc1.jpg" width="500" />
<img src="fc2.jpg"  width="500"/>
<img src="fc3.jpg" width="500"/>
<img src="fc5.jpg" width="500"/>
<img src="fc7.jpg" width="500"/>
<img src="chik.jpg" width="500"/>
</div>
</div>
</head>
<body>
<!DOCTYPE html>
    <html>
    <head>
    <style>
    #submit{
    position: relative;
     font-size:14px;
     color:#FFF;
     text-align:center;
     background-color:#3B5998;
     padding:10px;
     cursor: pointer;
     }
    p {
    color: blue;


    }


    </style>





        </head>
        <body>
        <script type = "text/javascript">

        var count = 2;
        function validate() {
        var un = document.myform.username.value;
        var pw = document.myform.pword.value;
        var valid = false;

        var unArray = ["Philip", "George", "Sarah", "Michael"];  // as many as you like - no comma after final entry
        var pwArray = ["Password1", "Password2", "Password3", "Password4"];  // the corresponding passwords;

        for (var i=0; i <unArray.length; i++) {
        if ((un == unArray[i]) && (pw == pwArray[i])) {
        valid = true;
        break;
        }
        }

        if (valid) {
        alert ("Login was successful");
        window.location = "Books.html";
        return false;
        }

        var t = " tries";
        if (count == 1) {t = " try"}

        if (count >= 1) {
        alert ("Invalid username and/or password.  You have " + count + t + " left.");
        document.myform.username.value = "";
        document.myform.pword.value = "";
        setTimeout("document.myform.username.focus()", 25);
        setTimeout("document.myform.username.select()", 25);
        count --;
        }


        }

        </script>

        <form name = "myform">
        <p>ENTER USER NAME <input type="text" name="username"> ENTER PASSWORD <input type="password" name="pword">
        <div id= "submit"><input type="button" value="Check In" name="Submit" onclick= "validate()"></div>
        </p>

        </form>

