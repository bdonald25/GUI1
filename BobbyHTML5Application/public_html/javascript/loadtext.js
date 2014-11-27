/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 var story;
 
  jQuery.ajax({
    async: false,
    dataType: "json",
    url: "article.json" ,
    success: function( data ) {
      story = data ;
    }
  });

  jQuery(document).ready( function() {
    placeContent() ;
  } ) ;

  function placeContent() {
    var strContent = "";

    // create dynamic content from JSON
    strContent += "<h1 class='titleArticle'>" + story.title + "</h1>" ;
    strContent += "<h2 class='authorArticle'>" + story.author + "</h2>" ;
    strContent += "<h3 class='dateArticle'>" + story.date + "</h2>" ;

    strContent += "<ul class='lyrics'>"
    // loop through all the paragraphs and sentences and add them to the page
    // as unordered list elements
    for ( var para = 0 ; para < story.text.paragraphs.length ; para++ ) {
      strContent += "<li class= lyrics>" ;
      for ( var sent = 0 ; sent < story.text.paragraphs[para].length ; sent++ ) {
        strContent += story.text.paragraphs[para][sent] + "<br />" ;
      }
      strContent += "<br />" + "</li>" ;
    }
    strContent += "</ul>"

    /* Read file info about image from article.json*/
    strContent += "<img src='" + story.img.file + "' alt='" + story.img.alt + "'>" ;

    // place dynamic content on page
    jQuery(".articleContent").html( strContent ) ;
  }
