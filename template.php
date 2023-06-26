<?php
    include 'src/Category.php';
    include 'src/Product.php';

    use Lawkunchi\Assessment\Category;
    use Lawkunchi\Assessment\Product;
    
    $data = [
        'Mens' => new Category('Mens', [new Product('Blue Shirt'), new Product('Red T-Shirt')]),
        'Kids' => new Category('Kids', [new Product('Sneakers'), new Product('Toy car')]),
    ];
    global $data;

    $product = new Product('Blue Shirt');
    echo($product->getName());
    echo($product->makeDescription('A nice blue shirt'));


    /**
     * Return a product inside a category.
     *
     * @param string $category
     *
     * @return array
     */
    function getProductsInCategory(string $category): array {
        // Implement me
        $products = [];
        $data = $GLOBALS['data'];
        if(isset($data[$category])) {
            $products = $data[$category]->getProducts();
        }
        return $products;
    }
    
    function doesProductExistInCategory(string $category, string $product): bool {
        // Implement me
        $data = $GLOBALS['data'];
        $exist = false;
        if(isset($data[$category])) {
            $exist = $data[$category]->doesProductExistInCategory($product);
            return $exist;
        }

        return $exist;
    }

?>

