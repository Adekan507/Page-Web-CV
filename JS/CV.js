document.getElementById ("Open").click();

function openTable(evt,tabName) {
  //Declare all variables 
  var i , tabcontent, tablinks;

  //Get all elemments with class="tabcontent"and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

  //Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for(i = 0;i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  //Show the current tab, and add an "active" class to the button that oppened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}  

 /* //When the user scrolls the page, execute myFunction
  window.onscroll = function() {stickyHeader()};
  //Get the header
  var header = document.getElementById("myHeader");
  //Get the offset position of the navbar
  var sticky = header .offsetTop;
  ///Add the sticky class to the header
  function stickyHeader() {
  if(scroll) {
      header.classList.add("sticky");
    }
    else {
      header.classList.remove ("sticky");
    }

}*/