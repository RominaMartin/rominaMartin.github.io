---
title: Setup my workspace back
layout: post.njk
description: Simple steps so I can get the same workspace config in a new device
tags: ["posts", "config"]
---

These steps are simple but I keep forgetting about them since it's every once in a while I have to go to this process. Keep in mind this is on an _linux with ubuntu_ machine.

## vscode

Export current config with the extension: extension_name

- Theme:
- Font family: `'Liga Droid Sans Mono'`

## ohmyzsh

- Ligatures not working
- Setup
- Theme
- vscode terminal

## daily tools

- **[clipboard indicator](https://extensions.gnome.org/extension/779/clipboard-indicator/)**: just so you can keep several items in the clipboard without loosing it.

## terminal

- **alias**:
  To configure aliases with ohmyzsh you have to do the following. My current alias file:

      ```
        recommit='git commit --amend'
        uncommit='reset --soft HEAD'
        unstage='reset HEAD --'
      ```
