# Front-end-mentorship-03

Front end mentorship's 3rd challenge

**Author:** [Soroush Hosseini](https://github.com/swrshho)

**Designer:** [Danial Salahi](https://github.com/dansalahi)

This project is my solution to Danial Salahi's front end mentorship 03 challenge.
It's an imaginary travelling site with an input for the destination and two inputs for date in and date out.
The styles were done using SASS to be more orginized and also to use SASS variables.
I had a mobile first approach in making the document responsive.
I used the Teleport API to make a dynamaic search suggestions section.

## Table Of Content

### HTML

#### Header

header contains a navbar tag to be placed exactly in center using flexbox.
there is also an unfunctional account button.

#### Main

The main elelment consists of a white container div that wraps everything in it, and a form tag that is responsible to wrap all inputs in it.
every input element is wraped inside of an div for orginizing purposes.

I used the Teleport API to create a functional search suggestions data list for the destination input.

### Styles

I first reset the entire document in \_reset.scss file,
the i added variables that ar all colors.
I added all global styles such as flexbox and typography helper classes.
I didn't add a mixins file because at the scale of this project it seemed a liitle bit overdoing.
