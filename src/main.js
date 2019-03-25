import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { Tamagotchi } from './tamagotchi.js';

$(document).ready(function() {
  let tama;
  $("#tamagotchi-form").submit(function(event){
    event.preventDefault();
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
    }
    else if(food === "Berries"){
      tama.eatBerries();
    }
    else{
      tama.eatMeat();
    }
  });

  $("#fun-form").submit(function(event){
    event.preventDefault();
    let fun = $("input:radio[name=fun]:checked").val();
    if (fun === "Pet"){
      tama.pet();
    }
    else if(fun === "Walk"){
      tama.walk();
    }
    else{
      tama.skyDive();
    }
  });

  $("#sleep-form").submit(function(event){
    event.preventDefault();
    let sleep = $("input:radio[name=sleep]:checked").val();
    if (sleep === "Nap"){
      tama.nap();
    }
    else if(sleep === "LongNap"){
      tama.longNap();
    }
    else{
      tama.coma();
    }
  });

  $("#playAgain").click(function(){
    location.reload();
  })


});
