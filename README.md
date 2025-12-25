# ElectroMart ⚡

ElectroMart is a modern electronics e-commerce web application designed for a seamless shopping experience. Users can browse the latest gadgets, manage their shopping carts, and place orders through a streamlined checkout process.



[Image of e-commerce website architecture diagram]


## 🚀 Features

* **Dynamic Product Catalog:** Products are fetched and displayed in real-time from a MySQL database.
* **Smart Shopping Cart:** Add items with quantity selection; the cart calculates subtotals and totals automatically.
* **Guest Checkout:** Rapid checkout flow allowing users to place orders without mandatory account creation.
* **Admin Dashboard:** A dedicated interface for store administrators to manage and view customer orders.
* **Responsive Design:** Fully optimized for desktops, tablets, and mobile devices.

---

## 🎨 Screenshots

| Home Page | Products Page |
|----------|---------------|
| ![Home Page](./images/home.png) | ![Products Page](./images/products.png) |

| Cart Page | Checkout Page |
|----------|---------------|
| ![Cart Page](./images/cart.png) | ![Checkout Page](./images/checkout.png) |

| Order Success Page |
|--------------------|
| ![Order Success](./images/order-success.png) |


## 💻 Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript (ES6)
* **Backend:** PHP
* **Database:** MySQL
* **Environment:** XAMPP / WAMP

---

## 📦 Installation & Setup

Follow these steps to get the project running locally:

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/yourusername/electromart.git](https://github.com/yourusername/electromart.git)
    ```

2.  **Move to Web Directory**
    Move the `electromart` folder to your XAMPP `htdocs` directory:
    `C:\xampp\htdocs\`

3.  **Start Services**
    Open the **XAMPP Control Panel** and start both **Apache** and **MySQL**.

4.  **Database Configuration**
    * Open [phpMyAdmin](http://localhost/phpmyadmin/).
    * Create a new database: `CREATE DATABASE electromart;`
    * Import the provided SQL schema or create tables for `products` and `orders`.

5.  **Connect Backend**
    Update your database credentials in `backend/db.php`:
    ```php
    $conn = mysqli_connect("localhost", "root", "", "electromart");
    ```

6.  **Run Application**
    Open your browser and visit: `http://localhost/electromart/`

---

## 🧾 Application Flow

1.  **Browse:** User explores electronics on the main products page.
2.  **Selection:** User adds items to the cart and adjusts quantities.
3.  **Review:** User verifies the total price in the dynamic cart.
4.  **Checkout:** User enters delivery details and submits the order.
5.  **Management:** Admin logs in to view and process the incoming orders.

---

## ✨ Future Improvements

- [ ] **Order Normalization:** Store ordered items in a dedicated `order_items` table.
- [ ] **Tracking:** Add real-time order status updates (e.g., Pending, Shipped).
- [ ] **Advanced Filtering:** Admin filters for orders by date, price range, or customer.
- [ ] **Payment Integration:** Incorporate a Stripe or PayPal demo gateway.
- [ ]  **Auth System:** Secure User and Admin login/registration.

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn and create!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is developed for educational purposes.

## 📬 Contact

**Naveen Kumar P** [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/naveenkumarp20/)
