var express = require('express');
var cors = require('cors');

// Import local modules
var customers = require('./customers');
var appointments = require('./appointments');
var dashboard = require('./dashboard');
var services = require('./services');
var staff = require('./staff');
var payments = require('./payments');
var reviews = require('./reviews');
const CUSTOMERS_ROUTE = "/customers";
const APPOINTMENTS_ROUTE = "/appointments";
const SERVICES_ROUTE = "/services";
const STAFF_ROUTE = "/staff";
const PAYMENTS_ROUTE = "/payments";
const REVIEWS_ROUTE = "/reviews";
var app = express();

// Middleware required to access input passed using POST, PUT, DELETE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000',
    // Update with your React.js app's origin
    optionsSuccessStatus: 200,
}));


const PORTNO = 5000;

// Customers Routes
// Register
// Endpoint: http://localhost:5000/customers/register
// Method: POST
//input email=dipali@gmail.com&password=159753&mobile=2589631470
//all inputs are required
app.post(CUSTOMERS_ROUTE + "/register", (request, response) => customers.register(request, response));
app.post(CUSTOMERS_ROUTE + "/login", (request, response) => customers.login(request, response));
app.post(CUSTOMERS_ROUTE + "/change_password", (request, response) => customers.change_password(request, response));
app.get(CUSTOMERS_ROUTE + "/forgot_password", (request, response) => customers.forgot_password(request, response));

// Appointments Routes
app.get(APPOINTMENTS_ROUTE, (request, response) => appointments.getAppointments(request, response));
app.post(APPOINTMENTS_ROUTE, (request, response) => appointments.create(request, response));
app.put(APPOINTMENTS_ROUTE, (request, response) => appointments.update(request, response));
app.delete(APPOINTMENTS_ROUTE, (request, response) => appointments.delete(request, response));

// Services Routes
app.get(SERVICES_ROUTE, (request, response) => services.getServices(request, response));
app.post(SERVICES_ROUTE, (request, response) => services.create(request, response));
app.put(SERVICES_ROUTE, (request, response) => services.update(request, response));
app.delete(SERVICES_ROUTE, (request, response) => services.delete(request, response));

// Staff Routes
app.get(STAFF_ROUTE, (request, response) => staff.getStaff(request, response));
app.post(STAFF_ROUTE, (request, response) => staff.create(request, response));
app.put(STAFF_ROUTE, (request, response) => staff.update(request, response));
app.delete(STAFF_ROUTE, (request, response) => staff.delete(request, response));

// Payments Routes
app.get(PAYMENTS_ROUTE, (request, response) => payments.getPayments(request, response));
app.post(PAYMENTS_ROUTE, (request, response) => payments.create(request, response));
app.delete(PAYMENTS_ROUTE, (request, response) => payments.delete(request, response));
app.put(PAYMENTS_ROUTE, (request, response) => payments.update(request, response));
// Reviews Routes
app.get(REVIEWS_ROUTE, (request, response) => reviews.getReviews(request, response));
app.delete(REVIEWS_ROUTE, (request, response) => reviews.delete(request, response));

//dashboard route 
app.get("/api/dashboard", (request, response) => dashboard.getDashboardStats(request, response));


app.listen(PORTNO, () => {
    console.log('Ready to accept requests on port', PORTNO);
});
