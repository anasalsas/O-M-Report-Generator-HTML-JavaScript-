# O&M Report Generator

A simple web-based tool for generating Operation & Maintenance (O&M) reports for photovoltaic (PV) installations.  
The application allows users to input site and maintenance data and export it automatically as **PDF** and **Excel** reports.

**Project Context & Presentation**
This project was developed and structured as a complete end-to-end case, including a supporting presentation deck. The deck was used to frame the business problem, define the solution approach, and communicate the expected operational and data-driven benefits for O&M stakeholders in photovoltaic operations.

---

## Overview

In O&M operations for solar PV plants, reporting is often manual, inconsistent, and time-consuming.

This tool was built to:
- Standardize maintenance reporting
- Reduce manual effort
- Improve data consistency across sites
- Enable fast export of structured reports

---

## Features

- Dynamic maintenance form with conditional sections:
  - Preventive inspection
  - Corrective actions
  - Cleaning activities

- Site information capture:
  - Maintenance ID
  - Location (city, latitude, longitude)
  - Panel orientation and tilt
  - Installation type
  - Structure type

- Automated exports:
  - PDF report generation (timestamped filename)
  - Excel export of form data

- Interactive UI:
  - Show/hide sections based on maintenance type selection

---

## Tech Stack

- HTML
- CSS
- JavaScript 
- html2canvas
- jsPDF
- SheetJS - EXCEL (xlsx)

## Live Demo

A fully working version of this O&M reporting tool is deployed using GitHub Pages:

 https://anasalsas.github.io/O-M-Report-Generator-HTML-JavaScript-/

You can interact with the form, generate a PDF report, and export data to Excel directly from the browser.


## Future Improvements

Planned enhancements for this project include:

- Improved UI/UX design for a more professional O&M report layout
- Dashboard view with aggregated maintenance KPIs
