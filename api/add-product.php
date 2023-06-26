<?php
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

include '../src/Category.php';
include '../src/Product.php';

$json = file_get_contents('php://input');
$formData = json_decode($json);

use Lawkunchi\Assessment\Category;
use Lawkunchi\Assessment\Product;
session_start();
 
$errors = [];
$response = [];
$product = [];

if (empty($formData->category)) {
    $errors['category'] = 'Category mame is required.';
}

if (empty($formData->name)) {
    $errors['name'] = 'Product name is required';
}

//Check for errors
if (!empty($errors)) {
    $response['success'] = false;
    $response['errors'] = $errors;
} else {
    //return prosucts saved in the session
    $category = $formData->category;
    $product[] =  new Product($formData->name);

    if(isset($data[$category])) {
        $data[$category]->products = array_merge($data[$category]->products, $product);
    }
    else {
        $data[$category] = new Category($category, $product);
    }

    $_SESSION['data'] = $data;

    $response['success'] = true;
    $response['data'] = $product;
    $response['message'] = 'Success!';

}

echo json_encode($response);