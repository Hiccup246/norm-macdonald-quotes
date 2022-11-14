# 🎤 [Norm Macdonald Quotes](https://www.normmacdonaldquotes.com/)

![](https://img.shields.io/github/license/Hiccup246/norm-macdonald-quotes)
![](https://img.shields.io/github/languages/code-size/Hiccup246/norm-macdonald-quotes)
![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=norm-macdonald-quotes)

A website to honor the late and great Norm Macdonald by spreading his words to the world.

![](https://i.imgur.com/eaJoxo3.png)

<br>

# 📝 Description

Norm Macdonald Quotes is a simple, mobile friendly online quote generation site. When the "Quote Me" button is pressed a random quote from Norm MacDonald will be displayed.

The motivation for the website was to learn about Svelte and to honor a comedian who has made me laugh even at my lowest points. The website is hosted using [Vercel](https://vercel.com/), built in [SvelteKit](https://kit.svelte.dev/docs/introduction) and designed in [Figma](https://www.figma.com/).

<br>

# 🧱 Project Structure

The project consists of 4 key visual components, a single public API and a JSON file of Norm Macdonald quotes which together enable the site to function.

The core of the project is found within `src/routes/index.svelte` which composes the 4 key visual components to produce the site shown in the screenshot at the top of this readme.

As the key components are relatively simple their descriptions are shown below:

- `src/lib/NormFace/NormFace.svelete` - This component renders a square picture of Norm Macdonalds face and allows it to be flipped horizontally via a prop.
- `src/lib/QuoteBox.svelete` - This component takes a quote represented as a string prop and displays it in a styled box
- `src/lib/QuoteButton.svelete` - This component is a simple button which takes a function as a prop which is then called when the button is clicked
- `src/lib/QuoteForm.svelete` - This component composes both the `QuoteButton` and `QuoteBox` along with a function call to a Quote API to generate Norm Quotes and render them to the screen. The composition of these elements is described visually below:

  ![](https://i.imgur.com/mGObQeJ.png)

<br>

## API

The quotes API is found within `src/routes/quote.js` and consists of a single endpoint which can be accessed by a GET request to `https://www.normmacdonaldquotes.com/quote`.

The endpoint utilizes the JSON array of Norm Macdonald quotes found in `src/lib/data/quotes.json` to produce a random quote. If a random quote is found then a `200` HTTP code will be returned and the quote delivered in the response body in the format:

```json
{ "quote": "a random quote" }
```

If no quote was found then a `500` HTTP code will be returned and an empty response body.

<br>

# 🔧 Usage

After cloning this git repository, make sure to have node installed and then navigate to the root of the project and run the commands:

1. `npm install`
2. `npm run dev`

<br>

# 🌅 Future Improvements

- Make the headline "Norm Macdonald" swap between different languages
- Think about supporting different languages from within the application
- Think about allowing users to enter a phone number or email and be sent a quote
- Think about further SEO optimizations
