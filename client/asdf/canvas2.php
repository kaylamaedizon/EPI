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
         

      <table class="centered"><thead><th>To all suppliers:Please quote your price based on the Items, Qty, and Description below</th></thead></table>
      <table class="striped centered" id="itemList">
      
      <!-- Modal Trigger -->
           <a class="waves-effect waves-light btn modal-trigger" href="#addItem">Add Item <i class="material-icons">add</i></a>

           <!-- Modal Structure -->
           <div id="addItem" class="modal">
             <div class="modal-content">
               <h5>Modal Header</h5>
               
               <div class="row">
                 <form class="col s12" action="#itemList" method="get">
                   <div class="row">
                    <div class="input-field col s6">
                     <input placeholder="e.g 10" id="quantity" type="text" class="validate" required>
                     <label for="first_name">Quantity</label>
                     </div>
                     
                     <div class="input-field col s12">
                       <textarea id="itemDesc" class="materialize-textarea" placeholder="e.g Insertion of boroscope on all tubes, etc." required></textarea>
                       <label for="itemDesc">Complete description/Specification</label>
                     </div>
                   </div>
                   
                   <button class="btn waves-effect waves-light" type="submit" name="next">Add Item</button>
                   <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
                   
                 </form>
               </div>
           </div>
           
           <script>
$(document).ready(function() {
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
});
</script>
      
        <thead>
          <tr>
              <th data-field="itemNo">Item no.</th>
              <th data-field="name">Complete Item Description/Specification</th>
              <th data-field="price">Quantity</th>
              <th data-field="delete">Delete Item/s</th>
              <th data-field="edit">Edit Items</th>
          </tr>
        </thead>
         <tr>
            <td></td>
            <td></td>
            <td></td>
            <td><a class="btn-floating waves-effect waves-light"><i class="material-icons">delete</i></a></td>
            <td><a class="btn-floating waves-effect waves-light "><i class="material-icons">mode_edit</i></a></td>
          </tr>

        <tbody>
           
        </tbody>
      </table>
        
        <button class="btn waves-effect waves-light right" type="submit" name="action">Next<i class="material-icons right">trending_flat</i></button>   
        
        <form action="canvas.php">
        <button class="btn waves-effect waves-light left" type="submit" name="action" action="canvas.php">Previous<i class="material-icons right">fast_rewind</i></button>
        </form> 

      
      </div>
      
      <footer><center> <h5>asdfghjkl </h5> </center> </footer>
      
   </body>   
</html>
