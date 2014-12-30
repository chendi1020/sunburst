##Links
- [bl.ocks](http://bl.ocks.org/chrisrzhou/6e5fa4352fb8de5ba1f4) 
- [plunker](http://embed.plnkr.co/fumcmx/preview)

##Description
- This is a clone of the wonderful idea by [joeycloud](http://joeycloud.net/v/pianogram).
- The project uses AngularJS directives for loading MusicXML files and drawing the visuals in D3.
- Pianogram visualizes key steps in a music piece in a beautiful histogram and updates them over music measure bars (time).
- Load any *valid uncompressed* [MusicXML](http://www.musicxml.com/) file and Pianogram will render the visualization completely using front-end Javascript.
- Use the "music player" controls to go over measure bars in the music and visualize subsets of the data over time.
- Hover over the piano keys for a quick summary of key steps used in the music!

##Files
- `index.html`: Main angular app connecting D3 SVG through an angular directive <pianogram>.
- `app.js`: Main angular app file connecting the DOM view with Javascript variables.  Contains directive `onReadFile` to handle file uploads and `pianogram` to draw the D3 SVG.  Calls the `MusicService` in `music.js` to load initial data and parse MusicXML files.
- `music.js`: Helper angular module `Music` containing useful services such as `getData`, `parseMusicXML` and `getMeasureMax` to support the angular app.
- `pianogram.js`: This contains one function `pianogramDraw` which is a D3-oriented code to draw the D3 SVG.  It is called by the `pianogram` directive in `app.js`.
- `samples.json`: Sample data files that feeds `ctrl.keys` used for plotting demos.
- `styles.css`: stylesheet

##Notes
- Note that this pianogram does not actually simulate the total keys played in the music, it simulates the total music notes *displayed* on a music score sheet (i.e. it does not handle repeat bars)
- Parsing of MusicXML is executed on the browser with a self-written Javascript function utilizing `angular.element`.  `parseMusicXML` function can only parse *uncompressed MusicXML* files and cannot parse the compressed version (`.mxl` files).  You can go to [MuseScore](http://www.musescore.org) to save these compressed `.mxl` files as uncompressed MusicXML files for uploading to this application.
- This Pianogram does not handle double sharps and double flats.
- The project originally involved handling `blackKeys` and `whiteKeys` separately but I managed to simplify this into a single `keys` array.  This way, the app can be extended for future variations and all information regarding keys can be found within the `keys` array that contains `key` objects.
- A big help from this [fiddle](http://jsfiddle.net/alexsuch/6aG4x/) to help implement an AngularJS `FileReader`.