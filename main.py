import hashlib

class YourSystem:

def __init__(self, previous_block_hash,transacction_list):
    self.previous_block_hash = previous_block_hash
    self.transaction_list = transacction_list

    self.block_data= "".join(transacction_list) + "-" + previous_block_hash
    self.block_hash = hashlib.sha256(self.block_data.encode()).hexdigest()

t1= " Manuel send 1 BTC to Anna"
t2= "Joao send 1 BTC to Joana"

initial_block = YourSystem("initial String ", [t1,t2])

print(initial_block.block_data)
print(initial_block.block_hash)