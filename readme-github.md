# Інструкція по роботі з Git та GitHub

## Клонування репозиторію

```sh
git clone https://github.com/your-username/your-repo.git
```

## Перевірка статусу змін

```sh
git status
```

## Додавання файлів до індексу

```sh
git add <ім'я_файлу>    # Додати конкретний файл
git add .               # Додати всі файли
```

## Фіксація змін з коментарем

```sh
git commit -m "Ваш коментар"
```

## Відправка змін на GitHub

```sh
git push
```

## Отримання останніх змін з GitHub

```sh
git pull
```

## Перегляд історії комітів

```sh
git log
```

## Робота з гілками

```sh
git branch                 # Перегляд гілок
git checkout <гілка>       # Перехід на гілку
git checkout -b <гілка>    # Створити нову гілку і перейти на неї
git merge <гілка>          # Злиття гілки
```

---

## Налаштування глобальних даних для GitHub

```sh
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

## Налаштування кінців рядків для git

```sh
git config --global core.autocrlf true   # Для Windows (рекомендується)
git config --global core.autocrlf input  # Для Linux/macOS або якщо потрібен LF
```

---

## Попередження про CRLF/LF

> Якщо при додаванні файлів з'являється попередження:
> 
> warning: in the working copy of 'readme.md', CRLF will be replaced by LF the next time Git touches it
> 
> Щоб уникнути цього, виконайте команду:
> 
> ```sh
> git config --global core.autocrlf false
> ```
