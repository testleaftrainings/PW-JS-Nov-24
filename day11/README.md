📑 Agenda for Day 11: REST API Fundamentals

# Introduction to REST API

## Table of Contents
1. [Overview](#overview)
2. [Key Concepts](#key-concepts)
   - [Headers](#1-headers)
   - [Verbs](#2-verbs)
   - [Request Body and Response Body](#3-request-body-and-response-body)
   - [Authorization Types](#4-authorization-types)

## Overview
A REST API (Representational State Transfer Application Programming Interface) is a standardized architecture for building and interacting with web services. RESTful APIs allow communication between a client and a server using stateless HTTP requests.

---

## Key Concepts

### 1. **Headers**
Headers are key-value pairs sent with an HTTP request or response. They provide additional context or metadata about the request or response.

#### Common Headers:
- `Content-Type`: Specifies the type of data being sent (e.g., `application/json`).
- `Authorization`: Contains credentials for authentication (e.g., `Bearer <token>`).
- `Accept`: Indicates the media types the client can process (e.g., `application/json`).

---

### 2. **Verbs**
HTTP verbs define the action to be performed on a resource. Common verbs include:

- **POST**: Create a new resource.
- **PUT**: Update or replace an existing resource.
- **GET**: Retrieve information about a resource.
- **DELETE**: Remove a resource.
- **PATCH**: Partially update a resource.

#### Example:
| Verb    | URL Endpoint        | Action                      |
|---------|---------------------|-----------------------------|
| `POST`  | `/api/leads`        | Create a new lead           |
| `GET`   | `/api/leads/123`    | Retrieve lead details (ID: 123) |
| `PUT`   | `/api/leads/123`    | Update lead details (ID: 123) |
| `DELETE`| `/api/leads/123`    | Delete lead (ID: 123)       |
| `PATCH` | `/api/leads/123`    | Partially update lead (ID: 123) |

---

### 3. **Request Body and Response Body**

- **Request Body**: Data sent by the client to the server when creating or updating a resource (used in POST, PUT, and PATCH).
  
  Example (JSON format):
  ```json
  {
      "name": "Testleaf",
      "email": "hello@testleaf.com",
      "phone": "1234567890"
  }
  ```

- **Response Body**: Data sent by the server back to the client as a response to a request.

  Example (JSON format):
  ```json
  {
      "id": 123,
      "name": "Qeagle",
      "status": "success"
  }
  ```

---

### 4. **Authorization Types**

Authorization ensures secure communication between client and server. Common methods include:

- **Basic Auth**: Base64-encoded username and password.
- **API Key**: A unique key provided by the server for identification.
- **Bearer Token**: An OAuth 2.0 token passed in the Authorization header.
- **OAuth 2.0**: A comprehensive protocol using tokens for delegated access.

---
