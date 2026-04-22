## Быстрый старт

```bash
git clone https://github.com/vladislavvbulgakov/soccer-stat.git
cd soccer-stat
npm install
npm run dev
```
# SoccerStat

Веб-приложение для просмотра футбольных лиг, команд и матчей с возможностью фильтрации по дате и удобной навигацией реализованное в качестве ТЗ SimbirSoft 2026.


## Стек технологий

### Frontend

* **React** 
* **TypeScript**
* **Vite** 
* **Tanstack Query**
* **Axios**
* **Mantine UI**
* **CSS Modules**
* **React Tostify**
---

##  Функции проекта

**SoccerStat** — это SPA-приложение, которое позволяет:

* Просматривать список лиг/соревнований
* Просмотр списка команд;
* Открывать команды внутри лиги
* Смотреть календарь матчей команды
* Фильтровать матчи по дате
* Листать данные через пагинацию
* Искать лиги/команды с помощью поиска
---
### Организация и структура кода - FSD

## API

Используется публичное API:

https://www.football-data.org/

### Основные эндпоинты:

* `/competitions` — список лиг
* `/competitions/{id}/teams` — команды лиги
* `/teams/{id}` — информация о команде
* `/teams/{id}/matches` — матчи команды

---

##  Важно

API требует токен доступа.

---

##  Настройка окружения

### 1. Получить API-ключ

Зарегистрируйся здесь:
https://www.football-data.org/client/register

---

### 2. Создать `.env` файл

В корне проекта:

```
VITE_API_TOKEN=your_api_key_here
```

---

## Запуск проекта

### 1. Клонировать репозиторий

```bash
git clone https://github.com/vladislavvbulgakov/soccer-stat.git
```

---

### 2. Перейти в папку проекта

```bash
cd soccer-stat
```

---

### 3. Установить зависимости

```bash
npm install
```

---

### 4. Настроить переменные окружения

Создай файл `.env` (см. .env.example) в корне проекта:

```env
VITE_API_TOKEN=your_api_key_here
```
---

### 5. Запустить проект

```bash
npm run dev
```

После запуска приложение будет доступно:

```text
http://localhost:5173
```

---

## Сборка проекта

```bash
npm run build
```

---

## Просмотр production-сборки

```bash
npm run preview
```


## Прокси

В проекте настроен прокси (Vite), чтобы избежать CORS:

```ts
server: {
  proxy: {
    "/api": {
      target: "https://api.football-data.org/v4",
      changeOrigin: true,
      rewrite: (p) => p.replace(/^\/api/, ""),
    },
  },
}
```

Все запросы идут через `/api/...`

---

Приложение адаптировано под:

* Desktop
* Tablet
* Mobile
