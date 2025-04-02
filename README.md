# 🛒 Fake Store API

**Fake Store API** is a free RESTful API for prototyping and testing e-commerce or shopping-related apps. It provides dummy data for products in a structured JSON format.

This project is a good starting point for mobile developers who need a quick API to practice with.

---

## 🌐 Base URL
https://fakestoreapi.shayanaryan.com

---

## 📦 Endpoints

- `GET /products/{id}.json`  
  Get a single product by ID.



## 📘 Example

Here’s an example fetch request in Kotlin via Ktor client:

```kotlin
    val product: Product = client.get("https://fakestoreapi.shayanaryan.com/products/1.json").body()
```
---

## Credits:
https://fakestoreapi.com/
