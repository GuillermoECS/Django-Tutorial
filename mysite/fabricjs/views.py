from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader  # Loader of template


# Create your views here.

def index(request):
    return render(request, 'fabricjs/index.html', {})


def tutorial(request, tutorial_number):
    # print(tutorial_number)
    template = loader.get_template('fabricjs/tutorial.html')
    args = {
        'tutorial_number': tutorial_number
    }
    return HttpResponse(template.render(args, request))
