from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader  # Loader of template


# Create your views here.

def index(request):
    return render(request, 'fabricjs/index.html', {})


def Basics_Course_Tutorial(request, tutorial_number):
    # print(tutorial_number)
    template = loader.get_template('fabricjs/Basics_Course_Tutorial.html')
    args = {
        'tutorial_number': tutorial_number
    }
    return HttpResponse(template.render(args, request))


def Official_Documentation(request, tutorial_number):
    # print(tutorial_number)
    template = loader.get_template('fabricjs/Official_Documentation.html')
    args = {
        'tutorial_number': tutorial_number
    }
    return HttpResponse(template.render(args, request))
