import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Tamagotchi } from './tamagotchi.js';

$(document).ready(function() {
  let tama;
  let timeOut;

  $.ajax({
        url: `http://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=Tamagotchi`,
        // api_key: '5nRqoCICo7FpdrGJXtx9Uj079f1KAQ8Z',
        // tag: 'Tamagotchi',
        type: 'GET',
        // crossDomain: true,
        // dataType: 'jsonp',
        data: {
          format: 'json'
        },
        success: function(response) {
         $('.giphy').html(`<img src="${response.data.image_url}">`);
          console.log(response);
        },
        error: function() {
          $('#errors').text("There was an error processing your request. Please try again.");
        }
  });

  $("#tamagotchi-form").submit(function(event){
    event.preventDefault();
      timeOut = setTimeout(function() {
        location.reload();
        alert("Game over! Your Tamagotchi has run away!");
    }, 3000);
    $(".play").show();
    $(".info").show();
    let name = $("#name").val();
    tama = new Tamagotchi(name);
    let hungerInterval = setInterval(function(){
      tama.setFood(5);
      tama.setFun(5);
      tama.setSleep(5);
      if(tama.foodLevel <= 0){
        $("#tamagotchi").text(tama.name);
        $("#reason").text("hunger.");
        clearInterval(hungerInterval);
        $(".result").show();
        $(".play").hide();
        $(".info").hide();
      }
      else if(tama.funLevel <= 0){
        $("#tamagotchi").text(tama.name);
        $("#reason").text("boredom.");
        clearInterval(hungerInterval);
        $(".result").show();
        $(".play").hide();
        $(".info").hide();
      }
      else if(tama.sleepLevel <= 0){
        $("#tamagotchi").text(tama.name);
        $("#reason").text("sleep deprivation.");
        clearInterval(hungerInterval);
        $(".result").show();
        $(".play").hide();
        $(".info").hide();
      }
      else{
        $("#foodLevel").text(tama.foodLevel);
        $("#funLevel").text(tama.funLevel);
        $("#sleepLevel").text(tama.sleepLevel);
      }
    }, 500);
  });

  $("#feed-form").submit(function(event){
    event.preventDefault();
    let food = $("input:radio[name=food]:checked").val();
    if (food === "Grass"){
      tama.eatGrass();
      clearTimeout(timeOut);
      timeOut = setTimeout(function() {
        location.reload();
        alert("Game over! Your Tamagotchi has run away!");
      }, 3000);
    }
    else if(food === "Berries"){
      tama.eatBerries();
      clearTimeout(timeOut);
      timeOut = setTimeout(function() {
        location.reload();
        alert("Game over! Your Tamagotchi has run away!");
      }, 3000);
    }
    else{
      tama.eatMeat();
      clearTimeout(timeOut);
      timeOut = setTimeout(function() {
        location.reload();
        alert("Game over! Your Tamagotchi has run away!");
      }, 3000);
    }
  });

  $("#fun-form").submit(function(event){
    event.preventDefault();
    let fun = $("input:radio[name=fun]:checked").val();
    if (fun === "Pet"){
      tama.pet();
      clearTimeout(timeOut);
      timeOut = setTimeout(function() {
        location.reload();
        alert("Game over! Your Tamagotchi has run away!");
      }, 3000);
    }
    else if(fun === "Walk"){
      tama.walk();
      clearTimeout(timeOut);
      timeOut = setTimeout(function() {
        location.reload();
        alert("Game over! Your Tamagotchi has run away!");
      }, 3000);
    }
    else{
      tama.skyDive();
      clearTimeout(timeOut);
      timeOut = setTimeout(function() {
        location.reload();
        alert("Game over! Your Tamagotchi has run away!");
      }, 3000);
    }
  });

  $("#sleep-form").submit(function(event){
    event.preventDefault();
    let sleep = $("input:radio[name=sleep]:checked").val();
    if (sleep === "Nap"){
      tama.nap();
      clearTimeout(timeOut);
      timeOut = setTimeout(function() {
        location.reload();
        alert("Game over! Your Tamagotchi has run away!");
      }, 3000);
    }
    else if(sleep === "LongNap"){
      tama.longNap();
      clearTimeout(timeOut);
      timeOut = setTimeout(function() {
        location.reload();
        alert("Game over! Your Tamagotchi has run away!");
      }, 3000);
    }
    else{
      clearTimeout(timeOut);
      timeOut = setTimeout(function() {
        location.reload();
        alert("Game over! Your Tamagotchi has run away!");
      }, 3000);
      tama.coma();
    }
  });

  $("#playAgain").click(function(){
    location.reload();
  })
});
