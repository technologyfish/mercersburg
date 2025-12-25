# Styles Documentation

## SCSS Setup

This project uses SCSS for styling. The main SCSS file is `style.scss`, which compiles to `style.css`.

### Compiling SCSS to CSS

To compile the SCSS file to CSS, you can use one of the following methods:

#### Method 1: Using Sass CLI

```bash
# Install Sass globally
npm install -g sass

# Watch for changes and auto-compile
sass --watch web/css/style.scss:web/css/style.css

# One-time compilation
sass web/css/style.scss web/css/style.css
```

#### Method 2: Using npm scripts

Add to your `package.json`:

```json
{
  "scripts": {
    "sass:watch": "sass --watch web/css/style.scss:web/css/style.css",
    "sass:build": "sass web/css/style.scss web/css/style.css --style compressed"
  },
  "devDependencies": {
    "sass": "^1.69.5"
  }
}
```

Then run:
```bash
npm install
npm run sass:watch  # For development
npm run sass:build  # For production
```

## File Structure

- `style.scss` - Main SCSS source file (edit this)
- `style.css` - Compiled CSS file (auto-generated, don't edit directly)
- `style.css.map` - Source map for debugging

## SCSS Features Used

- **Variables**: Colors, fonts, and sizes are defined as variables for easy maintenance
- **Nesting**: Selectors are nested for better organization
- **Parent Selector (&)**: Used for hover states and modifiers
- **Mixins**: Can be added for reusable styles

## Development Workflow

1. Edit `style.scss` for all styling changes
2. Run `sass --watch` to auto-compile on save
3. Test changes in the browser
4. Commit both `.scss` and `.css` files to version control

