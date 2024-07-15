---
date: 2024-04-19
title: Déployer son blog avec Eleventy sur GitHub Pages
description: Une semaine de prise de tête pour déployer ce blog sur GitHub Pages.
topics:
  - devops
  - field-report
---

Si vous lisez cet article c'est que j'ai finalement réussi à déployer mon blog personnel avec GitHub Pages. J'ai parlé du [processus de création de ce blog](../building-this-blog/) dans un précédent article. Dans le présent article je vais expliquer comment j'ai fini par réussir à déployer ce blog sur GitHub Pages avec GitHub Actions.

La solution de déploiement du blog doit être:

- rapide: `git push` et le blog est entièrement déployé.
- simple: pas de system compliqué à maintenir.

## La solution

J'ai choisi d'utiliser les GitHub Actions pour executer mon workflow de déploiement. C'est une solutions de devops que j'emploie régulièrement et qui permets de scripter à peu près n'importe quoi à la suite d'un évènement sur GitHub.

Vous pouvez trouver le workflow complet dans [le repo GitHub du blog](https://github.com/spaenleh/blog/main/)

<https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix>
