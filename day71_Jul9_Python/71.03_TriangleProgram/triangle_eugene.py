import sys


def main():

    triangleSides = input("Enter 3 numbers in csv: ").split(",");  

    triangleType(triangleSides);
    
    # triangleType([1,2,3]);
    # triangleType([1,1,3]);
    # triangleType([1,2,2]);
    # triangleType([1,1,1]);

        
def triangleType(input):
    
    if len(input) != 3:
        print("no");
    
    if(input[0] == input[1]):
        if(input[1] == input[2]):
            print("Equal");
        else:
            print("isoc");
    elif(input[1] == input[2]):
        print("isoc");
    else:
        print("scalene")
    
        

if __name__ == "__main__":
    main()