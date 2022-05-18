cube(`Customers`, {
  sql: `SELECT * FROM dbt_zach.customers`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [firstName, lastName]
    }
  },
  
  dimensions: {
    customer_id: {
      sql: `customer_id`,
      type: `string`,
      primaryKey: true,
      shown: true
    },
    
    firstName: {
      sql: `first_name`,
      type: `string`
    },
    
    lastName: {
      sql: `last_name`,
      type: `string`
    },
    
    customerLifetimeValue: {
      sql: `customer_lifetime_value`,
      type: `string`
    },
    
    firstOrder: {
      sql: `first_order`,
      type: `time`
    },
    
    mostRecentOrder: {
      sql: `most_recent_order`,
      type: `time`
    }
  }
});
