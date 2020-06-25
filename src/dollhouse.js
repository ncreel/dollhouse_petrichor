function handleClick(id){
  $("#kitchendialog").dialog({ autoOpen: false, modal: true, width:400});
  $("#bedroomdialog").dialog({ autoOpen: false, modal: true, width:400});
  $("#bathroomdialog").dialog({ autoOpen: false, modal: true, width:400 });
  $("#closetdialog").dialog({ autoOpen: false, modal: true, width:400 });
  const element = document.getElementById(id);
  switch (id) {
    case "kitchen":
      if(element.src ="./images/cleankitchen.png"){
        element.src = "./images/corruptkitchen.png";
      }else{
        element.src = "./images/cleankitchen.png";
      };
      $("#kitchendialog").dialog("open");
      break;
    case "bathroom":
      if(element.src ="./images/cleanbathroom.png"){
        element.src = "./images/corruptbathroom.png";
      }else{
        element.src = "./images/cleanbathroom.png";
      };
      $("#bathroomdialog").dialog("open");
      break;
    case "bedroom":
      if(element.src ="./images/cleanbedroom.png"){
        element.src = "./images/corruptbedroom.png";
      }else{
        element.src = "./images/cleanbedroom.png";
      };
      $("#bedroomdialog").dialog("open");
      break;
    case "closet":
      if(element.src ="./images/cleancloset.png"){
        element.src = "./images/corruptcloset.png";
      }else{
        element.src = "./images/cleancloset.png";
      };
      $("#closetdialog").dialog("open");
    }
}
