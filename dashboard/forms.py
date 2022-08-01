from django import forms
from food.models import *

class CategoryForm(forms.ModelForm):
    class Meta:
        model=Category
        fields = "__all__"
        widgets = {
            "title": forms.TextInput(attrs={'class': 'form-control'}),

        }

class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = "__all__"
        widgets = {
            "title": forms.TextInput(attrs={'class': 'form-control'}),
            "description": forms.TextInput(attrs={'class': 'form-control'}),
            "cost": forms.TextInput(attrs={'class': 'form-control'}),
            "price": forms.TextInput(attrs={'class': 'form-control'}),
            "category": forms.Select(attrs={'class': 'form-control'}),
            "image": forms.FileInput(attrs={
                        'class': 'form-control',
                        'onchange': 'loadFile(event)'
                    }
            ),
    }

class UserForm(forms.ModelForm):
    model = Customer
    field = "__all__"
    widjets = {
        "first_name": forms.TextInput(attrs={'class': 'form-control'}),
        "last_name": forms.TextInput(attrs={'class': 'form-control'}),
        "phone_number": forms.TextInput(attrs={'class': 'form-control'}),
    }