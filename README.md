# CrudApplication

SQL Query 1: 

SELECT users.name, orders.totals, company.company_name
FROM orders, users, company;


SQL Query 2:

SELECT users.id AS "user_id",
    users.name AS "user_name",
    company.company_name AS "company_name",
    orders.id AS "order_id",
    orders.name AS "order_description",
    orders.totals AS "order_total"
FROM orders, users, company;
