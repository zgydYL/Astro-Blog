---
title: Gin 入门
description: Gin 框架基础知识
---

## Gin

### 创建应用

```go
package main

import (
    "github.com/gin-gonic/gin"
    "net/http"
)

func main() {
    r := gin.Default()

    r.GET("/ping", func(c *gin.Context) {
        c.JSON(http.StatusOK, gin.H{
            "message": "pong",
        })
    })

    r.Run() // 默认在 8080 端口
}
```

### 路由和参数

```go
// 路径参数
r.GET("/user/:name", func(c *gin.Context) {
    name := c.Param("name")
    c.JSON(http.StatusOK, gin.H{"name": name})
})

// 查询参数
r.GET("/welcome", func(c *gin.Context) {
    firstname := c.DefaultQuery("firstname", "Guest")
    c.JSON(http.StatusOK, gin.H{"firstname": firstname})
})
```

### 请求绑定

```go
type Login struct {
    User     string `form:"user" json:"user" binding:"required"`
    Password string `form:"password" json:"password" binding:"required"`
}

r.POST("/login", func(c *gin.Context) {
    var json Login
    if err := c.ShouldBindJSON(&json); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }
    c.JSON(http.StatusOK, gin.H{"status": "ok"})
})
```

### 核心特性

- 高性能
- 中间件
- 路由分组
- 参数验证
