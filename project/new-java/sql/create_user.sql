CREATE TABLE `new_user` (
                            `id` int NOT NULL AUTO_INCREMENT COMMENT '用户id',
                            `code` varchar(11) NOT NULL COMMENT '学号',
                            `password` varchar(10) NOT NULL COMMENT '密码',
                            `avator` varchar(255) DEFAULT NULL COMMENT '头像',
                            `name` varchar(5) NOT NULL COMMENT '姓名',
                            `phone` varchar(11) DEFAULT NULL COMMENT '手机号',
                            `province` varchar(10) DEFAULT NULL COMMENT '所在省',
                            `city` varchar(10) DEFAULT NULL COMMENT '所在市',
                            `clazz` int NOT NULL COMMENT '班级',
                            `major` varchar(10) NOT NULL COMMENT '专业',
                            `academy` varchar(15) NOT NULL COMMENT '学院',
                            `duty` tinyint NOT NULL DEFAULT '0' COMMENT '职位（0成员 1副部长 2 部长 3副社长 4社长）',
                            `introduction` varchar(255) DEFAULT NULL COMMENT '个人介绍',
                            `ID_card` varchar(18) DEFAULT NULL COMMENT '身份证号码',
                            `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '状态（0正常 1封号）',
                            `is_deleted` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否删除（0正常 1删除）',
                            `create_time` datetime NOT NULL COMMENT '创建时间',
                            `update_time` datetime NOT NULL COMMENT '更新时间',
                            `create_user` int NOT NULL COMMENT '创建者',
                            `update_user` int NOT NULL COMMENT '更新者',
                            `rule` tinyint NOT NULL COMMENT '角色',
                            PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;