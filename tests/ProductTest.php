<?php 
namespace Lawkunchi\Assessment;
use PHPUnit\Framework\TestCase;

final class ProductTest extends TestCase {

    public function testClassConstructor(): void
    {
        $product = new Product('Socks');

        $this->assertSame('Socks', $product->name);
        $this->assertIsString($product->name);
    }
   
}