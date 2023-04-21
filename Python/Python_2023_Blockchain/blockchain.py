# Initialiing our blockchain data
blockchain = []


def get_last_blockchain_value():
    """ Returns the last value of the current blockchain. """
    if len(blockchain) < 1:
        return None
    return blockchain[-1]


def add_value(transaction_amount,
              last_transaction_amount):
    """ Append a new value as well as the last
            blockchain value to the blockchain.
        Arguments:
            :transaction_amount: The amount that should be added.
            :last_transaction_amount: The last blockchain transaction amount.
            """
    if last_transaction_amount is None:
        last_transaction_amount = [1]
    blockchain.append([last_transaction_amount, transaction_amount])


def get_transaction_value():
    """ Returns the input of the user as a float. """
    return float(input('Your transaction amount please: '))


def varify_chain():
    blockchain_index = 0
    is_valid = True
    for block in blockchain:
        if block[0] != blockchain_index:
            is_valid = False
            break
        blockchain_index += 1
    return is_valid


def get_user_choice():
    user_input = str(input('Your choice: '))
    return user_input


def print_blockchain_elements():
    for block in blockchain:
        print('Outputting block')
        print(block)


while True:
    print('Pleae choose an option: ')
    print('1: Add a new transaction value:')
    print('2: Output the blockchain blocks:')
    print('h: Manipulate the chain:')
    print('q: Quit')
    user_choice = get_user_choice()
    if user_choice == '1':
        tx_amount = get_transaction_value()
        add_value(last_transaction_amount=get_last_blockchain_value(),
                  transaction_amount=tx_amount)
    elif user_choice == '2':
        print_blockchain_elements()
    elif user_choice == 'h':
        if len(blockchain) >= 1:
            blockchain[0] = [2]
    elif user_choice == 'q':
        break
    else:
        print('your input was invalid please try again')

    if not varify_chain():
        print('Invalid blockchain')
        break

print('Done')
