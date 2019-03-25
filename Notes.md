# Notes while developing

- CreateReactApp and Gatsby has spoiled me. Creating the node app with jest and babel set up took a little longer ( 30min ) than expected.
- After getting all the Geocode API stuff working, I reexamined the text file and found it to be too many queries than I am comfortable with. According to [their pricing](https://developers.google.com/maps/documentation/geocoding/usage-and-billing), for all the ~3 million different locations, it would cost at least over \$1k each time the app would run.
