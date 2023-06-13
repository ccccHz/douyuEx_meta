#!/bin/bash
# mac use gsed instead of sed
# 初始化参数，js css文件的初始化
# TODO css 问题
function init(){
    tamplate="./src/main.js"
    target="./devtool/dyEx.user.js"
    cat $tamplate > $target
    
    codeInLine=$(grep -n "\`/\*编译器标记 勿删\*/" $tamplate| cut -d : -f 2 )
    # ``前后的字符串
    prefix=${codeInLine%%\`*}
    suffix=${codeInLine##*\`}
    tempFunc="./tempFunc.js"
    touch $tempFunc
    echo > $tempFunc
    tempCss="./tempCss.css"
    echo "$prefix" > $tempCss
    echo "\`" >> $tempCss
    
    
}

function recur_dir(){
    
    shopt -s nullglob dotglob
    for file in "$1"/*
    do
        if [ -d "$file" ]
        then
            recur_dir "$file"
        elif   [[ $file = *.js ]]
        then
            if [[ $file = *main.js ]]
            then
                echo "main.js is ignored"
                continue
            fi
            cat "$file" >> $tempFunc
            printf "\n\n" >> $tempFunc
            # echo $file added
        elif    [[ $file = *.css ]]
        then
            cat "$file" >> $tempCss
            # echo $file added
        else
            echo "error: unsupported file type:""$file"
        fi
    done
    
}

# convert cssfile from $1 into one line type
function Oneline(){
    tempfile=$(tr -d '\n' < "$1")
    echo "$tempfile" > "$1"
}

function assemble(){
    
    # 参数 funcline cssline cssIndex
    funcLine=$(grep -n "// 编译器标记 勿删" $tamplate| cut -d : -f 1)
    cssLine=$(grep -n "\`/\*编译器标记 勿删\*/" $tamplate| cut -d : -f 1)
    # watchStart=$(($funcLine-1))
    # watchEnd=$(($funcLine+5))
    # echo "first time:"
    # sed "${watchStart},${watchEnd}!d" ${target}
    # echo "after gsed:"
    # sed "${watchStart},${watchEnd}!d" ${target}
    
    # sed "1,10!d" $tempCss
    # append suffix to the end of tempcss
    echo "\`" >> $tempCss
    echo "$suffix" >> $tempCss
    
    # cat $tempCss > "./test/tempCss3.css"
    Oneline $tempCss
    
    # append temp
    gsed -i -e "${cssLine}r $tempCss" $target
    gsed -i "${cssLine}d" $target
    gsed -i "${funcLine}d" $target
    gsed -i -e "$((funcLine-1))r $tempFunc" $target
    
    # clear temp files
    rm $tempFunc
    rm $tempCss
}

cd ".."
init
from="./src"
recur_dir $from
assemble

