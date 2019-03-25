# Challenges:

- CreateReactApp and Gatsby has spoiled me. Creating the node app with jest and babel set up took a little longer ( 30min ) than expected.
- Unfortunately after getting all the Geocode API stuff working, I reexamined the text file and found it to be too many queries than I am comfortable with. According to [their pricing](https://developers.google.com/maps/documentation/geocoding/usage-and-billing), for all the ~3 million different locations, it would cost at least over \$1k each time the app would run. For this reason I pivoted to the R2D2 Adventure challenge.
- Initially approached problem with the mindset that I would want to optimally do everything functionally without mutating any state. This felt like it would add needless obfuscation to the problem.
- Modulo (%) in javascript is actually remainder which means that it causes weirdness when using % to calculate left turns unless otherwise handled.
- Encountered issue with jest and `import` syntax. Debugged this for a bit but eventually just gave up on tests. The problem seemed simple enough for me to just manually test.
