from django.urls import path

from . import views

app_name = 'fabricjs'

# Views "The Hard Way"
urlpatterns = [
    # Index
    # ex: /fabricjs/
    path('', views.index, name='index'),
    # ex: /fabricjs/Basics_Course_Tutorial/tutorial_number/
    path('Basics_Course_Tutorial/<int:tutorial_number>/', views.Basics_Course_Tutorial, name='Basics_Course_Tutorial'),
    # ex: /fabricjs/Official_Documentation/tutorial_number/
    path('Official_Documentation/<int:tutorial_number>/', views.Official_Documentation, name='Official_Documentation')
]
