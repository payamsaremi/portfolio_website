# Generated by Django 3.2.5 on 2021-07-23 20:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='description',
            field=models.TextField(blank=True, max_length=800, null=True),
        ),
    ]