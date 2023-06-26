<?php 

namespace Lawkunchi\Assessment;
use PHPUnit\Framework\TestCase;

final class CategoryTest extends TestCase {

    // Test prdouct class
    public function testGetProducts(): void
    {
        $category =  new Category('Fruits', [new Product('Apples'), new Product('Oranges')]);
        $this->assertCount(2, $category->getProducts());
        $this->assertContainsOnlyInstancesOf('Lawkunchi\Assessment\Product', $category->getProducts());
        $this->assertIsArray($category->getProducts());
    }

    // Test if product existin a category
    public function testProductExistInACategory(): void
    {
        $category =  new Category('Fruits', [new Product('Apples'), new Product('Oranges')]);
        $this->assertTrue($category->doesProductExistInCategory('Apples'));
        $this->assertFalse($category->doesProductExistInCategory('Bananas'));
        $this->assertIsBool($category->doesProductExistInCategory('Oranges'));
    }
}