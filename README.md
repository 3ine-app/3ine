# 3ine.app

<img src="web/public/images/icon-72x72.png" alt="3ine.app">

## Docs 📁

All technical 👨‍💻👩‍💻 documentations of 3ine.app

> Tech stack: yarn workspace, Node.js 14+, React 17+, RedwoodJS (Jamstack), Apollo GraphQL, Prisma, Postgres and TailwindCSS

### Architecture 🏗️

#### Infrastructure

- Domain name - [namecheap](https://www.namecheap.com/)
- PostgreSQL - [Railway](https://railway.app/)

#### Backend

<details>
  <summary>Click to expand!</summary>

- TODO

</details>

#### Frontend

 <details>
  <summary>Click to expand!</summary>

- TODO

 </details>

### Coding conventions and standards

<details>
  <summary>Click to expand!</summary>

- Fundamental
- React
- Typescript
- TailwindCSS
- GraphQL
- Prisma
- PostgreSQL
- Jest
- Storybook
</details>

## Getting Started 👨‍💻👩‍💻

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Environment variables

<details>
  <summary>Click to expand!</summary>

`.env.defaults`

See [Local Postgres](#local-postgres) to setup your database for local development

```bash
REDWOOD_SECURE_SERVICES=1
# Local Postgres setup is required
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/pb?connection_limit=1"
```

`.env`

Create `.env` file at the root directory

```
cd 3ine
touch .env
```

</details>

### Local database (PostgreSQL + PgAdmin)

<details>
  <summary>Click to expand!</summary>

Install `Docker Desktop` which comes with CLI `docker`

- [Apple Mac](https://docs.docker.com/docker-for-mac/install/)
- [Windows](https://docs.docker.com/docker-for-windows/install/)

Check `docker` CLI after installation

```terminal
> which docker
/usr/local/bin/docker

> which docker-compose
/usr/local/bin/docker-compose
```

Launch docker containers

```terminal
cd property-beacon
docker-compose -f docker-compose.yml up
```

then you should see `Postgres` and `PgAdmin` are up and running. Since the containers are initialized so you can launch containers via Docker Desktop next time instead of CLI.

<img src="docs/docker-desktop.png" alt="Docker Desktop">

apply all db migration scripts

```bash
yarn rw prisma migrate dev
```

`PgAdmin` run on http://localhost:8080/ with `admin@propertybeacon.com/admin` _(username/password)_. You will need to change your database server connection to your actual machine IP address since the two docker containers are running at its independent environment (the same as running on two different machines).

<img src="docs/pgadmin-connection.png" alt="Docker Desktop">

</details>

### Fire it up

```terminal
yarn rw dev
```

This will launch both `web` and `api` by default and tour browser should open automatically to `http://localhost:8910` to see the web app.

> Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.

## Reference

### RedwoodJS

- [Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood)
- [Docs](https://redwoodjs.com/docs/introduction) _using the Redwood Router, handling assets and files, list of command-line tools, and more_
- [Redwood Community](https://community.redwoodjs.com) _get help, share tips and tricks, and collaborate on everything about RedwoodJS_
