# Exam test

## Purpose

Website using data scraped from Exam Topics to show the exams in a graceful manner. It provides options for easier/more confortable studying:

- Choose between the available exams. (direct to the script to gather the necessary information)
- Choose the amount of questions shown by page.
- Choose to save progress locally.

## Design Reference

![Design Idea](img/Untitled-2023-06-01-2325.png)


## Roadmap

- [x] **A** Contributing page
- [ ] **SSR** Allow randomized order questions (`A` pages)
- [ ] **A** Save progress locally (localStorage)
- [x] **A** Clear reponses
- [ ] **A** Warn if answer's percentage is too close
- [ ] **SSR** Login
- [ ] **A** Allow to choose answer (before showing)
- [ ] **SSR** and save/track questions.
- [ ] **O** Create a central repository to host images and question information.
- [ ] **O** Use CDN to host images.
- [ ] **A** Mirar de convertir en mdx a partir de JSON.
- [x] **A** Add Darkmode
- [x] **A** Change higlight color
- [ ] **A** Update dockerfile to cache (or not run) npm install [tips](https://stackoverflow.com/questions/35774714/how-to-cache-the-run-npm-install-instruction-when-docker-build-a-dockerfile)
- [ ] **A** automatizar actualización de examenes
- [ ] **A** Docker Build en Azure pipelines

## Build

### Files to update

Add the name of the folder that contains the exam files to the following files:

- [index](./src/pages/index.astro) inside exams Array

```js
const exams = [
    "Microsoft_AZ-104",
    "Microsoft_AZ-204",
    ...
]
```

- [exam/index](./src/pages/%5Bexam%5D/index.astro) inside the return of `getStaticPaths`

```js
return [
    { params: { exam: "Microsoft_AZ-104" } },
    { params: { exam: "Microsoft_AZ-204" } },
    ...
]
```

- [exam/page](./src/pages/%5Bexam%5D/%5Bpage%5D.astro) inside `getStaticPaths`: `allExams` Array, exam const & inside return:

```js
export async function getStaticPaths({ paginate }: any) {
    const allExams = [
        "Microsoft_AZ-104",
        "Microsoft_AZ-204",
        ...
    ]

    const sc300Questions = await Astro.glob<QuestionInfo>(
        "../../../public/Microsoft_SC-300/*.json"
    );

    return allExams.map((exam) => {
        const qs =
            exam === "Microsoft_AZ-104"
                ? az104Questions
                : exam === "Microsoft_AZ-204"
                ? az204Questions
                ...
                : az104Questions
    })
}
```

> Warning: leave the las line inside the return of getStaticPaths () as is. It is needed for the pagination to work

```js
    ...
    : az104Questions;
    return paginate(qs, {
      pageSize: 10,
      params: { exam },
    });
```

- If an exam's questions have been revised, add the exam name to the `fixedQuestions` array in [index](./src/pages/index.astro). If only *some* questions have been revised, add it to `revisionExams`:

```js
const fixedExams = ["Microsoft_SC-100","Microsoft_AZ-104"]
const revisionExams = ["Microsoft_PL-300"]
```

Deploy [Docker Image](https://hub.docker.com/repository/docker/sergioprgm/astro/general)
to Azure Container Apps

```sh
# build image
docker build . -t sergioprgm/astro:apache-v1.3
# run and test image
docker run -it --rm -p 3000:80 sergioprgm/astro:apache-v1.3
# push image to container
docker push sergioprgm/astro:apache-v1.3
```
