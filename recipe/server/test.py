from pythonFunctions import predict_custom_trained_model_sample
import base64
from base64 import urlsafe_b64encode, urlsafe_b64decode
# import pathlib
# import os
import sys
from google.cloud import aiplatform
import base64
import json
import ast
from PIL import Image



import base64

names = [
"Mango",
"Egg",
"Vegetable",
"Potato",
"Tomato",
"Bell pepper",
"Apple",
"Squash",
"Pasta",
"Cabbage",
"Cheese",
"Milk",
"Fish",
"Wine",
"Turkey",
"Cucumber",
"Bread",
"Chicken"
"Asparagus",
"Carrot",
"Broccoli"]

#192.168.1.68
encoding = ""

with open("/Users/conorcunningham/Downloads/Coding/course-project-recipe-app-connecting_front_end/recipe/out.jpeg", "rb") as image_file:
    encoding = (base64.urlsafe_b64encode(image_file.read()).decode())

foo = Image.open('/Users/conorcunningham/Downloads/Coding/course-project-recipe-app-connecting_front_end/recipe/out.jpeg')

foo = foo.resize((1000,1000),Image.ANTIALIAS)

foo.save('/Users/conorcunningham/Downloads/Coding/course-project-recipe-app-connecting_front_end/recipe/foo1.jpeg', quality=95)  # The saved downsized image size is 24.8kb

foo.save('/Users/conorcunningham/Downloads/Coding/course-project-recipe-app-connecting_front_end/recipe/foo2.jpeg', optimize=True, quality=95)  # The saved downsized image size is 22.9kb
encoding2 = ""
with open("/Users/conorcunningham/Downloads/Coding/course-project-recipe-app-connecting_front_end/recipe/foo2.jpeg", "rb") as image_file3:
    encoding2 = (base64.urlsafe_b64encode(image_file3.read()).decode())


ENDPOINT_ID = "727933872192356352"

PROJECT_ID = "376367983155"


instance_dict = {"image_bytes": encoding2}
p = predict_custom_trained_model_sample(
    instances=instance_dict, project=PROJECT_ID, endpoint_id=ENDPOINT_ID
)
r = dict(p[0])
res = set()

for i in r:
    if "tf.identity_1" in i:
        for x in r[i]:
            if x > 0:
                res.add(names[int(x)])

for r in res:
    print(r)
# # print(json.dumps(res))
# # sys.stdout.flush()
