cube(`Orders`, {
  sql: `SELECT * FROM dbt_zach.orders`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    Customers: {
      sql: `${CUBE}.customer_id = ${Customers}.customer_id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [orderDate]
    }
  },
  
  dimensions: {
    order_id: {
      sql: `order_id`,
      type: `string`,
      primaryKey: true
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    creditCardAmount: {
      sql: `credit_card_amount`,
      type: `string`
    },
    
    couponAmount: {
      sql: `coupon_amount`,
      type: `string`
    },
    
    bankTransferAmount: {
      sql: `bank_transfer_amount`,
      type: `string`
    },
    
    giftCardAmount: {
      sql: `gift_card_amount`,
      type: `string`
    },
    
    amount: {
      sql: `amount`,
      type: `string`
    },
    
    orderDate: {
      sql: `order_date`,
      type: `time`
    }
  }
});
