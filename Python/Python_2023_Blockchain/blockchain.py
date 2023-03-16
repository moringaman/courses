blockchain = []


def get_last_blockchain_value():
    return blockchain[-1]


def add_value(transaction_amount,
              last_transaction_amount=[1]):
    blockchain.append([last_transaction_amount, transaction_amount])


add_value(2.3)
add_value(0.4, get_last_blockchain_value())
add_value(5.1, get_last_blockchain_value())
print(blockchain)
