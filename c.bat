:node node_modules\babel-cli\bin\babel.js app\scripts\controllers\dbconn.es6 --out-file app\scripts\controllers\dbconn.js

:node node_modules\babel-cli\bin\babel.js app\scripts\controllers\overtimerule.es6 --out-file app\scripts\controllers\overtimerule.js

node node_modules\babel-cli\bin\babel.js app\scripts\controllers\*.es6 --out-dir .
