#!/usr/bin/fish
set THIS "start.fish"
set help "--help"
set clean "--clean"
set anim_load_loop '..:' '.:.' ':..' '..:' '.::' '::.' ':..' '..:' '.::' ':::' '::.' ':..'
set anim_load_end '.:.' ':::' ':.:' '...'

clear; set_color blue
banner "librefont"; set_color normal

if not set -q argv[1];
    echo (set_color grey)"Build arguments not set."
    echo "Only setting up source directory for now..." \
        (set_color normal)

    echo -e "For usage details, run:" \
        (set_color blue)"$THIS" \
            (set_color normal)"with"(set_color cyan) \
                "$help"(set_color normal)
                
    set build "false"
else
    echo (set_color grey)"Set to build font."
    set_color normal & set build "true"
end

if not set -q argv[2]
    echo (set_color grey)"No family name passed."
    echo "defaulting to 'unnamed'"
    set -a FAMILY unnamed
else
    for font in $argv[2..-1]
        echo (set_color grey)"Will be building $font"
        set -a FAMILY $font
    end
end; set_color normal

set PARENT (pwd)
set TMP "/tmp/github.com/libreaires/librefont"
if test ! -d "$TMP"
    mkdir -p "/tmp/github.com/libreaires/librefont"
end

if $build = "true"
    switch $argv[1]
        case "--all"
            set OUT contents
        case "--webfont"
            set OUT webfont
        case "--font"
            set OUT ttf
        case "$clean"
            rm -rf $TMP
            exit 0
        case "$help"
            echo "Usage:"(set_color blue) \
                "$THIS"(set_color green) \
                    "(option)" "(family)" (set_color normal)

            echo "(1) Options:"(set_color cyan) \
                "--font" "--webfont" "--all" (set_color normal)

            exit 0
        case '*'
            echo \
                (set_color red)"INVALID OUTPUT OPTION!" \
                    (set_color normal)

            echo -e "For usage details, run:" \
                (set_color blue)"$THIS" \
                    (set_color normal)"with"(set_color cyan) \
                        "$help"(set_color normal)

            exit 1
    end
end

set SRC "$TMP/src" & set -a locations $SRC
if test ! -d "$SRC"
    cd $TMP
    set REPO "https://github.com/be5invis/Iosevka.git"
    git clone --depth 1 --filter=blob:none --no-checkout --quiet $REPO "src"

    cd "src"
    git sparse-checkout set --no-cone \
        'tools/*' \
        'packages/*' \
        '!packages/font-glyphs/src/**/*' \
        'packages/font-glyphs/src/auto-build/**/*' \
        biome.json \
        build-plans.toml \
        package-lock.json \
        package.json \
        verdafile.mjs \
    >/dev/null 2>&1
    git checkout --quiet >/dev/null 2>&1 & set -l pid $last_pid

    while kill -0 $pid 2>/dev/null
        for frame in $anim_load_loop
            echo -e -n "\r\e[K\e[90m@TMP\e[32m/src/\e[90m$frame\e[0m"
            set cpu \
                (awk '/cpu / {print 100-($5*100/($2+$3+$4+$5+$6+$7+$8))}' /proc/stat)
            sleep (math "$cpu/100")
            if not kill -0 $pid 2>/dev/null
                for frame in $anim_load_end
                    echo -e -n "\r\e[K\e[90m@TMP\e[32m/src/\e[32m$frame\e[0m"
                    set cpu \
                        (awk '/cpu / {print 100-($5*100/($2+$3+$4+$5+$6+$7+$8))}' /proc/stat)
                    sleep (math "$cpu/100")
                end
                echo -e "\r\e[K\e[90m@TMP\e[32m/src/\e[90m...☍\e[0m"
                break
            end
        end
    end
    
    cd $PARENT
else
    echo "SOURCE PATH ALREADY EXISTS!"
    echo "You can run" \
        (set_color blue)"$THIS" \
            (set_color normal)"with"(set_color cyan) \
                "$clean"(set_color normal) \
                    "to remove the source directory"
    echo (set_color grey)"Ignoring..."
end

for i in $PARENT/glyphs/*
    ln -sf $i $SRC/packages/font-glyphs/src/(basename $i)
end

ln -sf $PARENT/args $SRC/params
ln -sf $PARENT/blueprint.toml $SRC/private-build-plans.toml

cd $SRC
npm install # --silent
# do a npm install loading here

echo -e (set_color green)"SOURCE DIRECTORY FINISHED!" \
    (set_color grey)"Location:" \
        "$SRC"(set_color normal)

if $build = "true"
    echo (set_color blue)"BUILDING FONT!"
    npm run build -- "$OUT::$FAMILY"
    # mv output later
end
