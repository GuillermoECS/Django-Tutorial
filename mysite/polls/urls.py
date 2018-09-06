from django.urls import path

from . import views

app_name = 'polls'

# Views "The Hard Way"
'''
urlpatterns = [
    # ex: /polls/
    path('', views.index, name='index'),
    # ex: /polls/5/
    # path('<int:question_id>/', views.detail, name='detail'),
    # ex: /polls/question/5/
    path('question/<int:question_id>/', views.detail, name='detail'),
    # ex: /polls/5/results/
    path('<int:question_id>/results/', views.results, name='results'),
    # ex: /polls/5/vote/
    path('<int:question_id>/vote/', views.vote, name='vote'),
]
'''

# Generic Views
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('<int:pk>/', views.DetailView.as_view(),
         name='detail'),  # Question id to pk
    path('<int:pk>/results/', views.ResultsView.as_view(),
         name='results'),  # Question id to pk
    path('<int:question_id>/vote/', views.vote, name='vote'),  # No generic
]
