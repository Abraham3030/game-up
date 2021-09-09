CREATE DATABASE game_up;

CREATE TABLE product_categories (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(35) NOT NULL
);
INSERT INTO product_categories (category) VALUES ("Videojuego");/*4*/
INSERT INTO product_categories (category) VALUES ("Consola");/*5*/
INSERT INTO product_categories (category) VALUES ("Laptop");/*6*/
INSERT INTO product_categories (category) VALUES ("Accesorios");/*7*/
SELECT * FROM product_categories;

CREATE TABLE product_brand (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    brand VARCHAR(35) NOT NULL
);
INSERT INTO product_brand (brand) VALUES ("PlayStation");/*1*/
INSERT INTO product_brand (brand) VALUES ("Xbox");/*2*/
INSERT INTO product_brand (brand) VALUES ("Switch");/*3*/
INSERT INTO product_brand (brand) VALUES ("DELL");/*4*/
SELECT * FROM product_brand;

CREATE TABLE product_genre (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    genre VARCHAR(35) NOT NULL
);
INSERT INTO product_genre (genre) VALUES ("Deportes");/*1*/
INSERT INTO product_genre (genre) VALUES ("Shooter");/*2*/
INSERT INTO product_genre (genre) VALUES ("Accion");/*3*/
INSERT INTO product_genre (genre) VALUES ("Aventura");/*4*/
INSERT INTO product_genre (genre) VALUES ("Arcade");/*5*/
INSERT INTO product_genre (genre) VALUES ("Estrategia");/*6*/
INSERT INTO product_genre (genre) VALUES ("Puzzle");/*7*/
INSERT INTO product_genre (genre) VALUES ("Terror");/*8*/
INSERT INTO product_genre (genre) VALUES ("Peleas");/*9*/
SELECT * FROM product_genre;


CREATE TABLE products (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(60) NOT NULL,
    discount INT NOT NULL DEFAULT 0,
	price DOUBLE NOT NULL DEFAULT 0.00,
	description VARCHAR(120) NOT NULL,
    stock INT NOT NULL,
    image VARCHAR(120) NOT NULL,
	category_id INT UNSIGNED NOT NULL,
    brand_id INT UNSIGNED NOT NULL,
    genre_id INT UNSIGNED NOT NULL,
	FOREIGN KEY(category_id) REFERENCES product_categories(id),
    FOREIGN KEY (brand_id) REFERENCES product_brand(id),
    FOREIGN KEY (genre_id) REFERENCES product_genre(id)
);
INSERT INTO products (name, discount, price, description, stock, image, category_id, brand_id, genre_id) 
VALUES ("Resident Evil Triple Pack", 
		0, 
        1149.00, 
        "Vuelve en el papel de Leon S. Kennedy en Resident Evil 4. Experimenta tres intensas campañas con tus personajes favoritos. Lucha contra algunos de los enemigos y criaturas más horribles que la serie tiene para ofrecer.", 
        10, 
        "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/1p/images/product-images/img_large/00001338841013l.jpg", 4, 1, 7);
        
SELECT products.name, products.price, product_categories.category, product_brand.brand, product_genre.genre FROM products 
INNER JOIN product_categories
ON product_categories.id = products.category_id
INNER JOIN product_brand
ON product_brand.id = products.brand_id
INNER JOIN product_genre
ON product_genre.id = products.genre_id;
SELECT * FROM products;
CREATE TABLE user_categories (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(35) NOT NULL
);
INSERT INTO user_categories (category) VALUES ("Usuario");/*1*/
INSERT INTO user_categories (category) VALUES ("Invitado");/*2*/
SELECT * FROM user_categories;

CREATE TABLE users (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(60) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    email VARCHAR(60) NOT NULL,
	password VARCHAR(15) NOT NULL,
    avatar VARCHAR(200) NOT NULL,
	category_id INT UNSIGNED NOT NULL,
	FOREIGN KEY(category_id) REFERENCES user_categories(id)
);
INSERT INTO users (first_name, last_name, email, password, avatar, category_id) 
VALUES ("José Abraham", "Montelongo Campos", "abraham@digitalhouse.com", "abraham", "https://1drv.ms/u/s!AgqB-QZU6W_YoAdsIQevh6xGq1Qe", 1);
SELECT user_categories.category, users.first_name, users.last_name, users.email FROM users 
INNER JOIN user_categories
ON user_categories.id = users.category_id;

CREATE TABLE purchase_orders(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    purchase_date DATETIME NOT NULL,
    payment_method VARCHAR(60) NOT NULL,
	user_id INT UNSIGNED NOT NULL,
	FOREIGN KEY(user_id) REFERENCES users(id)
);
INSERT INTO purchase_orders (purchase_date, payment_method, user_id) 
VALUES (NOW(), "Credit Card", 1);
SELECT users.first_name, users.last_name, users.email, purchase_orders.purchase_date, purchase_orders.payment_method FROM purchase_orders
INNER JOIN users
ON users.id = purchase_orders.id;

CREATE TABLE purchase_orders_product(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    product_id INT UNSIGNED NOT NULL,
	purchase_order_id INT UNSIGNED NOT NULL,
	quantity INT DEFAULT 0,
    total DOUBLE NOT NULL DEFAULT 0.00,
	FOREIGN KEY (product_id) REFERENCES products(id),
	FOREIGN KEY (purchase_order_id) REFERENCES purchase_orders(id)
);
INSERT INTO purchase_orders_product (product_id, purchase_order_id, quantity, total) 
VALUES (3, 1, 1, 1149);

SELECT products.name, purchase_orders_product.quantity, purchase_orders_product.total, purchase_orders.purchase_date, purchase_orders.payment_method, users.first_name, users.last_name, users.email FROM purchase_orders_product
INNER JOIN products
ON products.id = purchase_orders_product.product_id
INNER JOIN purchase_orders
ON purchase_orders.id = purchase_orders_product.purchase_order_id
INNER JOIN users 
ON users.id = purchase_orders.user_id;