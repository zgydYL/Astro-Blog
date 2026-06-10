---
title: Django 入门
description: Django 框架基础知识
---

## Django

### 创建项目

```bash
django-admin startproject myproject
cd myproject
python manage.py startapp myapp
```

### 模型

```python
from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
```

### 视图

```python
from django.http import JsonResponse
from .models import User

def get_users(request):
    users = list(User.objects.values())
    return JsonResponse(users, safe=False)
```

### 核心特性

- ORM
- 管理后台
- 模板系统
- 中间件
