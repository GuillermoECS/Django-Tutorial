from django.urls import path

from . import views

app_name = 'fabricjs'

# Views "The Hard Way"
urlpatterns = [
    # Index
    # ex: /fabricjs/
    path('', views.index, name='index'),
    # ex: /fabricjs/tutorial/tutorial_number/
    path('Basics_Course/<int:tutorial_number>/', views.tutorial, name='tutorial'),
]
