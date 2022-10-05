from django.urls import path 
from playground import views

urlpatterns = [
    path('hello/', views.say_hello),
    path('', views.say_hello)
]
