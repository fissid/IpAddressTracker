in this web app, you can easily find information related to any public IP in the world by just typing your IP address and entering it. (in the parentheses: since the used APIs are free and public the information is not very accurate)
at the beginning when you open this page, it will show the information of where you are getting your internet (your public IP on the net)
the input box on top of the page will just accept decimal number and dot which is required to type IP address and the user can not type any other thing.
after the user inserts the IP address some examination will apply to the input such as:
if the inserted IP address is not a full address following error will be shown: (a part of IP out of four is missing)
[image from the error]
if any part of the inserted is more than 256, the following error will be shown: (one part or more parts of IP out of four is not between 0 and 256)
[image from the error]
if any part of the inserted IP starts at zero: (one part or more parts of IP out of four is starting by zero)
[image from the error]
if the inserted IP is a private IP address:
[image from the error]

in this web app, I used two APIs which both are free and you can go and re-use them on your project and enjoy:
[ipinfo](https://ipinfo.io/) for finding IP address information such as city, region, ISP, and location info (latitude and longitude).
[leaflet](https://leafletjs.com/reference.html) to display the corresponding latitude and longitude on the map and draw a circle around it.

I welcome your feedback, suggestions, and contributions to this project. If you find any issues or have ideas for improvements, please create a GitHub issue or submit a pull request. Your input is valuable in making this project even better.

You can check out the live demo of this project here: [link of the page]

Thank you for exploring the IP address tracker project. I hope you find it informative and enjoyable!
