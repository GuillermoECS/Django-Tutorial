from django.contrib import admin

# Register your models here.
from .models import Question
from .models import Choice

# Register question, only with import
# admin.site.register(Question)

'''
class QuestionAdmin(admin.ModelAdmin):  # First pub_date, Second question_text
    fields = ['pub_date', 'question_text']
'''

# First question_text, second pub_date
'''
class QuestionAdmin(admin.ModelAdmin):  # With titles for each section
    fieldsets = [
        ('Question information', {'fields': ['question_text']}),
        ('Date information', {'fields': ['pub_date']}),
    ]
'''


# class ChoiceInline(admin.StackedInline): # StackedInLine use more space
# This class use less space and has "delete?""
class ChoiceInline(admin.TabularInline):  # Add choices in question administration
    model = Choice
    extra = 3


# With titles for each section and add answers
'''
class QuestionAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,               {'fields': ['question_text']}),
        ('Date information', {'fields': [
         'pub_date'], 'classes': ['collapse']}),
    ]
    inlines = [ChoiceInline]
'''


class QuestionAdmin(admin.ModelAdmin):
    # Show Question text, publication date and was published recently
    # Allow sort in each column
    list_display = ('question_text', 'pub_date', 'was_published_recently')
    # Add "Filter" sidebar
    list_filter = ['pub_date']
    # Add search options
    search_fields = ['question_text']


# Register question
admin.site.register(Question, QuestionAdmin)

# Register choice only with import
admin.site.register(Choice)
