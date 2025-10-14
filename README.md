# SBD WELCOME CODE GENERATOR (APP)
Generates unique 10% off welcome coupon codes for new SnowBigDeal subscribers. When a visitor joins the email or SMS list, the app automatically creates a single-use coupon in BigCommerce and syncs it to Mailchimp so the code can be sent instantly in the welcome message.

## Coupon Details
- **Offer:** 10% Off Any Product (Excluding Samples & Demo/Used Gear)
- **Expiration:** 30 Days
- **Usage:** Single Use
- **Format:** 8-Character Random String

## Task Pipeline
- Visitor Subscribes to SnowBigDeal Email or SMS Service
- A Code is Generated on BigCommerce and Supplied to Mailchimp
- Subscriber Recieves a Welcome Message (Email/SMS) with Code

## Qualified Audience (Manual Subscribers Only)
- We only want to generate codes for a qualified audience of manual subscribers—not subscribers automatically added to our audience via a purchase.

## BigCommerce Code Generation
- New Codes are generated in BigCommerce under the existing Welcome Coupon promotion (#50) as sub-codes.

## Node Packages & Dependencies

### Production Dependencies
- **express** (v5.1.0) - Web application framework for handling HTTP requests and webhook endpoints
- **dotenv** (v17.2.3) - Loads environment variables from .env file for secure API key management

### Development Dependencies
- **nodemon** (v3.1.10) - Automatically restarts the server during development when files change