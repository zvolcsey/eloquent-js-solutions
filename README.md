# My Solutions to the Exercises From Eloquent Javascript Book

# Overview

> ### This repository contains my solutions to the exercises from the Eloquent JavaScript book (4th edition, 2024) by Marijn Haverbeke.

## Table of Contents

1. [Run locally](#run-locally)
2. [License](#license)

## Run locally

You need have Node.js 20 or higher.

### Steps

1. **Clone this repository**

```sh
  git clone git@github.com:zvolcsey/eloquent-js-solutions.git
  cd eloquent-js-solutions
```

2. **Install dependencies**

```sh
  npm ci
```

3. **Build the solutions files**

```sh
  # Remove the old 'generated' folder and compile the solutions files
  # This script combines the 'clean' and 'build' tasks
  npm run prepublish
```

4. **Navigate to the desired chapter and run the solution**

```sh
  cd generated/chapter-{number}
  node {js file name}
```

### Example

For example, to run the solution for the chessboard exercise from Chapter 2:

```sh
  cd generated/chapter-2
  node chessboard.js
```

## License

MIT License. See the [LICENSE](LICENSE) file for more details.
