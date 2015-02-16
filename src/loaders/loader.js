var ResourceLoader = require('resource-loader'),
    textureParser = require('./textureParser'),
    spritesheetParser = require('./spritesheetParser'),
    spineAtlasParser = require('./spineAtlasParser'),
    bitmapFontParser = require('./bitmapFontParser')
 //   loader = new Loader();

var Loader = function()
{
    ResourceLoader.call(this);

     // parse any json strings into objects
    this.use(ResourceLoader.middleware.parsing.json())

    // parse any blob into more usable objects (e.g. Image)
    .use(ResourceLoader.middleware.parsing.blob())

    // parse any Image objects into textures
    .use(textureParser())

    // parse any spritesheet data into multiple textures
    .use(spritesheetParser())

    // parse any spine data into a spine object
    .use(spineAtlasParser())

    // parse any spritesheet data into multiple textures
    .use(bitmapFontParser());
}

Loader.prototype = Object.create(ResourceLoader.prototype);
Loader.prototype.constructor = Loader;

module.exports = Loader;
