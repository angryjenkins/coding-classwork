# from sys import stdin

# # read a line from std input
# stdin.readline(a,b,c)
a=int(input("Enter the length of side 1 of the triangle. "))
b=int(input("Enter the length of side 2 of the triangle. "))
c=int(input("Enter the length of side 3 of the triangle. "))

print a + b + c

if a is b and b is c:
	print "this triangle is equilateral"

elif a is b or b is c or a is c:
	print "this triangle is isosceles"

else:
	print "this triangle is scalene"