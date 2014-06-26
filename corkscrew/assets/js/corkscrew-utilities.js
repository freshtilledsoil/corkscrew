// start classList polyfill

;(function () {

if (typeof window.Element === "undefined" || "classList" in document.documentElement) return;

var prototype = Array.prototype,
    push = prototype.push,
    splice = prototype.splice,
    join = prototype.join;

function DOMTokenList(el) {
  this.el = el;
  // The className needs to be trimmed and split on whitespace
  // to retrieve a list of classes.
  var classes = el.className.replace(/^\s+|\s+$/g,'').split(/\s+/);
  for (var i = 0; i < classes.length; i++) {
    push.call(this, classes[i]);
  }
};

DOMTokenList.prototype = {
  add: function(token) {
    if(this.contains(token)) return;
    push.call(this, token);
    this.el.className = this.toString();
  },
  contains: function(token) {
    return this.el.className.indexOf(token) != -1;
  },
  item: function(index) {
    return this[index] || null;
  },
  remove: function(token) {
    if (!this.contains(token)) return;
    for (var i = 0; i < this.length; i++) {
      if (this[i] == token) break;
    }
    splice.call(this, i, 1);
    this.el.className = this.toString();
  },
  toString: function() {
    return join.call(this, ' ');
  },
  toggle: function(token) {
    if (!this.contains(token)) {
      this.add(token);
    } else {
      this.remove(token);
    }

    return this.contains(token);
  }
};

window.DOMTokenList = DOMTokenList;

function defineElementGetter (obj, prop, getter) {
    if (Object.defineProperty) {
        Object.defineProperty(obj, prop,{
            get : getter
        });
    } else {
        obj.__defineGetter__(prop, getter);
    }
}

defineElementGetter(Element.prototype, 'classList', function () {
  return new DOMTokenList(this);
});

})();

// end classList Polyfill

var CorkscrewUtil = {

  htmlEntities : function ( str ) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  },
  getTimestamp : function () {
    
    return Date.now();
    
  },
  load : function (type, path, callback) {
  
    "use strict";
    
    if (type === 'script'){
    
      var script = document.createElement('script');
      
      script.src = path + '?t=' + this.getTimestamp();
      document.getElementsByTagName('body')[0].appendChild(script);
      
      script.addEventListener('load', function () {
  
        if (typeof(callback) === 'function') {
          callback.call(this);
        }
  
      }, false);
      
    } else {

      var style = document.createElement('link');
      
      style.setAttribute('href', path + '?t=' + this.getTimestamp());
      style.setAttribute('rel', 'stylesheet');
      
      document.getElementsByTagName('head')[0].appendChild(style);
      
      style.addEventListener('load', function () {
  
        if (typeof(callback) === 'function') {
          callback.call(this);
        }
  
      }, false);

    }
    
  
  }, // end load
  getHTTPObject : function () {
    
    "use strict";
    
    var xhr = false;
    
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        try {
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e) {
            try {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(e) {
                xhr = false;
            }
        }
    }
    return xhr;
  },
  request : function (options, callback) {
    
    "use strict";
    
    var defaults = {
        'url' : null,
        'type' : 'GET',
        'dataType' : 'html'
    },
    request = this.getHTTPObject(),
    httpresponse,
    i;
    
    // map all default settings to user defined options
    for (i = 0; i < defaults.length; i = i + 1) {
        if( typeof options[i] === "undefined" ) {
            options[i] = defaults[i];
        }
    }
    
    request.onreadystatechange = function() {
        
        // check to see if the Ajax call went through
        if ( request.readyState === 4 && request.status === 200 ) {
            
            // save the ajax response to a variable
            if(options.dataType === 'json'){
                httpresponse = JSON.parse(request.responseText);
            } else if(options.dataType === 'xml'){
                httpresponse = request.responseXML;
            } else {
                httpresponse = request.responseText;
            }
            
            // make sure the callback is indeed a function before executing it
            if(typeof callback === 'function'){
            
                callback(httpresponse);
            
            } // end check
    
        } // end ajax status check
    
    }; // end onreadystatechange
    
    request.open(options.type, options.url, true);
    request.send(null);
  
  }

}; // end Ajax object