<?php

if(isset($_FILES['fileToUpload'])){
    $allowed_array = array('pdf','doc','docx');
    $target_file= "uploads/";
    //$fileType = pathinfo($target_file,PATHINFO_EXTENSION);
    $name_array = $_FILES['fileToUpload']['name'];
    $tmp_name_array = $_FILES['fileToUpload']['tmp_name'];
    $type_array = $_FILES['fileToUpload']['type'];
    $size_array = $_FILES['fileToUpload']['size'];
    $error_array = $_FILES['fileToUpload']['error'];
    $count = 0;
    $failed = 0;
    $badFileType=0;
    $maxSize = 4000000;
    
    for($i = 0; $i < count($tmp_name_array); $i++){
        $typer=explode('.',$name_array[$i]);
        $typerr=strtolower(end($typer));
        if($size_array[$i]<$maxSize){
            if(!empty($name_array[$i])){
                if(in_array($typerr,$allowed_array)){
                    if(move_uploaded_file($tmp_name_array[$i], $target_file.$name_array[$i])){
                        //echo $name_array[$i]."upload is complete<br>";
                        $count =$count + 1;
                    
                    } else{
                        //echo "move_uploaded_file failed for ".$name_array[$i]."<br>";
                        $count = 0;
                        $failed = $failed + 1;

                    }
                } else {
                    $badFileType= $badFileType + 1;
                }

            } else {
                echo "Please select files to upload!";
                }
        }else{
            echo "File size cannot be more than 5MB!";
            $url = "/qmraAppForm.html";  
                echo "<html><head><META HTTP-EQUIV=Refresh CONTENT=\"2; URL=" .$url. "\"></head></html>"; 
                }
             
        if($count==2){
        
            echo "Upload Complete!<br>";
            echo"<strong style='front-style:italics'>Now you will be redirected back so you can fill out rest of the form.</strong>";
            $url = "/qmraAppForm.html";  
                sleep(10);
                echo "<html><head><META HTTP-EQUIV=Refresh CONTENT=\"2; URL=" .$url. "\"></head></html>"; 
        }if($failed>0){
            echo"Upload failed! Please try again.";
            $url = "/qmraAppForm.html";  
                sleep(5);
                echo "<html><head><META HTTP-EQUIV=Refresh CONTENT=\"2; URL=" .$url. "\"></head></html>"; 
            }if($badFileType>0){
                echo"Only .doc, .docx, .pdf file allowed<br> Redirecting back..";
                echo "<br>";
            $url = "/qmraAppForm.html";  
                sleep(10);
                echo "<html><head><META HTTP-EQUIV=Refresh CONTENT=\"2; URL=" .$url. "\"></head></html>";
            
        }

    }
}

?>