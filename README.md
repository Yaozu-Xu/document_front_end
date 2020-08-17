## Multi language documents platform --- Front end

## Build Setup with using Docker
    cd multi-language-documents-platform-front-end
    docker-compose run -p 3000:3000 dev sh

### Or install NodeJS 12.18.3

## Launch
#### Install dependencies
    npm run install

#### Build nuxt project
    npm run build

## Only run project 
#### Run project in development mode
    npm run dev
#### Run project in production mode
    npm run start

## Run project and test
    npm run test-ci
  this command will run project firstly, and then run the test automaticly.
## Run test seperately
#### first, you need to run project first, and then
    npm run test
   
## generate static project
    npm run generate