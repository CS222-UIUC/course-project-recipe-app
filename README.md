# Pantri
course-project-recipe-app created by GitHub Classroom

## Summary

Young and inexperienced homeowners often struggle with making food on their own, especially in the beginning. It is challenging to wean oneself off of the convenience of fast food. Our product looked to simplify and streamline mealtime for at-home chefs by curating recipes based on the contents of the user's fridge and cupboard through image processing. By processing the image, it scans the items in your pantry and adds it to the digital pantry log. From there it can gather the recipes needed for a streamlined cooking process. Our product is called Pantri. 

## Technical Architecture:

Frontend Component:

By using React Native, we coded the user interface to present all of the data retrieved from the backend server. Then from there, it displays user information (including the recipes and pantry) on our grocery, pantry, and recipe page.

Backend Component:

The backend component of our application is where the front end retrieves all of the data to present to the user. This information includes the users list of ingredients, the users pantry list, and the recipes that the user can make. Additionally, the backend stores the total database of recipes. All of this information is stored in a MongoDb cluster that the backend server is retrieving data from. Additional functionality of the server includes handling the photo that is taken from the frontend. The photo that the front end captures is sent to the backend server, saved to the system, and then sent to the machine learning component. 

Machine learning technical architecture

The ML model of our project was started as a yolov4 object detection model that was trained using Google Colab to allow us to connect to a graphics card. The training of the model utilized darknet, which is a python library that works well for machine learning. Once the model was trained, we converted both the weights file as well as the configure file into a Tensorflow model. Once we did this, we were able to upload the Tensorflow model to Vertex AI, which is a Google Cloud service that allows the user to connect to a graphics card and run object detection models. The app takes images that are fed through the front end, converts them to a base64 encoding, then is sent to the endpoint as a JSON request, where the request is processed and we receive our output.

## Installalation instructions:

Run npm install from ./recipe

There are multiple spots where you need to update the IP address for fetch calls, they are the following:
recipe/components/ScrollView.js

recipe/components/MealList.js

recipe/components/PantryPageComponents/ScanButton.js

recipe/components/PantryPageComponents/PantrySearchBar.js

recipe/components/GroceryPageComponents/GroceryScrollView.js

recipe/components/GroceryPageComponents/GrocerySearchBar.js

To find your Ip address on mac, do the following:
-Click on the apple logo in the top left corner

-Click system preferences

-Click network

-Click advanced in the bottom right corner

-Copy the Ipv4 address

-On all of the above files, when you see fetch, replace the IP address (ie. 192.168.1.82) with the copied IP address.
	
-CD into recipe and run ‘node server/index.js’

-CD into recipe and run ‘npm start’

-Scan QR code from the terminal with phone on the same network as computer running the app

## Contributors:

-Collin Fox: Application Creation / Frontend Design

-Nick Elias: Application Creation / Frontend Design

-Patrick Cunningham: Backend server

-Conor Cunningham: Machine Learning component/Object Detection
