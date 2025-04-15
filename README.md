# Intro component with sign up form

A responsive sign-up form component with real-time validation, built as a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1).

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/intro-component-with-sign-up-hW3qTW8uNa](https://www.frontendmentor.io/solutions/intro-component-with-sign-up-hW3qTW8uNa)
- Live Site URL: [https://repro123.github.io/intro-with-form/](https://repro123.github.io/intro-with-form/)

### Features

- Form validation with error messages
- Password strength requirements:
  - Minimum 8 characters
  - At least one uppercase letter
  - At least one lowercase letter
  - At least one number
  - At least one special character (!@#$%^&\*)
  - No spaces
- Responsive design for mobile and desktop
- Accessible form elements with:
  - ARIA live regions for error messages
  - Screen reader-only text
  - Semantic HTML
- CSS custom properties for easy theming
- Modern CSS features:
  - `clamp()` for fluid typography
  - CSS Grid and Flexbox
  - Mobile-first workflow

## Technologies Used

- HTML5 Semantic Markup
- CSS3 with Custom Properties
- JavaScript (ES6+)
- Responsive Web Design
- Accessibility Best Practices

### Key Implementation Details

## CSS Features

- Fluid typography using `clamp()`

```css
:root {
  /* Colors */
  --clr-primary-red: hsl(0, 100%, 74%);
  --clr-primary-green: hsl(154, 59%, 51%);
  --clr-accent-blue: hsl(248, 32%, 49%);

  /* Font Sizes */
  --fs-paragraph: clamp(1rem, 0.692rem + 0.481vw, 1.125rem);
  --fs-main-header: clamp(2rem, 1.714rem + 1.429vw, 3rem);

  /* Spacing */
  --pad-form: clamp(1rem, 0.571rem + 2.143vw, 2.5rem);
}
```

- Custom properties for theme colors and spacing
- Mobile-first responsive design
- Modern layout techniques (Grid/Flexbox)
- Accessible focus states

## JavaScript Validation

- Dynamic error message handling
- Data attributes for invalid state tracking
- Form reset on successful submission

## Accessibility

- Semantic HTML structure
- ARIA live regions for dynamic content
- Screen reader-only text
- Color contrast compliant with WCAG

## Author

- Frontend Mentor - [@repro123](https://www.frontendmentor.io/profile/repro123)
- Twitter - [@Dr_Repro](https://www.twitter.com/Dr_Repro)
