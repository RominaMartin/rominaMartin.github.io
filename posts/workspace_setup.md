---
title: Mi entorno de trabajo
layout: post.njk
description: Pasos a seguir para replicar mi entorno de trabajo en un dispositivo nuevo
tags: ["posts", "config"]
lang: "🇪🇸"
---

Tras formatear el ordenador o empezar a usar uno nuevo paso por el "dolor" de configurarlo nuevamente o recordar las herramientas que uso. Por eso me decidí a listar aquí los pasos a seguir para que la próxima vez sea más directo.

## vscode

La extensión [Sync settings](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) hace todo el trabajo, así que bastará con tenerla en el vscode, iniciar sesión en github y se sincronizará _automágicamente_.

## ohmyzsh

```bash
  # filename: .zshrc
  export ZSH="/home/romina/.oh-my-zsh"

  ZSH_THEME="agnoster"
  DEFAULT_USER=romina

  plugins=(last-working-dir zsh-nvm)

  source $ZSH/oh-my-zsh.sh

  # git
  alias gclean='git branch | grep -v "master\|develop" | xargs git branch -D'
  alias grecommit="git commit --amend"
  alias guncommit="reset --soft HEAD"
  alias gunstage="reset HEAD --"

  #ohmyzsh
  alias zshconfig="vim ~/.zshrc"
  alias zshsource="source ~/.zshrc"

```

## Herramientas de uso cotidiano

- **[Ulauncher](https://github.com/Ulauncher/Ulauncher)**
  - [chrome-profiles](https://github.com/FloydJohn/ulauncher-chrome-profiles)
  - [clipboard:](https://github.com/friday/ulauncher-clipboard) using [CopyQ](https://github.com/hluk/CopyQ)
  - [emoji](https://github.com/Ulauncher/ulauncher-emoji)
  - [notes](https://github.com/pbkhrv/ulauncher-notes-nv)
- **[ARandR](https://christian.amsuess.com/tools/arandr/)**
- **[autorandr](https://github.com/phillipberndt/autorandr)**
