# Business Performance & Revenue Analytics Dashboard

A beginner-friendly dashboard built with **HTML, CSS and JavaScript**. It uses local dummy data, so you do not need a backend, database, React, or build tools.

## Files

- `index.html` — dashboard layout and sections
- `styles.css` — colors, layout, responsive design
- `data.js` — dummy leads, quotations, deals, orders and payments
- `script.js` — filters, charts, search, drill-down details and CSV export

## Run the project

1. Download and extract the ZIP.
2. Open the `business-analytics-dashboard` folder.
3. Double-click `index.html` to open it in your browser.

Chart.js is loaded from a CDN, so an internet connection is needed for charts. The rest of the project is plain HTML/CSS/JS.

## Interactions included

- Date filters: Today, Last 7 Days, Last 30 Days and Custom Range
- Team and lead-source filters
- KPI cards and comparison percentage indicators
- Charts update when filters change
- Search services and leads
- Click quotation rows, leads, deals, payments and orders to open linked details
- Filter orders by status
- Export filtered lead data to CSV
- Responsive layout for desktop and mobile

## Data relationships

- A lead can have multiple quotations.
- A lead can be linked to a deal.
- A deal can have multiple orders and payments.
- All data is stored in `data.js`; there is no database.

## Easy customization

Open `data.js` and edit the sample arrays. Keep each record's IDs consistent, for example `leadId` in a quotation must match an existing lead's `id`.
