<?php
require_once 'core/init.php';

$theaccount = null;

if (isset($_SESSION["account"]) && $_SESSION["account"]->getfName() != null ){
  $account = $_SESSION["account"];
} else {
  header("location index.php");
  exit;
}


if (isset($_POST["editAccount"])){
  $theaccount = new Account( $_POST["fname"], $_POST["lname"], $_POST["phone"], $_POST["email"], $_POST["passwd"], $_POST["passwd2"], $_POST["role"], $_POST["id"]);
  $fnameError = 0;
  $lnameError = 0;
  $phoneError = 0;
  $emailError = 0;
  $passwdError = 0;
  $passwd2Error = 0;
  $roleError = 0;

}


//MUOKKAA-BUTTON
if (isset($_POST["editAcc"])){
  $editaccount = new Account( $_POST["fname"], $_POST["lname"], $_POST["phone"], $_POST["email"], $_POST["passwd"], $_POST["passwd2"], $_POST["role"], $_POST["id"]);
  $theaccount = $editaccount;
  $fnameError = $theaccount->checkfName();
  $lnameError = $theaccount->checklName();
  $phoneError = $theaccount->checkPhone();
  $emailError = $theaccount->checkEmail();
  $passwdError = $theaccount->checkPasswd();
  $passwd2Error = $theaccount->checkPasswd2();
  $roleError = $theaccount->checkRole();


  if($fnameError == 0 && $lnameError == 0 && $phoneError == 0 && $emailError == 0 && $passwdError == 0 && $passwd2Error == 0 && $roleError == 0){
   try
   {
    $usedb = new AccountPDO();
    $usedb->updateAccount($theaccount);
  } catch (Exception $error) {
    print($error->getMessage());
  }
  $message = new Message();
  $messagetitle = "Käyttäjän tietojen päivitys onnistui!";
  $messagebody = "Siirrytään takaisin henkilöihin noin kolmen (3) sekunnin kuluttua..";
  $message->setMessageTitle($messagetitle);
  $message->setMessageBody($messagebody);
  $_SESSION["editAccount"] = $message;
  header("location: message.php");
  exit;
}
}

if(isset($_POST["backToAccMan"])){
  unset($_SESSION["editAcc"]);
  session_write_close();
  header("location: accmanagement.php");
  exit;
}

if($theaccount === null){
  header("location: index.php");
  exit;
}

?>
<?php require 'includes/logout-module.php'; ?>


<!DOCTYPE html>
<html lang="fi">
<?php require 'includes/head.php'; ?>
<body>
  <?php require 'includes/nav.php'; ?>

  <div class="content-container">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
        </div>
        <div class="col-md-4">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">

                   <!-- <?php
              //CHECKING IF WE HAVE STORED AN ACCOUNT TO SESSION THAT WE CAN PRINT
                if(isset($_SESSION["editAcc"]) && $_SESSION["account"]->getRole() == 1){
                  print('
                    Muokataan profiilia: '. $_SESSION["editAcc"]->getfName() .' '. $_SESSION["editAcc"]->getfName() .'
                    ');
                } else {

                }

                ?>-->

                <?php print("Tilin ". $theaccount->getEmail() ." tiedot"); ?>

              </h3>
            </div>
            <div class="panel-body">
              <form accept-charset="UTF-8" role="form" method="post"  action="">
                <fieldset>
                  <div class="form-group">
                    <input type="hidden" name="id" value="<?php print($theaccount->getId());?>">
                    <label>Etunimi</label> 
                    <input class="form-control"  name="fname" type="text" value="<?php print(htmlentities($theaccount->getfName(), ENT_QUOTES, "UTF-8"));?>">

                    <?php
                    print("<div class='custom-alert'>" . $theaccount->getError($fnameError) . "</div>");
                    ?> 

                  </div>
                  <div class="form-group">
                    <label>Sukunimi</label> 
                    <input class="form-control"  name="lname" type="text" value="<?php print(htmlentities($theaccount->getlName(), ENT_QUOTES, "UTF-8"));?>">

                    <?php
                    print("<div class='custom-alert'>" . $theaccount->getError($lnameError) . "</div>");
                    ?> 

                  </div>
                  <div class="form-group">
                    <label>Puhelinnumero</label> 
                    <input class="form-control"  name="phone" type="text" value="<?php print(htmlentities($theaccount->getPhone(), ENT_QUOTES, "UTF-8"));?>">
                    <?php
                    print("<div class='custom-alert'>" . $theaccount->getError($phoneError) . "</div>");
                    ?> 
                  </div>
                  <div class="form-group">
                    <label>Sähköposti</label> 
                    <input class="form-control"  name="email" type="text" value="<?php print(htmlentities($theaccount->getEmail(), ENT_QUOTES, "UTF-8"));?>">
                    <?php
                    print("<div class='custom-alert'>". $theaccount->getError($emailError) . "</div>");
                    ?> 
                  </div>

                  <div class="form-group">
                    <label>Salasana</label> 
                    <input class="form-control"  name="passwd" autocomplete="off" type="password" value="">
                    <?php
                    print("<div class='custom-alert'>". $theaccount->getError($passwdError) . "</div>");
                    ?> 
                  </div>
                  <div class="form-group">
                    <label>Vahvista salasana</label> 
                    <input class="form-control"  name="passwd2" autocomplete="off" type="password" value="">
                    <?php
                    print("<div class='custom-alert'>". $theaccount->getError($passwd2Error) . "</div>");
                    ?> 
                  </div>

                  <?php ?>
                  <div class="form-group">
                    <label>Rooli</label> 
                    <div class="btn-group btn-group-justified">
                      <div class="btn-group">
                        <button type="button"  class="role-button-hyllyttaja  btn btn-default role-button btn-xs" value="0">Hyllyttäjä</button>
                      </div>
                      <div class="btn-group">
                       <button type="button" class="role-button-hallinnoitsija  btn btn-default role-button btn-xs" value="1">Hallinnoitsija</button>
                     </div>
                   </div>
                   <input id="role"  class="form-control" name="role" type="hidden" value="<?php print($theaccount->getRole()); ?>">
                   <?php
                   print("<div class='custom-alert'>". $theaccount->getError($roleError) . "</div>");
                   ?> 
                 </div>
               </div> 
               <button class="btn btn-lg btn-success btn-block" type="button" name="editAcc" data-toggle='modal' data-target="#editAcc">Muokkaa</button> 
               <button class="btn btn-lg  btn-block" formaction="accmanagement.php">Takaisin</button> 
             </fieldset>

             <div class='modal fade' id="editAcc" tabindex='-1' role='dialog' aria-labelledby='accEditLabel' aria-hidden='true'>
              <div class='modal-dialog'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>
                    <h4 class='modal-title' id='accEditLabel'>Vahvista tilitietojen muutokset</h4>
                  </div>
                  <div class='modal-body'>
                    Tallenna tilin muutokset?
                  </div>
                  <div class='modal-footer'>

                    <button type='button' class='btn btn-default ' data-dismiss='modal' style="margin-bottom:5px;">Peruuta</button>
                    <button class='btn btn-success ' type='submit' name='editAcc' style="margin-bottom:5px;">Tallenna</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-md-4">
    </div>
  </div>
</div>
</div>


<script src="js/rolehelper.js" type="text/javascript"></script>
<script>
$(function(){
  var rh = new RoleHelper();
  rh.selectRole();
  rh.checkRole();
});
</script>



</body>
</html>
