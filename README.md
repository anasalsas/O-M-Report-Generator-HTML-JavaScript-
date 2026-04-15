# O&M Report Generator

A simple web-based tool for generating Operation & Maintenance (O&M) reports for photovoltaic (PV) installations.  
The application allows users to input site and maintenance data and export it automatically as **PDF** and **Excel** reports.

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

- HTML5
- CSS3
- JavaScript (Vanilla)
- html2canvas
- jsPDF
- SheetJS (xlsx)
