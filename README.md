# Exam test
Probando
## Purpose

Website using data scraped from Exam Topics to show the exams in a graceful manner. It provides options for easier/more confortable studying:

- Choose between the available exams. (direct to the script to gather the necessary information)
- Choose the amount of questions shown by page.
- Choose to save progress locally.

## Design Reference

![Design Idea](img/Untitled-2023-06-01-2325.png)


## Roadmap

- [ ] **SSR** Allow randomized order questions (`A` pages)
- [ ] **A** Save progress locally (localStorage)
- [ ] **A** Warn if answer's percentage is too close
- [ ] **A** Allow to choose answer (before showing)
- [ ] **SSR** and save/track questions.
- [ ] **O** Create a central repository to host images and question information.
- [ ] **O** Use CDN to host images.
- [ ] **A** Mirar de convertir en mdx a partir de JSON.
- [ ] **A** Update dockerfile to cache (or not run) npm install [tips](https://stackoverflow.com/questions/35774714/how-to-cache-the-run-npm-install-instruction-when-docker-build-a-dockerfile)
- [ ] **O** automatizar actualización de examenes
- [ ] **A** If no answer is found, pick the provided one and notify

## Build

### Files to update

Copy and paste the exam files in the necessary folders: json files inside the `src/content` directory
and images in the public directory.

Next, update the `config.ts` file located inside the `content` directory with the name of the folder of the newly added exams:

```js
export const collections = {
    'Microsoft_AZ-104': examCollection,
    'Microsoft_AZ-204': examCollection,
}
```

Add the name of the folder that contains the exam files to the following files:

- [index](./src/pages/index.astro) inside exams Array

```js
const exams = [
    ["Microsoft_AZ-104", "Azure Administrator Associate", "AZ-104"],
    ["Microsoft_AZ-204", "Azure Developer Associate", "AZ-204"],
    ...
]
```

- [exam/index](./src/pages/%5Bexam%5D/index.astro) inside the return of `getStaticPaths`

```js
return [
    {name:"Microsoft_AZ-104", total: 477},
    {name:"Microsoft_AZ-204", total: 333},
    ...
]
```

> Note: the `total` number can be found in the master file for each exam

- [exam/page](./src/pages/%5Bexam%5D/%5Bpage%5D.astro) inside `getStaticPaths`: `allExams` Array, exam const & inside return:

```js
export async function getStaticPaths({ paginate }: any) {
    const allExams = [
        await getCollection("Microsoft_AZ-104"),
        await getCollection("Microsoft_AZ-204"),
        ...
    ]
}
```

> Note: When updating inside `getStaticPaths` an error may appear (the name of the exam is highlighted in red). This is normal, and will be updated once the application is deployed. If it is necessary to manually update the types run `npx astro sync`.

- If an exam's questions have been revised, add the exam name to the `fixedQuestions` array in [index](src\pages\[exam]\index.astro). If only *some* questions have been revised, add it to `revisionExams`:

```js
const fixedExams = ["Microsoft_SC-100","Microsoft_AZ-104"]
const revisionExams = ["Microsoft_PL-300"]
```

### Trigger deploy

The repository is setup to update the local types, build and deploy the docker image automatically to Azure.
To achieve this it is necessary to format the commit message accordingly: it must start with *'Update:'*, ideally followed by the exams added/updated.

```sh
# Triggers the deployment action
git commit -m "Update: AZ-104; AZ-204"
# Will not trigger the action
git commit -m "Update AZ-104; AZ-204"
```

The static analysis step is triggered by any changes to the `src` directory, though this shouldn't be a convenience to the user.
