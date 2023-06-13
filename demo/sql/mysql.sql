create schema proyectointegrador;
use proyectointegrador;

CREATE TABLE usuarios (
id_usuario			INT				UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre  	        VARCHAR(100)	NOT NULL UNIQUE,
email				VARCHAR(100)	NOT NULL UNIQUE,
pssword				VARCHAR(500)	NOT NULL,
fecha				DATE			NOT NULL,
dni					INT				NOT NULL UNIQUE,
created_at							TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at							TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE productos (
id_producto					INT					UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre_producto				VARCHAR(100)   		NOT NULL,
descripcion_producto			TEXT            NOT NULL,
imagen_producto             TEXT                 NOT NULL,
precio                      DECIMAL             UNSIGNED NOT NULL,
id_usuario					INT 				UNSIGNED,                   
FOREIGN KEY (id_usuario)	REFERENCES usuarios(id_usuario),
created_at                						TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at          								TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE comentarios(
id_posteo      INT				UNSIGNED PRIMARY KEY AUTO_INCREMENT,
comentario     TEXT             NOT NULL,
id_usuario     INT				UNSIGNED,        
id_producto 	INT  			UNSIGNED,           
FOREIGN KEY (id_usuario)		REFERENCES usuarios(id_usuario), 
FOREIGN KEY (id_producto)		REFERENCES productos(id_producto),

created_at                       TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at          				TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


-- insertar 5 usuarios a la tabla usuario
insert into usuarios (id_usuario,nombre,email,pssword,fecha,dni,created_at,updated_at) values (default,"paula", 'paula.rodriguez@gmail.com', 'pau123_','2023-04-02','33849746', default,default );
insert into usuarios (id_usuario,nombre,email,pssword,fecha,dni,created_at,updated_at) values (default,"pablo", 'pablo.aguilar@gmail.com','woxbjshy_1','2023-04-03','20837625',default, default);
insert into usuarios (id_usuario,nombre,email,pssword,fecha,dni,created_at,updated_at) values (default,"erique",'enriquerico@gmail.com', 'erico14_','2023-04-04','17845634', default,default);
insert into usuarios (id_usuario,nombre,email,pssword,fecha,dni,created_at,updated_at) values (default,"erica",'erica.esteves@hotmail.com','ebdosucbdo098', '2023-04-05','45678645', default,default);
insert into usuarios (id_usuario,nombre,email,pssword,fecha,dni,created_at,updated_at) values (default,"micaela",'micaela_zazzuolo@hotmail.com','mZazzu345', '2023-04-06','19356789', default, default);

-- insertar 10 posteos
insert into productos (id_producto,nombre_producto,descripcion_producto,imagen_producto,precio,id_usuario,created_at,updated_at) values (default,'Conjunto 3 Tiras Aeroready Essentials Corte Clásico','Sin importar cómo lo usés, la tecnología AEROREADY se encarga de mantener tu cuerpo seco y cómodo de la mañana a la noche','https://sporting.vtexassets.com/arquivos/ids/568836-1200-1200?v=637937491721270000&width=1200&height=1200&aspect=true',1000,default,default,default);
insert into productos (id_producto,nombre_producto,descripcion_producto,imagen_producto,precio,id_usuario,created_at,updated_at) values (default,'Remera De Entrenamiento Train Essentials','La tecnología AEROREADY se encarga del sudor para que sientas comodidad en todo momento. Su diseño te ofrece una total libertad de movimiento, así que animate y levantá esas pesas','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/157f240d66ce45d09f51af03009a9168_9366/Remera_de_Entrenamiento_Train_Essentials_Feelready_Negro_IC7438_21_model.jpg',1000,default,default,default);
insert into productos (id_producto,nombre_producto,descripcion_producto,imagen_producto,precio,id_usuario,created_at,updated_at) values (default,'Remera Run It','El tejido ligero y transpirable te brinda soporte desde el primer al último paso y la tecnología AEROREADY absorbe el sudor para mantener tu piel fresca y seca en todo momento','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/045978d112d14d2489f9af0900d5e312_9366/Remera_Run_It_Negro_HZ0107_21_model.jpg',1000,default,default,default);
insert into productos (id_producto,nombre_producto,descripcion_producto,imagen_producto,precio,id_usuario,created_at,updated_at) values (default,'Buzo Con Capucha Essentials Logo Lineal Felpa','Este buzo con capucha adidas recompensa tu esfuerzo y el dolor muscular para que puedas rendir al máximo. Porque este buzo hace más fácil tu vida, y eso es lo que te merecés.','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b5b6d82a39c54aacb07da92e00d051e5_9366/Buzo_Essentials_Linear_Pullover_Negro_DP2364_01_laydown.jpg',1000,default,default,default);
insert into productos (id_producto,nombre_producto,descripcion_producto,imagen_producto,precio,id_usuario,created_at,updated_at) values (default,'Gorra Béisbol 3 Tiras Sarga (unisex)','Esta nueva versión del look clásico ofrece un tacto suave y un diseño con protección UV. Luce un logo adidas Badge of Sport que le da un nuevo giro a tu orgullo por las 3 Tiras','https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwbad3642f/products/ADHN1037/ADHN1037-1.JPG',1000,default,default,default);
insert into productos (id_producto,nombre_producto,descripcion_producto,imagen_producto,precio,id_usuario,created_at,updated_at) values (default,'Remera Essentials Mezcla','Esta remera adidas es más que capaz de brindarte comodidad de la mañana a la noche. Está hecha de un tejido de una mezcla de poliéster y algodón suave y texturizado, pero a la vez muy fresco','https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw05b56a3e/products/ADHK2902/ADHK2902-1.JPG',1000,default,default,default);
insert into productos (id_producto,nombre_producto,descripcion_producto,imagen_producto,precio,id_usuario,created_at,updated_at) values (default,'Calzas Farm Rio Feel Brilliant Aeroready Pretina Alta','En el gimnasio, en la ciudad o en la carretera, movete siempre con estilo. Estas calzas adidas son el resultado de una colaboración con FARM Rio. Lucen llamativos estampados en la pierna y en la cintura de pretina alta','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8af6fa359b21423dac58ace700d8b617_9366/Calzas_FARM_Rio_Feel_Brilliant_AEROREADY_Pretina_Alta_Negro_GS6340_01_laydown.jpg',1000,default,default,default);
insert into productos (id_producto,nombre_producto,descripcion_producto,imagen_producto,precio,id_usuario,created_at,updated_at) values (default,'Shorts Essentials Chelsea 3 Tiras Aeroready','Diseñados para los días ajetreados, estos shorts adidas incorporan un calzoncillo interior de malla transpirable que ofrece mayor cobertura y comodidad en todo momento. El tejido AEROREADY con tecnología de absorción se encarga de mantener tu piel seca mientras te ejercitás','https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw07b70bff/products/ADHR6332/ADHR6332-1.JPG',1000,default,default,default);
insert into productos (id_producto,nombre_producto,descripcion_producto,imagen_producto,precio,id_usuario,created_at,updated_at) values (default,'Zapatillas Runfalcon 3','Estas versátiles zapatillas de running adidas son perfectas para correr en el parque y después tomar un café con tus amigos. Su mediasuela Cloudfoam te ofrece una pisada cómoda desde el momento en que te las ponés','https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f9d52817f7524d3fb442af3b01717dfa_9366/Zapatillas_Runfalcon_3_Negro_HQ3790_01_standard.jpg',1000,default,default,default);
insert into productos (id_producto,nombre_producto,descripcion_producto,imagen_producto,precio,id_usuario,created_at,updated_at) values (default,'Rompevientos Tejido Essentials 3 Tiras','Esta campera adidas con las 3 Tiras es una capa exterior versátil que se sincroniza con todo lo que tenés en tu armario. Su diseño liviano con forro interno de malla permite la circulación del aire mientras la capucha te protege de la lluvia','https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw7dd80c85/products/ADIC8769/ADIC8769-1.JPG',1000,default,default,default);

-- INSERTAR 40 COMENTARIOS
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'exelente producto',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'muy buena calidad',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'tal cual la descripcion de la venta',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'me esperaba mas',default);

insert into comentarios (id_posteo,comentario,id_usuario) values (default,'exelente producto',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'muy buena calidad',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'tal cual la descripcion de la venta',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'me esperaba mas',default);

insert into comentarios (id_posteo,comentario,id_usuario) values (default,'exelente producto',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'muy buena calidad',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'tal cual la descripcion de la venta',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'me esperaba mas',default);

insert into comentarios (id_posteo,comentario,id_usuario) values (default,'exelente producto',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'muy buena calidad',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'tal cual la descripcion de la venta',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'me esperaba mas',default);

insert into comentarios (id_posteo,comentario,id_usuario) values (default,'exelente producto',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'muy buena calidad',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'tal cual la descripcion de la venta',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'me esperaba mas',default);

insert into comentarios (id_posteo,comentario,id_usuario) values (default,'exelente producto',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'muy buena calidad',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'tal cual la descripcion de la venta',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'me esperaba mas',default);

insert into comentarios (id_posteo,comentario,id_usuario) values (default,'exelente producto',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'muy buena calidad',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'tal cual la descripcion de la venta',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'me esperaba mas',default);

insert into comentarios (id_posteo,comentario,id_usuario) values (default,'exelente producto',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'muy buena calidad',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'tal cual la descripcion de la venta',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'me esperaba mas',default);

insert into comentarios (id_posteo,comentario,id_usuario) values (default,'exelente producto',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'muy buena calidad',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'tal cual la descripcion de la venta',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'me esperaba mas',default);

insert into comentarios (id_posteo,comentario,id_usuario) values (default,'exelente producto',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'muy buena calidad',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'tal cual la descripcion de la venta',default);
insert into comentarios (id_posteo,comentario,id_usuario) values (default,'me esperaba mas',default);