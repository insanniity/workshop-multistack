# Generated by Django 4.0 on 2021-12-12 21:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='diarista',
            name='cep',
            field=models.CharField(max_length=8),
        ),
    ]
