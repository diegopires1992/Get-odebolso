import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models:{
    transaction:Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Comida',
          amount: 400,
          type: 'withdraw',
          category: 'Food',
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Web site',
          amount: 1500,
          type: 'deposit',
          category: 'DEV',
          createdAt: new Date('2021-03-12 09:00:00'),
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {

      return this.schema.all('transaction');
      // return [
      //   {
      //     id: 1,
      //     title: 'Transaction 1 ',
      //     amount: 400,
      //     type: 'deposit',
      //     category: 'Food',
      //     createAt: new Date()
      //   },
      // ]
    })

    this.post('/transactions', (schema,request) => { 
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction',data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

