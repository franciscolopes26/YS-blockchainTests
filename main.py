import hashlib

class YourSystem:

    def __init__(self, previous_block_hash,transacction_list):
        self.previous_block_hash = previous_block_hash
        self.transaction_list = transacction_list

        self.block_data= "".join(transacction_list) + "-" + previous_block_hash
        self.block_hash = hashlib.sha256(self.block_data.encode()).hexdigest()

t1= " Manuel send 1 BTC to Anna"
t2= "Joao send 1 BTC to Joana"
t4= " Manuel send 0.9 BTC to Diana"
t5= "Sergio send 9 BTC to Mario"


initial_block = YourSystem("YourBlock ", [t1,t2])

print(initial_block.block_data)
print(initial_block.block_hash)

sec_block = YourSystem("YourBlock",[t4,t5])
print(sec_block.block_data)
print(sec_block.block_hash)