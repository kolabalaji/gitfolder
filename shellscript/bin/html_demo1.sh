 #!/bin/bash

# make_page - A script to produce an HTML file

title="System Information for"

cat <<- _EOF_
    <HTML>
    <HEAD>
        <TITLE>
        $title $HOSTNAME
        </TITLE>
    </HEAD>

    <BODY>
    <H1>$title $HOSTNAME</H1>
    <P>Updated on $(date +"%x %r %Z") by $USER
    </BODY>
    </HTML>
_EOF_
       
