# Corkscrew, A style guide framework by Fresh Tilled Soil

## Using the framework

Corkscrew was designed with ease of use in mind, it should get out of your way and help you create clear, helpful style guides to hand off to an implementation team. At its core it's a communication tool, but style guides can also serve as application/site road maps.

None of the Corkscrew CSS or JavaScript should collide with any custom code you need for your project; it's all namespaced.

### Dependencies

You need a server to run the style guide. This can be localhost or a real server (sorry localhost, you're not a real server); the Ajax calls need a server to execute properly. If you want to edit the framework CSS, we're using Sass in a [SMACSS](http://smacss.com/) development model. One of the project goals is to make the framework as portable as possible. The number of dependencies are intentionally kept to a minimum.

### Configuration

####/index.html
In the index file you can replace the loading graphic to be non-corkscrew.

If your project requires any JavaScript libraries, they would be linked in this document (jQuery, Modernizr, plugins, polyfills, etc.). In the future, this will be moved into the config file.

Because of DOM and event bindings, the custom JavaScript file (where you call plugins and stuff) needs to be in the config file (so the DOM exists before the JavaScript is loaded and all the bindings work as expected).

####/config.js

	var Corkscrew = {
	  name : "Project name",
	  logo: "project-name/images/logo.jpg",
	  partials : "project-name/partials/",
	  repo: "https://github.com/###",
	  css: ["project-name/css/client.css"],
	  js: ["project-name/js/client.js"],
	  htmlViewer: true,
	  sections : [
	    "base",
	    "components",
	    "grid",
	    "forms"
	  ],
	  templates : [
 		    {
	      name: "Full coded page 1",
	      location: "http://example.com/"
	    },
	    {
	      name: "Full coded page 2",
	      location: "http://example.com/"
	    }
	  ],
	  colors: [
		{
		  hex: "#222",
		  label: "Black"
		},
		{
		  hex: "#85abc1",
		  label: "Blue, dark accent"
		}
	  ]
	}

##### name (required)
This is where you put the name of the project, it fills out the title element when the style guide loads.

##### logo
This is a file path to the logo that will appear in the header; it can be absolute or relative, doesn't matter.

##### partials (required)
This is a file path to the directory where you will be keeping the HTML snippets that represent the contents of each top-level section of the style guide (the tabs).

##### repo
A link to the GIT repo for this project (if there is one). If there's no repo, delete this line.

##### css (required)
An array containing all the CSS files for the client's modules. They will be asynchronously loaded into the style guide.

##### js
An array containing all the JavaScript files that require DOM ready for the client's modules. They will be asynchronously loaded into the style guide *after* the HTML partials.

#### htmlviewer
This is a boolean value (true/false) to tell Corkscrew if you want HTML code snippets for each module to be generated - it's super cool, but not always needed. These are represented with the "View HTML" buttons.

##### sections (required)
This is a list of the style guide module buckets, they map to an HTML file in the partials directory and build the main navigation for the style guide.

##### templates
Templates are absolute URLs (and labels) to fully coded pages/screens (they can live anywhere) that you need to hand off to an implementation team. This can be page chrome (header & footer) or a place to assemble the modules into full pages to seem them in context.

##### colors
An array of objects containing the color code and color label. This generates the first module in the style guide, which is the color palette for the project.

####/[project-name]/partials/...
Partials are HTML documents that contain the style guide modules. File-naming for a partial needs to match the name listed in the "sections" object of the config file. For example, if "base" is a section, "base.html" needs to be in your [project-name] directory

Inside a partial, you'll see example sections for your modules to be placed. A partial module will look like:

	<section class="cs-content-section">
	  <header class="cs-content-header">
        <div class="cs-content-heading">
          <h1>Label for this module</h1>
          <p>Description of this module</p>
        </div>
      </header>
      <div class="cs-content">
        <!-- your module HTML here -->
      </div>
	</section>
	
Repeat that HTML for each module you need.

### Project Files

In the example project, this is represented in the directory "project-name", which should be renamed based on the actual name of the project you'll be building a style guide for.

Inside of that directory, you should have all the necessary project files, such as: images, CSS, and JavaScript. The directory structure is entirely up to you.

Nothing inside this directory should be related to the framework itself, just the style guide.

### The Framework

The main guts of Corkscrew live in the /corkscrew directory. You probably won't need to go in there often unless you're customizing the framework itself (not the project files/style guide modules).

## Extending & cusomizing the framework
There are some extra hooks built into Corkscrew to help you cleanly customize the framework code to fit your needs while still allowing upgrades to the core framework.

### /corkscrew/assets/css/corkscrew-extend.css

If you need to customize the framework for your organization (or client), you would do that in corkscrew-extend.css. It is currently branded for [Fresh Tilled Soil](http://freshtilledsoil.com), you're welcome to keep it that way, but you're also free to rebrand it.

### /corkscrew/assets/js/corkscrew-extend.js

If you need extra functionality in the framework itself (outside of the styleguide), you would do so in corkscrew-extend.js. We don't recommend using corkscrew.js for customizing the interface, which is the main Javascript file for the application, because it could affect upgrades.

## Support
It's free so you're kinda on your own, but certainly file bugs; we also welcome all pull requests and contributions. Don't forget to sign up through Github for notifications about updates to the framework.
