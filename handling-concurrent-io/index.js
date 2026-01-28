// bad example
// only start after previous requests already finish
async function getDashboard(userId) {
    const user = await fetchUser(userId)        
    const orders = await fetchOrders(userId)
    const payments = await fetchPayments(userId)
  
    return { user, orders, payments }
}
  
// good example
// all requests are executed
async function getDashboard(userId) {
    const [user, orders, payments] = await Promise.all([
      fetchUser(userId),
      fetchOrders(userId),
      fetchPayments(userId)
    ])
  
    return { user, orders, payments }
  }
  