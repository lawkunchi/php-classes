<?php
include '../src/Category.php';
include '../src/Product.php';

if (isset($_SERVER['HTTP_ORIGIN'])) {
   header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
   header('Access-Control-Allow-Credentials: true');
   header('Access-Control-Max-Age: 86400');
}

use Lawkunchi\Assessment\Category;
use Lawkunchi\Assessment\Product;
session_start();

if(isset($_SESSION['data'])) {
   $data = $_SESSION['data'];

}


else {
   $data = [
      new Category('Mens', [new Product('Blue Shirt'), new Product('Red T-Shirt')]),
      new Category('Kids', [new Product('Sneakers'), new Product('Toy car')]),
   ];

   $_SESSION['data'] = $data;
}



if(isset($_GET['query'])) {

   $tempArray = [];
   $query = $_GET['query'];
  
   foreach($data as $key => $value) {
      $result = array_filter($value->products, function($product){
         // if (isset($value->products)) {
            // foreach ($value->products as $product) {
               if(stripos($product->name, $_GET['query'])) return true;
               //   if (preg_match("/^{$_GET['query']}$/i", $product->name)) return true;
            // }
         // }
         return false;
       });
       $data[$key]->products = $result;
}


}

echo json_encode($data);