import showOrders from '../orders';
import viewRevenuePage from '../revenue';
import showHSbuttons from '../homeScreenButtonsCard';
import addOrderForm from '../forms/orderForm';
import { getOrders } from '../../helpers/data/ordersData';

const navigationEvents = (user) => {
  document.querySelector('#home')
    .addEventListener('click', () => {
      showHSbuttons(user);
    });

  document.querySelector('#viewOrders')
    .addEventListener('click', () => {
      getOrders().then((orderCards) => showOrders(orderCards));
    });

  document.querySelector('#createOrder')
    .addEventListener('click', () => {
      addOrderForm();
    });

  document.querySelector('#revenue')
    .addEventListener('click', () => {
      viewRevenuePage();
    });
};

export default navigationEvents;
