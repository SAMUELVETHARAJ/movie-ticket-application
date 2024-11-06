import React from 'react';
import { Button, List } from 'antd';

const Cart = ({ cart, setCart }) => {
  const increment = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decrement = (id) => {
    setCart(cart.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const remove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <List
      itemLayout="horizontal"
      dataSource={cart}
      renderItem={item => (
        <List.Item
          actions={[
            <Button onClick={() => increment(item.id)}>+</Button>,
            <Button onClick={() => decrement(item.id)}>-</Button>,
            <Button onClick={() => remove(item.id)}>Remove</Button>,
          ]}
        >
          <List.Item.Meta
            title={item.name}
            description={`Quantity: ${item.quantity}`}
          />
        </List.Item>
      )}
    />
  );
};

export default Cart;
