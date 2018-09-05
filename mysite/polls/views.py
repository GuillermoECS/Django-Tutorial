# from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from .models import Question  # Question
from django.template import loader  # Loader of template
from django.shortcuts import render  # Function render
from django.shortcuts import get_object_or_404  # get_object_or_404()

# Pagina de inicio


def index(request):
    # Without template: Carga las preguntas, separadas por coma
    """
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    output = ', '.join([q.question_text for q in latest_question_list])
    return HttpResponse(output)
    """
    # With template: Carga las preguntas, haciendo uso de plantillas
    '''
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    template = loader.get_template('polls/index.html')
    context = {
        'latest_question_list': latest_question_list,
    }
    return HttpResponse(template.render(context, request))
    '''
    # With template, using function render
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    context = {'latest_question_list': latest_question_list}
    return render(request, 'polls/index.html', context)

# Pagina de detalle de la pregunta, requiere parametros


def detail(request, question_id):
    # Without template: Carga el id de la pregunta seleccionada
    '''
    return HttpResponse("You're looking at question %s." % question_id)
    '''
    # With template: Carga la pregunta y validacion si no se encuentra
    '''
    try:
        question = Question.objects.get(pk=question_id)
    except Question.DoesNotExist:
        raise Http404("Question does not exist")
    return render(request, 'polls/detail.html', {'question': question})
    '''
    # With template: Carga la pregunta y validacion por si no se encuentra
    # Por medio de una funcion
    choice = {}
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/detail.html', {'question': question, 'choice': choice})

# Pagina de resultados de la pregunta, requiere parametros


def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)

# Votos para la pregunta, requiere parametros


def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)
