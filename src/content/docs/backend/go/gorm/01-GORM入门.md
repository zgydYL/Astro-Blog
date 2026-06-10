---
title: GORM 入门
description: GORM 基础知识
---

## GORM

### 连接数据库

```go
import (
    "gorm.io/driver/mysql"
    "gorm.io/gorm"
)

dsn := "user:pass@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&parseTime=True&loc=Local"
db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
```

### 模型定义

```go
type User struct {
    gorm.Model
    Name  string
    Email string
}

// 自动迁移
db.AutoMigrate(&User{})
```

### CRUD 操作

```go
// 创建
db.Create(&User{Name: "张三", Email: "zhangsan@example.com"})

// 查询
var user User
db.First(&user, 1) // 根据 ID 查询
db.Where("name = ?", "张三").First(&user)

// 更新
db.Model(&user).Update("Name", "李四")

// 删除
db.Delete(&user)
```

### 核心特性

- 全功能 ORM
- 关联查询
- 事务支持
- 自动迁移
