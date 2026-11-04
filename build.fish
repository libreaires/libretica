#!/usr/bin/fish
set THIS "build.fish"
set help "--help"
set clear "-r"
set anim_load_loop '..:' '.:.' ':..' '..:' '.::' '::.' ':..' '..:' '.::' ':::' '::.' ':..'
set anim_load_end '.:.' ':::' ':.:' '...'

if not set -q argv[1];
    echo \
        (set_color red)"WRONG USAGE!" \
            (set_color normal)

    echo -e "For usage details, run:" \
        (set_color blue)"$THIS" \
            (set_color normal)"with"(set_color cyan) \
                "$help"(set_color normal)

    exit 1
end

if not set -q argv[2];
    set FAMILY default
else
    set FAMILY $argv[2]
end

mkdir -p "/tmp/github.com/libreaires/librefont"
set TMP "/tmp/github.com/libreaires/librefont"

switch $argv[1]
    case "--all"
        set OUT contents
    case "--webfont"
        set OUT webfont
    case "--font"
        set OUT ttf
    case "$clear"
        rm -rf $TMP
        exit 0
    case --help
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

set REPO "https://github.com/be5invis/Iosevka.git"
echo "Starting git cloning process in:"
set SRC "$TMP/src" & set -a locations "$SRC"
git clone --quiet $REPO $SRC & set -l pid $last_pid

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

echo "Git cloning process finished successfully!"

rm -rf $SRC/packages
rm -rf $SRC/params

ln -s (pwd)/pkgs $SRC/packages
ln -s (pwd)/args $SRC/params
ln -s (pwd)/blueprint.toml $SRC/private-build-plans.toml

cd $SRC
npm install

echo -e -n (set_color green) \
    "SOURCE SUCCESSFULLY BUILT!" (set_color grey) \
        "Location:" "$SRC" (set_color normal)

# npm run build -- "$OUT::$FAMILY"