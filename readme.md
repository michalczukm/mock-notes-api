# Mock notes API
This repository contains a mock API created based on [db.json](./db.json) file.

I'm using [json-server](https://github.com/typicode/json-server) :heart:

API supports 2 version, both operating on the same dataset - one requires authentication, second does not.
If you are not sure how to use it - no problem, please read this README carefully to the end :blush:

## Run it locally
Simply

* `npm install`
* `npm start`
* The server by default is visible under `localhost:3030`

## Routes

### Open
No prefixes, just go to url, f.e.: `GET ~/notes`

### v2 Auth required
Under version 2, use `v2` prefix, f.e.: `GET ~/v2/notes`

#### Login
Simple demo authorization supports only one user - Mr/Mrs/Miss Admin Admin.
In response you will get JWT bearer token, always [this hardcoded one](https://jwt.io/#debugger-io?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtaWNoYWxjenVrbS54eXoiLCJpYXQiOjE1MzEzNDY1MjEsImV4cCI6MTU5NDUwNDkyMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiYWRtaW4uYWRtaW5AZXhhbXBsZS5jb20iLCJOYW1lIjoiQWRtaW4iLCJTdXJuYW1lIjoiQWRtaW4iLCJFbWFpbCI6ImFkbWluLmFkbWluQGV4YW1wbGUuY29tIiwiUm9sZSI6IlN5c3RlbSBBZG1pbnN0cmF0b3IifQ.q14fIWoyZsvkDmDDtE6Hi34zpmSJLNmtueFaHSd82YM).

**Request**

`POST ~/v2/login`

payload:
```
{
    "username": "admin",
    "password": "admin"
}
```

headers:
```
content-type: application/json`
```

**Response**

* success
```
200

{
    "name": "Admin Admin",
    "token": {the token}
}
```

* failure (no credentials or wrong credentials)
```
400
```

#### Making calls to v2
Add `Authorization` header with bearer token

Example:
```
HEADERS:
Authorization: Bearer eyJ0eXA...
```