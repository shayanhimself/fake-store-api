# 🛒 Fake Store API

**Fake Store API** is a free RESTful API for prototyping and testing e-commerce or shopping-related apps. It provides dummy data for products in a structured JSON format.

This project is a good starting point for mobile developers who need a quick API to practice with.

---

## 🌐 Base URL
https://shayanhimself.github.io/fake-store-api

---

## 📦 Endpoints

- `GET /products/{id}.json`  
  Get a single product by ID.

Disclaimer: At this point there are only 5 products with IDs: 1, 2, 3, 4, 5

## 📘 Example

Here’s an example fetch request in Kotlin via Ktor client:

```kotlin
    val product: Product = client.get("https://shayanhimself.github.io/fake-store-api/products/1.json").body()
```
---

## Credits:
https://fakestoreapi.com/
