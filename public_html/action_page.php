<?php

ini_set("include_path", '/home/camra/php:' . ini_get("include_path") );
include_once('Mail.php');
include_once('Mail/mime.php');

$title = $_POST['title'];
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$affiliation =$_POST['affiliation'];
$email = $_POST['email'];
$address = $_POST['address'];
$date = $_POST['date'];
$telephone = $_POST['telephone'];
$breifStatement = $_POST['breifStatement'];
$your_email = "QMRAIII@anr.msu.edu";
$uploadCount = 0;


$to = $your_email;
$subject="New form submission: ".$first_name.$last_name;
$from = $your_email;
$data = "Title: ".$title."\nFirst Name: ".$first_name."\nLast Name: ".$last_name."\nAffiliation: ".$affiliation."\nAddress: ".$address."\nEmail: ".$email."\nDate: ".$date."\nTelephone: ".$telephone."\n"."\nBrief Statement: ".$breifStatement."\n";
$message = new Mail_mime(); 
$message->setTXTBody($data); 

if(isset($_FILES['fileToUpload'])){
    $allowed_array = array('pdf','doc','docx');
    $target_file= "uploads/";
    $name_array = $_FILES['fileToUpload']['name'];
    $tmp_name_array = $_FILES['fileToUpload']['tmp_name'];
    $type_array = $_FILES['fileToUpload']['type'];
    $size_array = $_FILES['fileToUpload']['size'];
    $error_array = $_FILES['fileToUpload']['error'];
    $maxSize = 4000000;
  
	for($i = 0; $i < count($tmp_name_array); $i++){
	    $typer=explode('.',$name_array[$i]);
	    $typerr=strtolower(end($typer));
	    $filename =$name_array[$i];
	    if($size_array[$i]<$maxSize){
	        if(!empty($name_array[$i])){
	            if(in_array($typerr,$allowed_array)){
	                if(move_uploaded_file($tmp_name_array[$i], $target_file.$name_array[$i])){
	                	echo $name_array[$i]." upload is complete<br>";
	                	$uploadCount+=1;
	                	echo "\n".$i;
	                	
	            		if($i==1){
	            			$message->addAttachment($target_file.$filename);
	            		} else{
	            			$message->addAttachment($target_file.$filename);
	            		}
	            		
	              	}
	            } else{
	            	echo "Bad file type. Only PDF, DOC and DOCX allowed!";
	            	echo "\n You're being redirected to try again...";
	            	sleep(5);
	            	echo '<script type="text/javascript">
						    window.location = "qmraAppForm.html"
						  </script>';
	            	break;

	            }
	        }
	    } else{
	    	echo "File too large!";
	    	echo "\n You're being redirected to try again...";
	    	sleep(5);
	    	echo '<script type="text/javascript">
					window.location = "qmraAppForm.html"
				  </script>';
			break;
	    	}
	}
}

//if($uploadCount==1){
	$body = $message->get();
	$extraheaders = array("From"=>$from, "Subject"=>$subject,"Reply-To"=>$email);
	$headers = $message->headers($extraheaders);
	$mail = Mail::factory("mail");
	$mail->send($to, $headers, $body);

	if (PEAR::isError($mail)){
			echo "error: {$mail->getMessage()}";
		 } else {
				echo "Message sent";
				sleep(5);
				echo '<script type="text/javascript">
	           				window.location = "index.html"
	      			  </script>';
		}
//}
error_reporting(E_ALL);
    
?>