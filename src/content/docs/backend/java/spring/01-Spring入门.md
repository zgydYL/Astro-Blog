---
title: Spring 入门
description: Spring 框架基础知识
---

## Spring 框架

### IoC 容器

```java
@Component
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User findById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
}
```

### AOP

```java
@Aspect
@Component
public class LoggingAspect {
    @Before("execution(* com.example.service.*.*(..))")
    public void beforeAdvice(JoinPoint joinPoint) {
        System.out.println("方法调用前: " + joinPoint.getSignature().getName());
    }
}
```

### 核心特性

- IoC（控制反转）
- AOP（面向切面编程）
- 依赖注入
- 事务管理
