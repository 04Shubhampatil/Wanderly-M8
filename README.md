## Folder Structure

Top-level layout of this project:

```text
my-hotel-booking-app/
├── public/
│   └── favicon.ico
│
├── src/
│   ├── assets/                     # Static assets used across the application
│   │   ├── icons/
│   │   └── images/
│   │
│   ├── components/                # Global reusable components
│   │   ├── ui/                    # Buttons, Inputs, Cards, Modals, etc.
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Card.jsx
│   │   │   └── Modal.jsx
│   │   │
│   │   ├── layout/                # Shared layout components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Sidebar.jsx
│   │   │
│   │   └── Protection/
│   │       └── ProtectedRoute.jsx
│   │
│   ├── json/                      # Global dummy/mock JSON data
│   │   ├── hotels.json
│   │   ├── destinations.json
│   │   ├── promotions.json
│   │   ├── bookings.json
│   │   ├── reviews.json
│   │   └── users.json
│   │
│   ├── pages/                     # Page-based modules
│   │
│   │   ├── home/
│   │   │   ├── components/
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   ├── FeaturedHotels.jsx
│   │   │   │   ├── PopularDestinations.jsx
│   │   │   │   └── PromoBanner.jsx
│   │   │   └── HomePage.jsx
│   │   │
│   │   ├── about/
│   │   │   ├── components/
│   │   │   │   ├── AboutHero.jsx
│   │   │   │   ├── CompanyStory.jsx
│   │   │   │   ├── TeamSection.jsx
│   │   │   │   └── ValuesSection.jsx
│   │   │   └── AboutPage.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── components/
│   │   │   │   ├── ServiceCard.jsx
│   │   │   │   ├── BenefitsSection.jsx
│   │   │   │   └── FAQSection.jsx
│   │   │   └── ServicesPage.jsx
│   │   │
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   │   ├── LoginForm.jsx
│   │   │   │   ├── SignupForm.jsx
│   │   │   │   └── ForgotPasswordForm.jsx
│   │   │   └── AuthPage.jsx
│   │   │
│   │   ├── hotels/
│   │   │   ├── components/
│   │   │   │   ├── HotelCard.jsx
│   │   │   │   ├── HotelList.jsx
│   │   │   │   ├── SearchFilters.jsx
│   │   │   │   ├── HotelGallery.jsx
│   │   │   │   └── ReviewSection.jsx
│   │   │   ├── SearchResultsPage.jsx
│   │   │   └── HotelDetailsPage.jsx
│   │   │
│   │   ├── booking/
│   │   │   ├── components/
│   │   │   │   ├── SummaryCard.jsx
│   │   │   │   ├── PaymentForm.jsx
│   │   │   │   ├── GuestDetailsForm.jsx
│   │   │   │   └── BookingSuccess.jsx
│   │   │   └── BookingPage.jsx
│   │   │
│   │   └── contact/
│   │       ├── components/
│   │       │   ├── ContactForm.jsx
│   │       │   ├── ContactInfo.jsx
│   │       │   └── MapSection.jsx
│   │       └── ContactPage.jsx
│   │
│   ├── context/                  # React Context providers
│   │   ├── AuthContext.jsx
│   │   ├── BookingContext.jsx
│   │   └── ThemeContext.jsx
│   │
│   ├── hooks/                    # Global custom hooks
│   │   ├── useFetch.js
│   │   └── useDebounce.js
│   │
│   ├── services/                 # Shared API configuration
│   │   └── apiClient.js
│   │
│   ├── utils/                    # Utility/helper functions
│   │   ├── formatters.js
│   │   ├── validators.js
│   │   └── constants.js
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── styles/
│   │   └── index.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── eslint.config.js
├── package.json
├── vite.config.js
└── README.md
```

### Structure Guidelines

* **pages/** contains page-specific modules and their internal components.
* **components/** contains only reusable components shared across multiple pages.
* **json/** stores dummy/mock data used during development before backend integration.
* **assets/** stores global images, icons, and other static resources.
* **services/** contains API configuration and shared network utilities.
* **context/** manages global application state using React Context.
* **hooks/** contains reusable custom React hooks.
* **utils/** contains helper functions and constants used throughout the application.

Update this section whenever new top-level directories or major modules are introduced.
