# IP Address Tracker Web App

![IP Address Tracker - Desktop](https://github.com/fissid/IpAddressTracker/blob/a073cbca0f4e690d1302deca05276a91b92d638e/src/img/landing.PNG)

Welcome to the IP Address Tracker web app! With this tool, you can easily find information related to any public IP address in the world by simply entering it. Please note that since the APIs used in this project are free and public, the information provided may not always be completely accurate.

## Getting Started

Welcome to the IP Address Tracker web app! With this tool, you can easily find information related to any public IP address in the world by simply entering it. Please note that since the APIs used in this project are free and public, the information provided may not always be completely accurate.

**Mobile Design:** Each version of this web app includes its own mobile design, ensuring a seamless experience for users on smartphones and tablets.

### Input Validation

To ensure accurate results, the input box accepts only decimal numbers and dots. Users are not allowed to input any other characters. The app performs several checks on the entered IP address:

1. If the inserted IP address is not a complete address (missing one or more parts out of four), an error message will be displayed.

   ![Error: Incomplete IP Address](https://github.com/fissid/IpAddressTracker/blob/1119938f04620e939b0e38ac6d5919357beac668/src/img/parts-error.PNG)

2. If any part of the inserted IP address is greater than 255, the following error message will be shown:

   ![Error: Invalid IP Range](https://github.com/fissid/IpAddressTracker/blob/f124dbdf60fba5be1e2513192f4b261a8d4c8f4f/src/img/255%20error.PNG)

3. If any part of the inserted IP address starts with zero, an error message will be displayed:

   ![Error: IP Starts with Zero](https://github.com/fissid/IpAddressTracker/blob/a0251b641e7d63ffe68d576a74867fa27c73e143/src/img/zero-error.PNG)

4. If the inserted IP address is a private IP address, a warning message will be shown:

   ![Warning: Private IP Address](https://github.com/fissid/IpAddressTracker/blob/f124dbdf60fba5be1e2513192f4b261a8d4c8f4f/src/img/private.PNG)

### APIs Used

This web app utilizes two free APIs that you can also use in your projects:

- [ipinfo](https://ipinfo.io/): Used to fetch IP address information such as city, region, ISP, and location coordinates (latitude and longitude).

- [leaflet](https://leafletjs.com/reference.html): Used to display the corresponding latitude and longitude on a map and draw a circle around it.

## Feedback and Contributions

I welcome your feedback, suggestions, and contributions to this project. If you encounter any issues or have ideas for improvements, please don't hesitate to create a GitHub issue or submit a pull request. Your input is invaluable in making this project even better.

## Live Demo

You can check out the live demo of this project [here](https://fissid.github.io/IpAddressTracker/). Explore and enjoy the IP Address Tracker!

---

Thank you for exploring the IP Address Tracker project. I hope you find it informative and enjoyable!
