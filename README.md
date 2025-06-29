# RentYard - Property Management Platform

A modern, comprehensive property management web application built with Next.js, React, and TypeScript. RentYard streamlines the process of listing and managing rental properties with an intuitive multi-step workflow.

## 🏠 Features

### Core Functionality

- **Multi-Step Property Setup**: Guided workflow for property listing creation
- **Property Type Selection**: Support for Single House, Apartment Complex, and Condominiums
- **Role-Based Access**: Landlord and Realtor management options
- **Comprehensive Property Information**: Detailed property data management
- **Document Upload & Verification**: File upload capabilities for realtor verification
- **Subscription Management**: Multiple pricing tiers with payment processing
- **Summary & Review**: Complete overview of property information before publishing

### Property Management Features

- **Property Address Management**: Complete address and location details
- **Leasing Information**: Contact details and leasing manager information
- **Charges & Fees**: Application fees, admin fees, and pet fees configuration
- **Rent Payment Settings**: Frequency, due dates, and payment reminders
- **Application Agreements**: Customizable application terms and conditions
- **Property Descriptions**: Detailed property information and amenities
- **Media Management**: Photo gallery and video upload capabilities
- **Amenities & Features**: Community features and property amenities
- **Location Details**: Nearby educational institutions, stations, and landmarks
- **Utilities Information**: Service provider details

### User Experience

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Form Validation**: Comprehensive input validation and error handling
- **Progress Tracking**: Visual progress indicators throughout the workflow
- **Modal Interactions**: Seamless modal-based form interactions
- **File Upload**: Drag-and-drop file upload functionality

## 🛠️ Tech Stack

### Frontend

- **Next.js 15.3.4**: React framework with App Router
- **React 19.0.0**: Latest React with concurrent features
- **TypeScript 5**: Type-safe development
- **Tailwind CSS 4**: Utility-first CSS framework
- **Framer Motion 12.19.2**: Smooth animations and transitions
- **React Icons 5.5.0**: Comprehensive icon library

### Development Tools

- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing
- **Turbopack**: Fast development bundler

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page with property type selection
│   ├── property-type/     # Property type selection
│   ├── property-info/     # Detailed property information
│   ├── realtor-verification/ # Realtor verification process
│   ├── condominiums-info/ # Condominium-specific information
│   ├── subscription/      # Subscription and payment plans
│   ├── summary/          # Property summary and review
│   └── next-step/        # Next steps after completion
├── components/            # Reusable React components
│   ├── Button.tsx        # Custom button component
│   ├── Card.tsx          # Card layout component
│   ├── Checkbox.tsx      # Custom checkbox component
│   ├── FileUpload.tsx    # File upload component
│   ├── Header.tsx        # Application header
│   ├── Modal.tsx         # Modal dialog component
│   └── SectionTitle.tsx  # Section title component
└── globals.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or bun package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd task-2
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Application Workflow

1. **Property Type Selection**: Choose between Single House, Apartment Complex, or Condominiums
2. **Role Selection**: Identify as Landlord or Realtor
3. **Property Information**: Fill in comprehensive property details
4. **Realtor Verification** (if applicable): Upload verification documents
5. **Subscription Selection**: Choose from Regular, Platinum, or Enterprise plans
6. **Summary & Review**: Review all information before final submission
7. **Completion**: Receive confirmation and next steps

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:

- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**RentYard** - Simplifying property management for landlords and realtors.
