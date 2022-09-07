export const TransactionSchema = {
    name : 'transactions',
    title : 'Transactions',
    fields : [
       {
        name : 'txHash',
        title : 'Transaction Hash',
        type : 'string'
       },
       {
        name : 'fromAddress',
        title : 'From (Wallet Address)',
        type : 'string',
       },
       {
        name : 'ToAddress',
        title : 'To (Wallet Address)',
        type : 'string'
       }
    ]
}