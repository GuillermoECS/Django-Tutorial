# from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from .models import Question  # Question
from django.template import loader  # Loader of template
from django.shortcuts import render  # Function render
from django.shortcuts import get_object_or_404  # get_object_or_404()
from django.urls import reverse  # Form
from .models import Choice  # Form
from django.http import HttpResponseRedirect  # Form
from django.views import generic  # Generic Views
from django.utils import timezone
import datetime


# View "The Hard Way"
###############################################################################
# def index(request):  # Pagina de inicio
#    # Without template: Carga las preguntas, separadas por coma
#    """
#    latest_question_list = Question.objects.order_by('-pub_date')[:5]
#    output = ', '.join([q.question_text for q in latest_question_list])
#    return HttpResponse(output)
#    """
#    # With template: Carga las preguntas, haciendo uso de plantillas
#    '''
#    latest_question_list = Question.objects.order_by('-pub_date')[:5]
#    template = loader.get_template('polls/index.html')
#    context = {
#        'latest_question_list': latest_question_list,
#    }
#    return HttpResponse(template.render(context, request))
#    '''
#    # With template, using function render
#   latest_question_list = Question.objects.order_by('-pub_date')[:5]
#    context = {'latest_question_list': latest_question_list}
#    return render(request, 'polls/index.html', context)


# View "The Hard Way"
# def detail(request, question_id):  # Pagina de detalle de la pregunta, requiere parametros
#    # Without template: Carga el id de la pregunta seleccionada
#    '''
#    return HttpResponse("You're looking at question %s." % question_id)
#    '''
#    # With template: Carga la pregunta y validacion si no se encuentra
#    '''
#    try:
#        question = Question.objects.get(pk=question_id)
#    except Question.DoesNotExist:
#        raise Http404("Question does not exist")
#    return render(request, 'polls/detail.html', {'question': question})
#    '''
#    # With template: Carga la pregunta y validacion por si no se encuentra
#    # Por medio de una funcion
#    choice = {}
#    question = get_object_or_404(Question, pk=question_id)
#    return render(request, 'polls/detail.html', {'question': question, 'choice': choice})


# View "The Hard Way"
# def results(request, question_id):  # Pagina de resultados de la pregunta, requiere parametros
#    # Dummy implementation
#    '''
#    response = "You're looking at the results of question %s."
#    return HttpResponse(response % question_id)
#    '''
#    # Real implementation
#    question = get_object_or_404(Question, pk=question_id)
#    return render(request, 'polls/results.html', {'question': question})


# View "The Hard Way"
# Votos para la pregunta, requiere parametros
'''
 def vote(request, question_id):  # Dummy implementation of vote()
    return HttpResponse("You're voting on question %s." % question_id)
'''


def vote(request, question_id):  # Real implementation of vote()
    question = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        # Redisplay the question voting form.
        return render(request, 'polls/detail.html', {
            'question': question,
            'error_message': "You didn't select a choice.",
        })
    else:
        selected_choice.votes += 1
        selected_choice.save()
        # Always return an HttpResponseRedirect after successfully dealing
        # with POST data. This prevents data from being posted twice if a
        # user hits the Back button.
        return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))


# Generic Views
class IndexView(generic.ListView):
    template_name = 'polls/index.html'
    context_object_name = 'latest_question_list'

    '''
    def get_queryset(self):
        """Return the last five published questions."""
        return Question.objects.order_by('-pub_date')[:5]
    '''

    def get_queryset(self):
        """
        Return the last five published questions (not including those set to be
        published in the future).
        """
        return Question.objects.filter(pub_date__lte=timezone.now()).order_by('-pub_date')[:5]


class DetailView(generic.DetailView):
    model = Question
    template_name = 'polls/detail.html'

    def get_queryset(self):
        """
        Excludes any questions that aren't published yet.
        """
        return Question.objects.filter(pub_date__lte=timezone.now())


class ResultsView(generic.DetailView):
    model = Question
    template_name = 'polls/results.html'
