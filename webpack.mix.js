const mix = require('laravel-mix');

mix.sass('src/styles/default.scss', 'dist')
    .ts('src/scripts/index.ts', 'dist');