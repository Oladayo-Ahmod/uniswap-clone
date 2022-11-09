export const TransactionSchema = {
    name : 'transactions',
    title : 'Transactions',
    type : 'document',
    fields : [
       {
        name : 'TxHash',
        title : 'Transaction Hash',
        type : 'string'
       },
       {
        name : 'FromAddress',
        title : 'From (Wallet Address)',
        type : 'string',
       },
       {
        name : 'ToAddress',
        title : 'To (Wallet Address)',
        type : 'string'
       },
       {
        name : 'Amount',
        title : 'Total Amount sent',
        type : 'number'
       },
       {
        name : 'Timestamp',
        title : 'Time transaction confirmed',
        type : 'datetime'
       },

    ]
}