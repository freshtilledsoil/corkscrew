var Pinot = {
  
  init: function() {

    document.getElementsByTagName('body')[0].classList.add('is-loading');

    // load the client css
    if( Corkscrew.css ) {
      for ( var i = 0; i < Corkscrew.css.length; i = i + 1 ) {
        CorkscrewUtil.load( 'style', Corkscrew.css[i] );
      }
    }

    // make sure all config options are set
    Pinot.validateConfig();
    
    // fill out the project name
    document.querySelector('head > title').innerHTML = Corkscrew.name;
    
    // Get the header partial
    Pinot.buildHeader(function() {
      
      document.getElementById('cs-nav-menu-toggle').addEventListener('click', function(e){
      
        e.preventDefault();
        
        document.getElementById('cs-site-nav').classList.toggle('is-open');
      
      }, false);
      
      // after the header is loaded, load the footer
      Pinot.buildFooter(function() {
        
        // build sections
        Pinot.buildGuideSections();
        
      }); // buildFooter()
    }); // buildHeader()
    
  }, // init
  validateConfig: function() {
    
    if(typeof Corkscrew.name === 'undefined') {
      Corkscrew.name = 'Corkscrew by Fresh Tilled Soil';
    }
    
    if(typeof Corkscrew.partials === 'undefined') {
      Corkscrew.partials = 'project-name/partials/';
    }
    
    if(typeof Corkscrew.logo === 'undefined') {
      Corkscrew.logo = 'corkscrew/assets/images/fts-logo.jpg';
    }

  },
  addRepoLink: function( url ) {
    
    if( Corkscrew.repo ) {
      
       var nav = document.querySelectorAll("#cs-site-nav")[0],
           repoItem = document.createElement("li");
       
       repoItem.innerHTML = '<a href="' + url + '" class="cs-link-img"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32"><g></g><path class="cs-icon-git" d="M8.233 23.73c0 0.845 0.715 1.268 2.146 1.268 1.252 0 1.878-0.439 1.878-1.317 0-0.829-0.683-1.244-2.048-1.244-1.317-0-1.975 0.43-1.975 1.292zM26.667 0h-21.333c-2.934 0-5.334 2.4-5.334 5.334v21.332c0 2.936 2.4 5.334 5.334 5.334h21.333c2.933 0 5.333-2.398 5.333-5.334v-21.332c0-2.934-2.399-5.334-5.333-5.334zM14.867 12.781c-0.228 0.081-0.553 0.171-0.975 0.268 0.13 0.374 0.195 0.723 0.195 1.049 0 1.040-0.313 1.947-0.939 2.719-0.626 0.772-1.435 1.231-2.426 1.378-0.65 0.098-0.975 0.447-0.975 1.049 0 0.211 0.106 0.423 0.317 0.634 0.276 0.309 0.683 0.504 1.219 0.585 2.325 0.358 3.487 1.325 3.487 2.902 0 2.52-1.504 3.78-4.511 3.78-1.236 0-2.252-0.22-3.048-0.658-1.008-0.553-1.512-1.422-1.512-2.609 0-1.366 0.756-2.3 2.268-2.804v-0.049c-0.553-0.341-0.829-0.862-0.829-1.561 0-0.91 0.26-1.48 0.78-1.707v-0.049c-0.52-0.179-0.984-0.585-1.39-1.22-0.455-0.683-0.683-1.414-0.683-2.195 0-1.171 0.415-2.146 1.244-2.926 0.797-0.732 1.748-1.097 2.853-1.097 0.797 0 1.536 0.195 2.219 0.585 0.78 0 1.683-0.195 2.707-0.585l-0 2.512zM18.818 21.219h-2.756c0.033-0.325 0.049-0.878 0.049-1.658v-7.584c0-0.764-0.016-1.293-0.049-1.585h2.756c-0.033 0.309-0.049 0.821-0.049 1.536v7.486c0 0.829 0.016 1.431 0.049 1.805zM18.635 7.953c-0.333 0.358-0.728 0.536-1.183 0.536-0.471 0-0.874-0.179-1.207-0.536-0.333-0.358-0.5-0.78-0.5-1.268 0-0.504 0.167-0.935 0.5-1.293 0.333-0.358 0.736-0.537 1.207-0.537 0.455 0 0.849 0.179 1.183 0.537 0.333 0.358 0.5 0.788 0.5 1.293 0 0.488-0.167 0.91-0.5 1.268zM26.303 20.901c-0.602 0.325-1.325 0.488-2.171 0.488-1.187 0-2.008-0.422-2.463-1.268-0.342-0.634-0.512-1.634-0.512-2.999v-4.365h0.024v-0.049l-0.366-0.024c-0.211 0-0.488 0.024-0.829 0.073v-2.365h1.195v-0.951c0-0.455-0.024-0.821-0.073-1.098h2.829c-0.048 0.309-0.073 0.658-0.073 1.049v1h2.121v2.365c-0.081 0-0.232-0.008-0.451-0.024-0.22-0.016-0.427-0.025-0.622-0.025h-1.049v4.536c0 1.090 0.358 1.634 1.073 1.634 0.504 0 0.959-0.138 1.366-0.415v2.439zM10.038 12.513c-1.024 0-1.536 0.602-1.536 1.805 0 1.122 0.512 1.683 1.536 1.683 0.992 0 1.488-0.569 1.488-1.707 0-0.472-0.114-0.878-0.341-1.219-0.276-0.374-0.659-0.561-1.146-0.561z" fill="#000000" /></svg></a>';

       nav.appendChild(repoItem);

    }

  },
  addTemplatesDropdown: function() {

    if( Corkscrew.templates && Corkscrew.templates.length ) {

      var nav = document.querySelectorAll("#cs-site-nav")[0],
          dropDownEl = document.createElement("li"),
          dropDownMenu = document.createElement("ul"),
          templateItem;

          dropDownEl.innerHTML ='<a href="#cs-templates" id="cs-drop-trigger">Templates</a>';
          dropDownMenu.setAttribute('id', 'cs-templates');
          dropDownMenu.classList.add('cs-site-nav-menu');

          for ( var i = 0; i < Corkscrew.templates.length; i = i + 1 ) {

            templateItem = document.createElement("li");
            templateItem.innerHTML = '<a href="' + Corkscrew.templates[i].location + '">' + Corkscrew.templates[i].name + '</a>';

            dropDownMenu.appendChild(templateItem);

          }

      dropDownEl.appendChild(dropDownMenu);
      nav.appendChild(dropDownEl);

      document.getElementById('cs-drop-trigger').addEventListener('click', function(e){ e.preventDefault(); }, false);

    }

  },
  buildGuideSections: function() {
    
    var nav = document.querySelectorAll("#cs-site-nav")[0],
        mainContent = document.querySelectorAll("#cs-main > .cs-container > .cs-gutter")[0],
        navItem;

    // build the tabs based on the JSON object in index.html
    if( Corkscrew.sections.length ) {

      for ( var i = 0; i < Corkscrew.sections.length; i = i + 1 ) {

        var section = Corkscrew.sections[i],
            content = document.createElement("div");
        
        navItem = document.createElement("li");

        // set navigation tabs
        nav.appendChild(navItem);
        navItem.innerHTML = '<a href="#' + section + '">' + section + '</a>';

        // set content blocks
        content.setAttribute('class', 'cs-section cs-is-hidden');
        content.setAttribute('id', section);
        content.setAttribute('data-count', i);
        mainContent.appendChild(content);

        Pinot.getPages(Corkscrew.sections.length, section, i, function() {

          if (Corkscrew.js) {

            // Now that we have DOM elements, load client JS
            for ( var i = 0; i < Corkscrew.js.length; i = i + 1 ) {
              CorkscrewUtil.load('script', Corkscrew.js[i]);
            }

          } // Corkscrew.js

          Pinot.bindTabEvents();

          Pinot.activateContent(null, function() {
  
            if(Corkscrew.htmlViewer){
              Pinot.addHTMLView();
            }

            if(Corkscrew.colors) {

              // add colors
              var newChild = Pinot.getColors(),
                  parentNode = document.querySelectorAll('.cs-section')[0],
                  refChild = parentNode.firstChild;

              parentNode.insertBefore(newChild, refChild);

            }

          }); // Pinot.activateContent()
          
          Pinot.addTemplatesDropdown();
          Pinot.addRepoLink(Corkscrew.repo);

          window.setTimeout(function() {

            if( document.body.classList.contains('is-loading') ) {

              document.querySelector('.loader').classList.add('cs-fadeout');
              window.setTimeout(function(){
                document.body.classList.remove('is-loading');
              }, 1000);
            }

          }, 1000);

        }); // getPages
        
      } // for loop

    } // sections.length

  }, // buildGuideSections
  activateContent : function (id, callback) {

    if( id !== null ) {
      
      document.querySelectorAll("#cs-site-nav > li.is-active").classList.remove('is-active');
      
    } else {
      
      document.querySelectorAll("#cs-site-nav > li")[0].classList.add('is-active');
      
      var id = document.querySelectorAll("#cs-site-nav > li")[0].childNodes[0].getAttribute('href'),
          contentareas = document.querySelectorAll('.cs-section');
      
      for ( var i = 0; i < contentareas.length; i = i + 1 ) {
        contentareas[i].classList.add('cs-is-hidden');
      }
      
      document.querySelectorAll(id)[0].classList.remove('cs-is-hidden');
      
      // the last page is loaded
      if (typeof callback === 'function') {
        callback.call(this);
      }

    }

  },
  bindTabEvents : function () {
    
    var tabs = document.querySelectorAll("#cs-site-nav > li");
    
    for ( var i = 0; i < tabs.length; i = i + 1 ) {
      
      tabs[i].addEventListener('click', function(e){
        
        e.preventDefault();

        if( !this.classList.contains("is-active") ) {
          
          var id = this.childNodes[0].getAttribute('href'),
              contentareas = document.querySelectorAll('.cs-section');
          
          // scroll to top
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          
          document.querySelectorAll("#cs-site-nav > li.is-active")[0].classList.remove('is-active');
          this.classList.add("is-active");
          
          for ( var i = 0; i < contentareas.length; i = i + 1 ) {
            contentareas[i].classList.add('cs-is-hidden');
          }
          
          document.querySelectorAll(id)[0].classList.remove('cs-is-hidden');
        
        }
      }, false);
      
    } // end for loop
    
  },
  getPages : function ( totalCount, section, counter, callback ){

    // request content
    CorkscrewUtil.request({
      'url' : Corkscrew.partials + '/' + section + '.html',
      'type' : 'GET',
      'dataType' : 'html'
    }, function( data ) {
      
      document.getElementById(section).innerHTML = data;
      
      if( totalCount-1 === counter ) {
        
        // the last page is loaded
        if (typeof callback === 'function') {
          callback.call(this);
        }

      }

    });

  },
  addHTMLView: function() {
    
    var modules = document.querySelectorAll('.cs-content-section'),
        modulesCount = modules.length,
        moduleHTMLContent, contentTextArea, expandButton, module, moduleHeader, moduleContent, wrap, i;
        
    if( modulesCount ) {
      
      for ( i = 0; i < modulesCount; i = i + 1 ) {
        
        module = modules[i];
        moduleHeader = module.querySelectorAll('.cs-content-header')[0];
        moduleContent = module.querySelectorAll('.cs-content')[0];
        moduleHTMLContent = moduleContent.innerHTML;
        wrap = document.createElement("div");
        expandButton = document.createElement("button");
        contentTextArea = document.createElement("textarea");
        
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
        
      } // for
      
    } // modulesCount
    
    
  },
  buildHeader: function( callback ) {

    // pull in the header
    CorkscrewUtil.request({
        'url' : 'corkscrew/partials/header.html',
        'type' : 'GET',
        'dataType' : 'html'
    }, function( data ) {

      var theFirstChild = document.body.firstChild,
          newElement = document.createElement("div");
      
      // put the header at the top
      document.body.insertBefore(newElement, theFirstChild);
      newElement.innerHTML = data;
      
      // set the logo
      if( document.getElementById("cs-logo-header") ) {
        document.getElementById("cs-logo-header").setAttribute("src", Corkscrew.logo);
        document.getElementById("cs-logo-header").setAttribute("alt", Corkscrew.name);
      }
      
      if (typeof callback === 'function') {
        callback.call(this);
      }
      
    });

  },
  buildFooter: function( callback ) {

    // pull in the footer
    CorkscrewUtil.request({
        'url' : 'corkscrew/partials/footer.html',
        'type' : 'GET',
        'dataType' : 'html'
    }, function(data) {
    
      var div = document.createElement('div');
      
      // put the footer at the bottom
      document.body.appendChild( div );
      div.innerHTML = data;
      
      // set the logo
      if( document.getElementById("cs-logo-footer") ) {
        document.getElementById("cs-logo-footer").setAttribute("src", Corkscrew.logo);
        document.getElementById("cs-logo-footer").setAttribute("alt", Corkscrew.name);
      }

      if (typeof callback === 'function') {
        callback.call(this);
      }

    });

  },
  buildSectionContainer : function ( sectionLabel, content ) {
    
    var csContentSection = document.createElement('section'),
        csContentHeader = document.createElement('header'),
        csContentHeading = document.createElement('div'),
        csContentContentHeading = document.createElement('h1'),
        csContent = document.createElement('div');
        
    csContentSection.setAttribute('class', 'cs-content-section');
    csContentHeader.setAttribute('class', 'cs-content-header');
    csContentHeading.setAttribute('class', 'cs-content-heading');
    csContent.setAttribute('class', 'cs-content');
    
    csContentContentHeading.innerText = sectionLabel;
    
    csContentHeading.appendChild(csContentContentHeading);
    
    if( typeof content === 'object' ) {
      
      if( content.length ) {
        
        for ( var i = 0; i < content.length; i = i + 1 ) {
          
          csContent.appendChild(content[i]);
          
        }
        
      } // content.length
      
    } else {

      csContent.innerHTML = content;
    
    }
    
    csContentHeader.appendChild( csContentHeading );
    csContentSection.appendChild( csContentHeader );
    csContentSection.appendChild( csContent );
    
    return csContentSection;
    
  },
  generateColorBlock : function( hex, labelText ){
    
    var colorBlock = document.createElement('div'),
        block = document.createElement('div'),
        hexLabel = document.createElement('div'),
        label = document.createElement('div');
        
    colorBlock.setAttribute('class', 'cs-color-wrap');
    block.setAttribute('data-color', hex);
    block.setAttribute('class', 'cs-color');
    hexLabel.setAttribute('class', 'cs-color-hex');
    label.setAttribute('class', 'cs-color-label');
    
    block.style.background = hex;
    label.innerHTML = labelText;
    hexLabel.innerHTML = hex;

    colorBlock.appendChild( block );
    colorBlock.appendChild( label );
    colorBlock.appendChild( hexLabel );
    
    return colorBlock;
    
  },
  getColors : function() {

    if( Corkscrew.colors ) {

    var colorObject = Corkscrew.colors,
        colorCount = colorObject.length,
        colorArray = [],
        colorBlock,
        colorBlockHtml,
        i;

      for ( i = 0; i < colorCount; i = i + 1 ) {
        
        colorBlockHtml = Pinot.generateColorBlock( colorObject[i].hex, colorObject[i].label );
        
        colorArray.push( colorBlockHtml );
        
      } // for

      colorBlock = Pinot.buildSectionContainer( 'Color Palette', colorArray );
      
      return colorBlock;
      
    } // colorObject
    
  } // getColors
}; // end Pinot method

(function(){
  
  // execute init Pinot
  Pinot.init();
  
})();