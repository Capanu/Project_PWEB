INSERT INTO `role` (name) VALUES
('VOLUNTEER'),
('RESIDENT'),
('ADMIN');

INSERT INTO `degree_of_importance` (name) VALUES
('CRITICAL'),
('IMPORTANT'),
('UNIMPORTANT');

INSERT INTO `user` (creation_date,email,password,update_date,role_id) VALUES
('2022-05-11 15:15:47.091000000','test@volunteer.com','Parol@123',NULL,1),
('2022-05-11 15:23:32.886000000','test@resident.com','Parol@123',NULL,2),
('2022-05-11 15:35:42.739000000','test@admin.com','Parol@123',NULL,3);