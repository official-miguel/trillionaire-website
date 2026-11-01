@echo off
git status > _gitout.txt 2>&1
git remote -v >> _gitout.txt 2>&1
git log --oneline -5 >> _gitout.txt 2>&1
echo DONE >> _gitout.txt
