<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Classes</title>
    <link
      rel="stylesheet"
      href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css"
    />
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>

    <script src="./assets/main.js"></script>
</head>
<body>

<?php
     include 'src/Category.php';
     include 'src/Product.php';
 
     use Lawkunchi\Assessment\Category;
     use Lawkunchi\Assessment\Product;
    session_start();
     
    if(isset($_SESSION['data'])) {
        $data = $_SESSION['data'];
    }

    else {
        $data = [
            'Mens' => new Category('Mens', [new Product('Blue Shirt'), new Product('Red T-Shirt')]),
            'Kids' => new Category('Kids', [new Product('Sneakers'), new Product('Toy car')]),
        ];

        $_SESSION['data'] = $data;
    }


?>


    <div class="container">

        <h3>Products</h3>

        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Category</th>
                <th scope="col">Products</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach($data as $key => $category): ?>
                <tr>
                    <td><?php echo($category->name) ?></td>
                    <td>
                        <?php foreach($category->products as $product ): ?>
                            <button><?php echo($product->name); ?></button>
                        <?php endforeach; ?>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>

    <div class="col-sm-6 col-sm-offset-3">
      <h4>Add Product</h4>

      <form action="process.php" method="POST">
        <div id="category-group" class="form-group">
          <label for="category">Category</label>
          <input
            type="text"
            class="form-control"
            id="category"
            name="category"
            placeholder="Category Name"
          />
        </div>

        <div id="product-group" class="form-group">
          <label for="product">Product</label>
          <input
            type="text"
            class="form-control"
            id="product"
            name="product"
          />
        </div>

        <button type="submit" class="btn btn-success">
          Submit
        </button>
      </form>
    </div>
    
</body>
</html>