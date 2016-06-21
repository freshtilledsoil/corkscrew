
;(function (w, doc) {

  // Enable strict mode
  "use strict";

  // Local object for method references
  var Corkscrew = {};

  // Namespace
  Corkscrew.ns = "Corkscrew";

  // Start defining methods here
  Corkscrew.init = function() {
    Corkscrew.addHTMLView();

    doc.getElementById('cs-nav-menu-toggle').addEventListener('click', function(e){

      e.preventDefault();

      doc.getElementById('cs-site-nav').classList.toggle('is-open');

    }, false);


  };

  Corkscrew.addHTMLView = function() {

  var modules = doc.querySelectorAll('.cs-content-section'),
      modulesCount = modules.length,
      moduleHTMLContent, contentTextArea, expandButton, module, moduleHeader, moduleContent, wrap, i;

  if( modulesCount ) {

    for ( i = 0; i < modulesCount; i = i + 1 ) {

      module = modules[i];

      if( module.classList.contains('generate-html') ) {

        moduleHeader = module.querySelectorAll('.cs-content-header')[0];
        moduleContent = module.querySelectorAll('.cs-content')[0];
        moduleHTMLContent = moduleContent.innerHTML;
        wrap = doc.createElement("div");
        expandButton = doc.createElement("button");
        contentTextArea = doc.createElement("textarea");

        expandButton.classList.add('cs-button');
        expandButton.classList.add('cs-button-html');
        expandButton.setAttribute('type', 'button');
        expandButton.innerHTML = "View HTML";
        wrap.classList.add('cs-view-html');
        contentTextArea.innerHTML = moduleHTMLContent.replace(/^(\r\n)|(\n)/,'').replace(/^(\r\n)|(\n)/,'');
        contentTextArea.classList.add('cs-is-hidden');
        contentTextArea.spellcheck = false;
        contentTextArea.disabled = true;

        moduleHeader.appendChild(expandButton);
        wrap.appendChild(contentTextArea);

        moduleHeader.appendChild(wrap);

        expandButton.addEventListener('click', function(){

          this.parentNode.querySelectorAll('textarea')[0].classList.toggle('cs-is-hidden');

        }, false);

      } // if

    } // for

  } // modulesCount

  },

  // Start the application
  Corkscrew.init();

} )( this, this.document );
