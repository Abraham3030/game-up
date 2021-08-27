CREATE DATABASE game_up_basic;

CREATE TABLE products (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(60) NOT NULL,
    discount INT NOT NULL DEFAULT 0,
	price DOUBLE NOT NULL DEFAULT 0.00,
	description VARCHAR(500) NOT NULL,
    stock INT NOT NULL,
    image VARCHAR(300) NOT NULL,
	category VARCHAR(30) NOT NULL,
    brand VARCHAR(30) NOT NULL,
    genre VARCHAR(30) NOT NULL
);

INSERT INTO products (name, discount, price, description, stock, image, category, brand, genre) 
 VALUES ("Resident Evil Triple Pack", 
		 0, 
         1149.00, 
         "Vuelve en el papel de Leon S. Kennedy en Resident Evil 4. Experimenta tres intensas campañas con tus personajes favoritos. Lucha contra algunos de los enemigos y criaturas más horribles que la serie tiene para ofrecer.", 
         10, 
         "https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/13388410132.jpg",
         "Videojuegos",
         "Play Station",
         "Accion");
INSERT INTO products (name, discount, price, description, stock, image, category, brand, genre) 
VALUES ("Final Fantasy VII", 
		20, 
        1399.99, 
        "Final Fantasy VII Remake es un videojuego de rol de acción, publicado por la empresa Square Enix para la plataforma PlayStation 4, que fue lanzado el 10 de abril de 2020, ​ Es una nueva versión del videojuego Final Fantasy VII del año 1997 para la consola PlayStation.", 
        10, 
        "https://images-na.ssl-images-amazon.com/images/I/51dazrTFA8L._SY430_SX215_QL70_FMwebp_.jpg",
        "Videojuegos",
        "PlayStation",
        "Aventura");
INSERT INTO products (name, discount, price, description, stock, image, category, brand, genre) 
VALUES ("Hollow Knight", 
		0, 
        759.00, 
        "Mapa manual y plegable de Hallownest, 4 paquetes de DLC: sueños ocultos, troupe de Grimm, sangre de vida y maestro de Dios.", 
        10, 
        "https://images-na.ssl-images-amazon.com/images/I/51QC7bS8DqL.__AC_SX300_SY300_QL70_ML2_.jpg",
        "Videojuegos",
        "PlayStation",
        "Aventura");
INSERT INTO products (name, discount, price, description, stock, image, category, brand, genre) 
VALUES ("God Of War PS4", 
		10, 
        1659.99, 
        "God of War es el reinicio de las aventuras protagonizadas por Kratos, que en esta ocasión se traslada a la mitología nórdica junto a su hijo Atreus. Ahora vive como un hombre, fuera de la sombra de los dioses, y busca la soledad en unas desconocidas tierras de la mitología nórdica.", 
        10, 
        "https://ventaspop-images.staticgnt.com/rkaBhHELyvNOrZ3eVpQPGSkL1p4=/fit-in/700x0/filters:fill(white,1):strip_exif():quality(70)/files/products/569/238/81kgqr9ltvl._ac_sl1500_.jpg",
        "Videojuegos",
        "PlayStation",
        "Aventura");
INSERT INTO products (name, discount, price, description, stock, image, category, brand, genre) 
VALUES ("Horizon Zero Dawn", 
		10, 
        2299.00,
        "Horizon Zero Dawn es un videojuego de rol con elementos de acción y aventura en tercera persona. El juego se ambienta en un mundo post-apocalíptico donde reina la naturaleza, las zonas rurales, zonas montañosas y los bosques. Cuenta con un ciclo diurno y nocturno, además de un sistema meteorológico dinámico.", 
        10, 
        "https://images-na.ssl-images-amazon.com/images/I/81ZDcXVBzuL.__AC_SX300_SY300_QL70_ML2_.jpg",
        "Videojuegos",
        "PlayStation",
        "Aventura");
INSERT INTO products (name, discount, price, description, stock, image, category, brand, genre) 
VALUES ("God Fall Legion PS5", 
		10, 
        1659.99, 
        "Godfall es un looter-slasher nuevo de próxima generación ambientado en un universo brillante de fantasía repleto de caballeros heroicos y magia arcana.", 
        10, 
        "https://www.sounds.mx/images/pbx_productos/850012348009.jpg",
        "videojuegos",
        "PlayStation",
        "Aventura");
INSERT INTO products (name, discount, price, description, stock, image, category, brand, genre) 
VALUES ("Watch Dogs PS5", 
		10, 
        1659.99, 
        "Construye una resistencia frente a casi todos mientras pirateas, te infiltras y luchas para recuperar un Londres de un futuro cercano que se aproxima a su perdición. Recluta y juega como cualquiera en la ciudad. Cada persona a la que veas tiene una historia, personalidad y conjunto de habilidades únicos.", 
        10, 
        "https://images-na.ssl-images-amazon.com/images/I/81UPrYnzwrS.__AC_SX300_SY300_QL70_ML2_.jpg",
        "Videojuegos",
        "Play Station",
        "Aventura");
INSERT INTO products (name, discount, price, description, stock, image, category, brand, genre) 
VALUES ("Smash Brothers Ultimate", 
		20, 
        1658.00, 
        "Ultimate incluye a todos los personajes de los títulos anteriores de Super Smash Bros., incluidos los ofrecidos a través de contenido descargable en Super Smash Bros. Estos personajes son tratados como personajes únicos dentro de la lista de luchadores de Ultimate.",
        10, 
        "https://m.media-amazon.com/images/I/81FBOUdkJuL._SY500_.jpg",
        "Videojuegos",
        "Switch",
        "Accion");
INSERT INTO products (name, discount, price, description, stock, image, category, brand, genre) 
VALUES ("Zelda Breath of The Wild", 
		20, 
        1399.00, 
        "The Legend of Zelda: Breath of the Wild es la nueva aventura de acción de Nintendo para Wii U y Nintendo Switch que nos presenta el título más ambicioso de la saga con un mundo abierto por explorar y en el que realizar todo tipo de acciones como escalar además de otras clásicas como nadar o montar a caballo.",
        10, 
        "https://images-na.ssl-images-amazon.com/images/I/614LBdIInTS.__AC_SX300_SY300_QL70_ML2_.jpg",
        "Videojuegos",
        "Switch",
        "Accion");
INSERT INTO products (name, discount, price, description, stock, image, category, brand, genre) 
VALUES ("Mario + Rabbids Kingdom Battle", 
		0, 
        999.00, 
        "Mario, Luigi, la princesa Peach y Yoshi deben unir fuerzas con cuatro héroes Rabbids, ¡cada uno con su propia personalidad. ... Fácil de jugar, difícil de dominar. ¡Jugar este juego de combate por turnos en solitario o en modo cooperativo es toda una nueva experiencia de juego.",
        10, 
        "https://images-na.ssl-images-amazon.com/images/I/51opXH7GRIL._SX300_SY300_QL70_FMwebp_.jpg",
        "Videojuegos",
        "Switch",
        "Accion");
INSERT INTO products (name, discount, price, description, stock, image, category, brand, genre) 
VALUES ("Street Fighter 30th Anniversary", 
		0, 
        899.00, 
        "Street Fighter 30th Anniversary Collection es una nueva recopilación de la saga de videojuegos de lucha de Capcom, cuyo objetivo es celebrar con doce títulos de la serie el treinta aniversario de la saga. ... Es la más ambiciosa colección de Street Fighter jamás lanzada.",
        10, 
        "https://ss423.liverpool.com.mx/xl/1069265461.jpg",
        "Videojuegos",
        "Switch",
        "Accion");
SELECT * FROM products WHERE brand = "PlayStation";
SELECT * FROM products WHERE name = "Final Fantasy VII";
SELECT * FROM prodcuts;
SELECT * FROM products WHERE name LIKE "S%";



CREATE TABLE users (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(60) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    email VARCHAR(60) NOT NULL,
	password VARCHAR(30) NOT NULL,
    avatar VARCHAR(300) NOT NULL,
	category VARCHAR(30) NOT NULL
);

INSERT INTO users (first_name, last_name, email, password, avatar, category) 
VALUES ("José Abraham",
		"Montelongo Campos",
        "abraham@digitalhouse.com",
        "abraham", 
        "https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg", 
        "Usuario");