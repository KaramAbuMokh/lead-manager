from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer
# Lead Viewset


class LeadViewset(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = LeadSerializer

    def perform_create(self, serializer):
        '''
        to save the lead's owner when we create the lead
        '''
        serializer.save(owner=self.request.user)

    def get_queryset(self):
        return self.request.user.leads.all()
