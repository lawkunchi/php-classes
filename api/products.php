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

//return products saved in the session

if(isset($_SESSION['data'])) {
   $data = $_SESSION['data'];

}


//create new products and save in the session
else {
   $data = [
      new Category('Mens', [new Product('Blue Shirt'), new Product('Red T-Shirt')]),
      new Category('Kids', [new Product('Sneakers'), new Product('Toy car')]),
   ];

   $_SESSION['data'] = $data;
}

$products = [];

foreach($data as $category) {
   $products = array_merge($products, $category->products);
}


// filter products if query exists
if(isset($_GET['query'])) {

   $tempArray = [];
   $query = $_GET['query'];
  

      // filter products in the session
      $products = array_filter($products, function($product){
         if(preg_match("/".$_GET['query']."/i", $product->name)) return true;
         return false;
      });


}


echo json_encode($products, true);