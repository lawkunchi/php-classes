<?php
namespace Lawkunchi\Assessment;

class Product  {
    public string $name;
    
    public function __construct(string $name) {
        $this->name = $name;
    }

      /**
     * Return a product name.
     * @return strng
     */

    public function getName(): string
    {
        return $product;
    }

    public function makeDescription(string $description): string
    {
        return $description;
    }

}
