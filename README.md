# Bookstore — INF 354 2025 Exam, Section A Question 1

This is the half-finished Ionic + Angular Bookstore application you would
receive as `Exam_Section_A_Question.zip` at the start of the exam.

The home page already lists books and lets the user add / remove them from the
cart. The cart page and its supporting code are **incomplete** — completing
them is the assessment.

## Setup

```bash
npm install
npm start         # or: ionic serve
```

Then open <http://localhost:4200> (or whatever port Ionic prints).

## Files you must complete (the four to upload)

| Mark allocation | File |
| --- | --- |
| 1  | `src/app/models/book.ts` |
| 8  | `src/app/services/cart.service.ts` |
| 9  | `src/app/pages/cart/cart.page.ts` |
| 5  | `src/app/pages/cart/cart.page.html` |

Each file has a `TODO` comment block that quotes the relevant exam task.

## Question 1.1 — Commands to create the project (2 marks)

```bash
npm install -g @ionic/cli
ionic start Bookstore blank --type=angular
cd Bookstore
ionic serve
```

## Files you should NOT edit

- Anything under `src/app/pages/details/` (per exam instructions).
- The home page (`src/app/pages/home/`) — it already works.
