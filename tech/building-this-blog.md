---
date: 2024-04-16
title: Genèse du blog
description: La naissance de ce blog
topics:
  - web-dev
  - personal-blog
---

Ça faisait longtemps que je voulais créer mon propre blog.

J'avais regardé pas mal de générateurs de sites statiques:

- [Jekyll](https://jekyllrb.com/): le default sur GitHub Pages
- [Gatsby](https://www.gatsbyjs.com/): souvent recommandé car il supporte les composants React et a des optimisations interessantes pour les images et médias, bonnes integrations avec les CMS
- [Hugo](https://gohugo.io/): écrit en Go, il prétend être le plus rapide
- [Vitepress](https://vitepress.dev/): fait à la base pour les sites de documentation, ils proposent une fonction de blog basée sur le bundler vite
- [Zola](https://www.getzola.org/): écrit en rust, je l'ai testé et il m'a fallu de la persévérance pour comprendre la syntax de leur template engine. Bon par ailleurs
- [Astro](https://astro.build/): le cool kid de cette dernière année. Je l'ai utilisé dans d'autres projet. Il est vraiment sympa pour travailler avec une stack hyper simple (HTML + CSS + JS) mais aussi très bonnes intégrations avec les frameworks tels que React, Svelte, Vue etc.
- [Eleventy](https://www.11ty.dev/): ;-)

Et j'avais déjà eu l'occasion par ailleurs de déployer des sites statiques sur GitHub Pages, qu'ils soient écrits à la main ou compilés via des frameworks.

Mon choix s'est finalement orienté sur Eleventy, après avoir vu [la video et les recommandations de Andy Bell](https://buildexcellentwebsit.es/) sur comment créer de bon sites web.

## Rédaction du contenu

Les articles sont écrits en Markdown et ensuite transformés par [Eleventy](https://www.11ty.dev/) qui est utilisé comme générateur de site static.

J'ai créé un layout de base pour toutes les pages et un layout pour les pages de blog. lLes layouts utilisent l'engine de template Nunjuks.

## Feuilles de style

J'ai ajouté un simple fichier `bundle.css` non minifié qui est simplement copié dans le dossier de destination.

La font choisie est [`Space Grotesk`](https://fonts.google.com/specimen/Space+Grotesk) (une Google Font). Je l'include and le dossier de sortie du site pour ne pas dépendre du CDN Google.

## Objectifs pour ce blog

Avec ce blog je voulais la stack la plus simple possible, pas d'options de plugin complex, simplement quelque chose où je peux écrire mon article, le commit sur git, et voilà envoyez c'est pesé. Je veux pouvoir consacrer le maximum de temps à la rédaction des articles et non pas au outils.

J'ai l'impression que c'est le pari qu'eleventy fait. Je sais que je peux graduellement complexifier ma configuration pour faire de plus en plus de choses. le future dira si j'arrive à écrire régulièrement ici ou pas, ou si je vais changer de stack dans 2 semaines.

J'espère que la lecture vous aura plu.

<div style="text-align: right">À la prochaine.</div>
