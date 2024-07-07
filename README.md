
# Hospital API

This project is an API for managing hospital data, built using Node.js and Express.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ArijitKar2001/hospitalapi.git
   ```
2. Navigate to the project directory:
   ```bash
   cd hospitalapi
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   node index.js
   ```
2. The server will be running on `http://localhost:3000`.

## Project Structure

```
hospitalapi/
├── configs/        # Configuration files
├── controllers/    # Route controllers
├── middlewares/    # Custom middlewares
├── models/         # Database models
├── routes/         # API routes
├── utils/          # Utility functions
├── .gitignore      # Git ignore file
├── index.js        # Main server file
├── package-lock.json
├── package.json
```

## API Endpoints

### Patients
- `POST /api/patient/register` - Add a new patient
- `POST /api/patient/:id/create_report` - Create a report of a specific patient
- `GET /api/patient/:id/all_reports` - Get all the reports of a specific patient

### Doctors
- `POST /api/doctor/register` - Add a new doctor
- `POST /api/doctor/login` - Login doctor

### Reports
- `GET /api/reports/:status` - Get all the reports based on status

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m 'Add some awesome feature'`)
4. Push to the branch (`git push origin feature/awesome-feature`)
5. Open a pull request
