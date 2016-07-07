<!DOCTYPE html>
<html>
   <head>
      <title>Canvas Sheet</title>
	  <meta name="viewport" content="width=device-width, initial-scale=1"> 
	  <link rel="stylesheet" type="text/css" href="style.css">     
	  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/css/materialize.min.css">
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>           
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/js/materialize.min.js"></script> 
   </head>
   <body class="light-blue darken-4 " >   
      
  <header>
   <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper blue accent-4">
        <a href="index.php" class="brand-logo">EURO PRODCTS INC.</a>
        <ul class="right hide-on-med-and-down">
          <li><a href="login.php">Login</a></li>
          <li><a href="canvas.php">Canvas Sheet</a></li>
        </ul>
      </div>
    </nav>
   </div> 
  </header>
      
      <div class="row card-panel light-blue lighten-5" >
         <form class="col s12" action="canvas2.php">
            <div class="row">
               <div class="input-field col s6">
                  <i class="material-icons prefix">today</i>
                  <input placeholder="DD-MM-YYYY"  id="date" type="text" class="active validate" required>
                  <label for="date">Date</label>
               </div>
               <div class="input-field col s6">      
                  <i class="material-icons prefix">input</i>
                  <label for="WO No">WO No</label>
                  <input id="WONo" type="text" placeholder="Work Order Number" class="validate" required>          
               </div>
               
               <div class="input-field col s6">
                  <i class="material-icons prefix">person_pin</i>
                  <input placeholder="Requisitioner"  id="requisitioner" type="text" class="validate" required>
                  <label for="requisitioner">Requisitioner</label>
               </div>
               
               <div class="input-field col s6">
                  <i class="material-icons prefix">receipt</i>
                  <input placeholder="PSF No."  id="psf" type="text" class="validate" required>
                  <label for="psf">PSF No.</label>
               </div>
               
               <div class="input-field col s6">
                  <i class="material-icons prefix">business</i>
                  <input placeholder="Department" id="dept" type="text" class="validate" required>
                  <label for="email">Department</label>
               </div>
               
               <div class="input-field col s6">
                  <i class="material-icons prefix">stop</i>
                  <input placeholder="J.O No."  id="jo" type="text" class="validate" required>
                  <label for="psf">J.O No.</label>
               </div>
               
               <div class="input-field col s6">
			      <i class="material-icons prefix">add_alert</i>
                  <label for="address">Date of Inquiry</label>
                  <input id="dateOfInquiry" type="text" placeholder="e.g. 25 June 2016" class="validate" required>         
               </div>
               
               <div class="input-field col s6">
			      <i class="material-icons prefix">perm_identity</i>
                  <label for="address">Purchasing In-charge</label>
                  <input id="p-in-charge" type="text" placeholder="e.g. Juan dela Cruz" class="validate" required>         
               </div>
               
            </div>
            <a class="waves-effect waves-light btn" href="index.php"><i class="material-icons left">highlight_off</i>Cancel</a>
            <button class="btn waves-effect waves-light right" type="submit" name="next">Next<i class="material-icons right">done_all</i></button>
            </div>           
         </form>       
      </div>
      
      <footer><center> <h5>asdfghjkl </h5> </center> </footer>
   </body>   
</html>
