from django.db import connection
from contextlib import closing

def dictfetchall(cursor):
    columns = [col[0] for col in cursor.description]
    return [
        dict(zip(columns,row)) for row in cursor.fetchall()
    ]

def dictfetchone(cursor):
    row = cursor.fetchone()
    if row is None:
        return False
    columns = [col[0] for col in cursor.description]
    return dict(zip(columns,row))

def get_order_by_user(id):
    with closing(connection.cursor()) as cursor:
        cursor.execute(""" SELECT food_order.id, food_customer.first_name,food_customer.last_name, food_order.address, food_order.payment_type,food_order.status,food_order.created_at from food_order 
                            INNER JOIN food_customer on food_customer.id=food_order.customer_id 
                            where food_order.customer_id =%s""",[id])
        order = dictfetchall(cursor)
        return order

def get_product_by_order(id):
    with closing(connection.cursor()) as cursor:
        cursor.execute(""" SELECT food_orderproduct.count,food_orderproduct.price,
        food_orderproduct.created_at,food_product.title from food_orderproduct 
         INNER JOIN food_product ON food_orderproduct.product_id=food_product.id  where order_id=%s""",[id])
        orderproduct = dictfetchall(cursor)
        return orderproduct

def get_table():
    with closing(connection.cursor()) as cursor:
        cursor.execute(""" 
        SELECT food_orderproduct.product_id, 
COUNT(food_orderproduct.product_id),food_product.title 
FROM food_orderproduct 
INNER JOIN food_product ON food_product.id=food_orderproduct.product_id 
GROUP BY food_orderproduct.product_id ,food_product.title 
order by count desc limit 10

        """)
        table = dictfetchall(cursor)
        return table