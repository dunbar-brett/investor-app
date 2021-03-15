
# Running the Investor Application App

Just like most node applications you need to install the application's node packages.

> - Clone the repo
> - In the project directory run `npm i`

Once that is finished, you should have everything you need to start the app.

> - In the command line run `npm start`

If it doesn't open in a browser, open one and go to [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Landing Page
Using the app should be pretty straight forward. Fill out the application form with valid info, it will validate and not accept wrong data. Once you submit based on the data calculations you'll either be taken to a disqualified page or a user creation page. 

## User Registration
On the user registration form fill our the user info with a valid email address and enter in a password twice. They must match, be at least 8 characters with one number and one special character. 

## Disqualified page
Based on the info given, you may be disqualified to invest, a message is returned from the mock request and is displayed after the heading,  with additional copy to contact a fake customer service number.
