# GithubAPI Project for Epicodus Code Review

#### By Chris Houghton

## Description

This is a small app using the github api to search a users account.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`
* `gulp build`

## Running / Development

* `gulp serve`
* Visit your app at [http://localhost:3000](http://localhost:3000).

## Known Bugs

_This app requires the use of an API key.

 To generate an api key on github, go to the settings page from your account home. Select Personal Access Tokens from the sidebar on the left, and click the Generate New Token button in the upper-right. Don't check any of the boxes and click Generate Token.

Now, you will need to make a new file in the parent directory titled .env. In it, include the following line of code:
```
exports.apiKey = 'YOUR_API_KEY_HERE';
```

## Technologies Used

_Node.js, Gulp, Bower, SASS. JShint_



### Legal

Copyright (c) 2016 **Chris Houghton**

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
