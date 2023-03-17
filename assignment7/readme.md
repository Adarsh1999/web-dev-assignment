**INFO6150 Assignment 7**


Concept: Pokemon Pokedex

Introduction:
The two-page website is based on the concept of Pokemon Pokedex. The first page is the home page where the user can see the the list of different pokemons. The second page is a login page where the user can log in to their account to access the home page features.

CSS Grid and Flexbox:
Both the pages have been designed using CSS Grid and Flexbox. CSS Grid is used to create the layout for the home page, whereas Flexbox is used to align elements on the login page.

SASS Features:
The following SASS features have been implemented in the project:

a. Variables: Variables are used to define colors, font-sizes, and other commonly used values.

b. Custom Properties: Custom properties are used to define specific values for elements, such as the background-color of the header.

c. Nesting: Nesting is used to organize the code and to make it easier to read. It was used in almost all the scss files for each different component


d. Interpolation: Interpolation is used to create dynamic CSS rules based on variables.

e. Placeholder Selectors: Placeholder selectors are used to define styles that can be reused throughout the code. It was used for giving flex properties to different components like align-center

f. Mixins: Mixins are used to define reusable styles that can be applied to different elements.

g. Functions: Functions are used to perform calculations, such as converting pixels to rems.

h. Multiple sass files were created for different components and all were imported to a style.scss file

i. Media queries were used to make the website responsive

SASS File Organization:
The SASS files are organized based on UI features. There are separate files for the header, search box, and login form. There is also a file for common elements, such as variables and mixins.

UI Design:
The UI design for both pages is simple and clean. The color scheme is based on the Pokemon brand colors, with shades of blue and yellow. The search box on the home page is designed to be user-friendly, with suggestions for popular Pokemon as the user types. The login page has a simple form with custom styles for the input fields and buttons.

Pages:-


Guess Who
The Guess Who page is built using the guesswho.scss file. The page features a game where players guess the name of a character. The page layout is designed using Flexbox, and the styling is implemented using SCSS features such as nesting, variables, custom properties, interpolation, and placeholder selectors.

Pokemon Container
The PokeHub page is built using the container.scss file. The page displays a list of Pokemon characters fetched from an API. The page layout is designed using CSS Grid layout, and the styling is implemented using SCSS features such as nesting, variables, custom properties, interpolation, and placeholder selectors.

SCSS Files
The SCSS files are organized into multiple files based on UI features, common elements, or themes. Here's a breakdown of the SCSS files:

style.scss: imports all the other SCSS files and includes global styles
navbar.scss: contains styling for the navigation bar
hero.scss: contains styling for the hero section of the Guess Who page
container.scss: contains styling for the Pokemon character list on the PokeHub page
footer.scss: contains styling for the footer of both pages
guesswho.scss: contains styling for the Guess Who page
login.scss: contains styling for the login form


Conclusion:
The project showcases the use of CSS Grid, Flexbox, and SASS features to create a rich and organized UI design for the Pokemon Pokedex website. The code is well-organized and easy to read, making it easy to maintain and update in the future.