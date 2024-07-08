# QuickLocal-Frontend
This project contains the frontend code for QuickLocal


## Project CSS Structure

This project follows a modular CSS structure to enhance maintainability and scalability. Below is an overview of the directory organization and purpose of each section:

### Directory Structure
      /css
        /base
          reset.css       - Resets default browser styles and establishes baseline styles.
          typography.css  - Defines typography settings and font styles.
          colors.css      - Defines color palette and variables.

        /components
          buttons.css     - Styles for buttons and button variations.
          forms.css       - Styles for form elements and input fields.
          cards.css       - Styles for cards or similar component structures.

        /layout
          grid.css        - Defines grid system and layout structure.
          header.css      - Styles for header components.
          footer.css      - Styles for footer components.
          sidebar.css     - Styles for sidebar navigation or components.

        /pages
          home.css        - Page-specific styles for the home page.
          product.css     - Page-specific styles for product listing or details.
          cart.css        - Page-specific styles for shopping cart functionality.
          checkout.css    - Page-specific styles for checkout process.

        /themes
          dark-mode.css   - Styles for dark mode theme.
          light-mode.css  - Styles for light mode theme.

        /utilities
          utilities.css   - Utility classes and helper styles.
          mixins.css      - CSS mixins for reusable style patterns.
          variables.css   - Global CSS variables and custom properties.

        main.css          - Main stylesheet that imports and combines all styles.


### Description
Base
The /base directory contains foundational styles for resetting default browser styles (reset.css), defining typography (typography.css), and establishing a color palette (colors.css).

Components
The /components directory holds styles for reusable UI components such as buttons (buttons.css), forms (forms.css), and cards (cards.css).

Layout
The /layout directory defines the overall layout structure including grid systems (grid.css), header (header.css), footer (footer.css), and sidebar (sidebar.css) components.

Pages
The /pages directory contains page-specific styles for different sections of the application, including home (home.css), product (product.css), cart (cart.css), and checkout (checkout.css) pages.

Themes
The /themes directory includes styles for different visual themes, such as dark mode (dark-mode.css) and light mode (light-mode.css).

Utilities
The /utilities directory provides utility classes (utilities.css), CSS mixins (mixins.css), and global variables (variables.css) that facilitate consistent styling and responsive design across the application.

Main Stylesheet
main.css serves as the primary stylesheet that imports and combines all other styles, ensuring a cohesive and structured approach to styling the project.

