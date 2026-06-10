---
title: Flask 入门
description: Flask 框架基础知识
---

## Flask

### 创建应用

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)
```

### 路由和视图

```python
from flask import request, jsonify

@app.route('/api/users', methods=['GET', 'POST'])
def users():
    if request.method == 'POST':
        data = request.get_json()
        return jsonify(data), 201
    return jsonify({"users": []})
```

### 模板

```python
from flask import render_template

@app.route('/hello/<name>')
def hello_name(name):
    return render_template('hello.html', name=name)
```

### 核心特性

- 轻量级
- 灵活
- 丰富的扩展
- Jinja2 模板
