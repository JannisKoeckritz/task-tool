from django.db import models
#turbotask
class User(models.Model):
    user_id = models.CharField(max_length=8,unique=True,default="")
    first_name = models.CharField(blank=False,max_length=100)
    last_name = models.CharField(blank=False,max_length=100)
    email = models.EmailField(blank=False)
    password = ""
    last_login = ""
    created_at = models.DateTimeField(auto_now_add=True)

class Project(models.Model):
    project_id = models.CharField(max_length=8,unique=True,default="")
    name = models.CharField(blank=False,max_length=140)
    description = models.CharField(blank=True,max_length=280)
    status = models.CharField(blank=False,max_length=100)

class Board(models.Model):
    board_id = models.CharField(max_length=8,unique=True,default="")
    title = models.CharField(max_length=8,blank=False)

class Task(models.Model):
    status = models.CharField(max_length=100)
    points = models.PositiveSmallIntegerField()