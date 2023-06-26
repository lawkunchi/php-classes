<?php
namespace Lawkunchi\Assessment;

interface IText {

     /**
     * Return a name.
     * @return string
     */
    public function getName(): string;

     /**
     * @param string $text
      * 
     * Return a description.
     * @return string
     */
    public function  makeDescription(string $text): string;
}