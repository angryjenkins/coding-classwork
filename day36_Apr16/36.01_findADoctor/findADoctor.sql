USE day36_doctors;

CREATE TABLE `doctors` (
 `doctor_id` mediumint(9) NOT NULL AUTO_INCREMENT,
 `username` varchar(45) DEFAULT NULL,
 `password` varchar(255) DEFAULT NULL,
 `first_name` varchar(45) DEFAULT NULL,
 `m_name` varchar(45) DEFAULT NULL,
 `last_name` varchar(45) DEFAULT NULL,
 `suffix` varchar(25) DEFAULT NULL,
 `address_line1` varchar(45) DEFAULT NULL,
 `address_line2` varchar(45) DEFAULT NULL,
 `city` varchar(45) DEFAULT NULL,
 `state` varchar(45) DEFAULT NULL,
 `zip_code` char(5) DEFAULT NULL,
 `lat` float(10,6) DEFAULT NULL,
 `lng` float(10,6) DEFAULT NULL,
 `phone` varchar(25) DEFAULT NULL,
 `email` varchar(100) DEFAULT NULL,
 `practice_name` varchar(45) DEFAULT NULL,
 `practice_phone` varchar(25) DEFAULT NULL,
 `practice_fax` varchar(25) DEFAULT NULL,
 `hours` varchar(25) DEFAULT NULL,
 `question1` varchar(100) DEFAULT NULL,
 `answer1` varchar(45) DEFAULT NULL,
 `question2` varchar(100) DEFAULT NULL,
 `answer2` varchar(45) DEFAULT NULL,
 `doctor_status` varchar(45) DEFAULT NULL,
 `status_comments` varchar(100) DEFAULT NULL,
 `date_created` datetime DEFAULT NULL,
 `date_updated` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 `date_closed` datetime DEFAULT NULL,
 `doctor_type` varchar(45) DEFAULT NULL,
 `miscellaneous` varchar(200) DEFAULT NULL,
 `rep_id` varchar(45) DEFAULT NULL,
 `target_list` enum('1','0') NOT NULL DEFAULT '0',
 `geo_cache_id` int(11) DEFAULT NULL,
 `geo_address` varchar(750) NOT NULL,
 `isUpdated` bit(1) NOT NULL DEFAULT b'0',
 PRIMARY KEY (`doctor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17548 DEFAULT CHARSET=utf8;


CREATE TABLE `zip` (
 `zip` varchar(5),
 `city` varchar (100),
 `state` varchar (2),
 `lat` float,
 `lng` float,
 `timezone` int(11),
 `dst` int(11)
)