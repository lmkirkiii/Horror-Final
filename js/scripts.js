// Biz Logic

// User Interface Logic
$(document).ready(function(){
  $(".button").click(function(){
    $(".opening-page").fadeOut();
    $(".hidden").fadeIn();
    event.preventDefault();
  });

  $("form#personal-info").submit(function(){
    var userName = $("input#name").val();
    var birthDate = $("input#birthdate").val();
    var catType = $("input#cat").val();
    var celebrity = $("input#celebirty").val();
    var zodiac = $("input#zodiac").val();
    var fun = $("input#fun").val();
    var camp = $("input#camp").val();
    var rollerCoaster = $("input#roller-coaster").val();
    var alive = $("input#alive").val();

    $(".name").text(userName);
    $(".birth").text(birthDate);
    $(".cat").text(catType);
    $(".celebrity").text(celebrity);
    $(".zodiac").text(zodiac);
    $(".fun").text(fun);
    $(".camp").text(camp);
    $(".roller-coaster").text(rollerCoaster);
    $(".alive").text(alive);

    $("#personal-info").hide();
    $("#quiz").show();

    event.preventDefault();

  });
  $("form#quiz").submit(function(){
    var hauntType = $("select#haunt").val();
    var lightsOff = $("select#lights").val();
    var lonely = $("select#lonely").val();
    var prefer = $("select#prefer").val();

    if(hauntType === 'yes'|| lonely === 'no'){
      $("#story-1").show();
      $("body").addClass("mindFreak");
    }
    else if(lightsOff === 'no'){
      $("#story-2").show();
      $("body").addClass("snapchat");
    }
    else{
      $("#story-3").show();
      $("#stroy-3").show();
      $("body").addClass("notHaunted");
    }

    $("#quiz").hide();
    event.preventDefault();
  });
  $("button#surprise").click(function(){
    $()
  });
});
