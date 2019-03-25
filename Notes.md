# Notes while developing

- CreateReactApp and Gatsby has spoiled me. Creating the node app with jest and babel set up took a little longer ( 30min ) than expected.
- Unfortunately after getting all the Geocode API stuff working, I reexamined the text file and found it to be too many queries than I am comfortable with. According to [their pricing](https://developers.google.com/maps/documentation/geocoding/usage-and-billing), for all the ~3 million different locations, it would cost at least over \$1k each time the app would run. For this reason I pivoted to the R2D2 Adventure challenge

# Challenges:

- Initially approached problem with the mindset that I would want to optimally do everything functionally without mutating any state. This felt like it would add needless complication to the problem.
