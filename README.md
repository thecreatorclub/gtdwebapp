# Introduction

Your goal is to create a Get Things Done app. It does not have to be beautiful but any fancy UI is implemented.
The following are the user requirements:

- Add a todo
- Remove a todo
- Mark todo as complete
- Add a project
- Add todo to a project
- Remove toto from a project
- Set reminder for a todo
- Show pending todos (expired)
- Show todos for today

# Testing

You will be running End-To-End tests to test out your functionality using cypress. For every user requirement, please create on end to end test.
Check out two tests in `cypress/e2e/` folder

Please user selectors from `@testing-library/cypress` to create natural tests.

# Learning

To be able to do this project you need to understand the following concepts:

1. Typescript
   1. https://www.youtube.com/watch?v=gieEQFIfgYc (also contains React)
   2. https://www.youtube.com/watch?v=BwuLxPH8IDs (if you do the top, don't do this one)
2. React and Next.js
   1. https://www.youtube.com/watch?v=h2BcitZPMn4
   2. https://www.youtube.com/watch?v=HCF6vN-1SLc
3. Prisma and TRPC
   1. https://www.youtube.com/watch?v=S3k82XXCrBo

## Setup

To set it up, you need to perform one step to set up the test database. Make sure your database is running and please run the following in your console:

```
pnpm cy:db
```

This will create your test database. Then you can run your application in E2E mode using:

```
pnpm cy:dev
```

Then you can run your Cypress studio using

```
pnpm:cy:open
```

## Writing Tests

Your tests are in the `cypress/e2e` folder. There are already some examples. Please add your tests there.

## Running Tests

You can run your tests using in CI mode.

```
pnpm:cy:run
```

# Stack

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.
These are the options used to scaffold this app:

```
   ___ ___ ___   __ _____ ___   _____ ____    __   ___ ___
  / __| _ \ __| /  \_   _| __| |_   _|__ /   /  \ | _ \ _ \
 | (__|   / _| / /\ \| | | _|    | |  |_ \  / /\ \|  _/  _/
  \___|_|_\___|_/‾‾\_\_| |___|   |_| |___/ /_/‾‾\_\_| |_|

│
◇  What will your project be called?
│  gtdwebapp
│
◇  Will you be using TypeScript or JavaScript?
│  TypeScript
│
◇  Will you be using Tailwind CSS for styling?
│  Yes
│
◇  Would you like to use tRPC?
│  Yes
│
◇  What authentication provider would you like to use?
│  NextAuth.js
│
◇  What database ORM would you like to use?
│  Prisma
│
◇   EXPERIMENTAL  Would you like to use Next.js App Router?
│  Yes
│
◇  What database provider would you like to use?
│  PostgreSQL
│
◇  Should we initialize a Git repository and stage the changes?
│  Yes
│
◇  Should we run 'pnpm install' for you?
│  Yes
│
◇  What import alias would you like to use?
│  ~/

Using: pnpm

✔ gtdwebapp scaffolded successfully!
```

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for **RECOMMENDED** [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

## How do I provision a database?

[Vercel](https://vercel.com/docs/storage/vercel-postgres/quickstart) is offering a free tier of PostgreSQL that will suffice for your hobby projects. If you wish to use NoSQL database, you can use MongoDB Atlas
