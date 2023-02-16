import $ from 'jquery'
import { PixiDemo } from './PixiDemo.js';

$(() => {
  console.log('Hier!');
  $('#app').html('Hello World!');
  new PixiDemo();
})



