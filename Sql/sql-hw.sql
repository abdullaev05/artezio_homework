CREATE DATABASE IF NOT EXISTS company;
USE company;
CREATE TABLE IF NOT EXISTS employees (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(20) NOT NULL,
  post VARCHAR(20) NOT NULL,
  pay INT NOT NULL
  );
CREATE TABLE IF NOT EXISTS employees_states (
  head_id INT UNSIGNED,
  subordinate_id INT UNSIGNED,
  FOREIGN KEY (head_id) REFERENCES employees(id),
  FOREIGN KEY (subordinate_id) REFERENCES employees(id)
  );
  
INSERT INTO employees (id, first_name, last_name, post, pay) VALUES (NULL, 'Ivan', 'Ivanov', 'cleaner', 10000);
INSERT INTO employees (id, first_name, last_name, post, pay) VALUES (NULL, 'Boris', 'Bobrov', 'assistant', 20000);
INSERT INTO employees (id, first_name, last_name, post, pay) VALUES (NULL, 'Igor', 'Petrov', 'engineer', 25000);
INSERT INTO employees (id, first_name, last_name, post, pay) VALUES (NULL, 'Ali', 'Aliev', 'engineer', 25000);
INSERT INTO employees (id, first_name, last_name, post, pay) VALUES (NULL, 'Magomed', 'Saidov', 'lead engineer', 40000);

INSERT INTO employees_states (head_id, subordinate_id) VALUES (3, 2);
INSERT INTO employees_states (head_id, subordinate_id) VALUES (4, 2);
INSERT INTO employees_states (head_id, subordinate_id) VALUES (5, 2);
INSERT INTO employees_states (head_id, subordinate_id) VALUES (5, 3);
INSERT INTO employees_states (head_id, subordinate_id) VALUES (5, 4);
INSERT INTO employees_states (head_id, subordinate_id) VALUES (1, NULL);
INSERT INTO employees_states (head_id, subordinate_id) VALUES (2, NULL);

SELECT first_name, last_name FROM employees WHERE `pay` < 30000;
SELECT first_name, last_name FROM employees WHERE `post` = 'engineer' AND `pay` < 30000;
SELECT * FROM employees INNER JOIN employees_states WHERE employees.id = employees_states.head_id AND state.head_id = 5;
select * from employees emp, employees_states state where state.head_id = 5 and emp.id = state.subordinate_id;
