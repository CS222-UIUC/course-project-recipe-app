
f = open("helloworld.txt", "r")

string = f.readline()
print(string[:100])

f.close()
