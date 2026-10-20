# 🍽️ Zaiqa — Live 3D & AR Digital Menu

> **A next-generation digital restaurant menu that lets customers explore dishes in interactive 3D and preview them in their real environment using Augmented Reality.**

🌐 **Live Demo:** https://technologicinnovations.ltd/zaiqa/

---

## 📖 Overview

**Zaiqa** is a web-based digital restaurant menu designed to make the dining experience more interactive and informative.

Instead of relying only on traditional food photographs, Zaiqa allows customers to:

- Scan a **QR code** at their table
- Browse the restaurant's live digital menu
- Explore dishes using **interactive 3D models**
- Rotate and zoom dishes directly in the browser
- Place supported dishes on their real table using **Augmented Reality (AR)**
- View accurate pricing, descriptions and categories

No mobile application is required.

The system is designed to help customers better understand **portion size, plating, presentation and appearance** before ordering.

---

## ✨ Key Features

### 🧊 Interactive 3D Food Models

Dishes with available `.glb` models can be viewed interactively directly from the browser.

Customers can:

- Rotate the dish
- Zoom in and out
- Inspect the presentation from different angles
- Interact with the model on mobile and desktop

If a dish does not have a 3D model yet, Zaiqa displays a clear **"3D Coming Soon"** state instead of breaking the user experience.

---

### 📱 Augmented Reality Preview

Supported mobile devices can display dishes directly inside the customer's physical environment.

Customers can select:

> **View in your space**

and preview the dish on their table using the device camera.

#### Android

Uses:

- `.glb`
- WebXR / Scene Viewer

#### iOS

Can optionally use:

- `.usdz`
- Apple's Quick Look

This allows customers to understand the approximate presentation and scale of a dish before ordering.

---

### 🗄️ Live Database-Driven Menu

The menu is not hard-coded into the frontend.

Restaurant data is stored in **MySQL**, including:

- Categories
- Dish names
- Descriptions
- Prices
- Images
- 3D model paths
- AR model paths

The customer-facing menu retrieves the latest information from the backend whenever it loads.

This means restaurant staff can update the menu without modifying frontend code.

---

### 🔐 Secure Admin Dashboard

Zaiqa includes a dedicated administration system for restaurant staff.

Administrators can:

- Add categories
- Edit categories
- Delete categories
- Add dishes
- Edit dishes
- Delete dishes
- Manage dish prices
- Manage descriptions
- Manage images
- Manage 3D model paths
- Manage AR model paths
- Manage staff accounts

The administration area uses a **separate login page** that is not exposed through the public customer menu.

Passwords are stored using secure password hashing rather than plain text.

---

### 📱 Responsive Design

The application is designed primarily around the QR-code dining experience.

It supports:

- Mobile phones
- Tablets
- Desktop browsers

The interface adapts to different screen sizes so customers can comfortably browse the menu after scanning a table QR code.

---

### 🎨 Modern User Experience

The interface includes:

- Smooth scrolling
- Category navigation
- Interactive dish cards
- Dish detail views
- 3D model interaction
- AR launch controls
- Responsive layouts
- Animated UI elements

The goal is to make the digital menu feel like a modern restaurant product rather than a traditional static webpage.

---

# 🏗️ System Architecture

```text
                         Customer
                            │
                            │ QR Code
                            ▼
                 ┌─────────────────────┐
                 │   Zaiqa Web Menu    │
                 │ HTML / CSS / JS     │
                 └──────────┬──────────┘
                            │
                            │ HTTP Request
                            ▼
                 ┌─────────────────────┐
                 │     PHP Backend     │
                 │       + PDO         │
                 └──────────┬──────────┘
                            │
                            │ SQL Queries
                            ▼
                 ┌─────────────────────┐
                 │       MySQL         │
                 │                     │
                 │ Categories          │
                 │ Dishes              │
                 │ Prices              │
                 │ Descriptions        │
                 │ Model Paths         │
                 │ Staff Accounts      │
                 └─────────────────────┘
                            │
                            │
                ┌───────────┴───────────┐
                │                       │
                ▼                       ▼
         ┌──────────────┐       ┌──────────────┐
         │ 3D Viewer    │       │  AR Viewer   │
         │    .glb      │       │ .glb / .usdz │
         └──────────────┘       └──────────────┘
```

---

# 🔄 How Zaiqa Works

### 1. Restaurant Staff

Staff members log into the administration dashboard.

They can create or modify:

```text
Category
   ↓
Dish
   ├── Name
   ├── Description
   ├── Price
   ├── Image
   ├── GLB Model
   └── USDZ Model
```

The information is stored in MySQL.

---

### 2. Customer Scans QR Code

A customer scans the QR code located at their restaurant table.

The browser opens the Zaiqa menu.

No application installation is required.

---

### 3. Menu Loads From Database

The frontend requests the latest menu information from the PHP backend.

The backend retrieves the data from MySQL and returns the relevant menu information.

---

### 4. Customer Explores a Dish

If a 3D model exists:

```text
Dish
 ↓
3D Model Available
 ↓
Interactive 3D Viewer
```

If a model does not exist:

```text
Dish
 ↓
No 3D Model
 ↓
"3D Coming Soon"
```

---

### 5. Customer Uses AR

On supported devices:

```text
View in your space
        ↓
Device Camera
        ↓
AR Environment
        ↓
3D Dish Placement
```

The customer can visually inspect how the dish could appear in their environment.

---

# 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5 |
| Styling | CSS3 |
| Client-side Logic | JavaScript |
| 3D / AR | Google `model-viewer` |
| 3D Rendering | WebGL |
| AR | WebXR / Scene Viewer / Quick Look |
| 3D Assets | `.glb` / `.usdz` |
| Backend | PHP |
| Database Access | PDO |
| Database | MySQL |
| Authentication | PHP Authentication + Password Hashing |
| Hosting | cPanel Shared Hosting |
| Deployment | HTTPS |

---

# 🧊 3D & AR Technology

Zaiqa uses Google's **`<model-viewer>`** component to provide browser-based 3D and AR functionality.

The same web application can provide different experiences depending on the user's device.

```text
                    Zaiqa
                      │
                      ▼
               model-viewer
                      │
          ┌───────────┴───────────┐
          │                       │
          ▼                       ▼
       Desktop                 Mobile
          │                       │
          ▼                       ▼
    Interactive 3D          Interactive 3D
                                  │
                                  ▼
                                AR
                         ┌────────┴────────┐
                         │                 │
                       Android            iOS
                         │                 │
                       .glb              .usdz
                         │                 │
                  Scene Viewer        Quick Look
```

---

# 🗄️ Database

The application uses **MySQL** as the primary relational database.

The database stores dynamic restaurant information rather than embedding menu data directly into frontend code.

Typical entities include:

```text
Categories
    │
    └──────< Dishes

Staff
    │
    └────── Authentication / Management
```

A dish can contain information such as:

```text
Dish
├── ID
├── Category
├── Name
├── Description
├── Price
├── Image Path
├── GLB Model Path
├── USDZ Model Path
└── Created / Updated information
```

This architecture allows restaurant staff to manage the menu without requiring developer intervention.

---

# 🔐 Security

Security considerations include:

- Password hashing
- Separate admin authentication
- Server-side authorization
- PDO-based database access
- Input validation
- Database-driven access control
- HTTPS deployment

Passwords are never intended to be stored as plain-text values.

The administration interface is intentionally separated from the public customer menu.

---

# 📂 Suggested Project Structure

```text
zaiqa/
│
├── index.php
│
├── admin/
│   ├── login.php
│   ├── dashboard.php
│   ├── categories/
│   ├── dishes/
│   └── staff/
│
├── api/
│   ├── menu.php
│   ├── categories.php
│   └── dishes.php
│
├── config/
│   └── database.php
│
├── includes/
│   ├── auth.php
│   ├── header.php
│   └── footer.php
│
├── assets/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── models/
│       ├── glb/
│       └── usdz/
│
├── database/
│   └── schema.sql
│
└── README.md
```

> Adjust this structure to match the actual repository structure if your implementation differs.

---

# 🚀 Getting Started

## Requirements

For local development you will need:

- PHP 8+
- MySQL 8+ or compatible MySQL/MariaDB version
- Apache or another PHP-compatible web server
- Modern web browser
- HTTPS for production AR functionality

---

## 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/zaiqa.git
cd zaiqa
```

---

## 2. Configure MySQL

Create a database:

```sql
CREATE DATABASE zaiqa;
```

Import the database schema:

```bash
mysql -u YOUR_USERNAME -p zaiqa < database/schema.sql
```

---

## 3. Configure Database Connection

Update the application's database configuration with:

```text
Database Host
Database Name
Database Username
Database Password
```

Do not commit production database credentials to GitHub.

---

## 4. Start the Application

For a simple PHP development server:

```bash
php -S localhost:8000
```

Then open:

```text
http://localhost:8000
```

---

# 📱 AR Requirements

AR functionality depends on browser and device support.

For production deployment:

- Use HTTPS
- Provide valid `.glb` models
- Provide `.usdz` models where required for iOS
- Test AR on physical devices
- Ensure model files are accessible from the deployed domain

Desktop browsers can still use the interactive 3D viewer even when AR is unavailable.

---

# 🎯 Use Cases

Zaiqa can be used by:

- Restaurants
- Cafés
- Hotels
- Food courts
- Cloud kitchens
- Fine-dining establishments
- Dessert shops
- Bakeries
- Catering businesses

The platform is particularly useful for restaurants where **visual presentation and portion perception** are important.

---

# 💡 Why 3D + AR for Food Menus?

Traditional menus usually provide:

```text
Dish Name
+
Description
+
Price
+
Photo
```

Zaiqa adds another dimension:

```text
Dish Name
       +
Description
       +
Price
       +
Photo
       +
Interactive 3D
       +
Augmented Reality
```

This allows customers to inspect the dish from multiple angles and, on supported devices, preview it within their own physical environment.

---

# 📊 Project Highlights

### Database Engineering

- Dynamic MySQL-backed menu
- Relational data model
- CRUD operations
- Staff management
- Database-driven content
- Server-side data retrieval

### Backend Engineering

- PHP backend
- PDO database access
- Authentication
- Administrative CRUD operations
- Dynamic API/data loading

### Frontend Engineering

- Responsive UI
- JavaScript interactions
- Dynamic category navigation
- Interactive dish details
- 3D model integration
- AR integration

### 3D / AR

- `.glb` model support
- `.usdz` model support
- WebGL-based 3D rendering
- WebXR support where available
- Android Scene Viewer
- iOS Quick Look

---

# 🧪 Testing Checklist

Before deploying a restaurant menu, test:

```text
[ ] Customer menu loads
[ ] Categories load correctly
[ ] Dishes load correctly
[ ] Prices display correctly
[ ] Dish descriptions display correctly
[ ] Missing 3D models show fallback state
[ ] GLB models load correctly
[ ] 3D rotation works
[ ] 3D zoom works
[ ] AR works on supported Android devices
[ ] USDZ works on supported iOS devices
[ ] Admin login works
[ ] Invalid login is rejected
[ ] Staff permissions work
[ ] Category CRUD works
[ ] Dish CRUD works
[ ] Staff management works
[ ] Database connection works
[ ] HTTPS is enabled in production
```

---

# 🔮 Future Roadmap

## Phase 1 — Digital Ordering

- [ ] Shopping cart
- [ ] Add-to-cart functionality
- [ ] Table identification
- [ ] Order placement
- [ ] Order tracking

## Phase 2 — Payments

- [ ] Online payment integration
- [ ] Payment verification
- [ ] Digital receipts
- [ ] Order history

## Phase 3 — Restaurant Operations

- [ ] Kitchen dashboard
- [ ] Order management
- [ ] Real-time order status
- [ ] Staff roles and permissions
- [ ] Sales analytics

## Phase 4 — Mobile Applications

Wrap the existing web application using:

- Capacitor
- Android
- iOS

The goal is to reuse the existing web codebase while providing native application capabilities.

## Phase 5 — Multi-Restaurant Platform

Support:

```text
Platform
│
├── Restaurant A
│   ├── Branch 1
│   └── Branch 2
│
├── Restaurant B
│   ├── Branch 1
│   └── Branch 2
│
└── Restaurant C
```

This would transform Zaiqa from a single restaurant menu into a multi-tenant restaurant platform.

## Phase 6 — Advanced Visual Experiences

Future experiments may include:

- Hologram pyramid displays
- Fan-based holographic displays
- Large in-store 3D displays
- Interactive restaurant kiosks

---

# 🌐 Live Demo

Experience the deployed version of Zaiqa:

**https://technologicinnovations.ltd/zaiqa/**

---

# 📸 Screenshots

Add screenshots of the application here:

```text
docs/screenshots/
├── home.png
├── menu.png
├── dish-details.png
├── 3d-viewer.png
├── ar-preview.png
└── admin-dashboard.png
```

Example:

```markdown
![Zaiqa Menu](docs/screenshots/menu.png)
```

---

# 📚 Learning & Engineering Areas

This project demonstrates practical experience with:

```text
Web Development
      │
      ├── HTML
      ├── CSS
      └── JavaScript
             │
             ▼
Backend Engineering
      │
      ├── PHP
      ├── PDO
      └── Authentication
             │
             ▼
Database Engineering
      │
      └── MySQL
             │
             ▼
3D Web Development
      │
      ├── WebGL
      └── model-viewer
             │
             ▼
Augmented Reality
      │
      ├── WebXR
      ├── Scene Viewer
      └── Quick Look
```

---

# 🤝 Contributing

Contributions, ideas and improvements are welcome.

A typical contribution workflow:

```bash
git clone <repository>
git checkout -b feature/your-feature
```

Make your changes, test them, and submit a pull request.

---

# 📄 License

Add the license appropriate for your project.

If this is a proprietary client/business project, do not add an open-source license without confirming that the project owner permits it.

---

# 👩‍💻 Author

**Maryam Abdul Karim**

AI Engineer | Machine Learning | AI Agents | RAG | Python | Django

Interested in building intelligent systems that combine:

**AI + Software Engineering + Data + Real-World Applications**

---

## ⭐ Support

If you find this project interesting, consider giving the repository a ⭐ on GitHub.

---

<p align="center">
  Built with ❤️ using PHP, MySQL, JavaScript, 3D & Augmented Reality
</p>
