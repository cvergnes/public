# vim
[vim cheat Sheet](https://vim.rtorr.com/)
| key | comments |
| ------ | ------ |
| x | delete a character |
| h, j, k, l | to go left, down, up, right in normal mode |
| Ctrl-d | go down half a page |
| Ctrl-u | go up half a page |
| diw | delete a word |
| d$ | delete until end of line |
| dd | delete a line |
| 0 | to go to start of line |
| yy | copy a line |
| p | paste a line |
| :f | display a filename |
| /\<string\> | search a string | 
| /\<string\>\c | search a string and ignore case | 
| n | go to next instance|
| N | go to previous instance 
| w | move forward one word|
| b | move backward one word|  
| e | move to end of the word |
| gg | go to top of file |
| G | go to bottom of file | 
| :\<line number\> | go to line number | 
| Ctrl-r | redo the last action |
| 5. | repeating 5 times the last action | 
| :syntax on | activate syntax colors |
| :noh | stop highlighting a text |
| A | add at end of line |
| :%s/A/B/g | replace all A by B |
| :%s/A/B/gc | replace all A by B with a confirmation prompt |
| \<line number\>G | go to line |
| "*p | paste system clipboard |
| "*y | copy in system clipboard |
| "ay | copy in register a |
| "ap | paste register a |
| Ctrl-r a | paste register a |
| :register | list of registers |
| { | jump to next paragraph (or function/block, when editing code) |
| } | ump to previous paragraph (or function/block, when editing code) |
| w | jump forward to the next word |
| b | jump backwards to the next word |
| Ctrl-d | jump forward to the next word |
| Ctrl-u | jump forward to the next word |
| * | Go to the next occurrence of the current word under the cursor |
| # | Go to the previous occurrence of the current word under the cursor |
  
# basic .vimrc file
```
set number
set wrap
set showmatch
set ruler
set backspace=indent,eol,start
set expandtab
set tabstop=2
set wrap
set laststatus=2
set showmode
set ttyfast
syntax on
set smartindent
set shiftround
```

# Git
| command | comments |
| ------ | ------ |
| git commit -m “Title” -m “Description” | commit : new child of head  |
| git add . | add git files |
| git push -u origin branch | push to upstream origin branch |
| git branch -a | list all branches |
| git status |  |
| git checkout -b branch | create a branch and checkout |
| git remote -v | list all remote |
| git log -p -2 | last 2 commit with diff |
| git diff | modifications since my last commit |
| git checkout — file | discard changes |
| git reset commitHash| set head to commitHash -> allow to merge several commits into one |
| git branch -d localBranchName | delete branch locally |
| git push origin --delete remoteBranchName | delete branch remotely |

  
# Mac OS terminal
Dont forget to activate Terminal preferences : "Use Option as Meta key"
| command | comments |
| ------ | ------ | 
| Ctrl-a | go to start of the line |
| Ctrl-e | go to the end of the line |
| Alt-f | jump forward by a word |
| Alt-b | jump backward by a word |
| Ctrl-k | to kill the line starting from the cursor position |
  
# bash
| command | comments |
| ------ | ------ |
| find * -name “my query” | find a specific file in a dir  |
| ind . -print | grep -i foo | find a file named foo |
| grep -r “my query”| recursive grep |
| grep -rl “my query” * | xargs sed -i ‘’ ‘s/my query/my replacement/’ | search & replace |
| env | print all env variables |
| echo $PATH |  |
| export $PATH=$PATH:/env/bin | modify an env variable |
| whereis |  |
  
# powershell
| command | comments |
| ------ | ------ |
| $env:myvariable=”valeur” | set an env variable  |
| dir env: | list all env variables  |
| get-command | get list of commands ... |  
| Get-Help |get help ... |  
  
 # sed
| command | comments |
| ------ | ------ |
|  | | 
  

# homebrew
| command | comments |
| ------ | ------ |
| brew —version | |
| brew update | Fetch latest version of homebrew and formula |
| brew upgrade | Upgrade all brew packages |
| brew list --cask | Homebrew Cask provides a friendly CLI workflow for the administration of macOS applications distributed as binaries |
