# Web Application Task Automation using Gulp

## Introduction
This project is a web application that automates various development tasks using Gulp, a toolkit that streamlines repetitive tasks in the workflow. Key tasks include compiling SCSS to CSS, minifying CSS and JavaScript, adding vendor prefixes, optimizing images, and minifying HTML. By automating these processes, the project aims to make the development process faster and more efficient.

## Table of Contents
- [Packages Used](#packages-used)
  - [Gulp](#gulp)
  - [gulp-sass](#gulp-sass)
  - [gulp-clean-css](#gulp-clean-css)
  - [gulp-uglify](#gulp-uglify)
  - [gulp-autoprefixer](#gulp-autoprefixer)
  - [gulp-htmlmin](#gulp-htmlmin)
  - [gulp-imagemin](#gulp-imagemin)
  - [gulp-concat](#gulp-concat)
- [Gulp Tasks](#gulp-tasks)
  - [Compile SCSS to CSS](#compile-scss-to-css)
  - [Minify CSS](#minify-css)
  - [Minify JavaScript](#minify-javascript)
  - [Minify HTML](#minify-html)
  - [Optimize Images](#optimize-images)
  - [Default Task](#default-task)
- [Installation](#installation)
- [Running Gulp Tasks](#running-gulp-tasks)
- [Conclusion](#conclusion)

## Packages Used

### Gulp
**Gulp** is the core toolkit used for automating tasks such as file transformations, watching files, and running tasks in parallel or sequentially.

#### Installation:
```bash
npm install --save-dev gulp