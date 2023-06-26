<?php

include '../src/Category.php';
include '../src/Product.php';

use Lawkunchi\Assessment\Category;
use Lawkunchi\Assessment\Product;
session_start();
 
$errors = [];
$data = $_SESSION['data'];
$response = [];

if (empty($_POST['category'])) {
    $errors['category'] = 'Category mame is required.';
}

if (empty($_POST['product'])) {
    $errors['product'] = 'Product name is required';
}

if (!empty($errors)) {
    $response['success'] = false;
    $response['errors'] = $errors;
} else {

    $category = $_POST['category'];
    $product[] =  new Product($_POST['product']);

    if(isset($data[$category])) {
        $data[$category]->products = array_merge($data[$category]->products, $product);
    }
    else {
        $data[$category] = new Category($category, $product);
    }

    $_SESSION['data'] = $data;

    $response['success'] = true;
    $response['data'] = $data;
    $response['message'] = 'Success!';

}

echo json_encode($response);