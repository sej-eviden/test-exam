# Astro with Tailwind

## Purpose

Website using data scraped from Exam Topics to show the exams in a graceful manner. It provides options for easier/more confortable studying:

- Choose between the available exams. (direct to the script to gather the necessary information)
- Choose the amount of questions shown by page.
- Choose to save progress locally.


## Design Reference

![Design Idea](img/Untitled-2023-06-01-2325.png)

### Name ideas

- **Ascendify**
- **Knowledge Lab**
- **Cloud QA**

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
- [ ] **A** Add Darkmode
- [x] **A** Change higlight color

## Build

Deploy [Docker Image](https://hub.docker.com/repository/docker/sergioprgm/astro/general)
to Azure Container Apps
