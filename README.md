"# How to run the project" 
Assuming you already setup the server
1. Run `composer install`
2. Visit `template.php` to explore product and category class implementaion
3. Visit `index.php` to view the display of the products.
4. Run `./vendor/bin/phpunit tests` to run tests
5. Run `./vendor/bin/phpunit --testdox tests` to run tests with more detailed information

To run the client app (Made with react)

1. `cd` into `/client` folder
2. Run npm install
3. add `.env` with `REACT_APP_API_BASE_URL` variable for the backend base url
4. run `npm run start` to start the application