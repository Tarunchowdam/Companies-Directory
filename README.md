
## Companies Directory – React + MUI

A responsive **Companies Directory Web App** built using **React.js** and **Material UI (MUI)**.  
It displays a list of companies with their logos, industries, locations, and links, along with powerful search and filter options.


## Features

- 🔍 **Search Functionality** – Instantly search companies by name  
- 🏙️ **Filter Options** – Filter by location and industry  
- 🔄 **Sorting** – Sort companies alphabetically (A–Z)  
- 📄 **Pagination** – Navigate easily through large company lists  
- 🎨 **Modern UI** – Built with Material UI components and a sleek dark theme  
- 📱 **Responsive Design** – Fully optimized for **desktop (4 cards/row)**, **tablet (2 cards/row)**, and **mobile (1 card/row)**  
- ⚡ **Local Data** – Uses `companies.json` for easy testing and updates  


##  Project Structure

```

📦 companies-directory/
├── 📁 public/
│   └── index.html
├── 📁 src/
│   ├── 📁 components/
│   │   ├── CompanyCard.jsx
│   │   ├── CompanyList.jsx
│   │   └── SearchFilter.jsx
│   ├── 📁 data/
│   │   └── companies.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── package.json

````


##  Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/companies-directory.git
   cd companies-directory

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Project**

   ```bash
   npm run dev


4. Open in Browser:

   http://localhost:5173


##  Code Walkthrough

The main component `CompanyList.jsx` handles **searching**, **filtering**, **sorting**, and **pagination**.
Company details are stored in `companies.json` and displayed via the `CompanyCard` component, styled using MUI’s `Card`, `Typography`, and `Button`.
A custom search/filter toolbar allows real-time filtering by name, location, and industry.
When no results match, a visually centered message (“No companies found 😔”) appears gracefully.
The app uses **MUI Grid** for responsive layout—showing 4 cards per row on desktop, 2 on tablets, and 1 on mobile—ensuring a consistent user experience across devices.


## 🖥️ Responsive Design

| Device Type | Cards per Row | Layout Behavior                      |
| ----------- | ------------- | ------------------------------------ |
| Desktop     | 4             | Full-width grid with spacing         |
| Tablet      | 2             | Compact layout with adjusted padding |
| Mobile      | 1             | Single column with stacked cards     |


## 📚 Technologies Used

* **React.js** – Frontend framework
* **Material UI (MUI)** – UI components and layout
* **Vite** – Development and build tool
* **JSON** – Local data storage
---

