<?php
namespace Lawkunchi\Assessment;

 class Category {
    public string $name;
    public array $products;
    
    public function __construct(string $name, array $products) {
        $this->name     = $name;
        $this->products = $products;
    }

     /**
     * Return a product inside a category.
     * @return array
     */

    public function getProducts():array {
        return $this->products;
    }

     /**
     * Does a product exist in a category.
     * @return false
     */
    public function doesProductExistInCategory(string $product): bool {

        $filtered_product = array_filter($this->products, function ($obj) use ($product) {
            return $obj->name == $product;
        });

        return !empty($filtered_product)? true:false;
       
    }
    
}
