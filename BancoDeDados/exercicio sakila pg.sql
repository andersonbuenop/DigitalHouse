use sakila;

select count(actor_id)
from actor;

select customer_id, count(amount) as qtd, sum(amount) as total
from payment
where customer_id = 10
group by customer_id;

select count(customer_id)
from customer c
where active = 0;

SELECT f.title, c.name
FROM film f
JOIN film_category fc ON fc.film_id = f.film_id
join category c on c.category_id = fc.category_id
where c.name like '%act%';