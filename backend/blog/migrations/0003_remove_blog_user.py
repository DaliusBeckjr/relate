# Generated by Django 5.0.6 on 2024-09-15 16:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blog',
            name='user',
        ),
    ]
