<?php
namespace Lawkunchi\Assessment;

// IText Interface
interface IText {
    /**
     * Return a name.
     * @return string
    */
    
    public function getName(): string;

    /**
     * @param string $text
     * Return a description.
     * @return string
    */
    public function  makeDescription(string $text): string;
}

class Product  implements IText{
    public string $name;
    
    public function __construct(string $name) {
        $this->name = $name;
    }

    /**
    * Return product name.
    * @return string
    */

    public function getName(): string
    {
        return $this->name;
    }

    /**
    * Create product description.
    * @return string
    */

    public function makeDescription(string $description): string
    {
        return $description;
    }

}
