# Corkscrew, by Fresh Tilled Soil

### Description

Corkscrew was designed with ease of use in mind, it should get out of your way and help you create clear, helpful style guides to hand off to an implementation team. At its core it's a communication tool, but style guides can also serve as application/site road maps.

None of the Corkscrew CSS or JavaScript should collide with any custom code you need for your project; it's all namespaced.

### Dependencies

1. [PHP](http://php.net/)
2. [Apache](http://www.apache.org/) or [Nginx](https://www.nginx.com/resources/wiki/) (You have one)
3. [Composer](https://getcomposer.org/)

## Installation

1. Clone the repository
2. Run `composer install` in the terminal
3. If you don't have a server running already, run `php -S localhost:8080 -t .` in the terminal

## Usage

Content

## Extending & customizing the framework

There are some extra hooks built into Corkscrew to help you cleanly customize the framework code to fit your needs while still allowing upgrades to the core framework.

/assets/css/corkscrew-extend.css

If you need to customize the framework for your organization (or client), you would do that in corkscrew-extend.css. It is currently branded for Fresh Tilled Soil, you're welcome to keep it that way, but you're also free to rebrand it.

/assets/js/corkscrew-extend.js

If you need extra functionality in the framework itself (outside of the styleguide), you would do so in corkscrew-extend.js. We don't recommend using corkscrew.js for customizing the interface, which is the main Javascript file for the application, because it could affect upgrades.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## Credits

Corkscrew is an Open Source style guide framework created by [Fresh Tilled Soil](http://freshtilledsoil.com), an experience design agency out of Boston. We use this on all of our projects and we welcome you to  do the same!

- [Tim Wright](http://github.com/timwright12)

## License

MIT
