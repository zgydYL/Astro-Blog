---
title: JavaWeb 入门
description: JavaWeb 基础知识
---

## JavaWeb 基础

### Servlet

```java
@WebServlet("/hello")
public class HelloServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        resp.setContentType("text/html;charset=UTF-8");
        resp.getWriter().println("<h1>Hello, Servlet!</h1>");
    }
}
```

### JSP

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>JSP</title>
</head>
<body>
    <h1>Hello, JSP!</h1>
    <%
        String name = "张三";
        out.println("姓名: " + name);
    %>
</body>
</html>
```

### 核心概念

- Servlet 生命周期
- 请求和响应
- 会话管理
- 过滤器和监听器
