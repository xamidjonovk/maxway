from django import forms
from .models import *

class CustomerForm(forms.ModelForm):
    class Meta:
        model = Customer
        fields = "__all__"

class OrderForm(forms.ModelForm):
    class Meta:
        model= Order
        fields="__all__"

    def save(self, commit=True, *args, **kwargs):
        model = super().save(commit=False)
        model.customer = kwargs.get("customer", None)
        if commit:
            model.save()
        return model

class OrderProductForm(forms.ModelForm):
    class Meta:
        model = OrderProduct
        fields = "__all__"