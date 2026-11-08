## 定义
- **SQL（Structured Query Language，结构化查询语言）是用于操作关系型数据库的标准语言**
- SQL 是**声明式**语言，你写的是“**我要什么**”（哪些行、怎么算）
## 语言分类（五类）

|类别|缩写|语句|作用|
|---|---|---|---|
|数据定义|DDL|`CREATE` / `ALTER` / `DROP` / `TRUNCATE`|定义库、表、索引、视图|
|数据操作|DML|`INSERT` / `UPDATE` / `DELETE`|增删改行|
|数据查询|DQL|`SELECT`|查数据（常单列一类）|
|数据控制|DCL|`GRANT` / `REVOKE`|用户与权限|
|事务控制|TCL|`BEGIN` / `COMMIT` / `ROLLBACK` / `SAVEPOINT`|事务边界|

## 最小示例

```sql
-- 建表（DDL）
CREATE TABLE user (
  id    BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name  VARCHAR(64) NOT NULL,
  age   INT,
  city  VARCHAR(32)
);

-- 增（DML）
INSERT INTO user (name, age, city) VALUES ('张三', 28, '北京'), ('李四', 35, '上海');

-- 改（DML）
UPDATE user SET age = 29 WHERE name = '张三';

-- 删（DML）
DELETE FROM user WHERE id = 2;

-- 查（DQL）
SELECT city, COUNT(*) AS cnt, AVG(age) AS avg_age
FROM user
WHERE age >= 18
GROUP BY city
HAVING COUNT(*) > 1
ORDER BY cnt DESC
LIMIT 10;
```

常见查询能力：

```sql
-- 连接
SELECT u.name, o.amount
FROM user u
JOIN orders o ON o.user_id = u.id;

-- 子查询
SELECT * FROM user WHERE id IN (SELECT user_id FROM orders WHERE amount > 100);

-- 聚合与分组
SELECT city, COUNT(*) FROM user GROUP BY city;

-- 窗口函数（8.0+）
SELECT name, age, RANK() OVER (ORDER BY age DESC) AS rk FROM user;

-- 事务
START TRANSACTION;
UPDATE account SET balance = balance - 100 WHERE id = 1;
UPDATE account SET balance = balance + 100 WHERE id = 2;
COMMIT;
```
## 关系/方言差异
- SQL 结构化查询语言/语言
- MySQL 开源关系型数据库/引擎[^1]
- PostgreSQL 同上，一个连接一个后端进程（对比 MySQL 的线程模型）
- SQLite **嵌入式关系型数据库**可以随意嵌入任何软件

```
SQL 文本 → 词法/语法解析 → 生成语法树 → 优化器（选索引、定连接顺序）
→ 执行器 → 存储引擎（InnoDB）读写数据页 → 返回结果
```

MySQL 胜在“生态与普及”，PostgreSQL 胜在“功能与严谨”，SQLite 胜在“零运维与嵌入”——它们不是替代关系，而是分别对应**服务端通用、服务端进阶、进程内本地**三个生态位

[^1]: ==🟣引申==：提供知识树 [MySQL 教程 | 菜鸟教程](https://www.runoob.com/mysql/mysql-tutorial.html)  
