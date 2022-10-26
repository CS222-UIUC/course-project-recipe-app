# Trained Model Explanation

This is a link to the collab notebook that I have been working on for the past month. The notebook works well in training a new model with given
input of images and labels. The model is currently finishing up its training for 21 classes, though this process has been much longer than I anticipated.
Even with collab pro, there is still a limited amount of time that you are allocated to use the online GPU.


## Webcam
When speaking about the program, it uses darknet and Yolov4, combined with data that is uploaded through a google drive to function. The model is then trained with
backup weight files saved in increments of 10,000 to the backup folder in drive. When finished, you are able to run the commands under "Webcam" and begin
looking at the live feed. The live feed is able to draw boxes around what is seen and also provide labels with a percent accuracy. We can simply interject
within this labeling process and create an array of labels in order to extract the data that the program is gathering. This allows us to run the program, 
detect objects, and walk away with an array of labels. The program is able to detect multiple items within one frame, and can do so at a somewhat 
reasonable speed.

Here is the link to the notebook
https://colab.research.google.com/drive/1sjgybqleOztA6Hk0MC4u90BOuPgIv0Qk?usp=sharing
