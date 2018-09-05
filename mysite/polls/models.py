import datetime
from django.db import models
from django.utils import timezone

# Create your models here.


class Question(models.Model):  # Class Question :
    # Text of the question and publication date
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

    # Change print format
    def __str__(self):
        return self.question_text

    # Method: Published recently
    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)


class Choice(models.Model):  # Class Chocie :
    # Text of the choice and a vote tally
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    # Change print format
    def __str__(self):
        return self.choice_text
