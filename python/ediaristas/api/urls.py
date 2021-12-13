from django.urls import path
from api.views import DiaristasCidadeList

urlpatterns = [
    path('diaristas-cidade', DiaristasCidadeList.as_view(), name='diaristas-cidade-list'),
]