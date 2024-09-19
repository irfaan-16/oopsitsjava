const questions = [
  {
    id: 1,
    category: "basic",
    question: "Write a Java program to print ‘Hello World!’ on screen",
    answer:
      'public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello World!");\n  }\n}',
  },
  {
    id: 2,
    category: "basic",
    question: "Write a Java program to print the sum of two numbers",
    answer:
      'import java.util.Scanner;\n\npublic class SumOfTwoNumbers {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter first number: ");\n    int num1 = scanner.nextInt();\n    System.out.print("Enter second number: ");\n    int num2 = scanner.nextInt();\n    int sum = num1 + num2;\n    System.out.println("Sum: " + sum);\n  }\n}',
  },
  {
    id: 3,
    category: "basic",
    question:
      "Write a Java program that takes two numbers and display the product of two numbers",
    answer:
      'import java.util.Scanner;\n\npublic class ProductOfTwoNumbers {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter first number: ");\n    int num1 = scanner.nextInt();\n    System.out.print("Enter second number: ");\n    int num2 = scanner.nextInt();\n    int product = num1 * num2;\n    System.out.println("Product: " + product);\n  }\n}',
  },
  {
    id: 4,
    category: "basic",
    question:
      "Write a Java program to print the sum, multiply, subtract, divide and remainder of two numbers",
    answer:
      'import java.util.Scanner;\n\npublic class OperationsOfTwoNumbers {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter first number: ");\n    int num1 = scanner.nextInt();\n    System.out.print("Enter second number: ");\n    int num2 = scanner.nextInt();\n\n    System.out.println("Sum: " + (num1 + num2));\n    System.out.println("Difference: " + (num1 - num2));\n    System.out.println("Product: " + (num1 * num2));\n    System.out.println("Quotient: " + (num1 / num2));\n    System.out.println("Remainder: " + (num1 % num2));\n  }\n}',
  },
  {
    id: 5,
    category: "basic",
    question:
      "Write a Java program that takes five numbers as input to calculate and print the average of the numbers",
    answer:
      'import java.util.Scanner;\n\npublic class AverageOfFiveNumbers {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    int sum = 0;\n    for (int i = 1; i <= 5; i++) {\n      System.out.print("Enter number " + i + ": ");\n      sum += scanner.nextInt();\n    }\n    double average = sum / 5.0;\n    System.out.println("Average: " + average);\n  }\n}',
  },
  {
    id: 6,
    category: "basic",
    question: "Write a Java program to swap two variables",
    answer:
      'import java.util.Scanner;\n\npublic class SwapVariables {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter first number: ");\n    int num1 = scanner.nextInt();\n    System.out.print("Enter second number: ");\n    int num2 = scanner.nextInt();\n    int temp = num1;\n    num1 = num2;\n    num2 = temp;\n    System.out.println("After swapping: ");\n    System.out.println("First number: " + num1);\n    System.out.println("Second number: " + num2);\n  }\n}',
  },
  {
    id: 7,
    category: "basic",
    question:
      "Write a Java program to convert a decimal number to binary numbers",
    answer:
      'import java.util.Scanner;\n\npublic class DecimalToBinary {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter a decimal number: ");\n    int decimal = scanner.nextInt();\n    String binary = Integer.toBinaryString(decimal);\n    System.out.println("Binary: " + binary);\n  }\n}',
  },
  {
    id: 8,
    category: "basic",
    question:
      "Write a Java program to convert a binary number to decimal number",
    answer:
      'import java.util.Scanner;\n\npublic class BinaryToDecimal {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter a binary number: ");\n    String binary = scanner.next();\n    int decimal = Integer.parseInt(binary, 2);\n    System.out.println("Decimal: " + decimal);\n  }\n}',
  },
  {
    id: 9,
    category: "basic",
    question:
      "Write a Java program to check whether Java is installed on your computer or not",
    answer:
      'public class CheckJavaInstallation {\n  public static void main(String[] args) {\n    System.out.println("Java Version: " + System.getProperty("java.version"));\n    System.out.println("Java Runtime Version: " + System.getProperty("java.runtime.version"));\n    System.out.println("Java Home: " + System.getProperty("java.home"));\n  }\n}',
  },
  {
    id: 10,
    category: "basic",
    question:
      "Write a Java program and compute the sum of the digits of an integer",
    answer:
      'import java.util.Scanner;\n\npublic class SumOfDigits {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter an integer: ");\n    int num = scanner.nextInt();\n    int sum = 0;\n    while (num != 0) {\n      sum += num % 10;\n      num /= 10;\n    }\n    System.out.println("Sum of digits: " + sum);\n  }\n}',
  },
  {
    id: 11,
    category: "basic",
    question: "Write a Java program to compare two numbers",
    answer:
      'import java.util.Scanner;\n\npublic class CompareNumbers {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter first number: ");\n    int num1 = scanner.nextInt();\n    System.out.print("Enter second number: ");\n    int num2 = scanner.nextInt();\n\n    if (num1 > num2) {\n      System.out.println(num1 + " is greater than " + num2);\n    } else if (num1 < num2) {\n      System.out.println(num1 + " is less than " + num2);\n    } else {\n      System.out.println(num1 + " is equal to " + num2);\n    }\n  }\n}',
  },
  {
    id: 12,
    category: "basic",
    question:
      "Write a Java program to count the letters, spaces, numbers and other characters of an input string",
    answer:
      'import java.util.Scanner;\n\npublic class CountCharacters {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter a string: ");\n    String input = scanner.nextLine();\n\n    int letters = 0, spaces = 0, numbers = 0, others = 0;\n\n    for (char c : input.toCharArray()) {\n      if (Character.isLetter(c)) {\n        letters++;\n      } else if (Character.isDigit(c)) {\n        numbers++;\n      } else if (Character.isSpaceChar(c)) {\n        spaces++;\n      } else {\n        others++;\n      }\n    }\n\n    System.out.println("Letters: " + letters);\n    System.out.println("Spaces: " + spaces);\n    System.out.println("Numbers: " + numbers);\n    System.out.println("Others: " + others);\n  }\n}',
  },
  {
    id: 13,
    category: "basic",
    question:
      "Write a Java program to print the ascii value of a given character",
    answer:
      'import java.util.Scanner;\n\npublic class AsciiValue {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter a character: ");\n    char character = scanner.next().charAt(0);\n    int asciiValue = (int) character;\n    System.out.println("The ASCII value of " + character + " is: " + asciiValue);\n  }\n}',
  },
  {
    id: 14,
    category: "basic",
    question:
      "Write a Java program that accepts an integer (n) and computes the value of n+nn+nnn",
    answer:
      'import java.util.Scanner;\n\npublic class ComputeExpression {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter an integer: ");\n    int n = scanner.nextInt();\n\n    int nn = Integer.parseInt(n + "" + n);\n    int nnn = Integer.parseInt(n + "" + n + "" + n);\n    int result = n + nn + nnn;\n\n    System.out.println("Result of n+nn+nnn: " + result);\n  }\n}',
  },
  {
    id: 15,
    category: "basic",
    question: "Write a Java program to display the system time",
    answer:
      'import java.time.LocalTime;\n\npublic class SystemTime {\n  public static void main(String[] args) {\n    LocalTime time = LocalTime.now();\n    System.out.println("Current system time: " + time);\n  }\n}',
  },
  {
    id: 16,
    category: "basic",
    question: "Write a Java program to print the odd numbers from 1 to 20",
    answer:
      "public class OddNumbers {\n  public static void main(String[] args) {\n    for (int i = 1; i <= 20; i++) {\n      if (i % 2 != 0) {\n        System.out.println(i);\n      }\n    }\n  }\n}",
  },
  {
    id: 17,
    category: "basic",
    question: "Write a Java program to print the even numbers from 1 to 20",
    answer:
      "public class EvenNumbers {\n  public static void main(String[] args) {\n    for (int i = 1; i <= 20; i++) {\n      if (i % 2 == 0) {\n        System.out.println(i);\n      }\n    }\n  }\n}",
  },
  {
    id: 18,
    category: "basic",
    question: "Write a Java program to convert a string to an integer",
    answer:
      'import java.util.Scanner;\n\npublic class StringToInteger {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter a string: ");\n    String input = scanner.nextLine();\n\n    try {\n      int result = Integer.parseInt(input);\n      System.out.println("Converted integer: " + result);\n    } catch (NumberFormatException e) {\n      System.out.println("Invalid input: Not a valid integer.");\n    }\n  }\n}',
  },
  {
    id: 19,
    category: "basic",
    question:
      "Write a Java program to convert seconds to hour, minute and seconds",
    answer:
      'import java.util.Scanner;\n\npublic class ConvertSeconds {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of seconds: ");\n    int totalSeconds = scanner.nextInt();\n\n    int hours = totalSeconds / 3600;\n    int minutes = (totalSeconds % 3600) / 60;\n    int seconds = totalSeconds % 60;\n\n    System.out.println(hours + " hour(s), " + minutes + " minute(s), " + seconds + " second(s)");\n  }\n}',
  },
  {
    id: 20,
    category: "basic",
    question:
      "Write a Java program to compute the sum of the first 100 prime numbers",
    answer:
      'public class SumOfPrimes {\n  public static void main(String[] args) {\n    int count = 0, sum = 0, num = 2;\n\n    while (count < 100) {\n      if (isPrime(num)) {\n        sum += num;\n        count++;\n      }\n      num++;\n    }\n    System.out.println("Sum of first 100 prime numbers: " + sum);\n  }\n\n  public static boolean isPrime(int n) {\n    if (n <= 1) {\n      return false;\n    }\n    for (int i = 2; i <= Math.sqrt(n); i++) {\n      if (n % i == 0) {\n        return false;\n      }\n    }\n    return true;\n  }\n}',
  },
  {
    id: 21,
    category: "basic",
    question:
      "Write a Java program to swap the first and last elements of an array and create a new array",
    answer:
      'import java.util.Arrays;\n\npublic class SwapArrayElements {\n  public static void main(String[] args) {\n    int[] array = {1, 2, 3, 4, 5};\n    System.out.println("Original Array: " + Arrays.toString(array));\n\n    int temp = array[0];\n    array[0] = array[array.length - 1];\n    array[array.length - 1] = temp;\n\n    System.out.println("Array after swapping first and last elements: " + Arrays.toString(array));\n  }\n}',
  },
  {
    id: 22,
    category: "basic",
    question:
      "Write a Java program to count the number of even and odd elements in a given array",
    answer:
      'public class CountEvenOdd {\n  public static void main(String[] args) {\n    int[] array = {1, 2, 3, 4, 5, 6, 7, 8, 9};\n    int evenCount = 0, oddCount = 0;\n\n    for (int num : array) {\n      if (num % 2 == 0) {\n        evenCount++;\n      } else {\n        oddCount++;\n      }\n    }\n\n    System.out.println("Even numbers: " + evenCount);\n    System.out.println("Odd numbers: " + oddCount);\n  }\n}',
  },
  {
    id: 23,
    category: "basic",
    question:
      "Write a Java program to compute the square root of a given integer",
    answer:
      'import java.util.Scanner;\n\npublic class SquareRoot {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter an integer: ");\n    int num = scanner.nextInt();\n\n    double sqrt = Math.sqrt(num);\n    System.out.println("Square root of " + num + " is: " + sqrt);\n  }\n}',
  },
  {
    id: 24,
    category: "basic",
    question:
      "Write a Java program to check if a positive number is a palindrome or not",
    answer:
      'import java.util.Scanner;\n\npublic class PalindromeCheck {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter a positive number: ");\n    int num = scanner.nextInt();\n    int originalNum = num, reversedNum = 0;\n\n    while (num != 0) {\n      int digit = num % 10;\n      reversedNum = reversedNum * 10 + digit;\n      num /= 10;\n    }\n\n    if (originalNum == reversedNum) {\n      System.out.println(originalNum + " is a palindrome.");\n    } else {\n      System.out.println(originalNum + " is not a palindrome.");\n    }\n  }\n}',
  },
  {
    id: 25,
    category: "basic",
    question:
      "Write a Java program to add two numbers without using any arithmetic operators",
    answer:
      'import java.util.Scanner;\n\npublic class AddWithoutOperators {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter first number: ");\n    int a = scanner.nextInt();\n    System.out.print("Enter second number: ");\n    int b = scanner.nextInt();\n\n    while (b != 0) {\n      int carry = a & b;\n      a = a ^ b;\n      b = carry << 1;\n    }\n\n    System.out.println("Sum: " + a);\n  }\n}',
  },
  {
    id: 26,
    category: "basic",
    question:
      "Write a Java program to add all the digits of a given positive integer",
    answer:
      'import java.util.Scanner;\n\npublic class SumOfDigits {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter a positive integer: ");\n    int num = scanner.nextInt();\n    int sum = 0;\n\n    while (num != 0) {\n      sum += num % 10;\n      num /= 10;\n    }\n\n    System.out.println("Sum of digits: " + sum);\n  }\n}',
  },
  {
    id: 27,
    category: "basic",
    question: "Java program to find area of circle",
    answer:
      'import java.util.Scanner;\n\npublic class AreaOfCircle {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter radius: ");\n    double radius = scanner.nextDouble();\n    double area = Math.PI * radius * radius;\n    System.out.println("Area of circle: " + area);\n  }\n}',
  },
  {
    id: 28,
    category: "basic",
    question: "Java program to find area of rectangle",
    answer:
      'import java.util.Scanner;\n\npublic class AreaOfRectangle {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter length: ");\n    double length = scanner.nextDouble();\n    System.out.print("Enter width: ");\n    double width = scanner.nextDouble();\n    double area = length * width;\n    System.out.println("Area of rectangle: " + area);\n  }\n}',
  },
  {
    id: 29,
    category: "basic",
    question: "Java program to find area of triangle",
    answer:
      'import java.util.Scanner;\n\npublic class AreaOfTriangle {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter base: ");\n    double base = scanner.nextDouble();\n    System.out.print("Enter height: ");\n    double height = scanner.nextDouble();\n    double area = 0.5 * base * height;\n    System.out.println("Area of triangle: " + area);\n  }\n}',
  },
  {
    id: 30,
    category: "basic",
    question: "Java program to find area of equilateral triangle",
    answer:
      'import java.util.Scanner;\n\npublic class AreaOfEquilateralTriangle {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter side length: ");\n    double side = scanner.nextDouble();\n    double area = (Math.sqrt(3) / 4) * (side * side);\n    System.out.println("Area of equilateral triangle: " + area);\n  }\n}',
  },
  {
    id: 31,
    category: "basic",
    question: "Java Program to find area of rhombus",
    answer:
      'import java.util.Scanner;\n\npublic class AreaOfRhombus {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the length of diagonal 1: ");\n    double d1 = scanner.nextDouble();\n    System.out.print("Enter the length of diagonal 2: ");\n    double d2 = scanner.nextDouble();\n    double area = (d1 * d2) / 2;\n    System.out.println("Area of rhombus: " + area);\n  }\n}',
  },
  {
    id: 32,
    category: "basic",
    question: "Java Program to find area of parallelogram",
    answer:
      'import java.util.Scanner;\n\npublic class AreaOfParallelogram {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter base: ");\n    double base = scanner.nextDouble();\n    System.out.print("Enter height: ");\n    double height = scanner.nextDouble();\n    double area = base * height;\n    System.out.println("Area of parallelogram: " + area);\n  }\n}',
  },
  {
    id: 33,
    category: "basic",
    question: "Java Program to find area of Prism",
    answer:
      'import java.util.Scanner;\n\npublic class AreaOfPrism {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter base area of the prism: ");\n    double baseArea = scanner.nextDouble();\n    System.out.print("Enter height of the prism: ");\n    double height = scanner.nextDouble();\n    double area = baseArea * height;\n    System.out.println("Area of Prism: " + area);\n  }\n}',
  },
  {
    id: 34,
    category: "basic",
    question: "Java Program to find volume of sphere",
    answer:
      'import java.util.Scanner;\n\npublic class VolumeOfSphere {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter radius of sphere: ");\n    double radius = scanner.nextDouble();\n    double volume = (4.0 / 3) * Math.PI * Math.pow(radius, 3);\n    System.out.println("Volume of sphere: " + volume);\n  }\n}',
  },
  {
    id: 35,
    category: "basic",
    question: "Java Program to find volume of cylinder",
    answer:
      'import java.util.Scanner;\n\npublic class VolumeOfCylinder {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter radius of cylinder: ");\n    double radius = scanner.nextDouble();\n    System.out.print("Enter height of cylinder: ");\n    double height = scanner.nextDouble();\n    double volume = Math.PI * Math.pow(radius, 2) * height;\n    System.out.println("Volume of cylinder: " + volume);\n  }\n}',
  },
  {
    id: 36,
    category: "basic",
    question: "Java Program to find volume of cuboid",
    answer:
      'import java.util.Scanner;\n\npublic class VolumeOfCuboid {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter length of cuboid: ");\n    double length = scanner.nextDouble();\n    System.out.print("Enter width of cuboid: ");\n    double width = scanner.nextDouble();\n    System.out.print("Enter height of cuboid: ");\n    double height = scanner.nextDouble();\n    double volume = length * width * height;\n    System.out.println("Volume of cuboid: " + volume);\n  }\n}',
  },
  {
    id: 37,
    category: "basic",
    question: "Java Program to find volume of cone",
    answer:
      'import java.util.Scanner;\n\npublic class VolumeOfCone {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter radius of cone: ");\n    double radius = scanner.nextDouble();\n    System.out.print("Enter height of cone: ");\n    double height = scanner.nextDouble();\n    double volume = (Math.PI * Math.pow(radius, 2) * height) / 3;\n    System.out.println("Volume of cone: " + volume);\n  }\n}',
  },
  {
    id: 38,
    category: "basic",
    question: "Java program to find surface area of cuboid",
    answer:
      'import java.util.Scanner;\n\npublic class SurfaceAreaOfCuboid {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter length of cuboid: ");\n    double length = scanner.nextDouble();\n    System.out.print("Enter width of cuboid: ");\n    double width = scanner.nextDouble();\n    System.out.print("Enter height of cuboid: ");\n    double height = scanner.nextDouble();\n    double surfaceArea = 2 * (length * width + length * height + width * height);\n    System.out.println("Surface area of cuboid: " + surfaceArea);\n  }\n}',
  },
  {
    id: 39,
    category: "basic",
    question: "Java program to find surface area of cylinder",
    answer:
      'import java.util.Scanner;\n\npublic class SurfaceAreaOfCylinder {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter radius of cylinder: ");\n    double radius = scanner.nextDouble();\n    System.out.print("Enter height of cylinder: ");\n    double height = scanner.nextDouble();\n    double surfaceArea = 2 * Math.PI * radius * (radius + height);\n    System.out.println("Surface area of cylinder: " + surfaceArea);\n  }\n}',
  },
  {
    id: 40,
    category: "basic",
    question: "Java program to find surface area of cube",
    answer:
      'import java.util.Scanner;\n\npublic class SurfaceAreaOfCube {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter side of cube: ");\n    double side = scanner.nextDouble();\n    double surfaceArea = 6 * side * side;\n    System.out.println("Surface area of cube: " + surfaceArea);\n  }\n}',
  },
  {
    id: 41,
    category: "basic",
    question: "Java program to calculate average marks",
    answer:
      'import java.util.Scanner;\n\npublic class AverageMarks {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter number of subjects: ");\n    int numSubjects = scanner.nextInt();\n    double totalMarks = 0;\n    for (int i = 1; i <= numSubjects; i++) {\n      System.out.print("Enter marks for subject " + i + ": ");\n      totalMarks += scanner.nextDouble();\n    }\n    double average = totalMarks / numSubjects;\n    System.out.println("Average marks: " + average);\n  }\n}',
  },
  {
    id: 42,
    category: "basic",
    question: "Java program to check vowel or consonant",
    answer:
      "import java.util.Scanner;\n\npublic class VowelOrConsonant {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print(\"Enter a character: \");\n    char ch = scanner.next().charAt(0);\n    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||\n        ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {\n      System.out.println(ch + \" is a vowel.\");\n    } else {\n      System.out.println(ch + \" is a consonant.\");\n    }\n  }\n}",
  },
  {
    id: 43,
    category: "basic",
    question: "Java program to sum of N numbers",
    answer:
      'import java.util.Scanner;\n\npublic class SumOfNNumbers {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the value of N: ");\n    int N = scanner.nextInt();\n    int sum = 0;\n    for (int i = 1; i <= N; i++) {\n      sum += i;\n    }\n    System.out.println("Sum of first " + N + " numbers: " + sum);\n  }\n}',
  },
  {
    id: 44,
    category: "basic",
    question: "Java program to find factorial of any number",
    answer:
      'import java.util.Scanner;\n\npublic class Factorial {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter a number: ");\n    int number = scanner.nextInt();\n    int factorial = 1;\n    for (int i = 1; i <= number; i++) {\n      factorial *= i;\n    }\n    System.out.println("Factorial of " + number + " is: " + factorial);\n  }\n}',
  },
  {
    id: 45,
    category: "basic",
    question: "Java Program to calculate electricity bill",
    answer:
      'import java.util.Scanner;\n\npublic class ElectricityBill {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of units consumed: ");\n    double units = scanner.nextDouble();\n    double bill = 0;\n    if (units <= 100) {\n      bill = units * 1.50;\n    } else if (units <= 300) {\n      bill = (100 * 1.50) + ((units - 100) * 2.50);\n    } else {\n      bill = (100 * 1.50) + (200 * 2.50) + ((units - 300) * 3.50);\n    }\n    System.out.println("Electricity bill: " + bill);\n  }\n}',
  },
  {
    id: 46,
    category: "basic",
    question: "Java Program To Calculate CGPA Percentage",
    answer:
      'import java.util.Scanner;\n\npublic class CGPACalculator {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of subjects: ");\n    int numSubjects = scanner.nextInt();\n    double totalGradePoints = 0;\n    for (int i = 1; i <= numSubjects; i++) {\n      System.out.print("Enter grade points for subject " + i + ": ");\n      totalGradePoints += scanner.nextDouble();\n    }\n    double cgpa = totalGradePoints / numSubjects;\n    double percentage = cgpa * 9.5;\n    System.out.println("CGPA: " + cgpa);\n    System.out.println("Percentage: " + percentage);\n  }\n}',
  },
  {
    id: 47,
    category: "basic",
    question: "Java Program to calculate compound interest",
    answer:
      'import java.util.Scanner;\n\npublic class CompoundInterest {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter principal amount: ");\n    double principal = scanner.nextDouble();\n    System.out.print("Enter annual interest rate (in percentage): ");\n    double rate = scanner.nextDouble() / 100;\n    System.out.print("Enter number of times interest is compounded per year: ");\n    int n = scanner.nextInt();\n    System.out.print("Enter time (in years): ");\n    int time = scanner.nextInt();\n    double amount = principal * Math.pow((1 + rate / n), n * time);\n    double compoundInterest = amount - principal;\n    System.out.println("Compound Interest: " + compoundInterest);\n  }\n}',
  },
  {
    id: 48,
    category: "basic",
    question: "Java Program To Calculate Batting Average",
    answer:
      'import java.util.Scanner;\n\npublic class BattingAverage {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter total runs scored: ");\n    int totalRuns = scanner.nextInt();\n    System.out.print("Enter total number of innings: ");\n    int innings = scanner.nextInt();\n    double average = (double) totalRuns / innings;\n    System.out.println("Batting average: " + average);\n  }\n}',
  },
  {
    id: 49,
    category: "basic",
    question: "Java Program to Calculate Commission Percentage",
    answer:
      'import java.util.Scanner;\n\npublic class CommissionPercentage {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter total sales amount: ");\n    double salesAmount = scanner.nextDouble();\n    System.out.print("Enter commission percentage: ");\n    double commissionPercentage = scanner.nextDouble();\n    double commission = (salesAmount * commissionPercentage) / 100;\n    System.out.println("Commission: " + commission);\n  }\n}',
  },
  {
    id: 50,
    category: "basic",
    question: "Java Program To Find Distance Between Two Points",
    answer:
      'import java.util.Scanner;\nimport java.lang.Math;\n\npublic class DistanceBetweenTwoPoints {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter x1 coordinate: ");\n    double x1 = scanner.nextDouble();\n    System.out.print("Enter y1 coordinate: ");\n    double y1 = scanner.nextDouble();\n    System.out.print("Enter x2 coordinate: ");\n    double x2 = scanner.nextDouble();\n    System.out.print("Enter y2 coordinate: ");\n    double y2 = scanner.nextDouble();\n    double distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));\n    System.out.println("Distance between two points: " + distance);\n  }\n}',
  },
  {
    id: 51,
    category: "basic",
    question: "Java Program To Calculate Power Of Number",
    answer:
      'import java.util.Scanner;\n\npublic class PowerOfNumber {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the base: ");\n    double base = scanner.nextDouble();\n    System.out.print("Enter the exponent: ");\n    int exponent = scanner.nextInt();\n    double result = Math.pow(base, exponent);\n    System.out.println("Result: " + result);\n  }\n}',
  },
  {
    id: 52,
    category: "basic",
    question:
      "Write a Java program to take three numbers from the user and print the greatest number",
    answer:
      'import java.util.Scanner;\n\npublic class GreatestOfThree {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter first number: ");\n    int num1 = scanner.nextInt();\n    System.out.print("Enter second number: ");\n    int num2 = scanner.nextInt();\n    System.out.print("Enter third number: ");\n    int num3 = scanner.nextInt();\n    int greatest = num1;\n    if (num2 > greatest) {\n      greatest = num2;\n    }\n    if (num3 > greatest) {\n      greatest = num3;\n    }\n    System.out.println("The greatest number is: " + greatest);\n  }\n}',
  },
  {
    id: 53,
    category: "basic",
    question: "Write a Java program to find the number of days in a month",
    answer:
      'import java.util.Scanner;\n\npublic class DaysInMonth {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the month (1-12): ");\n    int month = scanner.nextInt();\n    System.out.print("Enter the year: ");\n    int year = scanner.nextInt();\n    int days;\n    switch (month) {\n      case 1: case 3: case 5: case 7: case 8: case 10: case 12:\n        days = 31;\n        break;\n      case 4: case 6: case 9: case 11:\n        days = 30;\n        break;\n      case 2:\n        days = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) ? 29 : 28;\n        break;\n      default:\n        System.out.println("Invalid month");\n        return;\n    }\n    System.out.println("Number of days: " + days);\n  }\n}',
  },
  {
    id: 54,
    category: "basic",
    question: "Write a Java program to test a number is positive or negative",
    answer:
      'import java.util.Scanner;\n\npublic class PositiveOrNegative {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter a number: ");\n    int number = scanner.nextInt();\n    if (number > 0) {\n      System.out.println(number + " is positive.");\n    } else if (number < 0) {\n      System.out.println(number + " is negative.");\n    } else {\n      System.out.println(number + " is zero.");\n    }\n  }\n}',
  },
  {
    id: 55,
    category: "basic",
    question:
      "Write a Java Program to accept number of week’s day (1-7) and print name of the day",
    answer:
      'import java.util.Scanner;\n\npublic class DayOfWeek {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of the day (1-7): ");\n    int day = scanner.nextInt();\n    String dayName;\n    switch (day) {\n      case 1:\n        dayName = "Sunday";\n        break;\n      case 2:\n        dayName = "Monday";\n        break;\n      case 3:\n        dayName = "Tuesday";\n        break;\n      case 4:\n        dayName = "Wednesday";\n        break;\n      case 5:\n        dayName = "Thursday";\n        break;\n      case 6:\n        dayName = "Friday";\n        break;\n      case 7:\n        dayName = "Saturday";\n        break;\n      default:\n        System.out.println("Invalid day number");\n        return;\n    }\n    System.out.println("Day of the week: " + dayName);\n  }\n}',
  },
  {
    id: 56,
    category: "basic",
    question:
      "Write a Java program that takes a year from user and print whether that year is a leap year or not",
    answer:
      'import java.util.Scanner;\n\npublic class LeapYearChecker {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter a year: ");\n    int year = scanner.nextInt();\n    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {\n      System.out.println(year + " is a leap year.");\n    } else {\n      System.out.println(year + " is not a leap year.");\n    }\n  }\n}',
  },
  {
    id: 57,
    category: "basic",
    question:
      "Write a Java program to input 5 numbers from keyboard and find their sum and average",
    answer:
      'import java.util.Scanner;\n\npublic class SumAndAverage {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    double total = 0;\n    for (int i = 1; i <= 5; i++) {\n      System.out.print("Enter number " + i + ": ");\n      total += scanner.nextDouble();\n    }\n    double average = total / 5;\n    System.out.println("Sum: " + total);\n    System.out.println("Average: " + average);\n  }\n}',
  },
  {
    id: 58,
    category: "basic",
    question: "Write a program in Java to display the first 5 natural numbers",
    answer:
      "public class FirstFiveNaturalNumbers {\n  public static void main(String[] args) {\n    for (int i = 1; i <= 5; i++) {\n      System.out.println(i);\n    }\n  }\n}",
  },
  {
    id: 59,
    category: "basic",
    question: "Write a Java program to check vowel or consonant",
    answer:
      "import java.util.Scanner;\n\npublic class VowelOrConsonant {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print(\"Enter a character: \");\n    char ch = scanner.next().charAt(0);\n    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||\n        ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {\n      System.out.println(ch + \" is a vowel.\");\n    } else {\n      System.out.println(ch + \" is a consonant.\");\n    }\n  }\n}",
  },
  {
    id: 60,
    category: "basic",
    question:
      "Write a Java program to display the cube of the number upto given an integer",
    answer:
      'import java.util.Scanner;\n\npublic class CubeOfNumbers {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter an integer: ");\n    int n = scanner.nextInt();\n    for (int i = 1; i <= n; i++) {\n      System.out.println("Cube of " + i + " is: " + Math.pow(i, 3));\n    }\n  }\n}',
  },
  {
    id: 61,
    category: "basic",
    question:
      "Write a Java program to display the n terms of odd natural number and their sum",
    answer:
      'import java.util.Scanner;\n\npublic class OddNaturalNumbers {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of terms: ");\n    int n = scanner.nextInt();\n    int sum = 0;\n    System.out.println("Odd natural numbers:");\n    for (int i = 1; i <= n * 2; i += 2) {\n      System.out.print(i + " ");\n      sum += i;\n    }\n    System.out.println("\\nSum of odd natural numbers: " + sum);\n  }\n}',
  },
  {
    id: 62,
    category: "basic",
    question:
      "Write a Java program to display the multiplication table of a given integer",
    answer:
      'import java.util.Scanner;\n\npublic class MultiplicationTable {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter an integer: ");\n    int num = scanner.nextInt();\n    System.out.println("Multiplication table of " + num + ":");\n    for (int i = 1; i <= 10; i++) {\n      System.out.println(num + " x " + i + " = " + (num * i));\n    }\n  }\n}',
  },
  {
    id: 63,
    category: "basic",
    question:
      "Write a Java program that reads an integer and check whether it is negative, zero, or positive",
    answer:
      'import java.util.Scanner;\n\npublic class NumberSignChecker {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter an integer: ");\n    int number = scanner.nextInt();\n    if (number > 0) {\n      System.out.println(number + " is positive.");\n    } else if (number < 0) {\n      System.out.println(number + " is negative.");\n    } else {\n      System.out.println(number + " is zero.");\n    }\n  }\n}',
  },
  {
    id: 64,
    category: "basic",
    question:
      "Write a Java program that reads a positive integer and count the number of digits",
    answer:
      'import java.util.Scanner;\n\npublic class DigitCounter {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter a positive integer: ");\n    int number = scanner.nextInt();\n    int count = 0;\n    while (number != 0) {\n      number /= 10;\n      count++;\n    }\n    System.out.println("Number of digits: " + count);\n  }\n}',
  },
  {
    id: 65,
    category: "basic",
    question:
      "Write a Java program that accepts three numbers and check All numbers are equal or not",
    answer:
      'import java.util.Scanner;\n\npublic class AllNumbersEqual {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter first number: ");\n    int num1 = scanner.nextInt();\n    System.out.print("Enter second number: ");\n    int num2 = scanner.nextInt();\n    System.out.print("Enter third number: ");\n    int num3 = scanner.nextInt();\n    if (num1 == num2 && num2 == num3) {\n      System.out.println("All numbers are equal.");\n    } else {\n      System.out.println("Numbers are not equal.");\n    }\n  }\n}',
  },
  {
    id: 66,
    category: "basic",
    question:
      "Write a java program that accepts three numbers from the user and check if numbers are in “increasing” or “decreasing” order.",
    answer:
      'import java.util.Scanner;\n\npublic class OrderChecker {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter first number: ");\n    int num1 = scanner.nextInt();\n    System.out.print("Enter second number: ");\n    int num2 = scanner.nextInt();\n    System.out.print("Enter third number: ");\n    int num3 = scanner.nextInt();\n    if (num1 < num2 && num2 < num3) {\n      System.out.println("Numbers are in increasing order.");\n    } else if (num1 > num2 && num2 > num3) {\n      System.out.println("Numbers are in decreasing order.");\n    } else {\n      System.out.println("Numbers are neither in increasing nor decreasing order.");\n    }\n  }\n}',
  },
  {
    id: 67,
    category: "basic",
    question: "Write a Java program that determines a student’s grade",
    answer:
      "import java.util.Scanner;\n\npublic class StudentGrade {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print(\"Enter the marks: \");\n    int marks = scanner.nextInt();\n    char grade;\n    if (marks >= 90) {\n      grade = 'A';\n    } else if (marks >= 80) {\n      grade = 'B';\n    } else if (marks >= 70) {\n      grade = 'C';\n    } else if (marks >= 60) {\n      grade = 'D';\n    } else {\n      grade = 'F';\n    }\n    System.out.println(\"Grade: \" + grade);\n  }\n}",
  },
  {
    id: 68,
    category: "basic",
    question: "Write a Java program to create a simple calculator",
    answer:
      'import java.util.Scanner;\n\npublic class SimpleCalculator {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter first number: ");\n    double num1 = scanner.nextDouble();\n    System.out.print("Enter second number: ");\n    double num2 = scanner.nextDouble();\n    System.out.print("Enter an operator (+, -, *, /): ");\n    char operator = scanner.next().charAt(0);\n    double result;\n    switch (operator) {\n      case \'+\':\n        result = num1 + num2;\n        break;\n      case \'-\':\n        result = num1 - num2;\n        break;\n      case \'*\':\n        result = num1 * num2;\n        break;\n      case \'/\':\n        result = num1 / num2;\n        break;\n      default:\n        System.out.println("Error: Invalid operator");\n        return;\n    }\n    System.out.println("Result: " + result);\n  }\n}',
  },
  {
    id: 69,
    category: "basic",
    question: "Write a Java program to concatenate two strings",
    answer:
      'import java.util.Scanner;\n\npublic class StringConcatenation {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter first string: ");\n    String str1 = scanner.nextLine();\n    System.out.print("Enter second string: ");\n    String str2 = scanner.nextLine();\n    String concatenatedString = str1 + str2;\n    System.out.println("Concatenated string: " + concatenatedString);\n  }\n}',
  },
  {
    id: 70,
    category: "basic",
    question:
      "Write a Java program to convert all characters in a string to lowercase",
    answer:
      'import java.util.Scanner;\n\npublic class ConvertToLowercase {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter a string: ");\n    String str = scanner.nextLine();\n    String lowerCaseString = str.toLowerCase();\n    System.out.println("String in lowercase: " + lowerCaseString);\n  }\n}',
  },
  {
    id: 71,
    category: "basic",
    question:
      "Write a Java program to convert all characters in a string to uppercase",
    answer:
      'import java.util.Scanner;\n\npublic class ConvertToUppercase {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter a string: ");\n    String str = scanner.nextLine();\n    String upperCaseString = str.toUpperCase();\n    System.out.println("String in uppercase: " + upperCaseString);\n  }\n}',
  },
  {
    id: 72,
    category: "basic",
    question: "Write a Java program to trim a string (remove whitespaces)",
    answer:
      'import java.util.Scanner;\n\npublic class TrimString {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter a string with spaces: ");\n    String str = scanner.nextLine();\n    String trimmedString = str.trim();\n    System.out.println("Trimmed string: " + trimmedString);\n  }\n}',
  },
  {
    id: 73,
    category: "basic",
    question:
      "Write a Java program to get a substring of a given string between two specified positions",
    answer:
      'import java.util.Scanner;\n\npublic class SubstringExample {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter a string: ");\n    String str = scanner.nextLine();\n    System.out.print("Enter start index: ");\n    int startIndex = scanner.nextInt();\n    System.out.print("Enter end index: ");\n    int endIndex = scanner.nextInt();\n    String substring = str.substring(startIndex, endIndex);\n    System.out.println("Substring: " + substring);\n  }\n}',
  },
  {
    id: 74,
    category: "basic",
    question:
      "Write a Java program to replace all the ‘d’ characters with ‘f’ characters",
    answer:
      "import java.util.Scanner;\n\npublic class ReplaceCharacters {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print(\"Enter a string: \");\n    String str = scanner.nextLine();\n    String replacedString = str.replace('d', 'f');\n    System.out.println(\"String after replacement: \" + replacedString);\n  }\n}",
  },
  {
    id: 75,
    category: "basic",
    question: "Write a Java program to get the length of a given string",
    answer:
      'import java.util.Scanner;\n\npublic class StringLength {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter a string: ");\n    String str = scanner.nextLine();\n    int length = str.length();\n    System.out.println("Length of the string: " + length);\n  }\n}',
  },
  {
    id: 76,
    category: "basic",
    question:
      "Write a Java program to print current date and time in the specified format",
    answer:
      'import java.text.SimpleDateFormat;\nimport java.util.Date;\n\npublic class DateTimeExample {\n  public static void main(String[] args) {\n    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");\n    String currentDateTime = sdf.format(new Date());\n    System.out.println("Current date and time: " + currentDateTime);\n  }\n}',
  },
  {
    id: 77,
    category: "basic",
    question:
      "Write a Java program to get the character at the given index within the String",
    answer:
      'import java.util.Scanner;\n\npublic class CharacterAtIndex {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter a string: ");\n    String str = scanner.nextLine();\n    System.out.print("Enter index: ");\n    int index = scanner.nextInt();\n    if (index >= 0 && index < str.length()) {\n      char ch = str.charAt(index);\n      System.out.println("Character at index " + index + ": " + ch);\n    } else {\n      System.out.println("Index out of bounds.");\n    }\n  }\n}',
  },
  {
    id: 78,
    category: "basic",
    question:
      "Write a java program to remove a particular character from a string",
    answer:
      'import java.util.Scanner;\n\npublic class RemoveCharacter {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter a string: ");\n    String str = scanner.nextLine();\n    System.out.print("Enter character to remove: ");\n    char ch = scanner.next().charAt(0);\n    String newString = str.replace(Character.toString(ch), "");\n    System.out.println("String after removal: " + newString);\n  }\n}',
  },
  {
    id: 79,
    category: "basic",
    question: "Write a java program to reverse a String",
    answer:
      'import java.util.Scanner;\n\npublic class ReverseString {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter a string: ");\n    String str = scanner.nextLine();\n    String reversedString = new StringBuilder(str).reverse().toString();\n    System.out.println("Reversed string: " + reversedString);\n  }\n}',
  },
  {
    id: 80,
    category: "basic",
    question: "Write a java program to remove HTML tags from a string",
    answer:
      'import java.util.Scanner;\n\npublic class RemoveHtmlTags {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter a string with HTML tags: ");\n    String str = scanner.nextLine();\n    String textOnly = str.replaceAll("<[^>]*>", "");\n    System.out.println("String without HTML tags: " + textOnly);\n  }\n}',
  },
  {
    id: 81,
    category: "basic",
    question:
      "Write a Java program to count total number of lines from a string",
    answer:
      'import java.util.Scanner;\n\npublic class CountLines {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.println("Enter a string with multiple lines (end with a blank line):");\n    StringBuilder sb = new StringBuilder();\n    String line;\n    while (!(line = scanner.nextLine()).isEmpty()) {\n      sb.append(line).append("\\n");\n    }\n    String[] lines = sb.toString().split("\\n");\n    System.out.println("Total number of lines: " + lines.length);\n  }\n}',
  },
  {
    id: 82,
    category: "basic",
    question: "Write a Java program to sum values of an array",
    answer:
      'import java.util.Scanner;\n\npublic class SumArray {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of elements in the array: ");\n    int n = scanner.nextInt();\n    int[] array = new int[n];\n    System.out.println("Enter the elements of the array:");\n    int sum = 0;\n    for (int i = 0; i < n; i++) {\n      array[i] = scanner.nextInt();\n      sum += array[i];\n    }\n    System.out.println("Sum of the array elements: " + sum);\n  }\n}',
  },
  {
    id: 83,
    category: "basic",
    question: "Write a Java program to find the index of an array element",
    answer:
      'import java.util.Scanner;\n\npublic class FindIndex {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of elements in the array: ");\n    int n = scanner.nextInt();\n    int[] array = new int[n];\n    System.out.println("Enter the elements of the array:");\n    for (int i = 0; i < n; i++) {\n      array[i] = scanner.nextInt();\n    }\n    System.out.print("Enter the element to find: ");\n    int key = scanner.nextInt();\n    int index = -1;\n    for (int i = 0; i < n; i++) {\n      if (array[i] == key) {\n        index = i;\n        break;\n      }\n    }\n    if (index != -1) {\n      System.out.println("Element found at index: " + index);\n    } else {\n      System.out.println("Element not found in the array.");\n    }\n  }\n}',
  },
  {
    id: 84,
    category: "basic",
    question:
      "Write a Java program to calculate the average value of array elements",
    answer:
      'import java.util.Scanner;\n\npublic class AverageArray {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of elements in the array: ");\n    int n = scanner.nextInt();\n    int[] array = new int[n];\n    System.out.println("Enter the elements of the array:");\n    int sum = 0;\n    for (int i = 0; i < n; i++) {\n      array[i] = scanner.nextInt();\n      sum += array[i];\n    }\n    double average = (double) sum / n;\n    System.out.println("Average of the array elements: " + average);\n  }\n}',
  },
  {
    id: 85,
    category: "basic",
    question:
      "Write a Java program to test if an array contains a specific value",
    answer:
      'import java.util.Scanner;\n\npublic class ContainsValue {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of elements in the array: ");\n    int n = scanner.nextInt();\n    int[] array = new int[n];\n    System.out.println("Enter the elements of the array:");\n    for (int i = 0; i < n; i++) {\n      array[i] = scanner.nextInt();\n    }\n    System.out.print("Enter the value to check: ");\n    int value = scanner.nextInt();\n    boolean found = false;\n    for (int i : array) {\n      if (i == value) {\n        found = true;\n        break;\n      }\n    }\n    if (found) {\n      System.out.println("Array contains the value.");\n    } else {\n      System.out.println("Array does not contain the value.");\n    }\n  }\n}',
  },
  {
    id: 86,
    category: "basic",
    question:
      "Write a Java program to find the maximum and minimum value of an array",
    answer:
      'import java.util.Scanner;\n\npublic class MinMaxArray {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of elements in the array: ");\n    int n = scanner.nextInt();\n    int[] array = new int[n];\n    System.out.println("Enter the elements of the array:");\n    for (int i = 0; i < n; i++) {\n      array[i] = scanner.nextInt();\n    }\n    int max = array[0];\n    int min = array[0];\n    for (int i = 1; i < n; i++) {\n      if (array[i] > max) {\n        max = array[i];\n      }\n      if (array[i] < min) {\n        min = array[i];\n      }\n    }\n    System.out.println("Maximum value: " + max);\n    System.out.println("Minimum value: " + min);\n  }\n}',
  },
  {
    id: 87,
    category: "basic",
    question:
      "Write a Java program to insert an element (specific position) into an array",
    answer:
      'import java.util.Scanner;\n\npublic class InsertElement {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of elements in the array: ");\n    int n = scanner.nextInt();\n    int[] array = new int[n + 1];\n    System.out.println("Enter the elements of the array:");\n    for (int i = 0; i < n; i++) {\n      array[i] = scanner.nextInt();\n    }\n    System.out.print("Enter the position to insert: ");\n    int pos = scanner.nextInt();\n    System.out.print("Enter the element to insert: ");\n    int element = scanner.nextInt();\n    for (int i = n; i >= pos; i--) {\n      array[i] = array[i - 1];\n    }\n    array[pos - 1] = element;\n    System.out.println("Array after insertion:");\n    for (int i : array) {\n      System.out.print(i + " ");\n    }\n  }\n}',
  },
  {
    id: 88,
    category: "basic",
    question: "Write a Java program to reverse an array of integer values",
    answer:
      'import java.util.Scanner;\n\npublic class ReverseArray {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of elements in the array: ");\n    int n = scanner.nextInt();\n    int[] array = new int[n];\n    System.out.println("Enter the elements of the array:");\n    for (int i = 0; i < n; i++) {\n      array[i] = scanner.nextInt();\n    }\n    System.out.println("Array in reverse order:");\n    for (int i = n - 1; i >= 0; i--) {\n      System.out.print(array[i] + " ");\n    }\n  }\n}',
  },
  {
    id: 89,
    category: "basic",
    question:
      "Write a Java program to find the common elements between two arrays",
    answer:
      'import java.util.Scanner;\n\npublic class CommonElements {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of elements in the first array: ");\n    int n1 = scanner.nextInt();\n    int[] array1 = new int[n1];\n    System.out.println("Enter the elements of the first array:");\n    for (int i = 0; i < n1; i++) {\n      array1[i] = scanner.nextInt();\n    }\n    System.out.print("Enter the number of elements in the second array: ");\n    int n2 = scanner.nextInt();\n    int[] array2 = new int[n2];\n    System.out.println("Enter the elements of the second array:");\n    for (int i = 0; i < n2; i++) {\n      array2[i] = scanner.nextInt();\n    }\n    System.out.println("Common elements:");\n    for (int i : array1) {\n      for (int j : array2) {\n        if (i == j) {\n          System.out.print(i + " ");\n          break;\n        }\n      }\n    }\n  }\n}',
  },
  {
    id: 90,
    category: "basic",
    question:
      "Write a Java program to find the duplicate values of an array of integer values",
    answer:
      'import java.util.Scanner;\nimport java.util.HashSet;\n\npublic class FindDuplicates {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of elements in the array: ");\n    int n = scanner.nextInt();\n    int[] array = new int[n];\n    System.out.println("Enter the elements of the array:");\n    HashSet<Integer> set = new HashSet<>();\n    HashSet<Integer> duplicates = new HashSet<>();\n    for (int i = 0; i < n; i++) {\n      array[i] = scanner.nextInt();\n      if (!set.add(array[i])) {\n        duplicates.add(array[i]);\n      }\n    }\n    System.out.println("Duplicate values:");\n    for (int dup : duplicates) {\n      System.out.print(dup + " ");\n    }\n  }\n}',
  },
  {
    id: 91,
    category: "basic",
    question: "Write a Java program to convert an array to ArrayList",
    answer:
      'import java.util.ArrayList;\nimport java.util.Arrays;\n\npublic class ArrayToArrayList {\n  public static void main(String[] args) {\n    Integer[] array = {1, 2, 3, 4, 5};\n    ArrayList<Integer> arrayList = new ArrayList<>(Arrays.asList(array));\n    System.out.println("ArrayList: " + arrayList);\n  }\n}',
  },
  {
    id: 92,
    category: "basic",
    question: "Write a Java program to add two matrices of the same size",
    answer:
      'import java.util.Scanner;\n\npublic class MatrixAddition {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of rows: ");\n    int rows = scanner.nextInt();\n    System.out.print("Enter the number of columns: ");\n    int cols = scanner.nextInt();\n\n    int[][] matrix1 = new int[rows][cols];\n    int[][] matrix2 = new int[rows][cols];\n    int[][] result = new int[rows][cols];\n\n    System.out.println("Enter elements of first matrix:");\n    for (int i = 0; i < rows; i++) {\n      for (int j = 0; j < cols; j++) {\n        matrix1[i][j] = scanner.nextInt();\n      }\n    }\n\n    System.out.println("Enter elements of second matrix:");\n    for (int i = 0; i < rows; i++) {\n      for (int j = 0; j < cols; j++) {\n        matrix2[i][j] = scanner.nextInt();\n      }\n    }\n\n    for (int i = 0; i < rows; i++) {\n      for (int j = 0; j < cols; j++) {\n        result[i][j] = matrix1[i][j] + matrix2[i][j];\n      }\n    }\n\n    System.out.println("Resultant matrix:");\n    for (int i = 0; i < rows; i++) {\n      for (int j = 0; j < cols; j++) {\n        System.out.print(result[i][j] + " ");\n      }\n      System.out.println();\n    }\n  }\n}',
  },
  {
    id: 93,
    category: "basic",
    question:
      "Write a Java program to find second largest number from the array",
    answer:
      'import java.util.Scanner;\nimport java.util.Arrays;\n\npublic class SecondLargest {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of elements in the array: ");\n    int n = scanner.nextInt();\n    int[] array = new int[n];\n    System.out.println("Enter the elements of the array:");\n    for (int i = 0; i < n; i++) {\n      array[i] = scanner.nextInt();\n    }\n\n    if (n < 2) {\n      System.out.println("Array should have at least two elements.");\n      return;\n    }\n\n    int largest = Integer.MIN_VALUE;\n    int secondLargest = Integer.MIN_VALUE;\n    for (int i = 0; i < n; i++) {\n      if (array[i] > largest) {\n        secondLargest = largest;\n        largest = array[i];\n      } else if (array[i] > secondLargest && array[i] < largest) {\n        secondLargest = array[i];\n      }\n    }\n\n    if (secondLargest == Integer.MIN_VALUE) {\n      System.out.println("No second largest element found.");\n    } else {\n      System.out.println("Second largest element: " + secondLargest);\n    }\n  }\n}',
  },
  {
    id: 94,
    category: "basic",
    question:
      "Write a Java program to find second lowest number from the array",
    answer:
      'import java.util.Scanner;\nimport java.util.Arrays;\n\npublic class SecondLowest {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of elements in the array: ");\n    int n = scanner.nextInt();\n    int[] array = new int[n];\n    System.out.println("Enter the elements of the array:");\n    for (int i = 0; i < n; i++) {\n      array[i] = scanner.nextInt();\n    }\n\n    if (n < 2) {\n      System.out.println("Array should have at least two elements.");\n      return;\n    }\n\n    int lowest = Integer.MAX_VALUE;\n    int secondLowest = Integer.MAX_VALUE;\n    for (int i = 0; i < n; i++) {\n      if (array[i] < lowest) {\n        secondLowest = lowest;\n        lowest = array[i];\n      } else if (array[i] < secondLowest && array[i] > lowest) {\n        secondLowest = array[i];\n      }\n    }\n\n    if (secondLowest == Integer.MAX_VALUE) {\n      System.out.println("No second lowest element found.");\n    } else {\n      System.out.println("Second lowest element: " + secondLowest);\n    }\n  }\n}',
  },
  {
    id: 95,
    category: "basic",
    question:
      "Write a Java program to find the number of even and odd integers in a given array of integers",
    answer:
      'import java.util.Scanner;\n\npublic class EvenOddCount {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of elements in the array: ");\n    int n = scanner.nextInt();\n    int[] array = new int[n];\n    System.out.println("Enter the elements of the array:");\n    int evenCount = 0;\n    int oddCount = 0;\n    for (int i = 0; i < n; i++) {\n      array[i] = scanner.nextInt();\n      if (array[i] % 2 == 0) {\n        evenCount++;\n      } else {\n        oddCount++;\n      }\n    }\n    System.out.println("Number of even integers: " + evenCount);\n    System.out.println("Number of odd integers: " + oddCount);\n  }\n}',
  },
  {
    id: 96,
    category: "basic",
    question:
      "Write a Java program to get the difference between the largest and smallest values in an array of integers",
    answer:
      'import java.util.Scanner;\n\npublic class DifferenceMaxMin {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of elements in the array: ");\n    int n = scanner.nextInt();\n    int[] array = new int[n];\n    System.out.println("Enter the elements of the array:");\n    int max = Integer.MIN_VALUE;\n    int min = Integer.MAX_VALUE;\n    for (int i = 0; i < n; i++) {\n      array[i] = scanner.nextInt();\n      if (array[i] > max) {\n        max = array[i];\n      }\n      if (array[i] < min) {\n        min = array[i];\n      }\n    }\n    int difference = max - min;\n    System.out.println("Difference between largest and smallest values: " + difference);\n  }\n}',
  },
  {
    id: 97,
    category: "basic",
    question:
      "Write a Java program to segregate all 0s on left side and all 1s on right side of a given array of 0s and 1s",
    answer:
      'import java.util.Scanner;\n\npublic class SegregateZeroOne {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of elements in the array: ");\n    int n = scanner.nextInt();\n    int[] array = new int[n];\n    System.out.println("Enter the elements of the array (0s and 1s only):");\n    int left = 0;\n    int right = n - 1;\n    while (left <= right) {\n      if (array[left] == 0) {\n        left++;\n      } else if (array[right] == 1) {\n        right--;\n      } else {\n        int temp = array[left];\n        array[left] = array[right];\n        array[right] = temp;\n        left++;\n        right--;\n      }\n    }\n    System.out.println("Array after segregation:");\n    for (int i = 0; i < n; i++) {\n      System.out.print(array[i] + " ");\n    }\n  }\n}',
  },
  {
    id: 98,
    category: "basic",
    question:
      "Write a Java program to rotate an array by a given number of positions",
    answer:
      'import java.util.Scanner;\n\npublic class RotateArray {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of elements in the array: ");\n    int n = scanner.nextInt();\n    int[] array = new int[n];\n    System.out.println("Enter the elements of the array:");\n    for (int i = 0; i < n; i++) {\n      array[i] = scanner.nextInt();\n    }\n    System.out.print("Enter the number of positions to rotate: ");\n    int k = scanner.nextInt();\n    k = k % n;  // Handle cases where k > n\n    reverse(array, 0, n - 1);\n    reverse(array, 0, k - 1);\n    reverse(array, k, n - 1);\n    System.out.println("Array after rotation:");\n    for (int i = 0; i < n; i++) {\n      System.out.print(array[i] + " ");\n    }\n  }\n\n  public static void reverse(int[] array, int start, int end) {\n    while (start < end) {\n      int temp = array[start];\n      array[start] = array[end];\n      array[end] = temp;\n      start++;\n      end--;\n    }\n  }\n}',
  },
  {
    id: 99,
    category: "basic",
    question: "Write a Java program to find the intersection of two arrays",
    answer:
      'import java.util.Scanner;\nimport java.util.HashSet;\nimport java.util.Set;\n\npublic class ArrayIntersection {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of elements in the first array: ");\n    int n1 = scanner.nextInt();\n    int[] array1 = new int[n1];\n    System.out.println("Enter the elements of the first array:");\n    for (int i = 0; i < n1; i++) {\n      array1[i] = scanner.nextInt();\n    }\n    System.out.print("Enter the number of elements in the second array: ");\n    int n2 = scanner.nextInt();\n    int[] array2 = new int[n2];\n    System.out.println("Enter the elements of the second array:");\n    for (int i = 0; i < n2; i++) {\n      array2[i] = scanner.nextInt();\n    }\n\n    Set<Integer> set1 = new HashSet<>();\n    Set<Integer> intersection = new HashSet<>();\n\n    for (int i : array1) {\n      set1.add(i);\n    }\n    for (int j : array2) {\n      if (set1.contains(j)) {\n        intersection.add(j);\n      }\n    }\n\n    System.out.println("Intersection of arrays:");\n    for (int i : intersection) {\n      System.out.print(i + " ");\n    }\n  }\n}',
  },
  {
    id: 100,
    category: "basic",
    question: "Write a Java program to remove duplicate elements from an array",
    answer:
      'import java.util.Scanner;\nimport java.util.LinkedHashSet;\nimport java.util.Set;\n\npublic class RemoveDuplicates {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of elements in the array: ");\n    int n = scanner.nextInt();\n    int[] array = new int[n];\n    System.out.println("Enter the elements of the array:");\n    for (int i = 0; i < n; i++) {\n      array[i] = scanner.nextInt();\n    }\n\n    Set<Integer> set = new LinkedHashSet<>();\n    for (int i : array) {\n      set.add(i);\n    }\n\n    System.out.println("Array after removing duplicates:");\n    for (int i : set) {\n      System.out.print(i + " ");\n    }\n  }\n}',
  },
  {
    id: 101,
    category: "basic",
    question: "Write a Java Program to Sort the Array in a Descending Order",
    answer:
      'import java.util.Arrays;\nimport java.util.Collections;\nimport java.util.Scanner;\n\npublic class SortArrayDescending {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of elements in the array: ");\n    int n = scanner.nextInt();\n    Integer[] array = new Integer[n];\n    System.out.println("Enter the elements of the array:");\n    for (int i = 0; i < n; i++) {\n      array[i] = scanner.nextInt();\n    }\n\n    Arrays.sort(array, Collections.reverseOrder());\n\n    System.out.println("Array in descending order:");\n    for (int i : array) {\n      System.out.print(i + " ");\n    }\n  }\n}',
  },
  {
    id: 102,
    category: "basic",
    question: "Write a Java Program to Sort Names in an Alphabetical Order",
    answer:
      'import java.util.Arrays;\nimport java.util.Scanner;\n\npublic class SortNamesAlphabetically {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of names: ");\n    int n = scanner.nextInt();\n    scanner.nextLine(); // Consume newline\n    String[] names = new String[n];\n    System.out.println("Enter the names:");\n    for (int i = 0; i < n; i++) {\n      names[i] = scanner.nextLine();\n    }\n\n    Arrays.sort(names);\n\n    System.out.println("Names in alphabetical order:");\n    for (String name : names) {\n      System.out.println(name);\n    }\n  }\n}',
  },
  {
    id: 103,
    category: "basic",
    question: "Write a Java Program to Display Transpose Matrix",
    answer:
      'import java.util.Scanner;\n\npublic class TransposeMatrix {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of rows: ");\n    int rows = scanner.nextInt();\n    System.out.print("Enter the number of columns: ");\n    int cols = scanner.nextInt();\n    int[][] matrix = new int[rows][cols];\n\n    System.out.println("Enter the elements of the matrix:");\n    for (int i = 0; i < rows; i++) {\n      for (int j = 0; j < cols; j++) {\n        matrix[i][j] = scanner.nextInt();\n      }\n    }\n\n    System.out.println("Transpose of the matrix:");\n    for (int i = 0; i < cols; i++) {\n      for (int j = 0; j < rows; j++) {\n        System.out.print(matrix[j][i] + " ");\n      }\n      System.out.println();\n    }\n  }\n}',
  },
  {
    id: 104,
    category: "basic",
    question: "Write a Java Program to Search Key Elements in an Array",
    answer:
      'import java.util.Scanner;\n\npublic class SearchKeyElement {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of elements in the array: ");\n    int n = scanner.nextInt();\n    int[] array = new int[n];\n    System.out.println("Enter the elements of the array:");\n    for (int i = 0; i < n; i++) {\n      array[i] = scanner.nextInt();\n    }\n\n    System.out.print("Enter the key element to search: ");\n    int key = scanner.nextInt();\n    boolean found = false;\n\n    for (int i = 0; i < n; i++) {\n      if (array[i] == key) {\n        found = true;\n        System.out.println("Key element found at index: " + i);\n        break;\n      }\n    }\n\n    if (!found) {\n      System.out.println("Key element not found.");\n    }\n  }\n}',
  },
  {
    id: 105,
    category: "basic",
    question:
      "Write a Java Program to Accept the Marks of a Student and find Total Marks and Percentage",
    answer:
      'import java.util.Scanner;\n\npublic class StudentMarks {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of subjects: ");\n    int subjects = scanner.nextInt();\n    int totalMarks = 0;\n    System.out.println("Enter the marks for each subject:");\n    for (int i = 0; i < subjects; i++) {\n      totalMarks += scanner.nextInt();\n    }\n\n    double percentage = (double) totalMarks / subjects;\n    System.out.println("Total Marks: " + totalMarks);\n    System.out.println("Percentage: " + percentage + "%");\n  }\n}',
  },
  {
    id: 106,
    category: "basic",
    question: "Write a java program to print numbers from 1 to 10 using loop",
    answer:
      "public class PrintNumbers {\n  public static void main(String[] args) {\n    for (int i = 1; i <= 10; i++) {\n      System.out.println(i);\n    }\n  }\n}",
  },
  {
    id: 107,
    category: "basic",
    question:
      "Write a java program to calculate the sum of first 10 natural number using loop",
    answer:
      'public class SumOfFirst10NaturalNumbers {\n  public static void main(String[] args) {\n    int sum = 0;\n    for (int i = 1; i <= 10; i++) {\n      sum += i;\n    }\n    System.out.println("Sum of first 10 natural numbers: " + sum);\n  }\n}',
  },
  {
    id: 108,
    category: "basic",
    question:
      "Write a Java program to print multiplication table of given number",
    answer:
      'import java.util.Scanner;\n\npublic class MultiplicationTable {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter a number: ");\n    int number = scanner.nextInt();\n\n    System.out.println("Multiplication table of " + number + ":");\n    for (int i = 1; i <= 10; i++) {\n      System.out.println(number + " x " + i + " = " + (number * i));\n    }\n  }\n}',
  },
  {
    id: 109,
    category: "basic",
    question:
      "Write a Java program to find the factorial value of any number entered through the keyboard",
    answer:
      'import java.util.Scanner;\n\npublic class Factorial {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter a number: ");\n    int number = scanner.nextInt();\n    long factorial = 1;\n\n    for (int i = 1; i <= number; i++) {\n      factorial *= i;\n    }\n\n    System.out.println("Factorial of " + number + " is " + factorial);\n  }\n}',
  },
  {
    id: 110,
    category: "basic",
    question:
      "Write a Java program that prompts the user to input an integer and then outputs the number with the digits reversed order",
    answer:
      'import java.util.Scanner;\n\npublic class ReverseDigits {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter an integer: ");\n    int number = scanner.nextInt();\n    int reversed = 0;\n\n    while (number != 0) {\n      int digit = number % 10;\n      reversed = reversed * 10 + digit;\n      number /= 10;\n    }\n\n    System.out.println("Reversed number: " + reversed);\n  }\n}',
  },
  {
    id: 111,
    category: "basic",
    question:
      "Write a Java program that reads a set of integers, and then prints the sum of the even and odd integers using loop",
    answer:
      'import java.util.Scanner;\n\npublic class SumEvenOdd {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    int evenSum = 0;\n    int oddSum = 0;\n    System.out.print("Enter integers (enter a non-integer to stop): ");\n\n    while (scanner.hasNextInt()) {\n      int number = scanner.nextInt();\n      if (number % 2 == 0) {\n        evenSum += number;\n      } else {\n        oddSum += number;\n      }\n    }\n\n    System.out.println("Sum of even integers: " + evenSum);\n    System.out.println("Sum of odd integers: " + oddSum);\n  }\n}',
  },
  {
    id: 112,
    category: "basic",
    question:
      "Write a Java program to check whether the number is a prime number or not",
    answer:
      'import java.util.Scanner;\n\npublic class PrimeNumber {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter a number: ");\n    int number = scanner.nextInt();\n    boolean isPrime = true;\n\n    if (number <= 1) {\n      isPrime = false;\n    } else {\n      for (int i = 2; i <= Math.sqrt(number); i++) {\n        if (number % i == 0) {\n          isPrime = false;\n          break;\n        }\n      }\n    }\n\n    if (isPrime) {\n      System.out.println(number + " is a prime number.");\n    } else {\n      System.out.println(number + " is not a prime number.");\n    }\n  }\n}',
  },
  {
    id: 113,
    category: "basic",
    question:
      "Write a Java program to calculate HCF of Two given numbers using loop",
    answer:
      'import java.util.Scanner;\n\npublic class HCF {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter first number: ");\n    int a = scanner.nextInt();\n    System.out.print("Enter second number: ");\n    int b = scanner.nextInt();\n\n    while (b != 0) {\n      int temp = b;\n      b = a % b;\n      a = temp;\n    }\n\n    System.out.println("HCF of the given numbers is: " + a);\n  }\n}',
  },
  {
    id: 114,
    category: "basic",
    question:
      "Write a Java program to enter the numbers till the user wants and at the end it should display the count of positive, negative and zeros",
    answer:
      'import java.util.Scanner;\n\npublic class CountNumbers {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    int positiveCount = 0;\n    int negativeCount = 0;\n    int zeroCount = 0;\n    System.out.println("Enter numbers (enter \'q\' to quit):");\n\n    while (scanner.hasNextInt()) {\n      int number = scanner.nextInt();\n      if (number > 0) {\n        positiveCount++;\n      } else if (number < 0) {\n        negativeCount++;\n      } else {\n        zeroCount++;\n      }\n    }\n\n    System.out.println("Count of positive numbers: " + positiveCount);\n    System.out.println("Count of negative numbers: " + negativeCount);\n    System.out.println("Count of zeros: " + zeroCount);\n  }\n}',
  },
  {
    id: 115,
    category: "basic",
    question:
      "Write a Java program to enter the numbers till the user wants and at the end the program should display the largest and smallest numbers entered",
    answer:
      'import java.util.Scanner;\n\npublic class MinMaxNumbers {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.println("Enter numbers (enter \'q\' to quit):");\n    int largest = Integer.MIN_VALUE;\n    int smallest = Integer.MAX_VALUE;\n\n    while (scanner.hasNextInt()) {\n      int number = scanner.nextInt();\n      if (number > largest) {\n        largest = number;\n      }\n      if (number < smallest) {\n        smallest = number;\n      }\n    }\n\n    System.out.println("Largest number entered: " + largest);\n    System.out.println("Smallest number entered: " + smallest);\n  }\n}',
  },
  {
    id: 116,
    category: "basic",
    question:
      "Write a Java program to print out all Armstrong numbers between 1 to 600 using loop",
    answer:
      'public class ArmstrongNumbers {\n  public static void main(String[] args) {\n    System.out.println("Armstrong numbers between 1 and 600:");\n    for (int num = 1; num <= 600; num++) {\n      int originalNumber = num;\n      int sum = 0;\n      while (originalNumber != 0) {\n        int digit = originalNumber % 10;\n        sum += Math.pow(digit, 3);\n        originalNumber /= 10;\n      }\n      if (sum == num) {\n        System.out.println(num);\n      }\n    }\n  }\n}',
  },
  {
    id: 117,
    category: "basic",
    question:
      "Write a java program to count total number of notes in entered amount using loop",
    answer:
      'import java.util.Scanner;\n\npublic class NoteCounter {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the amount: ");\n    int amount = scanner.nextInt();\n\n    int[] notes = {100, 50, 20, 10, 5, 1};\n    int[] noteCount = new int[notes.length];\n\n    for (int i = 0; i < notes.length; i++) {\n      noteCount[i] = amount / notes[i];\n      amount %= notes[i];\n    }\n\n    System.out.println("Number of notes required:");\n    for (int i = 0; i < notes.length; i++) {\n      if (noteCount[i] > 0) {\n        System.out.println(notes[i] + " : " + noteCount[i]);\n      }\n    }\n  }\n}',
  },
  {
    id: 118,
    category: "basic",
    question:
      "Write a Java program to print Fibonacci series of n terms where n is input by user using loop",
    answer:
      'import java.util.Scanner;\n\npublic class FibonacciSeries {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the number of terms: ");\n    int n = scanner.nextInt();\n\n    int first = 0, second = 1;\n    System.out.println("Fibonacci series up to " + n + " terms:");\n    for (int i = 1; i <= n; i++) {\n      System.out.print(first + " ");\n      int next = first + second;\n      first = second;\n      second = next;\n    }\n  }\n}',
  },
  {
    id: 119,
    category: "basic",
    question:
      "Write a java program to calculate the sum of following series where n is input by user\n1 + 1/2 + 1/3 + ... + 1/n",
    answer:
      'import java.util.Scanner;\n\npublic class SeriesSum {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter the value of n: ");\n    int n = scanner.nextInt();\n    double sum = 0.0;\n\n    for (int i = 1; i <= n; i++) {\n      sum += 1.0 / i;\n    }\n\n    System.out.println("Sum of the series: " + sum);\n  }\n}',
  },
  {
    id: 120,
    category: "basic",
    question: "Write a Java method to compute the average of three numbers",
    answer:
      'public class AverageOfThree {\n  public static void main(String[] args) {\n    double average = computeAverage(10, 20, 30);\n    System.out.println("Average: " + average);\n  }\n\n  public static double computeAverage(double a, double b, double c) {\n    return (a + b + c) / 3;\n  }\n}',
  },
  {
    id: 121,
    category: "basic",
    question:
      "Write a Java method to find the smallest number among three numbers",
    answer:
      'public class SmallestNumber {\n  public static void main(String[] args) {\n    int smallest = findSmallest(10, 20, 30);\n    System.out.println("Smallest number: " + smallest);\n  }\n\n  public static int findSmallest(int a, int b, int c) {\n    return Math.min(Math.min(a, b), c);\n  }\n}',
  },
  {
    id: 122,
    category: "basic",
    question: "Write a Java method to count all words in a string",
    answer:
      'public class WordCount {\n  public static void main(String[] args) {\n    String text = "Hello world this is Java";\n    int count = countWords(text);\n    System.out.println("Number of words: " + count);\n  }\n\n  public static int countWords(String str) {\n    if (str == null || str.isEmpty()) {\n      return 0;\n    }\n    String[] words = str.trim().split("\\s+");\n    return words.length;\n  }\n}',
  },
  {
    id: 123,
    category: "basic",
    question: "Write a Java method to count all vowels in a string",
    answer:
      "public class VowelCount {\n  public static void main(String[] args) {\n    String text = \"Hello world\";\n    int count = countVowels(text);\n    System.out.println(\"Number of vowels: \" + count);\n  }\n\n  public static int countVowels(String str) {\n    int count = 0;\n    for (char c : str.toLowerCase().toCharArray()) {\n      if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {\n        count++;\n      }\n    }\n    return count;\n  }\n}",
  },
  {
    id: 124,
    category: "basic",
    question:
      "Write a Java method to compute the sum of the digits in an integer",
    answer:
      'public class SumOfDigits {\n  public static void main(String[] args) {\n    int sum = sumDigits(12345);\n    System.out.println("Sum of digits: " + sum);\n  }\n\n  public static int sumDigits(int number) {\n    int sum = 0;\n    while (number != 0) {\n      sum += number % 10;\n      number /= 10;\n    }\n    return sum;\n  }\n}',
  },
  {
    id: 125,
    category: "basic",
    question:
      "Write a Java method to check whether a year entered by the user is a leap year or not",
    answer:
      'import java.util.Scanner;\n\npublic class LeapYearChecker {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    System.out.print("Enter a year: ");\n    int year = scanner.nextInt();\n    boolean isLeap = isLeapYear(year);\n    System.out.println(year + (isLeap ? " is a leap year." : " is not a leap year."));\n  }\n\n  public static boolean isLeapYear(int year) {\n    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);\n  }\n}',
  },
  {
    id: 126,
    category: "basic",
    question: "Write a Java method to calculate the area of a triangle",
    answer:
      'public class TriangleArea {\n  public static void main(String[] args) {\n    double area = calculateArea(5, 10);\n    System.out.println("Area of the triangle: " + area);\n  }\n\n  public static double calculateArea(double base, double height) {\n    return 0.5 * base * height;\n  }\n}',
  },
  {
    id: 127,
    category: "basic",
    question: "Write a Java method to find the area of a pentagon",
    answer:
      'public class PentagonArea {\n  public static void main(String[] args) {\n    double area = calculateArea(5, 7);\n    System.out.println("Area of the pentagon: " + area);\n  }\n\n  public static double calculateArea(double sideLength, double apothem) {\n    return (5 * sideLength * apothem) / 2;\n  }\n}',
  },
  {
    id: 128,
    category: "basic",
    question: "Write a Java method to find number is even number or not",
    answer:
      'public class EvenNumber {\n  public static void main(String[] args) {\n    boolean isEven = isEven(10);\n    System.out.println("Is the number even? " + isEven);\n  }\n\n  public static boolean isEven(int number) {\n    return number % 2 == 0;\n  }\n}',
  },
  {
    id: 129,
    category: "basic",
    question:
      "Write a Java method to check if a number is palindrome number or not",
    answer:
      'public class PalindromeNumber {\n  public static void main(String[] args) {\n    boolean isPalindrome = isPalindrome(12321);\n    System.out.println("Is the number a palindrome? " + isPalindrome);\n  }\n\n  public static boolean isPalindrome(int number) {\n    int originalNumber = number;\n    int reversedNumber = 0;\n    while (number != 0) {\n      int digit = number % 10;\n      reversedNumber = reversedNumber * 10 + digit;\n      number /= 10;\n    }\n    return originalNumber == reversedNumber;\n  }\n}',
  },
  {
    id: 130,
    category: "basic",
    question: "Write a Java method to display prime numbers between 1 to 20",
    answer:
      'public class PrimeNumbers {\n  public static void main(String[] args) {\n    displayPrimes(20);\n  }\n\n  public static void displayPrimes(int limit) {\n    System.out.println("Prime numbers between 1 and " + limit + ":");\n    for (int num = 2; num <= limit; num++) {\n      if (isPrime(num)) {\n        System.out.print(num + " ");\n      }\n    }\n    System.out.println();\n  }\n\n  private static boolean isPrime(int num) {\n    if (num <= 1) return false;\n    for (int i = 2; i <= Math.sqrt(num); i++) {\n      if (num % i == 0) return false;\n    }\n    return true;\n  }\n}',
  },
  {
    id: 131,
    category: "basic",
    question: "Write a Java method to find GCD and LCM of Two Numbers",
    answer:
      'public class GCDLCM {\n  public static void main(String[] args) {\n    int a = 15, b = 20;\n    int gcd = findGCD(a, b);\n    int lcm = findLCM(a, b);\n    System.out.println("GCD: " + gcd);\n    System.out.println("LCM: " + lcm);\n  }\n\n  public static int findGCD(int a, int b) {\n    if (b == 0) return a;\n    return findGCD(b, a % b);\n  }\n\n  public static int findLCM(int a, int b) {\n    return (a * b) / findGCD(a, b);\n  }\n}',
  },
  {
    id: 132,
    category: "basic",
    question: "Write a Java method to find factorial using recursion in Java",
    answer:
      'public class Factorial {\n  public static void main(String[] args) {\n    int number = 5;\n    int result = factorial(number);\n    System.out.println("Factorial of " + number + " is: " + result);\n  }\n\n  public static int factorial(int n) {\n    if (n == 0) return 1;\n    return n * factorial(n - 1);\n  }\n}',
  },
  {
    id: 133,
    category: "basic",
    question: "Write a Java program to reverse an integer number",
    answer:
      'public class ReverseInteger {\n  public static void main(String[] args) {\n    int number = 12345;\n    int reversed = reverseNumber(number);\n    System.out.println("Reversed number: " + reversed);\n  }\n\n  public static int reverseNumber(int num) {\n    int reversed = 0;\n    while (num != 0) {\n      int digit = num % 10;\n      reversed = reversed * 10 + digit;\n      num /= 10;\n    }\n    return reversed;\n  }\n}',
  },
  {
    id: 134,
    category: "basic",
    question:
      "Write a Java program to round a float number to specified decimals",
    answer:
      'public class RoundFloat {\n  public static void main(String[] args) {\n    float number = 12.34567f;\n    int decimals = 2;\n    float rounded = roundToDecimals(number, decimals);\n    System.out.println("Rounded number: " + rounded);\n  }\n\n  public static float roundToDecimals(float value, int decimals) {\n    float scale = (float) Math.pow(10, decimals);\n    return Math.round(value * scale) / scale;\n  }\n}',
  },
  {
    id: 135,
    category: "basic",
    question: "Write a Java program to test if a double number is an integer",
    answer:
      'public class CheckInteger {\n  public static void main(String[] args) {\n    double number = 5.0;\n    boolean isInteger = isInteger(number);\n    System.out.println(number + " is an integer? " + isInteger);\n  }\n\n  public static boolean isInteger(double number) {\n    return number == (int) number;\n  }\n}',
  },
  {
    id: 136,
    category: "basic",
    question: "Write a Java program to round up the result of integer division",
    answer:
      'public class RoundUpDivision {\n  public static void main(String[] args) {\n    int numerator = 7;\n    int denominator = 3;\n    int result = roundUpDivision(numerator, denominator);\n    System.out.println("Rounded up result: " + result);\n  }\n\n  public static int roundUpDivision(int numerator, int denominator) {\n    return (int) Math.ceil((double) numerator / denominator);\n  }\n}',
  },
  {
    id: 137,
    category: "basic",
    question:
      "Write a Java program to convert Roman number to an integer number",
    answer:
      "import java.util.HashMap;\nimport java.util.Map;\n\npublic class RomanToInteger {\n  private static final Map<Character, Integer> romanMap = new HashMap<>();\n\n  static {\n    romanMap.put('I', 1);\n    romanMap.put('V', 5);\n    romanMap.put('X', 10);\n    romanMap.put('L', 50);\n    romanMap.put('C', 100);\n    romanMap.put('D', 500);\n    romanMap.put('M', 1000);\n  }\n\n  public static void main(String[] args) {\n    String roman = \"MCMXCIV\";\n    int result = romanToInt(roman);\n    System.out.println(\"Integer value: \" + result);\n  }\n\n  public static int romanToInt(String roman) {\n    int total = 0;\n    int prevValue = 0;\n    for (int i = roman.length() - 1; i >= 0; i--) {\n      int value = romanMap.get(roman.charAt(i));\n      if (value < prevValue) {\n        total -= value;\n      } else {\n        total += value;\n      }\n      prevValue = value;\n    }\n    return total;\n  }\n}",
  },
  {
    id: 138,
    category: "basic",
    question: "Write a Java program to convert a float value to absolute value",
    answer:
      'public class AbsoluteFloat {\n  public static void main(String[] args) {\n    float number = -5.67f;\n    float absolute = Math.abs(number);\n    System.out.println("Absolute value: " + absolute);\n  }\n}',
  },
  {
    id: 139,
    category: "basic",
    question:
      "Write a Java program to accept a float value of number and return a rounded float value",
    answer:
      'public class RoundFloatValue {\n  public static void main(String[] args) {\n    float number = 3.14159f;\n    float rounded = Math.round(number);\n    System.out.println("Rounded float value: " + rounded);\n  }\n}',
  },
  {
    id: 140,
    category: "string",
    question: "Program to Check if a String contains only digits?",
    answer:
      'public class CheckDigits {\n  public static void main(String[] args) {\n    String input = "123456";\n    boolean isDigit = input.matches("\\d+");\n    System.out.println("Contains only digits: " + isDigit);\n  }\n}',
  },
  {
    id: 141,
    category: "string",
    question: "Program to perform Deep Copy for String?",
    answer:
      'public class DeepCopyString {\n  public static void main(String[] args) {\n    String original = "Deep Copy Example";\n    String copy = new String(original);\n    System.out.println("Original: " + original);\n    System.out.println("Copy: " + copy);\n  }\n}',
  },
  {
    id: 142,
    category: "string",
    question: "Program to prove String is immutable programmatically?",
    answer:
      'public class StringImmutability {\n  public static void main(String[] args) {\n    String str = "Immutable";\n    str = str.concat(" Example");\n    System.out.println("Modified String: " + str);\n  }\n}',
  },
  {
    id: 143,
    category: "string",
    question:
      "Program to remove all occurrences of a given character from input String?",
    answer:
      'public class RemoveCharacter {\n  public static void main(String[] args) {\n    String input = "Hello World";\n    char toRemove = \'o\';\n    String result = input.replace(Character.toString(toRemove), "");\n    System.out.println("Resulting String: " + result);\n  }\n}',
  },
  {
    id: 144,
    category: "string",
    question: "Program to append the string using StringBuffer class",
    answer:
      'public class AppendStringBuffer {\n  public static void main(String[] args) {\n    StringBuffer sb = new StringBuffer("Hello");\n    sb.append(" World");\n    System.out.println("Appended String: " + sb.toString());\n  }\n}',
  },
  {
    id: 145,
    category: "string",
    question: "Program to insert the string using StringBuffer class",
    answer:
      'public class InsertStringBuffer {\n  public static void main(String[] args) {\n    StringBuffer sb = new StringBuffer("Hello World");\n    sb.insert(5, " Java");\n    System.out.println("Inserted String: " + sb.toString());\n  }\n}',
  },
  {
    id: 146,
    category: "string",
    question: "Program to Add Characters to a String",
    answer:
      'public class AddCharactersToString {\n  public static void main(String[] args) {\n    String original = "Hello";\n    String result = original + " World";\n    System.out.println("Resulting String: " + result);\n  }\n}',
  },
  {
    id: 147,
    category: "string",
    question: "Program to Add Characters to a String",
    answer:
      'public class AddCharacters {\n  public static void main(String[] args) {\n    String original = "Hello";\n    String result = original.concat(" World");\n    System.out.println("Resulting String: " + result);\n  }\n}',
  },
  {
    id: 148,
    category: "string",
    question: "Program to Check Anagram",
    answer:
      'import java.util.Arrays;\n\npublic class CheckAnagram {\n  public static void main(String[] args) {\n    String str1 = "listen";\n    String str2 = "silent";\n    boolean isAnagram = areAnagrams(str1, str2);\n    System.out.println("Are anagrams: " + isAnagram);\n  }\n\n  public static boolean areAnagrams(String s1, String s2) {\n    char[] arr1 = s1.toCharArray();\n    char[] arr2 = s2.toCharArray();\n    Arrays.sort(arr1);\n    Arrays.sort(arr2);\n    return Arrays.equals(arr1, arr2);\n  }\n}',
  },
  {
    id: 149,
    category: "string",
    question: "Program to check whether a string is a Palindrome",
    answer:
      'public class CheckPalindrome {\n  public static void main(String[] args) {\n    String str = "madam";\n    boolean isPalindrome = isPalindrome(str);\n    System.out.println("Is palindrome: " + isPalindrome);\n  }\n\n  public static boolean isPalindrome(String str) {\n    String reversed = new StringBuilder(str).reverse().toString();\n    return str.equals(reversed);\n  }\n}',
  },
  {
    id: 151,
    category: "string",
    question: "Program to Convert Enum to String",
    answer:
      'public class EnumToString {\n  public enum Day { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY }\n\n  public static void main(String[] args) {\n    Day day = Day.MONDAY;\n    String dayString = day.toString();\n    System.out.println("Day as String: " + dayString);\n  }\n}',
  },
  {
    id: 152,
    category: "string",
    question: "Program to Convert String to String Array",
    answer:
      'public class StringToArray {\n  public static void main(String[] args) {\n    String str = "Java,Python,C++";\n    String[] array = str.split(",");\n    System.out.println("String Array:");\n    for (String s : array) {\n      System.out.println(s);\n    }\n  }\n}',
  },
  {
    id: 153,
    category: "string",
    question: "Program to count number of words in a String?",
    answer:
      'public class CountWords {\n  public static void main(String[] args) {\n    String str = "Count the number of words in this string.";\n    String[] words = str.split("\\s+");\n    int wordCount = words.length;\n    System.out.println("Number of words: " + wordCount);\n  }\n}',
  },
  {
    id: 154,
    category: "string",
    question: "Program to count the total number of characters in a string",
    answer:
      'public class CountCharacters {\n  public static void main(String[] args) {\n    String str = "Count the total number of characters.";\n    int charCount = str.length();\n    System.out.println("Number of characters: " + charCount);\n  }\n}',
  },
  {
    id: 155,
    category: "string",
    question:
      "Program to count the total number of punctuation characters exists in a String",
    answer:
      'public class CountPunctuation {\n  public static void main(String[] args) {\n    String str = "Hello, world! How\'s everything?";\n    int punctuationCount = 0;\n    for (char c : str.toCharArray()) {\n      if (Character.toString(c).matches("[\\p{Punct}]")) {\n        punctuationCount++;\n      }\n    }\n    System.out.println("Number of punctuation characters: " + punctuationCount);\n  }\n}',
  },
  {
    id: 156,
    category: "string",
    question:
      "Program to count the total number of vowels and consonants in a string",
    answer:
      "public class CountVowelsConsonants {\n  public static void main(String[] args) {\n    String str = \"Count vowels and consonants in this string.\";\n    int vowels = 0, consonants = 0;\n    str = str.toLowerCase();\n    for (char c : str.toCharArray()) {\n      if (c >= 'a' && c <= 'z') {\n        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {\n          vowels++;\n        } else {\n          consonants++;\n        }\n      }\n    }\n    System.out.println(\"Number of vowels: \" + vowels);\n    System.out.println(\"Number of consonants: \" + consonants);\n  }\n}",
  },
  {
    id: 157,
    category: "string",
    question: "Program to determine whether a given string is palindrome",
    answer:
      'public class CheckPalindrome {\n  public static void main(String[] args) {\n    String str = "racecar";\n    boolean isPalindrome = isPalindrome(str);\n    System.out.println("Is palindrome: " + isPalindrome);\n  }\n\n  public static boolean isPalindrome(String str) {\n    String reversed = new StringBuilder(str).reverse().toString();\n    return str.equals(reversed);\n  }\n}',
  },
  {
    id: 158,
    category: "string",
    question:
      "Program to determine whether one string is a rotation of another",
    answer:
      'public class CheckRotation {\n  public static void main(String[] args) {\n    String str1 = "abcd";\n    String str2 = "dabc";\n    boolean isRotation = isRotation(str1, str2);\n    System.out.println("Is rotation: " + isRotation);\n  }\n\n  public static boolean isRotation(String str1, String str2) {\n    return (str1.length() == str2.length()) && (str1 + str1).contains(str2);\n  }\n}',
  },
  {
    id: 159,
    category: "string",
    question: "Program to divide a string in 'N' equal parts.",
    answer:
      'public class DivideString {\n  public static void main(String[] args) {\n    String str = "abcdefghij";\n    int n = 5;\n    int length = str.length();\n    int partSize = length / n;\n    for (int i = 0; i < n; i++) {\n      int start = i * partSize;\n      int end = (i == n - 1) ? length : (i + 1) * partSize;\n      String part = str.substring(start, end);\n      System.out.println("Part " + (i + 1) + ": " + part);\n    }\n  }\n}',
  },
  {
    id: 160,
    category: "string",
    question: "Program to find all subsets of a string",
    answer:
      'import java.util.ArrayList;\nimport java.util.List;\n\npublic class FindSubsets {\n  public static void main(String[] args) {\n    String str = "abc";\n    List<String> subsets = getSubsets(str);\n    System.out.println("All subsets:");\n    for (String subset : subsets) {\n      System.out.println(subset);\n    }\n  }\n\n  public static List<String> getSubsets(String str) {\n    List<String> subsets = new ArrayList<>();\n    int length = str.length();\n    int subsetCount = (int) Math.pow(2, length);\n    for (int i = 0; i < subsetCount; i++) {\n      StringBuilder sb = new StringBuilder();\n      for (int j = 0; j < length; j++) {\n        if ((i & (1 << j)) != 0) {\n          sb.append(str.charAt(j));\n        }\n      }\n      subsets.add(sb.toString());\n    }\n    return subsets;\n  }\n}',
  },
  {
    id: 161,
    category: "string",
    question: "Program to find all the permutations of a string",
    answer:
      'import java.util.ArrayList;\nimport java.util.List;\n\npublic class StringPermutations {\n  public static void main(String[] args) {\n    String str = "abc";\n    List<String> permutations = getPermutations(str, 0, str.length() - 1);\n    System.out.println("All permutations:");\n    for (String perm : permutations) {\n      System.out.println(perm);\n    }\n  }\n\n  public static List<String> getPermutations(String str, int left, int right) {\n    List<String> permutations = new ArrayList<>();\n    if (left == right) {\n      permutations.add(str);\n    } else {\n      for (int i = left; i <= right; i++) {\n        str = swap(str, left, i);\n        permutations.addAll(getPermutations(str, left + 1, right));\n        str = swap(str, left, i); // backtrack\n      }\n    }\n    return permutations;\n  }\n\n  private static String swap(String str, int i, int j) {\n    char[] arr = str.toCharArray();\n    char temp = arr[i];\n    arr[i] = arr[j];\n    arr[j] = temp;\n    return new String(arr);\n  }\n}',
  },
  {
    id: 162,
    category: "string",
    question:
      "Program to find maximum and minimum occurring character in a string",
    answer:
      'import java.util.HashMap;\nimport java.util.Map;\n\npublic class MaxMinOccurringChar {\n  public static void main(String[] args) {\n    String str = "character";\n    findMaxMinOccurringChars(str);\n  }\n\n  public static void findMaxMinOccurringChars(String str) {\n    Map<Character, Integer> frequencyMap = new HashMap<>();\n    for (char c : str.toCharArray()) {\n      frequencyMap.put(c, frequencyMap.getOrDefault(c, 0) + 1);\n    }\n\n    char maxChar = \' \';\n    char minChar = \' \';\n    int maxCount = 0;\n    int minCount = Integer.MAX_VALUE;\n\n    for (Map.Entry<Character, Integer> entry : frequencyMap.entrySet()) {\n      char key = entry.getKey();\n      int count = entry.getValue();\n\n      if (count > maxCount) {\n        maxCount = count;\n        maxChar = key;\n      }\n\n      if (count < minCount) {\n        minCount = count;\n        minChar = key;\n      }\n    }\n\n    System.out.println("Maximum occurring character: " + maxChar + " (" + maxCount + " times)");\n    System.out.println("Minimum occurring character: " + minChar + " (" + minCount + " times)");\n  }\n}',
  },
  {
    id: 163,
    category: "string",
    question: "Program to find Reverse of the string",
    answer:
      'public class ReverseString {\n  public static void main(String[] args) {\n    String str = "hello";\n    String reversed = new StringBuilder(str).reverse().toString();\n    System.out.println("Reversed string: " + reversed);\n  }\n}',
  },
  {
    id: 164,
    category: "string",
    question: "Program to find the duplicate characters in a string",
    answer:
      'import java.util.HashSet;\nimport java.util.Set;\n\npublic class DuplicateCharacters {\n  public static void main(String[] args) {\n    String str = "programming";\n    findDuplicateCharacters(str);\n  }\n\n  public static void findDuplicateCharacters(String str) {\n    Set<Character> seen = new HashSet<>();\n    Set<Character> duplicates = new HashSet<>();\n\n    for (char c : str.toCharArray()) {\n      if (seen.contains(c)) {\n        duplicates.add(c);\n      } else {\n        seen.add(c);\n      }\n    }\n\n    System.out.println("Duplicate characters:");\n    for (char c : duplicates) {\n      System.out.println(c);\n    }\n  }\n}',
  },
  {
    id: 165,
    category: "string",
    question: "Program to find the duplicate words in a string",
    answer:
      'import java.util.HashSet;\nimport java.util.Set;\n\npublic class DuplicateWords {\n  public static void main(String[] args) {\n    String str = "java is a programming language java is fun";\n    findDuplicateWords(str);\n  }\n\n  public static void findDuplicateWords(String str) {\n    String[] words = str.split("\\s+");\n    Set<String> seen = new HashSet<>();\n    Set<String> duplicates = new HashSet<>();\n\n    for (String word : words) {\n      if (seen.contains(word)) {\n        duplicates.add(word);\n      } else {\n        seen.add(word);\n      }\n    }\n\n    System.out.println("Duplicate words:");\n    for (String word : duplicates) {\n      System.out.println(word);\n    }\n  }\n}',
  },
  {
    id: 166,
    category: "string",
    question: "Program to find the frequency of characters",
    answer:
      'import java.util.HashMap;\nimport java.util.Map;\n\npublic class CharacterFrequency {\n  public static void main(String[] args) {\n    String str = "character frequency";\n    findFrequency(str);\n  }\n\n  public static void findFrequency(String str) {\n    Map<Character, Integer> frequencyMap = new HashMap<>();\n    for (char c : str.toCharArray()) {\n      if (c != \' \') { // exclude spaces\n        frequencyMap.put(c, frequencyMap.getOrDefault(c, 0) + 1);\n      }\n    }\n\n    System.out.println("Character frequencies:");\n    for (Map.Entry<Character, Integer> entry : frequencyMap.entrySet()) {\n      System.out.println(entry.getKey() + ": " + entry.getValue());\n    }\n  }\n}',
  },
  {
    id: 167,
    category: "string",
    question: "Program to find the largest and smallest word in a string",
    answer:
      'public class LargestSmallestWord {\n  public static void main(String[] args) {\n    String str = "find the largest and smallest word";\n    findLargestAndSmallestWord(str);\n  }\n\n  public static void findLargestAndSmallestWord(String str) {\n    String[] words = str.split("\\s+");\n    String largest = words[0];\n    String smallest = words[0];\n\n    for (String word : words) {\n      if (word.length() > largest.length()) {\n        largest = word;\n      }\n      if (word.length() < smallest.length()) {\n        smallest = word;\n      }\n    }\n\n    System.out.println("Largest word: " + largest);\n    System.out.println("Smallest word: " + smallest);\n  }\n}',
  },
  {
    id: 168,
    category: "string",
    question: "Program to find the longest repeating sequence in a string",
    answer:
      'public class LongestRepeatingSequence {\n  public static void main(String[] args) {\n    String str = "abcdabcdeabcdeabc";\n    findLongestRepeatingSequence(str);\n  }\n\n  public static void findLongestRepeatingSequence(String str) {\n    int n = str.length();\n    int maxLength = 0;\n    String longest = "";\n\n    for (int i = 0; i < n; i++) {\n      for (int j = i + 1; j < n; j++) {\n        String subStr = str.substring(i, j);\n        if (str.indexOf(subStr, j) != -1 && subStr.length() > maxLength) {\n          maxLength = subStr.length();\n          longest = subStr;\n        }\n      }\n    }\n\n    System.out.println("Longest repeating sequence: " + longest);\n  }\n}',
  },
  {
    id: 171,
    category: "string",
    question: "Program to Get a Character From the Given String",
    answer:
      'public class GetCharacter {\n  public static void main(String[] args) {\n    String str = "example";\n    int index = 3; // Specify the index\n    char character = str.charAt(index);\n    System.out.println("Character at index " + index + ": " + character);\n  }\n}',
  },

  {
    id: 172,
    category: "string",
    question: "Program to Insert a string into another string",
    answer:
      'public class InsertString {\n  public static void main(String[] args) {\n    String original = "Hello World";\n    String toInsert = "Java ";\n    int index = 6; // Position to insert\n    String result = original.substring(0, index) + toInsert + original.substring(index);\n    System.out.println("Resulting string: " + result);\n  }\n}',
  },

  {
    id: 173,
    category: "string",
    question: "Program to Iterate Over Characters in String",
    answer:
      'public class IterateCharacters {\n  public static void main(String[] args) {\n    String str = "example";\n    for (char c : str.toCharArray()) {\n      System.out.println(c);\n    }\n  }\n}',
  },

  {
    id: 174,
    category: "string",
    question: "Program to Print a New Line in String",
    answer:
      'public class PrintNewLine {\n  public static void main(String[] args) {\n    String str = "Hello\\nWorld";\n    System.out.println(str);\n  }\n}',
  },

  {
    id: 175,
    category: "string",
    question: "Program to Print even length words",
    answer:
      'public class EvenLengthWords {\n  public static void main(String[] args) {\n    String str = "This is a test sentence";\n    String[] words = str.split("\\s+");\n    System.out.println("Even length words:");\n    for (String word : words) {\n      if (word.length() % 2 == 0) {\n        System.out.println(word);\n      }\n    }\n  }\n}',
  },

  {
    id: 176,
    category: "string",
    question:
      "Program to print smallest and biggest possible palindrome word in a given string",
    answer:
      'public class SmallestBiggestPalindrome {\n  public static void main(String[] args) {\n    String str = "abacdcab";\n    String[] words = str.split("\\s+");\n    String smallest = null;\n    String biggest = null;\n\n    for (String word : words) {\n      if (isPalindrome(word)) {\n        if (smallest == null || word.length() < smallest.length()) {\n          smallest = word;\n        }\n        if (biggest == null || word.length() > biggest.length()) {\n          biggest = word;\n        }\n      }\n    }\n\n    System.out.println("Smallest palindrome: " + smallest);\n    System.out.println("Biggest palindrome: " + biggest);\n  }\n\n  public static boolean isPalindrome(String word) {\n    int left = 0, right = word.length() - 1;\n    while (left < right) {\n      if (word.charAt(left) != word.charAt(right)) {\n        return false;\n      }\n      left++;\n      right--;\n    }\n    return true;\n  }\n}',
  },

  {
    id: 177,
    category: "string",
    question: "Program to remove all the white spaces from a string",
    answer:
      'public class RemoveWhitespace {\n  public static void main(String[] args) {\n    String str = "Java programming is fun";\n    String result = str.replaceAll("\\s+", "");\n    System.out.println("String without white spaces: " + result);\n  }\n}',
  },

  {
    id: 178,
    category: "string",
    question:
      "Program to replace lower-case characters with upper-case and vice-versa",
    answer:
      'public class SwapCase {\n  public static void main(String[] args) {\n    String str = "Hello World";\n    String swapped = swapCase(str);\n    System.out.println("Swapped case string: " + swapped);\n  }\n\n  public static String swapCase(String str) {\n    StringBuilder sb = new StringBuilder(str.length());\n    for (char c : str.toCharArray()) {\n      if (Character.isLowerCase(c)) {\n        sb.append(Character.toUpperCase(c));\n      } else if (Character.isUpperCase(c)) {\n        sb.append(Character.toLowerCase(c));\n      } else {\n        sb.append(c);\n      }\n    }\n    return sb.toString();\n  }\n}',
  },

  {
    id: 179,
    category: "string",
    question:
      "Program to replace the spaces of a string with a specific character",
    answer:
      "public class ReplaceSpaces {\n  public static void main(String[] args) {\n    String str = \"Java programming is fun\";\n    char replacement = '-';\n    String result = str.replace(' ', replacement);\n    System.out.println(\"String with replaced spaces: \" + result);\n  }\n}",
  },

  {
    id: 180,
    category: "string",
    question: "Program to separate the Individual Characters from a String",
    answer:
      'public class SeparateCharacters {\n  public static void main(String[] args) {\n    String str = "Java";\n    System.out.println("Individual characters:");\n    for (char c : str.toCharArray()) {\n      System.out.println(c);\n    }\n  }\n}',
  },
  {
    id: 181,
    category: "string",
    question: "Program to Splitting into a number of sub-strings",
    answer:
      'public class SplitString {\n  public static void main(String[] args) {\n    String str = "This is a test";\n    int numParts = 3; // Number of sub-strings\n    int len = str.length();\n    int partSize = len / numParts;\n\n    for (int i = 0; i < numParts; i++) {\n      int start = i * partSize;\n      int end = (i == numParts - 1) ? len : start + partSize;\n      String part = str.substring(start, end);\n      System.out.println("Part " + (i + 1) + ": " + part);\n    }\n  }\n}',
  },

  {
    id: 182,
    category: "string",
    question:
      "Program to swap two string variables without using third or temp variable.",
    answer:
      'public class SwapStrings {\n  public static void main(String[] args) {\n    String str1 = "Hello";\n    String str2 = "World";\n    System.out.println("Before Swap: str1 = " + str1 + ", str2 = " + str2);\n\n    str1 = str1 + str2;\n    str2 = str1.substring(0, str1.length() - str2.length());\n    str1 = str1.substring(str2.length());\n\n    System.out.println("After Swap: str1 = " + str1 + ", str2 = " + str2);\n  }\n}',
  },

  {
    id: 183,
    category: "string",
    question: "Program to Swapping Pair of Characters",
    answer:
      "public class SwapCharacters {\n  public static void main(String[] args) {\n    String str = \"example\";\n    char char1 = 'e';\n    char char2 = 'x';\n\n    String swapped = swapChars(str, char1, char2);\n    System.out.println(\"String after swapping: \" + swapped);\n  }\n\n  public static String swapChars(String str, char char1, char char2) {\n    return str.replace(char1, '#').replace(char2, char1).replace('#', char2);\n  }\n}",
  },

  {
    id: 184,
    category: "string",
    question: "Read two String user input and check if first contains second?",
    answer:
      'import java.util.Scanner;\n\npublic class CheckContains {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n\n    System.out.print("Enter the first string: ");\n    String str1 = scanner.nextLine();\n\n    System.out.print("Enter the second string: ");\n    String str2 = scanner.nextLine();\n\n    if (str1.contains(str2)) {\n      System.out.println("The first string contains the second string.");\n    } else {\n      System.out.println("The first string does not contain the second string.");\n    }\n\n    scanner.close();\n  }\n}',
  },

  {
    id: 185,
    category: "string",
    question: "Reserve String without reverse() function",
    answer:
      'public class ReverseString {\n  public static void main(String[] args) {\n    String str = "example";\n    String reversed = reverseString(str);\n    System.out.println("Reversed string: " + reversed);\n  }\n\n  public static String reverseString(String str) {\n    StringBuilder sb = new StringBuilder();\n    for (int i = str.length() - 1; i >= 0; i--) {\n      sb.append(str.charAt(i));\n    }\n    return sb.toString();\n  }\n}',
  },

  {
    id: 186,
    category: "string",
    question: "Reverse String Word by Word",
    answer:
      'public class ReverseWords {\n  public static void main(String[] args) {\n    String str = "This is an example";\n    String reversed = reverseWords(str);\n    System.out.println("String with words reversed: " + reversed);\n  }\n\n  public static String reverseWords(String str) {\n    String[] words = str.split("\\s+");\n    StringBuilder sb = new StringBuilder();\n\n    for (int i = words.length - 1; i >= 0; i--) {\n      sb.append(words[i]).append(" ");\n    }\n    return sb.toString().trim();\n  }\n}',
  },

  {
    id: 187,
    category: "string",
    question:
      "Write a program to check if two Strings are created with same characters?",
    answer:
      'import java.util.Arrays;\n\npublic class SameCharacters {\n  public static void main(String[] args) {\n    String str1 = "listen";\n    String str2 = "silent";\n\n    if (areSameCharacters(str1, str2)) {\n      System.out.println("The strings are created with the same characters.");\n    } else {\n      System.out.println("The strings are not created with the same characters.");\n    }\n  }\n\n  public static boolean areSameCharacters(String str1, String str2) {\n    char[] arr1 = str1.toCharArray();\n    char[] arr2 = str2.toCharArray();\n\n    Arrays.sort(arr1);\n    Arrays.sort(arr2);\n\n    return Arrays.equals(arr1, arr2);\n  }\n}',
  },

  {
    id: 188,
    category: "string",
    question:
      "Write a program to find out first non repeated character from input String?",
    answer:
      'import java.util.LinkedHashMap;\nimport java.util.Map;\n\npublic class FirstNonRepeatedCharacter {\n  public static void main(String[] args) {\n    String str = "swiss";\n    char result = findFirstNonRepeatedCharacter(str);\n    System.out.println("First non-repeated character: " + result);\n  }\n\n  public static char findFirstNonRepeatedCharacter(String str) {\n    Map<Character, Integer> charCount = new LinkedHashMap<>();\n\n    for (char c : str.toCharArray()) {\n      charCount.put(c, charCount.getOrDefault(c, 0) + 1);\n    }\n\n    for (Map.Entry<Character, Integer> entry : charCount.entrySet()) {\n      if (entry.getValue() == 1) {\n        return entry.getKey();\n      }\n    }\n\n    return \'\\0\'; // No non-repeated character found\n  }\n}',
  },

  {
    id: 189,
    category: "string",
    question: "Create an object StringBuffer class to reverse the string.",
    answer:
      'public class ReverseStringBuffer {\n  public static void main(String[] args) {\n    StringBuffer sb = new StringBuffer("example");\n    sb.reverse();\n    System.out.println("Reversed string: " + sb);\n  }\n}',
  },

  {
    id: 190,
    category: "string",
    question:
      "Create an object StringBuffer class to show functionality of insert, append, delete and replace functions.",
    answer:
      'public class StringBufferExample {\n  public static void main(String[] args) {\n    StringBuffer sb = new StringBuffer("Hello");\n\n    // Append\n    sb.append(" World");\n    System.out.println("After append: " + sb);\n\n    // Insert\n    sb.insert(6, "Beautiful ");\n    System.out.println("After insert: " + sb);\n\n    // Delete\n    sb.delete(6, 16);\n    System.out.println("After delete: " + sb);\n\n    // Replace\n    sb.replace(0, 5, "Hi");\n    System.out.println("After replace: " + sb);\n  }\n}',
  },
  {
    id: 191,
    category: "oops",
    question:
      "Write a Java program to create a class called 'Person' with a name and age attribute. Create two instances of the 'Person' class, set their attributes using the constructor, and print their name and age.",
    answer:
      'public class Person {\n  String name;\n  int age;\n\n  public Person(String name, int age) {\n    this.name = name;\n    this.age = age;\n  }\n\n  public void display() {\n    System.out.println("Name: " + name + ", Age: " + age);\n  }\n\n  public static void main(String[] args) {\n    Person person1 = new Person("Alice", 30);\n    Person person2 = new Person("Bob", 25);\n\n    person1.display();\n    person2.display();\n  }\n}',
  },

  {
    id: 192,
    category: "oops",
    question:
      "Write a Java program to create a class called 'Dog' with a name and breed attribute. Create two instances of the 'Dog' class, set their attributes using the constructor and modify the attributes using the setter methods and print the updated values.",
    answer:
      'public class Dog {\n  private String name;\n  private String breed;\n\n  public Dog(String name, String breed) {\n    this.name = name;\n    this.breed = breed;\n  }\n\n  public void setName(String name) {\n    this.name = name;\n  }\n\n  public void setBreed(String breed) {\n    this.breed = breed;\n  }\n\n  public void display() {\n    System.out.println("Name: " + name + ", Breed: " + breed);\n  }\n\n  public static void main(String[] args) {\n    Dog dog1 = new Dog("Max", "Labrador");\n    Dog dog2 = new Dog("Buddy", "Beagle");\n\n    dog1.display();\n    dog2.display();\n\n    dog1.setName("Rocky");\n    dog2.setBreed("Poodle");\n\n    dog1.display();\n    dog2.display();\n  }\n}',
  },

  {
    id: 193,
    category: "oops",
    question:
      "Write a Java program to create a class called 'Rectangle' with width and height attributes. Calculate the area and perimeter of the rectangle.",
    answer:
      'public class Rectangle {\n  private double width;\n  private double height;\n\n  public Rectangle(double width, double height) {\n    this.width = width;\n    this.height = height;\n  }\n\n  public double getArea() {\n    return width * height;\n  }\n\n  public double getPerimeter() {\n    return 2 * (width + height);\n  }\n\n  public static void main(String[] args) {\n    Rectangle rect = new Rectangle(5, 3);\n    System.out.println("Area: " + rect.getArea());\n    System.out.println("Perimeter: " + rect.getPerimeter());\n  }\n}',
  },

  {
    id: 194,
    category: "oops",
    question:
      "Write a Java program to create a class called 'Circle' with a radius attribute. You can access and modify this attribute. Calculate the area and circumference of the circle.",
    answer:
      'public class Circle {\n  private double radius;\n\n  public Circle(double radius) {\n    this.radius = radius;\n  }\n\n  public double getArea() {\n    return Math.PI * radius * radius;\n  }\n\n  public double getCircumference() {\n    return 2 * Math.PI * radius;\n  }\n\n  public static void main(String[] args) {\n    Circle circle = new Circle(5);\n    System.out.println("Area: " + circle.getArea());\n    System.out.println("Circumference: " + circle.getCircumference());\n  }\n}',
  },

  {
    id: 195,
    category: "oops",
    question:
      "Write a Java program to create a class called 'Book' with attributes for title, author, and ISBN, and methods to add and remove books from a collection.",
    answer:
      'import java.util.ArrayList;\n\npublic class Book {\n  private String title;\n  private String author;\n  private String isbn;\n\n  public Book(String title, String author, String isbn) {\n    this.title = title;\n    this.author = author;\n    this.isbn = isbn;\n  }\n\n  @Override\n  public String toString() {\n    return "Title: " + title + ", Author: " + author + ", ISBN: " + isbn;\n  }\n\n  public static void main(String[] args) {\n    ArrayList<Book> collection = new ArrayList<>();\n\n    Book book1 = new Book("1984", "George Orwell", "123456789");\n    Book book2 = new Book("To Kill a Mockingbird", "Harper Lee", "987654321");\n\n    collection.add(book1);\n    collection.add(book2);\n\n    System.out.println("Books in collection:");\n    for (Book book : collection) {\n      System.out.println(book);\n    }\n\n    collection.remove(book1);\n\n    System.out.println("After removing a book:");\n    for (Book book : collection) {\n      System.out.println(book);\n    }\n  }\n}',
  },

  {
    id: 196,
    category: "oops",
    question:
      "Write a Java program to create a class called 'Employee' with a name, job title, and salary attributes, and methods to calculate and update salary.",
    answer:
      'public class Employee {\n  private String name;\n  private String jobTitle;\n  private double salary;\n\n  public Employee(String name, String jobTitle, double salary) {\n    this.name = name;\n    this.jobTitle = jobTitle;\n    this.salary = salary;\n  }\n\n  public void updateSalary(double percentage) {\n    salary += salary * (percentage / 100);\n  }\n\n  public void display() {\n    System.out.println("Name: " + name + ", Job Title: " + jobTitle + ", Salary: " + salary);\n  }\n\n  public static void main(String[] args) {\n    Employee emp = new Employee("John", "Developer", 50000);\n    emp.display();\n    emp.updateSalary(10);\n    emp.display();\n  }\n}',
  },

  {
    id: 197,
    category: "oops",
    question:
      "Write a Java program to create a class called 'Bank' with a collection of accounts and methods to add and remove accounts, and to deposit and withdraw money. Also define a class called 'Account' to maintain account details of a particular customer.",
    answer:
      'import java.util.ArrayList;\n\nclass Account {\n  private String accountNumber;\n  private double balance;\n\n  public Account(String accountNumber, double balance) {\n    this.accountNumber = accountNumber;\n    this.balance = balance;\n  }\n\n  public void deposit(double amount) {\n    balance += amount;\n  }\n\n  public void withdraw(double amount) {\n    if (amount <= balance) {\n      balance -= amount;\n    } else {\n      System.out.println("Insufficient balance");\n    }\n  }\n\n  public void display() {\n    System.out.println("Account Number: " + accountNumber + ", Balance: " + balance);\n  }\n}\n\npublic class Bank {\n  private ArrayList<Account> accounts = new ArrayList<>();\n\n  public void addAccount(Account account) {\n    accounts.add(account);\n  }\n\n  public void removeAccount(Account account) {\n    accounts.remove(account);\n  }\n\n  public void displayAccounts() {\n    for (Account account : accounts) {\n      account.display();\n    }\n  }\n\n  public static void main(String[] args) {\n    Bank bank = new Bank();\n    Account acc1 = new Account("12345", 1000);\n    Account acc2 = new Account("67890", 2000);\n\n    bank.addAccount(acc1);\n    bank.addAccount(acc2);\n\n    bank.displayAccounts();\n\n    acc1.deposit(500);\n    acc2.withdraw(300);\n\n    bank.displayAccounts();\n  }\n}',
  },

  {
    id: 198,
    category: "oops",
    question:
      "Write a Java program to create class called 'TrafficLight' with attributes for color and duration, and methods to change the color and check for red or green.",
    answer:
      'public class TrafficLight {\n  private String color;\n  private int duration; // in seconds\n\n  public TrafficLight(String color, int duration) {\n    this.color = color;\n    this.duration = duration;\n  }\n\n  public void changeColor(String newColor) {\n    this.color = newColor;\n  }\n\n  public boolean isRed() {\n    return color.equalsIgnoreCase("Red");\n  }\n\n  public boolean isGreen() {\n    return color.equalsIgnoreCase("Green");\n  }\n\n  public void display() {\n    System.out.println("Color: " + color + ", Duration: " + duration + " seconds");\n  }\n\n  public static void main(String[] args) {\n    TrafficLight light = new TrafficLight("Red", 30);\n    light.display();\n    light.changeColor("Green");\n    light.display();\n  }\n}',
  },

  {
    id: 199,
    category: "oops",
    question:
      "Write a Java program to create a class called 'Employee' with a name, salary, and hire date attributes, and a method to calculate years of service.",
    answer:
      'import java.time.LocalDate;\nimport java.time.Period;\n\npublic class Employee {\n  private String name;\n  private double salary;\n  private LocalDate hireDate;\n\n  public Employee(String name, double salary, LocalDate hireDate) {\n    this.name = name;\n    this.salary = salary;\n    this.hireDate = hireDate;\n  }\n\n  public int getYearsOfService() {\n    return Period.between(hireDate, LocalDate.now()).getYears();\n  }\n\n  public void display() {\n    System.out.println("Name: " + name + ", Salary: " + salary + ", Hire Date: " + hireDate);\n    System.out.println("Years of Service: " + getYearsOfService());\n  }\n\n  public static void main(String[] args) {\n    Employee emp = new Employee("Alice", 60000, LocalDate.of(2015, 5, 15));\n    emp.display();\n  }\n}',
  },

  {
    id: 200,
    category: "oops",
    question:
      "Write a Java program to create a class called 'Student' with a name, grade, and courses attributes, and methods to add and remove courses.",
    answer:
      'import java.util.ArrayList;\n\npublic class Student {\n  private String name;\n  private char grade;\n  private ArrayList<String> courses;\n\n  public Student(String name, char grade) {\n    this.name = name;\n    this.grade = grade;\n    this.courses = new ArrayList<>();\n  }\n\n  public void addCourse(String course) {\n    courses.add(course);\n  }\n\n  public void removeCourse(String course) {\n    courses.remove(course);\n  }\n\n  public void displayCourses() {\n    System.out.println("Courses: " + courses);\n  }\n\n  public static void main(String[] args) {\n    Student student = new Student("John", \'A\');\n    student.addCourse("Math");\n    student.addCourse("Science");\n    student.displayCourses();\n    student.removeCourse("Math");\n    student.displayCourses();\n  }\n}',
  },
  {
    id: 201,
    category: "oops",
    question:
      "Write a Java program to create a class called 'Library' with a collection of books and methods to add and remove books.",
    answer:
      "public class Library {\n  private List<String> books = new ArrayList<>();\n\n  public void addBook(String book) {\n    books.add(book);\n  }\n\n  public void removeBook(String book) {\n    books.remove(book);\n  }\n}",
  },
  {
    id: 202,
    category: "oops",
    question:
      "Write a Java program to create a class called 'Airplane' with a flight number, destination, and departure time attributes, and methods to check flight status and delay.",
    answer:
      "public class Airplane {\n  private String flightNumber;\n  private String destination;\n  private String departureTime;\n\n  public void checkFlightStatus() {\n    // Logic to check flight status\n  }\n\n  public void checkForDelay() {\n    // Logic to check for delays\n  }\n}",
  },
  {
    id: 203,
    category: "oops",
    question:
      "Write a Java program to create a class called 'Inventory' with a collection of products and methods to add and remove products, and to check for low inventory.",
    answer:
      "public class Inventory {\n  private List<String> products = new ArrayList<>();\n\n  public void addProduct(String product) {\n    products.add(product);\n  }\n\n  public void removeProduct(String product) {\n    products.remove(product);\n  }\n\n  public void checkLowInventory() {\n    // Logic to check for low inventory\n  }\n}",
  },
  {
    id: 204,
    category: "oops",
    question:
      "Write a Java program to create a class called 'School' with attributes for students, teachers, and classes, and methods to add and remove students and teachers, and to create classes.",
    answer:
      "public class School {\n  private List<String> students = new ArrayList<>();\n  private List<String> teachers = new ArrayList<>();\n  private List<String> classes = new ArrayList<>();\n\n  public void addStudent(String student) {\n    students.add(student);\n  }\n\n  public void removeStudent(String student) {\n    students.remove(student);\n  }\n\n  public void addTeacher(String teacher) {\n    teachers.add(teacher);\n  }\n\n  public void createClass(String className) {\n    classes.add(className);\n  }\n}",
  },
  {
    id: 205,
    category: "oops",
    question:
      "Write a Java program to create a class called 'MusicLibrary' with a collection of songs and methods to add and remove songs, and to play a random song.",
    answer:
      'public class MusicLibrary {\n  private List<String> songs = new ArrayList<>();\n\n  public void addSong(String song) {\n    songs.add(song);\n  }\n\n  public void removeSong(String song) {\n    songs.remove(song);\n  }\n\n  public void playRandomSong() {\n    Random random = new Random();\n    int index = random.nextInt(songs.size());\n    System.out.println("Playing: " + songs.get(index));\n  }\n}',
  },
  {
    id: 206,
    category: "oops",
    question:
      "Write a Java program to create a class called 'Shape' with abstract methods for calculating area and perimeter, and subclasses for 'Rectangle', 'Circle', and 'Triangle'.",
    answer:
      "abstract class Shape {\n  public abstract double calculateArea();\n  public abstract double calculatePerimeter();\n}\n\nclass Rectangle extends Shape {\n  private double width;\n  private double height;\n\n  @Override\n  public double calculateArea() {\n    return width * height;\n  }\n\n  @Override\n  public double calculatePerimeter() {\n    return 2 * (width + height);\n  }\n}\n\nclass Circle extends Shape {\n  private double radius;\n\n  @Override\n  public double calculateArea() {\n    return Math.PI * radius * radius;\n  }\n\n  @Override\n  public double calculatePerimeter() {\n    return 2 * Math.PI * radius;\n  }\n}\n\nclass Triangle extends Shape {\n  private double base;\n  private double height;\n\n  @Override\n  public double calculateArea() {\n    return 0.5 * base * height;\n  }\n\n  @Override\n  public double calculatePerimeter() {\n    return base + height + Math.sqrt(base * base + height * height);\n  }\n}",
  },
  {
    id: 207,
    category: "oops",
    question:
      "Write a Java program to create a class called 'Movie' with attributes for title, director, actors, and reviews, and methods for adding and retrieving reviews.",
    answer:
      "public class Movie {\n  private String title;\n  private String director;\n  private List<String> actors;\n  private List<String> reviews = new ArrayList<>();\n\n  public void addReview(String review) {\n    reviews.add(review);\n  }\n\n  public List<String> getReviews() {\n    return reviews;\n  }\n}",
  },
  {
    id: 208,
    category: "oops",
    question:
      "Write a Java program to create a class called 'Restaurant' with attributes for menu items, prices, and ratings, and methods to add and remove items, and to calculate average rating.",
    answer:
      "public class Restaurant {\n  private Map<String, Double> menu = new HashMap<>();\n  private List<Integer> ratings = new ArrayList<>();\n\n  public void addMenuItem(String item, double price) {\n    menu.put(item, price);\n  }\n\n  public void removeMenuItem(String item) {\n    menu.remove(item);\n  }\n\n  public void addRating(int rating) {\n    ratings.add(rating);\n  }\n\n  public double calculateAverageRating() {\n    int total = 0;\n    for (int rating : ratings) {\n      total += rating;\n    }\n    return total / (double) ratings.size();\n  }\n}",
  },
  {
    id: 209,
    category: "oops",
    question:
      "Write a Java program to create a class with methods to search for flights and hotels, and to book and cancel reservations.",
    answer:
      "public class Travel {\n  public void searchFlights() {\n    // Logic to search flights\n  }\n\n  public void searchHotels() {\n    // Logic to search hotels\n  }\n\n  public void bookReservation() {\n    // Logic to book reservation\n  }\n\n  public void cancelReservation() {\n    // Logic to cancel reservation\n  }\n}",
  },
  {
    id: 210,
    category: "oops",
    question: "Create a class showing an example of default constructor.",
    answer:
      'public class DefaultConstructorExample {\n  public DefaultConstructorExample() {\n    System.out.println("Default Constructor called");\n  }\n\n  public static void main(String[] args) {\n    DefaultConstructorExample obj = new DefaultConstructorExample();\n  }\n}',
  },
  {
    id: 211,
    category: "oops",
    question: "Create a class showing an example of parameterized constructor.",
    answer:
      'public class ParameterizedConstructor {\n  private String name;\n  private int age;\n\n  public ParameterizedConstructor(String name, int age) {\n    this.name = name;\n    this.age = age;\n  }\n\n  public void displayInfo() {\n    System.out.println("Name: " + name);\n    System.out.println("Age: " + age);\n  }\n\n  public static void main(String[] args) {\n    ParameterizedConstructor obj = new ParameterizedConstructor("John", 25);\n    obj.displayInfo();\n  }\n}',
  },
  {
    id: 212,
    category: "oops",
    question: "Create a class showing an example of copy constructor.",
    answer:
      'public class CopyConstructor {\n  private String name;\n  private int age;\n\n  public CopyConstructor(String name, int age) {\n    this.name = name;\n    this.age = age;\n  }\n\n  // Copy constructor\n  public CopyConstructor(CopyConstructor other) {\n    this.name = other.name;\n    this.age = other.age;\n  }\n\n  public void displayInfo() {\n    System.out.println("Name: " + name);\n    System.out.println("Age: " + age);\n  }\n\n  public static void main(String[] args) {\n    CopyConstructor original = new CopyConstructor("Alice", 30);\n    CopyConstructor copy = new CopyConstructor(original);\n    copy.displayInfo();\n  }\n}',
  },
  {
    id: 213,
    category: "oops",
    question:
      "Create a class entering the rollno, name and class of the student from user but rollno should be automatically generated as we enter the information of 10 students.",
    answer:
      'import java.util.Scanner;\n\npublic class Student {\n  private static int rollNoCounter = 1;\n  private int rollNo;\n  private String name;\n  private String studentClass;\n\n  public Student(String name, String studentClass) {\n    this.rollNo = rollNoCounter++;\n    this.name = name;\n    this.studentClass = studentClass;\n  }\n\n  public void displayInfo() {\n    System.out.println("Roll No: " + rollNo);\n    System.out.println("Name: " + name);\n    System.out.println("Class: " + studentClass);\n  }\n\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    Student[] students = new Student[10];\n\n    for (int i = 0; i < 10; i++) {\n      System.out.print("Enter name for student " + (i + 1) + ": ");\n      String name = scanner.nextLine();\n      System.out.print("Enter class for student " + (i + 1) + ": ");\n      String studentClass = scanner.nextLine();\n      students[i] = new Student(name, studentClass);\n    }\n\n    for (Student student : students) {\n      student.displayInfo();\n      System.out.println();\n    }\n    scanner.close();\n  }\n}',
  },
  {
    id: 214,
    category: "oops",
    question:
      "Create a class showing the area of circle and rectangle by method overloading.",
    answer:
      'public class AreaCalculator {\n  public double calculateArea(double radius) {\n    return Math.PI * radius * radius; // Area of circle\n  }\n\n  public double calculateArea(double length, double width) {\n    return length * width; // Area of rectangle\n  }\n\n  public static void main(String[] args) {\n    AreaCalculator calculator = new AreaCalculator();\n    System.out.println("Area of circle: " + calculator.calculateArea(5.0));\n    System.out.println("Area of rectangle: " + calculator.calculateArea(5.0, 3.0));\n  }\n}',
  },
  {
    id: 215,
    category: "oops",
    question:
      "Create a class, entering the command line arguments from the user and show all the arguments as output.",
    answer:
      'public class CommandLineArguments {\n  public static void main(String[] args) {\n    System.out.println("Command line arguments:");\n    for (String arg : args) {\n      System.out.println(arg);\n    }\n  }\n}',
  },
  {
    id: 216,
    category: "oops",
    question:
      "Write a Java program to create a class called Person with private instance variables name, age, and country. Provide public getter and setter methods to access and modify these variables.",
    answer:
      'public class Person {\n  private String name;\n  private int age;\n  private String country;\n\n  public String getName() {\n    return name;\n  }\n\n  public void setName(String name) {\n    this.name = name;\n  }\n\n  public int getAge() {\n    return age;\n  }\n\n  public void setAge(int age) {\n    this.age = age;\n  }\n\n  public String getCountry() {\n    return country;\n  }\n\n  public void setCountry(String country) {\n    this.country = country;\n  }\n\n  public static void main(String[] args) {\n    Person person = new Person();\n    person.setName("John");\n    person.setAge(30);\n    person.setCountry("USA");\n    System.out.println("Name: " + person.getName());\n    System.out.println("Age: " + person.getAge());\n    System.out.println("Country: " + person.getCountry());\n  }\n}',
  },
  {
    id: 217,
    category: "oops",
    question:
      "Write a Java program to create a class called BankAccount with private instance variables accountNumber and balance. Provide public getter and setter methods to access and modify these variables.",
    answer:
      'public class BankAccount {\n  private String accountNumber;\n  private double balance;\n\n  public String getAccountNumber() {\n    return accountNumber;\n  }\n\n  public void setAccountNumber(String accountNumber) {\n    this.accountNumber = accountNumber;\n  }\n\n  public double getBalance() {\n    return balance;\n  }\n\n  public void setBalance(double balance) {\n    this.balance = balance;\n  }\n\n  public static void main(String[] args) {\n    BankAccount account = new BankAccount();\n    account.setAccountNumber("123456789");\n    account.setBalance(1000.0);\n    System.out.println("Account Number: " + account.getAccountNumber());\n    System.out.println("Balance: " + account.getBalance());\n  }\n}',
  },
  {
    id: 218,
    category: "oops",
    question:
      "Write a Java program to create a class called Rectangle with private instance variables length and width. Provide public getter and setter methods to access and modify these variables.",
    answer:
      'public class Rectangle {\n  private double length;\n  private double width;\n\n  public double getLength() {\n    return length;\n  }\n\n  public void setLength(double length) {\n    this.length = length;\n  }\n\n  public double getWidth() {\n    return width;\n  }\n\n  public void setWidth(double width) {\n    this.width = width;\n  }\n\n  public static void main(String[] args) {\n    Rectangle rectangle = new Rectangle();\n    rectangle.setLength(10.0);\n    rectangle.setWidth(5.0);\n    System.out.println("Length: " + rectangle.getLength());\n    System.out.println("Width: " + rectangle.getWidth());\n  }\n}',
  },
  {
    id: 219,
    category: "oops",
    question:
      "Write a Java program to create a class called Employee with private instance variables employee_id, employee_name, and employee_salary. Provide public getter and setter methods to access and modify the id and name variables, but provide a getter method for the salary variable that returns a formatted string.",
    answer:
      'public class Employee {\n  private int employeeId;\n  private String employeeName;\n  private double employeeSalary;\n\n  public int getEmployeeId() {\n    return employeeId;\n  }\n\n  public void setEmployeeId(int employeeId) {\n    this.employeeId = employeeId;\n  }\n\n  public String getEmployeeName() {\n    return employeeName;\n  }\n\n  public void setEmployeeName(String employeeName) {\n    this.employeeName = employeeName;\n  }\n\n  public String getFormattedSalary() {\n    return String.format("%.2f", employeeSalary);\n  }\n\n  public void setEmployeeSalary(double employeeSalary) {\n    this.employeeSalary = employeeSalary;\n  }\n\n  public static void main(String[] args) {\n    Employee employee = new Employee();\n    employee.setEmployeeId(101);\n    employee.setEmployeeName("Jane Doe");\n    employee.setEmployeeSalary(55000.75);\n    System.out.println("Employee ID: " + employee.getEmployeeId());\n    System.out.println("Employee Name: " + employee.getEmployeeName());\n    System.out.println("Employee Salary: " + employee.getFormattedSalary());\n  }\n}',
  },
  {
    id: 220,
    category: "oops",
    question:
      "Write a Java program to create a class called Circle with a private instance variable radius. Provide public getter and setter methods to access and modify the radius variable. However, provide two methods called calculateArea() and calculatePerimeter() that return the calculated area and perimeter based on the current radius value.",
    answer:
      'public class Circle {\n  private double radius;\n\n  public double getRadius() {\n    return radius;\n  }\n\n  public void setRadius(double radius) {\n    this.radius = radius;\n  }\n\n  public double calculateArea() {\n    return Math.PI * radius * radius;\n  }\n\n  public double calculatePerimeter() {\n    return 2 * Math.PI * radius;\n  }\n\n  public static void main(String[] args) {\n    Circle circle = new Circle();\n    circle.setRadius(7.0);\n    System.out.println("Radius: " + circle.getRadius());\n    System.out.println("Area: " + circle.calculateArea());\n    System.out.println("Perimeter: " + circle.calculatePerimeter());\n  }\n}',
  },
  {
    id: 221,
    category: "oops",
    question:
      "Write a Java program to create a class called Car with private instance variables company_name, model_name, year, and mileage. Provide public getter and setter methods to access and modify the company_name, model_name, and year variables. However, only provide a getter method for the mileage variable.",
    answer:
      'public class Car {\n  private String companyName;\n  private String modelName;\n  private int year;\n  private double mileage;\n\n  public String getCompanyName() {\n    return companyName;\n  }\n\n  public void setCompanyName(String companyName) {\n    this.companyName = companyName;\n  }\n\n  public String getModelName() {\n    return modelName;\n  }\n\n  public void setModelName(String modelName) {\n    this.modelName = modelName;\n  }\n\n  public int getYear() {\n    return year;\n  }\n\n  public void setYear(int year) {\n    this.year = year;\n  }\n\n  public double getMileage() {\n    return mileage;\n  }\n\n  public void setMileage(double mileage) {\n    this.mileage = mileage;\n  }\n\n  public static void main(String[] args) {\n    Car car = new Car();\n    car.setCompanyName("Toyota");\n    car.setModelName("Corolla");\n    car.setYear(2020);\n    car.setMileage(15000.5);\n    System.out.println("Company Name: " + car.getCompanyName());\n    System.out.println("Model Name: " + car.getModelName());\n    System.out.println("Year: " + car.getYear());\n    System.out.println("Mileage: " + car.getMileage());\n  }\n}',
  },
  {
    id: 222,
    category: "oops",
    question:
      "Write a Java program to create a class called Student with private instance variables student_id, student_name, and grades. Provide public getter and setter methods to access and modify the student_id and student_name variables. However, provide a method called addGrade() that allows adding a grade to the grades variable while performing additional validation. Start the id from 211.",
    answer:
      'import java.util.ArrayList;\nimport java.util.List;\n\npublic class Student {\n  private static int idCounter = 211;\n  private int studentId;\n  private String studentName;\n  private List<Integer> grades = new ArrayList<>();\n\n  public Student(String studentName) {\n    this.studentId = idCounter++;\n    this.studentName = studentName;\n  }\n\n  public int getStudentId() {\n    return studentId;\n  }\n\n  public void setStudentId(int studentId) {\n    this.studentId = studentId;\n  }\n\n  public String getStudentName() {\n    return studentName;\n  }\n\n  public void setStudentName(String studentName) {\n    this.studentName = studentName;\n  }\n\n  public void addGrade(int grade) {\n    if (grade >= 0 && grade <= 100) {\n      grades.add(grade);\n    } else {\n      System.out.println("Invalid grade. Must be between 0 and 100.");\n    }\n  }\n\n  public List<Integer> getGrades() {\n    return grades;\n  }\n\n  public static void main(String[] args) {\n    Student student = new Student("Alice");\n    student.addGrade(90);\n    student.addGrade(105); // Invalid grade\n    System.out.println("Student ID: " + student.getStudentId());\n    System.out.println("Student Name: " + student.getStudentName());\n    System.out.println("Grades: " + student.getGrades());\n  }\n}',
  },
  {
    id: 223,
    category: "array",
    question: "Program to copy all elements of one array into another array",
    answer:
      'public class ArrayCopy {\n  public static void main(String[] args) {\n    int[] sourceArray = {1, 2, 3, 4, 5};\n    int[] destinationArray = new int[sourceArray.length];\n\n    for (int i = 0; i < sourceArray.length; i++) {\n      destinationArray[i] = sourceArray[i];\n    }\n\n    System.out.println("Elements of destination array:");\n    for (int element : destinationArray) {\n      System.out.print(element + " ");\n    }\n  }\n}',
  },
  {
    id: 224,
    category: "array",
    question: "Program to find the frequency of each element in the array",
    answer:
      'import java.util.HashMap;\nimport java.util.Map;\n\npublic class ArrayFrequency {\n  public static void main(String[] args) {\n    int[] array = {1, 2, 2, 3, 3, 3, 4, 4, 4, 4};\n    Map<Integer, Integer> frequencyMap = new HashMap<>();\n\n    for (int num : array) {\n      frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);\n    }\n\n    System.out.println("Frequency of each element:");\n    for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {\n      System.out.println(entry.getKey() + " : " + entry.getValue());\n    }\n  }\n}',
  },
  {
    id: 225,
    category: "array",
    question: "Program to left rotate the elements of an array",
    answer:
      'public class ArrayLeftRotate {\n  public static void main(String[] args) {\n    int[] array = {1, 2, 3, 4, 5};\n    int d = 2; // Number of positions to rotate\n    int n = array.length;\n\n    // Rotate left\n    reverse(array, 0, d - 1);\n    reverse(array, d, n - 1);\n    reverse(array, 0, n - 1);\n\n    System.out.println("Array after left rotation:");\n    for (int element : array) {\n      System.out.print(element + " ");\n    }\n  }\n\n  private static void reverse(int[] array, int start, int end) {\n    while (start < end) {\n      int temp = array[start];\n      array[start] = array[end];\n      array[end] = temp;\n      start++;\n      end--;\n    }\n  }\n}',
  },
  {
    id: 226,
    category: "array",
    question: "Program to print the duplicate elements of an array",
    answer:
      'import java.util.HashSet;\nimport java.util.Set;\n\npublic class ArrayDuplicates {\n  public static void main(String[] args) {\n    int[] array = {1, 2, 3, 2, 4, 5, 1, 6, 7, 8, 8};\n    Set<Integer> duplicates = new HashSet<>();\n    Set<Integer> seen = new HashSet<>();\n\n    for (int num : array) {\n      if (seen.contains(num)) {\n        duplicates.add(num);\n      } else {\n        seen.add(num);\n      }\n    }\n\n    System.out.println("Duplicate elements:");\n    for (int num : duplicates) {\n      System.out.print(num + " ");\n    }\n  }\n}',
  },
  {
    id: 227,
    category: "array",
    question: "Program to print the elements of an array",
    answer:
      'public class PrintArray {\n  public static void main(String[] args) {\n    int[] array = {1, 2, 3, 4, 5};\n\n    System.out.println("Elements of the array:");\n    for (int element : array) {\n      System.out.print(element + " ");\n    }\n  }\n}',
  },
  {
    id: 228,
    category: "array",
    question: "Program to print the elements of an array in reverse order",
    answer:
      'public class ArrayReverse {\n  public static void main(String[] args) {\n    int[] array = {1, 2, 3, 4, 5};\n\n    System.out.println("Elements of the array in reverse order:");\n    for (int i = array.length - 1; i >= 0; i--) {\n      System.out.print(array[i] + " ");\n    }\n  }\n}',
  },
  {
    id: 229,
    category: "array",
    question:
      "Program to print the elements of an array present on even position",
    answer:
      'public class ArrayEvenPosition {\n  public static void main(String[] args) {\n    int[] array = {1, 2, 3, 4, 5};\n\n    System.out.println("Elements at even positions:");\n    for (int i = 0; i < array.length; i += 2) {\n      System.out.print(array[i] + " ");\n    }\n  }\n}',
  },
  {
    id: 230,
    category: "array",
    question:
      "Program to print the elements of an array present on odd position",
    answer:
      'public class ArrayOddPosition {\n  public static void main(String[] args) {\n    int[] array = {1, 2, 3, 4, 5};\n\n    System.out.println("Elements at odd positions:");\n    for (int i = 1; i < array.length; i += 2) {\n      System.out.print(array[i] + " ");\n    }\n  }\n}',
  },
  {
    id: 231,
    category: "array",
    question: "Program to print the largest element in an array",
    answer:
      'public class ArrayLargest {\n  public static void main(String[] args) {\n    int[] array = {1, 2, 3, 4, 5};\n    int largest = array[0];\n\n    for (int i = 1; i < array.length; i++) {\n      if (array[i] > largest) {\n        largest = array[i];\n      }\n    }\n\n    System.out.println("Largest element in the array: " + largest);\n  }\n}',
  },
  {
    id: 232,
    category: "array",
    question: "Program to print the smallest element in an array",
    answer:
      'public class ArraySmallest {\n  public static void main(String[] args) {\n    int[] array = {1, 2, 3, 4, 5};\n    int smallest = array[0];\n\n    for (int i = 1; i < array.length; i++) {\n      if (array[i] < smallest) {\n        smallest = array[i];\n      }\n    }\n\n    System.out.println("Smallest element in the array: " + smallest);\n  }\n}',
  },
  {
    id: 233,
    category: "array",
    question: "Program to print the number of elements present in an array",
    answer:
      'public class ArraySize {\n  public static void main(String[] args) {\n    int[] array = {1, 2, 3, 4, 5};\n    System.out.println("Number of elements in the array: " + array.length);\n  }\n}',
  },
  {
    id: 234,
    category: "array",
    question: "Program to print the sum of all the items of the array",
    answer:
      'public class ArraySum {\n  public static void main(String[] args) {\n    int[] array = {1, 2, 3, 4, 5};\n    int sum = 0;\n\n    for (int num : array) {\n      sum += num;\n    }\n\n    System.out.println("Sum of all elements: " + sum);\n  }\n}',
  },
  {
    id: 235,
    category: "array",
    question: "Program to right rotate the elements of an array",
    answer:
      'public class ArrayRightRotate {\n  public static void main(String[] args) {\n    int[] array = {1, 2, 3, 4, 5};\n    int d = 2; // Number of positions to rotate\n    int n = array.length;\n\n    // Rotate right\n    reverse(array, 0, n - 1);\n    reverse(array, 0, d - 1);\n    reverse(array, d, n - 1);\n\n    System.out.println("Array after right rotation:");\n    for (int element : array) {\n      System.out.print(element + " ");\n    }\n  }\n\n  private static void reverse(int[] array, int start, int end) {\n    while (start < end) {\n      int temp = array[start];\n      array[start] = array[end];\n      array[end] = temp;\n      start++;\n      end--;\n    }\n  }\n}',
  },
  {
    id: 236,
    category: "array",
    question: "Program to sort the elements of an array in ascending order",
    answer:
      'import java.util.Arrays;\n\npublic class ArraySortAscending {\n  public static void main(String[] args) {\n    int[] array = {5, 3, 2, 4, 1};\n\n    Arrays.sort(array);\n\n    System.out.println("Array in ascending order:");\n    for (int element : array) {\n      System.out.print(element + " ");\n    }\n  }\n}',
  },
  {
    id: 237,
    category: "array",
    question: "Program to sort the elements of an array in descending order",
    answer:
      'import java.util.Arrays;\nimport java.util.Collections;\n\npublic class ArraySortDescending {\n  public static void main(String[] args) {\n    Integer[] array = {5, 3, 2, 4, 1}; // Use Integer instead of int\n\n    Arrays.sort(array, Collections.reverseOrder());\n\n    System.out.println("Array in descending order:");\n    for (int element : array) {\n      System.out.print(element + " ");\n    }\n  }\n}',
  },
  {
    id: 238,
    category: "array",
    question: "Program to find 3rd largest number in an array",
    answer:
      'import java.util.Arrays;\nimport java.util.Collections;\n\npublic class ArrayThirdLargest {\n  public static void main(String[] args) {\n    Integer[] array = {1, 3, 4, 2, 5};\n\n    Arrays.sort(array, Collections.reverseOrder());\n\n    if (array.length >= 3) {\n      System.out.println("3rd largest number: " + array[2]);\n    } else {\n      System.out.println("Array does not contain enough elements.");\n    }\n  }\n}',
  },
  {
    id: 239,
    category: "array",
    question: "Program to find 2nd largest number in an array",
    answer:
      'import java.util.Arrays;\nimport java.util.Collections;\n\npublic class ArraySecondLargest {\n  public static void main(String[] args) {\n    Integer[] array = {1, 3, 4, 2, 5};\n\n    Arrays.sort(array, Collections.reverseOrder());\n\n    if (array.length >= 2) {\n      System.out.println("2nd largest number: " + array[1]);\n    } else {\n      System.out.println("Array does not contain enough elements.");\n    }\n  }\n}',
  },
  {
    id: 240,
    category: "array",
    question: "Program to find largest number in an array",
    answer:
      'public class ArrayLargest {\n  public static void main(String[] args) {\n    int[] array = {1, 3, 4, 2, 5};\n    int largest = array[0];\n\n    for (int i = 1; i < array.length; i++) {\n      if (array[i] > largest) {\n        largest = array[i];\n      }\n    }\n\n    System.out.println("Largest number in the array: " + largest);\n  }\n}',
  },
  {
    id: 241,
    category: "array",
    question: "Program to find 2nd smallest number in an array",
    answer:
      'import java.util.Arrays;\n\npublic class ArraySecondSmallest {\n  public static void main(String[] args) {\n    int[] array = {1, 3, 4, 2, 5};\n    Arrays.sort(array);\n\n    if (array.length >= 2) {\n      System.out.println("2nd smallest number: " + array[1]);\n    } else {\n      System.out.println("Array does not contain enough elements.");\n    }\n  }\n}',
  },
  {
    id: 242,
    category: "array",
    question: "Program to find smallest number in an array",
    answer:
      'public class ArraySmallest {\n  public static void main(String[] args) {\n    int[] array = {1, 3, 4, 2, 5};\n    int smallest = array[0];\n\n    for (int i = 1; i < array.length; i++) {\n      if (array[i] < smallest) {\n        smallest = array[i];\n      }\n    }\n\n    System.out.println("Smallest number in the array: " + smallest);\n  }\n}',
  },
  {
    id: 243,
    category: "array",
    question: "Program to remove duplicate elements in an array",
    answer:
      'import java.util.Arrays;\nimport java.util.LinkedHashSet;\nimport java.util.Set;\n\npublic class ArrayRemoveDuplicates {\n  public static void main(String[] args) {\n    int[] array = {1, 2, 3, 2, 4, 5, 1};\n    Set<Integer> set = new LinkedHashSet<>();\n\n    for (int num : array) {\n      set.add(num);\n    }\n\n    System.out.println("Array after removing duplicates:");\n    for (int num : set) {\n      System.out.print(num + " ");\n    }\n  }\n}',
  },
  {
    id: 244,
    category: "array",
    question: "Program to print odd and even numbers from an array",
    answer:
      'public class ArrayOddEven {\n  public static void main(String[] args) {\n    int[] array = {1, 2, 3, 4, 5};\n\n    System.out.println("Odd numbers:");\n    for (int num : array) {\n      if (num % 2 != 0) {\n        System.out.print(num + " ");\n      }\n    }\n\n    System.out.println("\\nEven numbers:");\n    for (int num : array) {\n      if (num % 2 == 0) {\n        System.out.print(num + " ");\n      }\n    }\n  }\n}',
  },
  {
    id: 245,
    category: "array",
    question: "How to sort an array in Java",
    answer:
      'import java.util.Arrays;\n\npublic class ArraySort {\n  public static void main(String[] args) {\n    int[] array = {5, 3, 2, 4, 1};\n\n    // Sorting in ascending order\n    Arrays.sort(array);\n    System.out.println("Array in ascending order:");\n    for (int element : array) {\n      System.out.print(element + " ");\n    }\n\n    System.out.println();\n\n    // Sorting in descending order\n    Integer[] arrayDesc = {5, 3, 2, 4, 1};\n    Arrays.sort(arrayDesc, Collections.reverseOrder());\n    System.out.println("Array in descending order:");\n    for (int element : arrayDesc) {\n      System.out.print(element + " ");\n    }\n  }\n}',
  },
  {
    id: 246,
    category: "2d array",
    question:
      "Enter the Matrix of rows and columns entered by the user and print in matrix format",
    answer:
      'import java.util.Scanner;\n\npublic class MatrixInput {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n\n    System.out.print("Enter number of rows: ");\n    int rows = scanner.nextInt();\n    System.out.print("Enter number of columns: ");\n    int cols = scanner.nextInt();\n\n    int[][] matrix = new int[rows][cols];\n\n    System.out.println("Enter the matrix elements:");\n    for (int i = 0; i < rows; i++) {\n      for (int j = 0; j < cols; j++) {\n        matrix[i][j] = scanner.nextInt();\n      }\n    }\n\n    System.out.println("Matrix:");\n    for (int i = 0; i < rows; i++) {\n      for (int j = 0; j < cols; j++) {\n        System.out.print(matrix[i][j] + " ");\n      }\n      System.out.println();\n    }\n  }\n}',
  },
  {
    id: 247,
    category: "2d array",
    question: "Program to Add Two Matrices",
    answer:
      'import java.util.Scanner;\n\npublic class MatrixAddition {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n\n    System.out.print("Enter number of rows: ");\n    int rows = scanner.nextInt();\n    System.out.print("Enter number of columns: ");\n    int cols = scanner.nextInt();\n\n    int[][] matrix1 = new int[rows][cols];\n    int[][] matrix2 = new int[rows][cols];\n    int[][] result = new int[rows][cols];\n\n    System.out.println("Enter elements of first matrix:");\n    for (int i = 0; i < rows; i++) {\n      for (int j = 0; j < cols; j++) {\n        matrix1[i][j] = scanner.nextInt();\n      }\n    }\n\n    System.out.println("Enter elements of second matrix:");\n    for (int i = 0; i < rows; i++) {\n      for (int j = 0; j < cols; j++) {\n        matrix2[i][j] = scanner.nextInt();\n      }\n    }\n\n    for (int i = 0; i < rows; i++) {\n      for (int j = 0; j < cols; j++) {\n        result[i][j] = matrix1[i][j] + matrix2[i][j];\n      }\n    }\n\n    System.out.println("Sum of the matrices:");\n    for (int i = 0; i < rows; i++) {\n      for (int j = 0; j < cols; j++) {\n        System.out.print(result[i][j] + " ");\n      }\n      System.out.println();\n    }\n  }\n}',
  },
  {
    id: 248,
    category: "2d array",
    question: "Program to Multiply Two Matrices",
    answer:
      'import java.util.Scanner;\n\npublic class MatrixMultiplication {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n\n    System.out.print("Enter number of rows and columns for first matrix: ");\n    int rows1 = scanner.nextInt();\n    int cols1 = scanner.nextInt();\n    System.out.print("Enter number of columns for second matrix: ");\n    int cols2 = scanner.nextInt();\n\n    int[][] matrix1 = new int[rows1][cols1];\n    int[][] matrix2 = new int[cols1][cols2];\n    int[][] result = new int[rows1][cols2];\n\n    System.out.println("Enter elements of first matrix:");\n    for (int i = 0; i < rows1; i++) {\n      for (int j = 0; j < cols1; j++) {\n        matrix1[i][j] = scanner.nextInt();\n      }\n    }\n\n    System.out.println("Enter elements of second matrix:");\n    for (int i = 0; i < cols1; i++) {\n      for (int j = 0; j < cols2; j++) {\n        matrix2[i][j] = scanner.nextInt();\n      }\n    }\n\n    for (int i = 0; i < rows1; i++) {\n      for (int j = 0; j < cols2; j++) {\n        result[i][j] = 0;\n        for (int k = 0; k < cols1; k++) {\n          result[i][j] += matrix1[i][k] * matrix2[k][j];\n        }\n      }\n    }\n\n    System.out.println("Product of the matrices:");\n    for (int i = 0; i < rows1; i++) {\n      for (int j = 0; j < cols2; j++) {\n        System.out.print(result[i][j] + " ");\n      }\n      System.out.println();\n    }\n  }\n}',
  },
  {
    id: 249,
    category: "2d array",
    question: "Program to subtract the two matrices",
    answer:
      'import java.util.Scanner;\n\npublic class MatrixSubtraction {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n\n    System.out.print("Enter number of rows: ");\n    int rows = scanner.nextInt();\n    System.out.print("Enter number of columns: ");\n    int cols = scanner.nextInt();\n\n    int[][] matrix1 = new int[rows][cols];\n    int[][] matrix2 = new int[rows][cols];\n    int[][] result = new int[rows][cols];\n\n    System.out.println("Enter elements of first matrix:");\n    for (int i = 0; i < rows; i++) {\n      for (int j = 0; j < cols; j++) {\n        matrix1[i][j] = scanner.nextInt();\n      }\n    }\n\n    System.out.println("Enter elements of second matrix:");\n    for (int i = 0; i < rows; i++) {\n      for (int j = 0; j < cols; j++) {\n        matrix2[i][j] = scanner.nextInt();\n      }\n    }\n\n    for (int i = 0; i < rows; i++) {\n      for (int j = 0; j < cols; j++) {\n        result[i][j] = matrix1[i][j] - matrix2[i][j];\n      }\n    }\n\n    System.out.println("Difference of the matrices:");\n    for (int i = 0; i < rows; i++) {\n      for (int j = 0; j < cols; j++) {\n        System.out.print(result[i][j] + " ");\n      }\n      System.out.println();\n    }\n  }\n}',
  },
  {
    id: 250,
    category: "2d array",
    question: "Program to determine whether two matrices are equal",
    answer:
      'import java.util.Scanner;\n\npublic class MatrixEquality {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n\n    System.out.print("Enter number of rows: ");\n    int rows = scanner.nextInt();\n    System.out.print("Enter number of columns: ");\n    int cols = scanner.nextInt();\n\n    int[][] matrix1 = new int[rows][cols];\n    int[][] matrix2 = new int[rows][cols];\n\n    System.out.println("Enter elements of first matrix:");\n    for (int i = 0; i < rows; i++) {\n      for (int j = 0; j < cols; j++) {\n        matrix1[i][j] = scanner.nextInt();\n      }\n    }\n\n    System.out.println("Enter elements of second matrix:");\n    for (int i = 0; i < rows; i++) {\n      for (int j = 0; j < cols; j++) {\n        matrix2[i][j] = scanner.nextInt();\n      }\n    }\n\n    boolean areEqual = true;\n    for (int i = 0; i < rows; i++) {\n      for (int j = 0; j < cols; j++) {\n        if (matrix1[i][j] != matrix2[i][j]) {\n          areEqual = false;\n          break;\n        }\n      }\n    }\n\n    if (areEqual) {\n      System.out.println("The matrices are equal.");\n    } else {\n      System.out.println("The matrices are not equal.");\n    }\n  }\n}',
  },
  {
    id: 251,
    category: "2d array",
    question: "Program to display the lower triangular matrix",
    answer:
      'import java.util.Scanner;\n\npublic class LowerTriangularMatrix {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n\n    System.out.print("Enter number of rows and columns: ");\n    int size = scanner.nextInt();\n\n    int[][] matrix = new int[size][size];\n\n    System.out.println("Enter elements of the matrix:");\n    for (int i = 0; i < size; i++) {\n      for (int j = 0; j < size; j++) {\n        matrix[i][j] = scanner.nextInt();\n      }\n    }\n\n    System.out.println("Lower Triangular Matrix:");\n    for (int i = 0; i < size; i++) {\n      for (int j = 0; j < size; j++) {\n        if (i >= j) {\n          System.out.print(matrix[i][j] + " ");\n        } else {\n          System.out.print("0 ");\n        }\n      }\n      System.out.println();\n    }\n  }\n}',
  },
  {
    id: 252,
    category: "2d array",
    question: "Program to display the upper triangular matrix",
    answer:
      'import java.util.Scanner;\n\npublic class UpperTriangularMatrix {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n\n    System.out.print("Enter number of rows and columns: ");\n    int size = scanner.nextInt();\n\n    int[][] matrix = new int[size][size];\n\n    System.out.println("Enter elements of the matrix:");\n    for (int i = 0; i < size; i++) {\n      for (int j = 0; j < size; j++) {\n        matrix[i][j] = scanner.nextInt();\n      }\n    }\n\n    System.out.println("Upper Triangular Matrix:");\n    for (int i = 0; i < size; i++) {\n      for (int j = 0; j < size; j++) {\n        if (i <= j) {\n          System.out.print(matrix[i][j] + " ");\n        } else {\n          System.out.print("0 ");\n        }\n      }\n      System.out.println();\n    }\n  }\n}',
  },
  {
    id: 253,
    category: "2d array",
    question:
      "Program to find the frequency of odd & even numbers in the given matrix",
    answer:
      'import java.util.Scanner;\n\npublic class OddEvenFrequency {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n\n    System.out.print("Enter number of rows and columns: ");\n    int rows = scanner.nextInt();\n    int cols = scanner.nextInt();\n\n    int[][] matrix = new int[rows][cols];\n    int oddCount = 0;\n    int evenCount = 0;\n\n    System.out.println("Enter elements of the matrix:");\n    for (int i = 0; i < rows; i++) {\n      for (int j = 0; j < cols; j++) {\n        matrix[i][j] = scanner.nextInt();\n        if (matrix[i][j] % 2 == 0) {\n          evenCount++;\n        } else {\n          oddCount++;\n        }\n      }\n    }\n\n    System.out.println("Number of even elements: " + evenCount);\n    System.out.println("Number of odd elements: " + oddCount);\n  }\n}',
  },
  {
    id: 254,
    category: "2d array",
    question: "Program to find the sum of each row and each column of a matrix",
    answer:
      'import java.util.Scanner;\n\npublic class RowColumnSum {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n\n    System.out.print("Enter number of rows and columns: ");\n    int rows = scanner.nextInt();\n    int cols = scanner.nextInt();\n\n    int[][] matrix = new int[rows][cols];\n\n    System.out.println("Enter elements of the matrix:");\n    for (int i = 0; i < rows; i++) {\n      for (int j = 0; j < cols; j++) {\n        matrix[i][j] = scanner.nextInt();\n      }\n    }\n\n    System.out.println("Sum of each row:");\n    for (int i = 0; i < rows; i++) {\n      int rowSum = 0;\n      for (int j = 0; j < cols; j++) {\n        rowSum += matrix[i][j];\n      }\n      System.out.println("Row " + i + ": " + rowSum);\n    }\n\n    System.out.println("Sum of each column:");\n    for (int j = 0; j < cols; j++) {\n      int colSum = 0;\n      for (int i = 0; i < rows; i++) {\n        colSum += matrix[i][j];\n      }\n      System.out.println("Column " + j + ": " + colSum);\n    }\n  }\n}',
  },
  {
    id: 255,
    category: "2d array",
    question: "Program to find the transpose of a given matrix",
    answer:
      'import java.util.Scanner;\n\npublic class MatrixTranspose {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n\n    System.out.print("Enter number of rows and columns: ");\n    int rows = scanner.nextInt();\n    int cols = scanner.nextInt();\n\n    int[][] matrix = new int[rows][cols];\n    int[][] transpose = new int[cols][rows];\n\n    System.out.println("Enter elements of the matrix:");\n    for (int i = 0; i < rows; i++) {\n      for (int j = 0; j < cols; j++) {\n        matrix[i][j] = scanner.nextInt();\n      }\n    }\n\n    for (int i = 0; i < rows; i++) {\n      for (int j = 0; j < cols; j++) {\n        transpose[j][i] = matrix[i][j];\n      }\n    }\n\n    System.out.println("Transpose of the matrix:");\n    for (int i = 0; i < cols; i++) {\n      for (int j = 0; j < rows; j++) {\n        System.out.print(transpose[i][j] + " ");\n      }\n      System.out.println();\n    }\n  }\n}',
  },
  {
    id: 256,
    category: "2d array",
    question:
      "Program to determine whether a given matrix is an identity matrix",
    answer:
      'import java.util.Scanner;\n\npublic class IdentityMatrix {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n\n    System.out.print("Enter number of rows and columns: ");\n    int size = scanner.nextInt();\n\n    int[][] matrix = new int[size][size];\n    boolean isIdentity = true;\n\n    System.out.println("Enter elements of the matrix:");\n    for (int i = 0; i < size; i++) {\n      for (int j = 0; j < size; j++) {\n        matrix[i][j] = scanner.nextInt();\n      }\n    }\n\n    for (int i = 0; i < size; i++) {\n      for (int j = 0; j < size; j++) {\n        if (i == j && matrix[i][j] != 1 || i != j && matrix[i][j] != 0) {\n          isIdentity = false;\n          break;\n        }\n      }\n    }\n\n    if (isIdentity) {\n      System.out.println("The matrix is an identity matrix.");\n    } else {\n      System.out.println("The matrix is not an identity matrix.");\n    }\n  }\n}',
  },
  {
    id: 257,
    category: "2d array",
    question: "Program to Transpose matrix",
    answer:
      'import java.util.Scanner;\n\npublic class MatrixTranspose {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n\n    System.out.print("Enter number of rows and columns: ");\n    int rows = scanner.nextInt();\n    int cols = scanner.nextInt();\n\n    int[][] matrix = new int[rows][cols];\n    int[][] transpose = new int[cols][rows];\n\n    System.out.println("Enter elements of the matrix:");\n    for (int i = 0; i < rows; i++) {\n      for (int j = 0; j < cols; j++) {\n        matrix[i][j] = scanner.nextInt();\n      }\n    }\n\n    for (int i = 0; i < rows; i++) {\n      for (int j = 0; j < cols; j++) {\n        transpose[j][i] = matrix[i][j];\n      }\n    }\n\n    System.out.println("Transpose of the matrix:");\n    for (int i = 0; i < cols; i++) {\n      for (int j = 0; j < rows; j++) {\n        System.out.print(transpose[i][j] + " ");\n      }\n      System.out.println();\n    }\n  }\n}',
  },
  {
    id: 258,
    category: "2d array",
    question: "Program to determine whether a given matrix is a sparse matrix",
    answer:
      'import java.util.Scanner;\n\npublic class SparseMatrix {\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n\n    System.out.print("Enter number of rows and columns: ");\n    int rows = scanner.nextInt();\n    int cols = scanner.nextInt();\n\n    int[][] matrix = new int[rows][cols];\n    int zeroCount = 0;\n\n    System.out.println("Enter elements of the matrix:");\n    for (int i = 0; i < rows; i++) {\n      for (int j = 0; j < cols; j++) {\n        matrix[i][j] = scanner.nextInt();\n        if (matrix[i][j] == 0) {\n          zeroCount++;\n        }\n      }\n    }\n\n    if (zeroCount > (rows * cols) / 2) {\n      System.out.println("The matrix is a sparse matrix.");\n    } else {\n      System.out.println("The matrix is not a sparse matrix.");\n    }\n  }\n}',
  },
  {
    id: 259,
    category: "interfaces",
    question:
      "Write a Java program to create an interface Shape with the getArea() method. Create three classes Rectangle, Circle, and Triangle that implement the Shape interface. Implement the getArea() method for each of the three classes.",
    answer:
      'import java.util.Scanner;\n\ninterface Shape {\n    double getArea();\n}\n\nclass Rectangle implements Shape {\n    private double length, width;\n    public Rectangle(double length, double width) {\n        this.length = length;\n        this.width = width;\n    }\n    @Override\n    public double getArea() {\n        return length * width;\n    }\n}\n\nclass Circle implements Shape {\n    private double radius;\n    public Circle(double radius) {\n        this.radius = radius;\n    }\n    @Override\n    public double getArea() {\n        return Math.PI * radius * radius;\n    }\n}\n\nclass Triangle implements Shape {\n    private double base, height;\n    public Triangle(double base, double height) {\n        this.base = base;\n        this.height = height;\n    }\n    @Override\n    public double getArea() {\n        return 0.5 * base * height;\n    }\n}\n\npublic class ShapeTest {\n    public static void main(String[] args) {\n        Shape rectangle = new Rectangle(5, 7);\n        Shape circle = new Circle(3);\n        Shape triangle = new Triangle(4, 6);\n\n        System.out.println("Rectangle area: " + rectangle.getArea());\n        System.out.println("Circle area: " + circle.getArea());\n        System.out.println("Triangle area: " + triangle.getArea());\n    }\n}',
  },
  {
    id: 260,
    category: "interfaces",
    question:
      'Write a Java program to create an Animal interface with a method called bark() that takes no arguments and returns void. Create a Dog class that implements Animal and overrides speak() to print "Dog is barking".',
    answer:
      'interface Animal {\n    void bark();\n}\n\nclass Dog implements Animal {\n    @Override\n    public void bark() {\n        System.out.println("Dog is barking");\n    }\n}\n\npublic class AnimalTest {\n    public static void main(String[] args) {\n        Dog dog = new Dog();\n        dog.bark();\n    }\n}',
  },
  {
    id: 261,
    category: "interfaces",
    question:
      "Write a Java program to create an interface Flyable with a method called fly_obj(). Create three classes Spacecraft, Airplane, and Helicopter that implement the Flyable interface. Implement the fly_obj() method for each of the three classes.",
    answer:
      'interface Flyable {\n    void fly_obj();\n}\n\nclass Spacecraft implements Flyable {\n    @Override\n    public void fly_obj() {\n        System.out.println("Spacecraft is flying in space");\n    }\n}\n\nclass Airplane implements Flyable {\n    @Override\n    public void fly_obj() {\n        System.out.println("Airplane is flying in the sky");\n    }\n}\n\nclass Helicopter implements Flyable {\n    @Override\n    public void fly_obj() {\n        System.out.println("Helicopter is flying with rotary blades");\n    }\n}\n\npublic class FlyableTest {\n    public static void main(String[] args) {\n        Flyable spacecraft = new Spacecraft();\n        Flyable airplane = new Airplane();\n        Flyable helicopter = new Helicopter();\n\n        spacecraft.fly_obj();\n        airplane.fly_obj();\n        helicopter.fly_obj();\n    }\n}',
  },
  {
    id: 262,
    category: "interfaces",
    question:
      "Write a Java programming to create a banking system with three classes - Bank, Account, SavingsAccount, and CurrentAccount. The bank should have a list of accounts and methods for adding them. Accounts should be an interface with methods to deposit, withdraw, calculate interest, and view balances. SavingsAccount and CurrentAccount should implement the Account interface and have their own unique methods.",
    answer:
      'import java.util.ArrayList;\nimport java.util.List;\n\ninterface Account {\n    void deposit(double amount);\n    void withdraw(double amount);\n    double calculateInterest();\n    double getBalance();\n}\n\nclass SavingsAccount implements Account {\n    private double balance;\n    private double interestRate;\n\n    public SavingsAccount(double interestRate) {\n        this.interestRate = interestRate;\n    }\n\n    @Override\n    public void deposit(double amount) {\n        balance += amount;\n    }\n\n    @Override\n    public void withdraw(double amount) {\n        balance -= amount;\n    }\n\n    @Override\n    public double calculateInterest() {\n        return balance * interestRate;\n    }\n\n    @Override\n    public double getBalance() {\n        return balance;\n    }\n}\n\nclass CurrentAccount implements Account {\n    private double balance;\n\n    @Override\n    public void deposit(double amount) {\n        balance += amount;\n    }\n\n    @Override\n    public void withdraw(double amount) {\n        balance -= amount;\n    }\n\n    @Override\n    public double calculateInterest() {\n        return 0; // No interest for CurrentAccount\n    }\n\n    @Override\n    public double getBalance() {\n        return balance;\n    }\n}\n\nclass Bank {\n    private List<Account> accounts = new ArrayList<>();\n\n    public void addAccount(Account account) {\n        accounts.add(account);\n    }\n\n    public void printAccountBalances() {\n        for (Account account : accounts) {\n            System.out.println("Account Balance: " + account.getBalance());\n        }\n    }\n}\n\npublic class BankingSystem {\n    public static void main(String[] args) {\n        Bank bank = new Bank();\n        SavingsAccount savingsAccount = new SavingsAccount(0.04);\n        CurrentAccount currentAccount = new CurrentAccount();\n\n        savingsAccount.deposit(1000);\n        currentAccount.deposit(500);\n\n        bank.addAccount(savingsAccount);\n        bank.addAccount(currentAccount);\n\n        bank.printAccountBalances();\n    }\n}',
  },
  {
    id: 263,
    category: "interfaces",
    question:
      "Write a Java program to create an interface Resizable with methods resizeWidth(int width) and resizeHeight(int height) that allow an object to be resized. Create a class Rectangle that implements the Resizable interface and implements the resize methods.",
    answer:
      'interface Resizable {\n    void resizeWidth(int width);\n    void resizeHeight(int height);\n}\n\nclass Rectangle implements Resizable {\n    private int width, height;\n\n    @Override\n    public void resizeWidth(int width) {\n        this.width = width;\n    }\n\n    @Override\n    public void resizeHeight(int height) {\n        this.height = height;\n    }\n\n    public void displayDimensions() {\n        System.out.println("Width: " + width + ", Height: " + height);\n    }\n}\n\npublic class ResizableTest {\n    public static void main(String[] args) {\n        Rectangle rectangle = new Rectangle();\n        rectangle.resizeWidth(10);\n        rectangle.resizeHeight(20);\n        rectangle.displayDimensions();\n    }\n}',
  },
  {
    id: 264,
    category: "interfaces",
    question:
      "Write a Java program to create an interface Drawable with a method draw() that takes no arguments and returns void. Create three classes Circle, Rectangle, and Triangle that implement the Drawable interface and override the draw() method to draw their respective shapes.",
    answer:
      'interface Drawable {\n    void draw();\n}\n\nclass Circle implements Drawable {\n    @Override\n    public void draw() {\n        System.out.println("Drawing a Circle");\n    }\n}\n\nclass Rectangle implements Drawable {\n    @Override\n    public void draw() {\n        System.out.println("Drawing a Rectangle");\n    }\n}\n\nclass Triangle implements Drawable {\n    @Override\n    public void draw() {\n        System.out.println("Drawing a Triangle");\n    }\n}\n\npublic class DrawableTest {\n    public static void main(String[] args) {\n        Drawable circle = new Circle();\n        Drawable rectangle = new Rectangle();\n        Drawable triangle = new Triangle();\n\n        circle.draw();\n        rectangle.draw();\n        triangle.draw();\n    }\n}',
  },
  {
    id: 265,
    category: "interfaces",
    question:
      "Write a Java program to create an interface Sortable with a method sort() that sorts an array of integers in ascending order. Create two classes BubbleSort and SelectionSort that implement the Sortable interface and provide their own implementations of the sort() method.",
    answer:
      'interface Sortable {\n    void sort(int[] array);\n}\n\nclass BubbleSort implements Sortable {\n    @Override\n    public void sort(int[] array) {\n        int n = array.length;\n        for (int i = 0; i < n - 1; i++) {\n            for (int j = 0; j < n - i - 1; j++) {\n                if (array[j] > array[j + 1]) {\n                    int temp = array[j];\n                    array[j] = array[j + 1];\n                    array[j + 1] = temp;\n                }\n            }\n        }\n    }\n}\n\nclass SelectionSort implements Sortable {\n    @Override\n    public void sort(int[] array) {\n        int n = array.length;\n        for (int i = 0; i < n - 1; i++) {\n            int minIndex = i;\n            for (int j = i + 1; j < n; j++) {\n                if (array[j] < array[minIndex]) {\n                    minIndex = j;\n                }\n            }\n            int temp = array[minIndex];\n            array[minIndex] = array[i];\n            array[i] = temp;\n        }\n    }\n}\n\npublic class SortableTest {\n    public static void main(String[] args) {\n        int[] array = {64, 25, 12, 22, 11};\n\n        Sortable bubbleSort = new BubbleSort();\n        bubbleSort.sort(array);\n        System.out.println("Sorted array with Bubble Sort:");\n        for (int i : array) {\n            System.out.print(i + " ");\n        }\n        System.out.println();\n\n        int[] array2 = {64, 25, 12, 22, 11};\n        Sortable selectionSort = new SelectionSort();\n        selectionSort.sort(array2);\n        System.out.println("Sorted array with Selection Sort:");\n        for (int i : array2) {\n            System.out.print(i + " ");\n        }\n    }\n}',
  },
  {
    id: 266,
    category: "interfaces",
    question:
      "Write a Java program to create an interface Playable with a method play() that takes no arguments and returns void. Create three classes Football, Volleyball, and Basketball that implement the Playable interface and override the play() method to play the respective sports.",
    answer:
      'interface Playable {\n    void play();\n}\n\nclass Football implements Playable {\n    @Override\n    public void play() {\n        System.out.println("Playing Football");\n    }\n}\n\nclass Volleyball implements Playable {\n    @Override\n    public void play() {\n        System.out.println("Playing Volleyball");\n    }\n}\n\nclass Basketball implements Playable {\n    @Override\n    public void play() {\n        System.out.println("Playing Basketball");\n    }\n}\n\npublic class PlayableTest {\n    public static void main(String[] args) {\n        Playable football = new Football();\n        Playable volleyball = new Volleyball();\n        Playable basketball = new Basketball();\n\n        football.play();\n        volleyball.play();\n        basketball.play();\n    }\n}',
  },
  {
    id: 267,
    category: "interfaces",
    question:
      "Write a Java program to create an interface Searchable with a method search(String keyword) that searches for a given keyword in a text document. Create two classes Document and WebPage that implement the Searchable interface and provide their own implementations of the search() method.",
    answer:
      'interface Searchable {\n    void search(String keyword);\n}\n\nclass Document implements Searchable {\n    @Override\n    public void search(String keyword) {\n        System.out.println("Searching for \\"" + keyword + "\\" in Document");\n    }\n}\n\nclass WebPage implements Searchable {\n    @Override\n    public void search(String keyword) {\n        System.out.println("Searching for \\"" + keyword + "\\" in WebPage");\n    }\n}\n\npublic class SearchableTest {\n    public static void main(String[] args) {\n        Searchable document = new Document();\n        Searchable webpage = new WebPage();\n\n        document.search("Java");\n        webpage.search("Interface");\n    }\n}',
  },
  {
    id: 268,
    category: "interfaces",
    question:
      "Write a Java program to create an interface Encryptable with methods encrypt (String data) and decrypt (String encryptedData) that define encryption and decryption operations. Create two classes AES and RSA that implement the Encryptable interface and provide their own encryption and decryption algorithms.",
    answer:
      'interface Encryptable {\n    String encrypt(String data);\n    String decrypt(String encryptedData);\n}\n\nclass AES implements Encryptable {\n    @Override\n    public String encrypt(String data) {\n        return "AES Encrypted: " + data;\n    }\n\n    @Override\n    public String decrypt(String encryptedData) {\n        return "AES Decrypted: " + encryptedData;\n    }\n}\n\nclass RSA implements Encryptable {\n    @Override\n    public String encrypt(String data) {\n        return "RSA Encrypted: " + data;\n    }\n\n    @Override\n    public String decrypt(String encryptedData) {\n        return "RSA Decrypted: " + encryptedData;\n    }\n}\n\npublic class EncryptableTest {\n    public static void main(String[] args) {\n        Encryptable aes = new AES();\n        Encryptable rsa = new RSA();\n\n        String data = "Hello World";\n        System.out.println(aes.encrypt(data));\n        System.out.println(aes.decrypt(aes.encrypt(data)));\n        System.out.println(rsa.encrypt(data));\n        System.out.println(rsa.decrypt(rsa.encrypt(data)));\n    }\n}',
  },
  {
    id: 269,
    category: "interfaces",
    question:
      "Write a Java program to create an interface Sortable with a method sort (int[] array) that sorts an array of integers in descending order. Create two classes QuickSort and MergeSort that implement the Sortable interface and provide their own implementations of the sort() method.",
    answer:
      'interface Sortable {\n    void sort(int[] array);\n}\n\nclass QuickSort implements Sortable {\n    @Override\n    public void sort(int[] array) {\n        quickSort(array, 0, array.length - 1);\n    }\n\n    private void quickSort(int[] array, int low, int high) {\n        if (low < high) {\n            int pi = partition(array, low, high);\n            quickSort(array, low, pi - 1);\n            quickSort(array, pi + 1, high);\n        }\n    }\n\n    private int partition(int[] array, int low, int high) {\n        int pivot = array[high];\n        int i = low - 1;\n        for (int j = low; j < high; j++) {\n            if (array[j] > pivot) {\n                i++;\n                int temp = array[i];\n                array[i] = array[j];\n                array[j] = temp;\n            }\n        }\n        int temp = array[i + 1];\n        array[i + 1] = array[high];\n        array[high] = temp;\n        return i + 1;\n    }\n}\n\nclass MergeSort implements Sortable {\n    @Override\n    public void sort(int[] array) {\n        mergeSort(array, 0, array.length - 1);\n    }\n\n    private void mergeSort(int[] array, int left, int right) {\n        if (left < right) {\n            int mid = (left + right) / 2;\n            mergeSort(array, left, mid);\n            mergeSort(array, mid + 1, right);\n            merge(array, left, mid, right);\n        }\n    }\n\n    private void merge(int[] array, int left, int mid, int right) {\n        int n1 = mid - left + 1;\n        int n2 = right - mid;\n\n        int[] L = new int[n1];\n        int[] R = new int[n2];\n\n        System.arraycopy(array, left, L, 0, n1);\n        System.arraycopy(array, mid + 1, R, 0, n2);\n\n        int i = 0, j = 0;\n        int k = left;\n        while (i < n1 && j < n2) {\n            if (L[i] >= R[j]) {\n                array[k++] = L[i++];\n            } else {\n                array[k++] = R[j++];\n            }\n        }\n\n        while (i < n1) {\n            array[k++] = L[i++];\n        }\n\n        while (j < n2) {\n            array[k++] = R[j++];\n        }\n    }\n}\n\npublic class SortableTest {\n    public static void main(String[] args) {\n        int[] array = {64, 25, 12, 22, 11};\n\n        Sortable quickSort = new QuickSort();\n        quickSort.sort(array);\n        System.out.println("Sorted array with Quick Sort:");\n        for (int i : array) {\n            System.out.print(i + " ");\n        }\n        System.out.println();\n\n        int[] array2 = {64, 25, 12, 22, 11};\n        Sortable mergeSort = new MergeSort();\n        mergeSort.sort(array2);\n        System.out.println("Sorted array with Merge Sort:");\n        for (int i : array2) {\n            System.out.print(i + " ");\n        }\n    }\n}',
  },
  {
    id: 270,
    category: "inheritance",
    question:
      "Write a Java program to create a class called Animal with a method called makeSound(). Create a subclass called Cat that overrides the makeSound() method to bark.",
    answer:
      'class Animal {\n    void makeSound() {\n        System.out.println("Some generic animal sound");\n    }\n}\n\nclass Cat extends Animal {\n    @Override\n    void makeSound() {\n        System.out.println("Meow");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal myCat = new Cat();\n        myCat.makeSound();  // Output: Meow\n    }\n}',
  },
  {
    id: 271,
    category: "inheritance",
    question:
      'Write a Java program to create a class called Vehicle with a method called drive(). Create a subclass called Car that overrides the drive() method to print "Repairing a car".',
    answer:
      'class Vehicle {\n    void drive() {\n        System.out.println("Driving the vehicle");\n    }\n}\n\nclass Car extends Vehicle {\n    @Override\n    void drive() {\n        System.out.println("Repairing a car");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Vehicle myCar = new Car();\n        myCar.drive();  // Output: Repairing a car\n    }\n}',
  },
  {
    id: 272,
    category: "inheritance",
    question:
      "Write a Java program to create a class called Shape with a method called getArea(). Create a subclass called Rectangle that overrides the getArea() method to calculate the area of a rectangle.",
    answer:
      'class Shape {\n    double getArea() {\n        return 0;\n    }\n}\n\nclass Rectangle extends Shape {\n    private double length;\n    private double width;\n\n    Rectangle(double length, double width) {\n        this.length = length;\n        this.width = width;\n    }\n\n    @Override\n    double getArea() {\n        return length * width;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Shape myRectangle = new Rectangle(5, 3);\n        System.out.println("Area of Rectangle: " + myRectangle.getArea());  // Output: 15.0\n    }\n}',
  },
  {
    id: 273,
    category: "inheritance",
    question:
      "Write a Java program to create a class called Employee with methods called work() and getSalary(). Create a subclass called HRManager that overrides the work() method and adds a new method called addEmployee().",
    answer:
      'class Employee {\n    void work() {\n        System.out.println("Employee working");\n    }\n\n    double getSalary() {\n        return 50000;\n    }\n}\n\nclass HRManager extends Employee {\n    @Override\n    void work() {\n        System.out.println("HR Manager managing HR tasks");\n    }\n\n    void addEmployee() {\n        System.out.println("Adding a new employee");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        HRManager manager = new HRManager();\n        manager.work();  // Output: HR Manager managing HR tasks\n        manager.addEmployee();  // Output: Adding a new employee\n    }\n}',
  },
  {
    id: 274,
    category: "inheritance",
    question:
      'Write a Java program to create a class known as "BankAccount" with methods called deposit() and withdraw(). Create a subclass called SavingsAccount that overrides the withdraw() method to prevent withdrawals if the account balance falls below one hundred.',
    answer:
      'class BankAccount {\n    private double balance;\n\n    void deposit(double amount) {\n        balance += amount;\n    }\n\n    void withdraw(double amount) {\n        if (balance >= amount) {\n            balance -= amount;\n        } else {\n            System.out.println("Insufficient balance");\n        }\n    }\n\n    double getBalance() {\n        return balance;\n    }\n}\n\nclass SavingsAccount extends BankAccount {\n    @Override\n    void withdraw(double amount) {\n        if (getBalance() - amount < 100) {\n            System.out.println("Insufficient balance for this withdrawal");\n        } else {\n            super.withdraw(amount);\n        }\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        SavingsAccount myAccount = new SavingsAccount();\n        myAccount.deposit(200);\n        myAccount.withdraw(150);  // Output: Insufficient balance for this withdrawal\n        System.out.println("Balance: " + myAccount.getBalance());  // Output: Balance: 200.0\n    }\n}',
  },
  {
    id: 275,
    category: "inheritance",
    question:
      "Write a Java program to create a class called Animal with a method named move(). Create a subclass called Cheetah that overrides the move() method to run.",
    answer:
      'class Animal {\n    void move() {\n        System.out.println("Animal moving");\n    }\n}\n\nclass Cheetah extends Animal {\n    @Override\n    void move() {\n        System.out.println("Cheetah running");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal myCheetah = new Cheetah();\n        myCheetah.move();  // Output: Cheetah running\n    }\n}',
  },
  {
    id: 276,
    category: "inheritance",
    question:
      "Write a Java program to create a class known as Person with methods called getFirstName() and getLastName(). Create a subclass called Employee that adds a new method named getEmployeeId() and overrides the getLastName() method to include the employee's job title.",
    answer:
      'class Person {\n    String getFirstName() {\n        return "John";\n    }\n\n    String getLastName() {\n        return "Doe";\n    }\n}\n\nclass Employee extends Person {\n    String getEmployeeId() {\n        return "EMP123";\n    }\n\n    @Override\n    String getLastName() {\n        return "Doe, Software Engineer";\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Employee emp = new Employee();\n        System.out.println("First Name: " + emp.getFirstName());  // Output: John\n        System.out.println("Last Name: " + emp.getLastName());  // Output: Doe, Software Engineer\n        System.out.println("Employee ID: " + emp.getEmployeeId());  // Output: EMP123\n    }\n}',
  },
  {
    id: 277,
    category: "inheritance",
    question:
      "Write a Java program to create a class called Shape with methods called getPerimeter() and getArea(). Create a subclass called Circle that overrides the getPerimeter() and getArea() methods to calculate the area and perimeter of a circle.",
    answer:
      'class Shape {\n    double getPerimeter() {\n        return 0;\n    }\n\n    double getArea() {\n        return 0;\n    }\n}\n\nclass Circle extends Shape {\n    private double radius;\n\n    Circle(double radius) {\n        this.radius = radius;\n    }\n\n    @Override\n    double getPerimeter() {\n        return 2 * Math.PI * radius;\n    }\n\n    @Override\n    double getArea() {\n        return Math.PI * radius * radius;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Shape myCircle = new Circle(5);\n        System.out.println("Perimeter of Circle: " + myCircle.getPerimeter());  // Output: 31.41592653589793\n        System.out.println("Area of Circle: " + myCircle.getArea());  // Output: 78.53981633974483\n    }\n}',
  },
  {
    id: 278,
    category: "inheritance",
    question:
      "Write a Java program to create a vehicle class hierarchy. The base class should be Vehicle, with subclasses Truck, Car, and Motorcycle. Each subclass should have properties such as make, model, year, and fuel type. Implement methods for calculating fuel efficiency, distance traveled, and maximum speed.",
    answer:
      'class Vehicle {\n    String make;\n    String model;\n    int year;\n    String fuelType;\n\n    Vehicle(String make, String model, int year, String fuelType) {\n        this.make = make;\n        this.model = model;\n        this.year = year;\n        this.fuelType = fuelType;\n    }\n\n    double calculateFuelEfficiency() {\n        return 0;\n    }\n\n    double calculateDistanceTraveled() {\n        return 0;\n    }\n\n    double calculateMaxSpeed() {\n        return 0;\n    }\n}\n\nclass Truck extends Vehicle {\n    Truck(String make, String model, int year, String fuelType) {\n        super(make, model, year, fuelType);\n    }\n\n    @Override\n    double calculateFuelEfficiency() {\n        return 8;  // Example value\n    }\n}\n\nclass Car extends Vehicle {\n    Car(String make, String model, int year, String fuelType) {\n        super(make, model, year, fuelType);\n    }\n\n    @Override\n    double calculateFuelEfficiency() {\n        return 15;  // Example value\n    }\n}\n\nclass Motorcycle extends Vehicle {\n    Motorcycle(String make, String model, int year, String fuelType) {\n        super(make, model, year, fuelType);\n    }\n\n    @Override\n    double calculateFuelEfficiency() {\n        return 20;  // Example value\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Vehicle myCar = new Car("Toyota", "Corolla", 2020, "Gasoline");\n        System.out.println("Fuel Efficiency of Car: " + myCar.calculateFuelEfficiency() + " km/l");  // Output: 15 km/l\n    }\n}',
  },
  {
    id: 279,
    category: "inheritance",
    question:
      "Write a Java program that creates a class hierarchy for employees of a company. The base class should be Employee, with subclasses Manager, Developer, and Programmer. Each subclass should have properties such as name, address, salary, and job title. Implement methods for calculating bonuses, generating performance reports, and managing projects.",
    answer:
      'class Employee {\n    String name;\n    String address;\n    double salary;\n    String jobTitle;\n\n    Employee(String name, String address, double salary, String jobTitle) {\n        this.name = name;\n        this.address = address;\n        this.salary = salary;\n        this.jobTitle = jobTitle;\n    }\n\n    double calculateBonus() {\n        return 0;\n    }\n\n    String generatePerformanceReport() {\n        return "Performance report for " + name;\n    }\n}\n\nclass Manager extends Employee {\n    Manager(String name, String address, double salary, String jobTitle) {\n        super(name, address, salary, jobTitle);\n    }\n\n    @Override\n    double calculateBonus() {\n        return salary * 0.10;  // Example bonus calculation\n    }\n}\n\nclass Developer extends Employee {\n    Developer(String name, String address, double salary, String jobTitle) {\n        super(name, address, salary, jobTitle);\n    }\n}\n\nclass Programmer extends Developer {\n    Programmer(String name, String address, double salary, String jobTitle) {\n        super(name, address, salary, jobTitle);\n    }\n\n    @Override\n    String generatePerformanceReport() {\n        return "Performance report for Programmer " + name;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Employee emp = new Manager("Alice", "123 Main St", 70000, "Manager");\n        System.out.println(emp.generatePerformanceReport());  // Output: Performance report for Alice\n        System.out.println("Bonus: " + emp.calculateBonus());  // Output: Bonus: 7000.0\n    }\n}',
  },
  {
    id: 280,
    category: "inheritance",
    question: "Example of Super Keyword",
    answer:
      'class Animal {\n    String name;\n    Animal(String name) {\n        this.name = name;\n    }\n}\n\nclass Dog extends Animal {\n    Dog(String name) {\n        super(name);\n    }\n\n    void display() {\n        System.out.println("Name: " + super.name);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Dog myDog = new Dog("Buddy");\n        myDog.display();  // Output: Name: Buddy\n    }\n}',
  },
  {
    id: 281,
    category: "inheritance",
    question: "Example of Super Function",
    answer:
      'class Parent {\n    void display() {\n        System.out.println("Display in Parent");\n    }\n}\n\nclass Child extends Parent {\n    @Override\n    void display() {\n        super.display();\n        System.out.println("Display in Child");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Child obj = new Child();\n        obj.display();  // Output: Display in Parent\n        //         Display in Child\n    }\n}',
  },
  {
    id: 282,
    category: "inheritance",
    question: "Example of Method Overriding",
    answer:
      'class Animal {\n    void makeSound() {\n        System.out.println("Animal makes a sound");\n    }\n}\n\nclass Cat extends Animal {\n    @Override\n    void makeSound() {\n        System.out.println("Cat meows");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal myCat = new Cat();\n        myCat.makeSound();  // Output: Cat meows\n    }\n}',
  },
  {
    id: 283,
    category: "inheritance",
    question: "Example of Dynamic Method Dispatch",
    answer:
      'class Animal {\n    void makeSound() {\n        System.out.println("Animal makes a sound");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void makeSound() {\n        System.out.println("Dog barks");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal myDog = new Dog();\n        myDog.makeSound();  // Output: Dog barks\n    }\n}',
  },
  {
    id: 284,
    category: "inheritance",
    question: "Abstract Class Animal with Sound Method",
    answer:
      'abstract class Animal {\n    abstract void sound();\n}\n\nclass Lion extends Animal {\n    @Override\n    void sound() {\n        System.out.println("Roar");\n    }\n}\n\nclass Tiger extends Animal {\n    @Override\n    void sound() {\n        System.out.println("Growl");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal lion = new Lion();\n        Animal tiger = new Tiger();\n        lion.sound();  // Output: Roar\n        tiger.sound();  // Output: Growl\n    }\n}',
  },
  {
    id: 285,
    category: "inheritance",
    question: "Abstract Class Shape with Area and Perimeter",
    answer:
      'abstract class Shape {\n    abstract double calculateArea();\n    abstract double calculatePerimeter();\n}\n\nclass Circle extends Shape {\n    private double radius;\n\n    Circle(double radius) {\n        this.radius = radius;\n    }\n\n    @Override\n    double calculateArea() {\n        return Math.PI * radius * radius;\n    }\n\n    @Override\n    double calculatePerimeter() {\n        return 2 * Math.PI * radius;\n    }\n}\n\nclass Triangle extends Shape {\n    private double a, b, c;\n\n    Triangle(double a, double b, double c) {\n        this.a = a;\n        this.b = b;\n        this.c = c;\n    }\n\n    @Override\n    double calculateArea() {\n        double s = (a + b + c) / 2;\n        return Math.sqrt(s * (s - a) * (s - b) * (s - c));\n    }\n\n    @Override\n    double calculatePerimeter() {\n        return a + b + c;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Shape circle = new Circle(5);\n        Shape triangle = new Triangle(3, 4, 5);\n        System.out.println("Circle Area: " + circle.calculateArea());  // Output: Circle Area: 78.53981633974483\n        System.out.println("Circle Perimeter: " + circle.calculatePerimeter());  // Output: Circle Perimeter: 31.41592653589793\n        System.out.println("Triangle Area: " + triangle.calculateArea());  // Output: Triangle Area: 6.0\n        System.out.println("Triangle Perimeter: " + triangle.calculatePerimeter());  // Output: Triangle Perimeter: 12.0\n    }\n}',
  },
  {
    id: 286,
    category: "inheritance",
    question: "Abstract Class BankAccount with Deposit and Withdraw Methods",
    answer:
      'abstract class BankAccount {\n    abstract void deposit(double amount);\n    abstract void withdraw(double amount);\n}\n\nclass SavingsAccount extends BankAccount {\n    private double balance;\n\n    @Override\n    void deposit(double amount) {\n        balance += amount;\n    }\n\n    @Override\n    void withdraw(double amount) {\n        if (balance - amount < 100) {\n            System.out.println("Insufficient balance");\n        } else {\n            balance -= amount;\n        }\n    }\n}\n\nclass CurrentAccount extends BankAccount {\n    private double balance;\n\n    @Override\n    void deposit(double amount) {\n        balance += amount;\n    }\n\n    @Override\n    void withdraw(double amount) {\n        if (balance >= amount) {\n            balance -= amount;\n        } else {\n            System.out.println("Insufficient balance");\n        }\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        BankAccount mySavings = new SavingsAccount();\n        mySavings.deposit(500);\n        mySavings.withdraw(450);  // Output: Insufficient balance\n    }\n}',
  },
  {
    id: 287,
    category: "inheritance",
    question: "Abstract Class Animal with Eat and Sleep Methods",
    answer:
      'abstract class Animal {\n    abstract void eat();\n    abstract void sleep();\n}\n\nclass Lion extends Animal {\n    @Override\n    void eat() {\n        System.out.println("Lion eats meat");\n    }\n\n    @Override\n    void sleep() {\n        System.out.println("Lion sleeps in the savannah");\n    }\n}\n\nclass Tiger extends Animal {\n    @Override\n    void eat() {\n        System.out.println("Tiger eats meat");\n    }\n\n    @Override\n    void sleep() {\n        System.out.println("Tiger sleeps in the jungle");\n    }\n}\n\nclass Deer extends Animal {\n    @Override\n    void eat() {\n        System.out.println("Deer eats plants");\n    }\n\n    @Override\n    void sleep() {\n        System.out.println("Deer sleeps in the forest");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal lion = new Lion();\n        Animal tiger = new Tiger();\n        Animal deer = new Deer();\n        lion.eat();  // Output: Lion eats meat\n        lion.sleep();  // Output: Lion sleeps in the savannah\n        tiger.eat();  // Output: Tiger eats meat\n        tiger.sleep();  // Output: Tiger sleeps in the jungle\n        deer.eat();  // Output: Deer eats plants\n        deer.sleep();  // Output: Deer sleeps in the forest\n    }\n}',
  },
  {
    id: 288,
    category: "inheritance",
    question:
      "Abstract Class Employee with CalculateSalary and DisplayInfo Methods",
    answer:
      'abstract class Employee {\n    abstract double calculateSalary();\n    abstract String displayInfo();\n}\n\nclass Manager extends Employee {\n    private double salary;\n\n    Manager(double salary) {\n        this.salary = salary;\n    }\n\n    @Override\n    double calculateSalary() {\n        return salary;\n    }\n\n    @Override\n    String displayInfo() {\n        return "Manager with salary: " + salary;\n    }\n}\n\nclass Programmer extends Employee {\n    private double salary;\n\n    Programmer(double salary) {\n        this.salary = salary;\n    }\n\n    @Override\n    double calculateSalary() {\n        return salary;\n    }\n\n    @Override\n    String displayInfo() {\n        return "Programmer with salary: " + salary;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Employee manager = new Manager(80000);\n        Employee programmer = new Programmer(60000);\n        System.out.println(manager.displayInfo());  // Output: Manager with salary: 80000.0\n        System.out.println(programmer.displayInfo());  // Output: Programmer with salary: 60000.0\n    }\n}',
  },
  {
    id: 289,
    category: "inheritance",
    question:
      "Abstract Class Shape3D with CalculateVolume and CalculateSurfaceArea Methods",
    answer:
      'abstract class Shape3D {\n    abstract double calculateVolume();\n    abstract double calculateSurfaceArea();\n}\n\nclass Sphere extends Shape3D {\n    private double radius;\n\n    Sphere(double radius) {\n        this.radius = radius;\n    }\n\n    @Override\n    double calculateVolume() {\n        return (4.0 / 3) * Math.PI * Math.pow(radius, 3);\n    }\n\n    @Override\n    double calculateSurfaceArea() {\n        return 4 * Math.PI * Math.pow(radius, 2);\n    }\n}\n\nclass Cube extends Shape3D {\n    private double side;\n\n    Cube(double side) {\n        this.side = side;\n    }\n\n    @Override\n    double calculateVolume() {\n        return Math.pow(side, 3);\n    }\n\n    @Override\n    double calculateSurfaceArea() {\n        return 6 * Math.pow(side, 2);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Shape3D sphere = new Sphere(5);\n        Shape3D cube = new Cube(4);\n        System.out.println("Sphere Volume: " + sphere.calculateVolume());  // Output: Sphere Volume: 523.5987755982989\n        System.out.println("Sphere Surface Area: " + sphere.calculateSurfaceArea());  // Output: Sphere Surface Area: 314.1592653589793\n        System.out.println("Cube Volume: " + cube.calculateVolume());  // Output: Cube Volume: 64.0\n        System.out.println("Cube Surface Area: " + cube.calculateSurfaceArea());  // Output: Cube Surface Area: 96.0\n    }\n}',
  },
  {
    id: 290,
    category: "inheritance",
    question: "Abstract Class Vehicle with StartEngine and StopEngine Methods",
    answer:
      'abstract class Vehicle {\n    abstract void startEngine();\n    abstract void stopEngine();\n}\n\nclass Car extends Vehicle {\n    @Override\n    void startEngine() {\n        System.out.println("Car engine started");\n    }\n\n    @Override\n    void stopEngine() {\n        System.out.println("Car engine stopped");\n    }\n}\n\nclass Motorcycle extends Vehicle {\n    @Override\n    void startEngine() {\n        System.out.println("Motorcycle engine started");\n    }\n\n    @Override\n    void stopEngine() {\n        System.out.println("Motorcycle engine stopped");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Vehicle car = new Car();\n        Vehicle motorcycle = new Motorcycle();\n        car.startEngine();  // Output: Car engine started\n        car.stopEngine();  // Output: Car engine stopped\n        motorcycle.startEngine();  // Output: Motorcycle engine started\n        motorcycle.stopEngine();  // Output: Motorcycle engine stopped\n    }\n}',
  },
  {
    id: 291,
    category: "inheritance",
    question: "Abstract Class Person with Eat and Exercise Methods",
    answer:
      'abstract class Person {\n    abstract void eat();\n    abstract void exercise();\n}\n\nclass Athlete extends Person {\n    @Override\n    void eat() {\n        System.out.println("Athlete eats a balanced diet");\n    }\n\n    @Override\n    void exercise() {\n        System.out.println("Athlete trains intensively");\n    }\n}\n\nclass LazyPerson extends Person {\n    @Override\n    void eat() {\n        System.out.println("Lazy person eats junk food");\n    }\n\n    @Override\n    void exercise() {\n        System.out.println("Lazy person avoids exercise");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Person athlete = new Athlete();\n        Person lazyPerson = new LazyPerson();\n        athlete.eat();  // Output: Athlete eats a balanced diet\n        athlete.exercise();  // Output: Athlete trains intensively\n        lazyPerson.eat();  // Output: Lazy person eats junk food\n        lazyPerson.exercise();  // Output: Lazy person avoids exercise\n    }\n}',
  },
  {
    id: 292,
    category: "inheritance",
    question: "Abstract Class Instrument with Play and Tune Methods",
    answer:
      'abstract class Instrument {\n    abstract void play();\n    abstract void tune();\n}\n\nclass Glockenspiel extends Instrument {\n    @Override\n    void play() {\n        System.out.println("Glockenspiel is playing");\n    }\n\n    @Override\n    void tune() {\n        System.out.println("Tuning the Glockenspiel");\n    }\n}\n\nclass Violin extends Instrument {\n    @Override\n    void play() {\n        System.out.println("Violin is playing");\n    }\n\n    @Override\n    void tune() {\n        System.out.println("Tuning the Violin");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Instrument glockenspiel = new Glockenspiel();\n        Instrument violin = new Violin();\n        glockenspiel.play();  // Output: Glockenspiel is playing\n        glockenspiel.tune();  // Output: Tuning the Glockenspiel\n        violin.play();  // Output: Violin is playing\n        violin.tune();  // Output: Tuning the Violin\n    }\n}',
  },
  {
    id: 293,
    category: "inheritance",
    question: "Abstract Class Shape2D with Draw and Resize Methods",
    answer:
      'abstract class Shape2D {\n    abstract void draw();\n    abstract void resize(double factor);\n}\n\nclass Rectangle extends Shape2D {\n    private double width, height;\n\n    Rectangle(double width, double height) {\n        this.width = width;\n        this.height = height;\n    }\n\n    @Override\n    void draw() {\n        System.out.println("Drawing Rectangle");\n    }\n\n    @Override\n    void resize(double factor) {\n        width *= factor;\n        height *= factor;\n    }\n}\n\nclass Circle extends Shape2D {\n    private double radius;\n\n    Circle(double radius) {\n        this.radius = radius;\n    }\n\n    @Override\n    void draw() {\n        System.out.println("Drawing Circle");\n    }\n\n    @Override\n    void resize(double factor) {\n        radius *= factor;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Shape2D rectangle = new Rectangle(4, 6);\n        Shape2D circle = new Circle(5);\n        rectangle.draw();  // Output: Drawing Rectangle\n        rectangle.resize(1.5);\n        circle.draw();  // Output: Drawing Circle\n        circle.resize(2);\n    }\n}',
  },
  {
    id: 294,
    category: "inheritance",
    question: "Abstract Class Bird with Fly and MakeSound Methods",
    answer:
      'abstract class Bird {\n    abstract void fly();\n    abstract void makeSound();\n}\n\nclass Eagle extends Bird {\n    @Override\n    void fly() {\n        System.out.println("Eagle soars high");\n    }\n\n    @Override\n    void makeSound() {\n        System.out.println("Eagle screeches");\n    }\n}\n\nclass Hawk extends Bird {\n    @Override\n    void fly() {\n        System.out.println("Hawk flies fast");\n    }\n\n    @Override\n    void makeSound() {\n        System.out.println("Hawk shrieks");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Bird eagle = new Eagle();\n        Bird hawk = new Hawk();\n        eagle.fly();  // Output: Eagle soars high\n        eagle.makeSound();  // Output: Eagle screeches\n        hawk.fly();  // Output: Hawk flies fast\n        hawk.makeSound();  // Output: Hawk shrieks\n    }\n}',
  },
  {
    id: 295,
    category: "inheritance",
    question: "Abstract Class GeometricShape with Area and Perimeter Methods",
    answer:
      'abstract class GeometricShape {\n    abstract double area();\n    abstract double perimeter();\n}\n\nclass Triangle extends GeometricShape {\n    private double a, b, c;\n\n    Triangle(double a, double b, double c) {\n        this.a = a;\n        this.b = b;\n        this.c = c;\n    }\n\n    @Override\n    double area() {\n        double s = (a + b + c) / 2;\n        return Math.sqrt(s * (s - a) * (s - b) * (s - c));\n    }\n\n    @Override\n    double perimeter() {\n        return a + b + c;\n    }\n}\n\nclass Square extends GeometricShape {\n    private double side;\n\n    Square(double side) {\n        this.side = side;\n    }\n\n    @Override\n    double area() {\n        return Math.pow(side, 2);\n    }\n\n    @Override\n    double perimeter() {\n        return 4 * side;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        GeometricShape triangle = new Triangle(3, 4, 5);\n        GeometricShape square = new Square(4);\n        System.out.println("Triangle Area: " + triangle.area());  // Output: Triangle Area: 6.0\n        System.out.println("Triangle Perimeter: " + triangle.perimeter());  // Output: Triangle Perimeter: 12.0\n        System.out.println("Square Area: " + square.area());  // Output: Square Area: 16.0\n        System.out.println("Square Perimeter: " + square.perimeter());  // Output: Square Perimeter: 16.0\n    }\n}',
  },
  {
    id: 296,
    category: "inheritance",
    question: "Program Showing Example of Super Keyword",
    answer:
      'class Animal {\n    void makeSound() {\n        System.out.println("Animal sound");\n    }\n}\n\nclass Dog extends Animal {\n    void makeSound() {\n        super.makeSound();\n        System.out.println("Dog barks");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Dog dog = new Dog();\n        dog.makeSound();  // Output: Animal sound\n                          //         Dog barks\n    }\n}',
  },
  {
    id: 297,
    category: "inheritance",
    question: "Program Showing Example of Super Function",
    answer:
      'class Parent {\n    void display() {\n        System.out.println("Parent class");\n    }\n}\n\nclass Child extends Parent {\n    void display() {\n        super.display();\n        System.out.println("Child class");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Child child = new Child();\n        child.display();  // Output: Parent class\n                           //         Child class\n    }\n}',
  },
  {
    id: 298,
    category: "inheritance",
    question: "Program Showing Example of Method Overriding",
    answer:
      'class Parent {\n    void show() {\n        System.out.println("Parent class");\n    }\n}\n\nclass Child extends Parent {\n    @Override\n    void show() {\n        System.out.println("Child class");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Parent obj = new Child();\n        obj.show();  // Output: Child class\n    }\n}',
  },
  {
    id: 299,
    category: "inheritance",
    question: "Program Showing Example of Dynamic Method Dispatch",
    answer:
      'class Animal {\n    void sound() {\n        System.out.println("Animal sound");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void sound() {\n        System.out.println("Dog barks");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal animal = new Dog();\n        animal.sound();  // Output: Dog barks\n    }\n}',
  },
  {
    id: 300,
    category: "inheritance",
    question: "Abstract Class Animal with Sound Method",
    answer:
      'abstract class Animal {\n    abstract void sound();\n}\n\nclass Lion extends Animal {\n    @Override\n    void sound() {\n        System.out.println("Lion roars");\n    }\n}\n\nclass Tiger extends Animal {\n    @Override\n    void sound() {\n        System.out.println("Tiger growls");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal lion = new Lion();\n        Animal tiger = new Tiger();\n        lion.sound();  // Output: Lion roars\n        tiger.sound();  // Output: Tiger growls\n    }\n}',
  },
  {
    id: 301,
    category: "inheritance",
    question:
      "Abstract Class Shape with CalculateArea and CalculatePerimeter Methods",
    answer:
      'abstract class Shape {\n    abstract double calculateArea();\n    abstract double calculatePerimeter();\n}\n\nclass Circle extends Shape {\n    private double radius;\n\n    Circle(double radius) {\n        this.radius = radius;\n    }\n\n    @Override\n    double calculateArea() {\n        return Math.PI * Math.pow(radius, 2);\n    }\n\n    @Override\n    double calculatePerimeter() {\n        return 2 * Math.PI * radius;\n    }\n}\n\nclass Triangle extends Shape {\n    private double a, b, c;\n\n    Triangle(double a, double b, double c) {\n        this.a = a;\n        this.b = b;\n        this.c = c;\n    }\n\n    @Override\n    double calculateArea() {\n        double s = (a + b + c) / 2;\n        return Math.sqrt(s * (s - a) * (s - b) * (s - c));\n    }\n\n    @Override\n    double calculatePerimeter() {\n        return a + b + c;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Shape circle = new Circle(5);\n        Shape triangle = new Triangle(3, 4, 5);\n        System.out.println("Circle Area: " + circle.calculateArea());  // Output: Circle Area: 78.53981633974483\n        System.out.println("Circle Perimeter: " + circle.calculatePerimeter());  // Output: Circle Perimeter: 31.41592653589793\n        System.out.println("Triangle Area: " + triangle.calculateArea());  // Output: Triangle Area: 6.0\n        System.out.println("Triangle Perimeter: " + triangle.calculatePerimeter());  // Output: Triangle Perimeter: 12.0\n    }\n}',
  },
  {
    id: 302,
    category: "inheritance",
    question: "Abstract Class BankAccount with Deposit and Withdraw Methods",
    answer:
      'abstract class BankAccount {\n    abstract void deposit(double amount);\n    abstract void withdraw(double amount);\n}\n\nclass SavingsAccount extends BankAccount {\n    private double balance;\n\n    @Override\n    void deposit(double amount) {\n        balance += amount;\n    }\n\n    @Override\n    void withdraw(double amount) {\n        if (balance - amount >= 100) {\n            balance -= amount;\n        } else {\n            System.out.println("Insufficient balance");\n        }\n    }\n}\n\nclass CurrentAccount extends BankAccount {\n    private double balance;\n\n    @Override\n    void deposit(double amount) {\n        balance += amount;\n    }\n\n    @Override\n    void withdraw(double amount) {\n        if (balance - amount >= 0) {\n            balance -= amount;\n        } else {\n            System.out.println("Insufficient balance");\n        }\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        BankAccount savings = new SavingsAccount();\n        BankAccount current = new CurrentAccount();\n        savings.deposit(1000);\n        savings.withdraw(950);  // Output: Insufficient balance\n        current.deposit(500);\n        current.withdraw(400);\n    }\n}',
  },
  {
    id: 303,
    category: "inheritance",
    question: "Abstract Class Animal with Eat and Sleep Methods",
    answer:
      'abstract class Animal {\n    abstract void eat();\n    abstract void sleep();\n}\n\nclass Lion extends Animal {\n    @Override\n    void eat() {\n        System.out.println("Lion eats meat");\n    }\n\n    @Override\n    void sleep() {\n        System.out.println("Lion sleeps in the den");\n    }\n}\n\nclass Tiger extends Animal {\n    @Override\n    void eat() {\n        System.out.println("Tiger eats meat");\n    }\n\n    @Override\n    void sleep() {\n        System.out.println("Tiger sleeps in the jungle");\n    }\n}\n\nclass Deer extends Animal {\n    @Override\n    void eat() {\n        System.out.println("Deer eats grass");\n    }\n\n    @Override\n    void sleep() {\n        System.out.println("Deer sleeps in the forest");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Animal lion = new Lion();\n        Animal tiger = new Tiger();\n        Animal deer = new Deer();\n        lion.eat();  // Output: Lion eats meat\n        lion.sleep();  // Output: Lion sleeps in the den\n        tiger.eat();  // Output: Tiger eats meat\n        tiger.sleep();  // Output: Tiger sleeps in the jungle\n        deer.eat();  // Output: Deer eats grass\n        deer.sleep();  // Output: Deer sleeps in the forest\n    }\n}',
  },
  {
    id: 304,
    category: "inheritance",
    question:
      "Abstract Class Employee with CalculateSalary and DisplayInfo Methods",
    answer:
      'abstract class Employee {\n    abstract double calculateSalary();\n    abstract String displayInfo();\n}\n\nclass Manager extends Employee {\n    private double salary;\n\n    Manager(double salary) {\n        this.salary = salary;\n    }\n\n    @Override\n    double calculateSalary() {\n        return salary;\n    }\n\n    @Override\n    String displayInfo() {\n        return "Manager with salary: " + salary;\n    }\n}\n\nclass Programmer extends Employee {\n    private double salary;\n\n    Programmer(double salary) {\n        this.salary = salary;\n    }\n\n    @Override\n    double calculateSalary() {\n        return salary;\n    }\n\n    @Override\n    String displayInfo() {\n        return "Programmer with salary: " + salary;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Employee manager = new Manager(80000);\n        Employee programmer = new Programmer(60000);\n        System.out.println(manager.displayInfo());  // Output: Manager with salary: 80000.0\n        System.out.println(programmer.displayInfo());  // Output: Programmer with salary: 60000.0\n    }\n}',
  },
  {
    id: 305,
    category: "inheritance",
    question:
      "Abstract Class Shape3D with CalculateVolume and CalculateSurfaceArea Methods",
    answer:
      'abstract class Shape3D {\n    abstract double calculateVolume();\n    abstract double calculateSurfaceArea();\n}\n\nclass Sphere extends Shape3D {\n    private double radius;\n\n    Sphere(double radius) {\n        this.radius = radius;\n    }\n\n    @Override\n    double calculateVolume() {\n        return (4 / 3.0) * Math.PI * Math.pow(radius, 3);\n    }\n\n    @Override\n    double calculateSurfaceArea() {\n        return 4 * Math.PI * Math.pow(radius, 2);\n    }\n}\n\nclass Cube extends Shape3D {\n    private double side;\n\n    Cube(double side) {\n        this.side = side;\n    }\n\n    @Override\n    double calculateVolume() {\n        return Math.pow(side, 3);\n    }\n\n    @Override\n    double calculateSurfaceArea() {\n        return 6 * Math.pow(side, 2);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Shape3D sphere = new Sphere(5);\n        Shape3D cube = new Cube(4);\n        System.out.println("Sphere Volume: " + sphere.calculateVolume());  // Output: Sphere Volume: 523.5987755982989\n        System.out.println("Sphere Surface Area: " + sphere.calculateSurfaceArea());  // Output: Sphere Surface Area: 314.1592653589793\n        System.out.println("Cube Volume: " + cube.calculateVolume());  // Output: Cube Volume: 64.0\n        System.out.println("Cube Surface Area: " + cube.calculateSurfaceArea());  // Output: Cube Surface Area: 96.0\n    }\n}',
  },
  {
    id: 306,
    category: "inheritance",
    question: "Abstract Class Vehicle with StartEngine and StopEngine Methods",
    answer:
      'abstract class Vehicle {\n    abstract void startEngine();\n    abstract void stopEngine();\n}\n\nclass Car extends Vehicle {\n    @Override\n    void startEngine() {\n        System.out.println("Car engine started");\n    }\n\n    @Override\n    void stopEngine() {\n        System.out.println("Car engine stopped");\n    }\n}\n\nclass Motorcycle extends Vehicle {\n    @Override\n    void startEngine() {\n        System.out.println("Motorcycle engine started");\n    }\n\n    @Override\n    void stopEngine() {\n        System.out.println("Motorcycle engine stopped");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Vehicle car = new Car();\n        Vehicle motorcycle = new Motorcycle();\n        car.startEngine();  // Output: Car engine started\n        car.stopEngine();  // Output: Car engine stopped\n        motorcycle.startEngine();  // Output: Motorcycle engine started\n        motorcycle.stopEngine();  // Output: Motorcycle engine stopped\n    }\n}',
  },
  {
    id: 307,
    category: "inheritance",
    question: "Abstract Class Person with Eat and Exercise Methods",
    answer:
      'abstract class Person {\n    abstract void eat();\n    abstract void exercise();\n}\n\nclass Athlete extends Person {\n    @Override\n    void eat() {\n        System.out.println("Athlete eats a balanced diet");\n    }\n\n    @Override\n    void exercise() {\n        System.out.println("Athlete trains hard");\n    }\n}\n\nclass LazyPerson extends Person {\n    @Override\n    void eat() {\n        System.out.println("Lazy person eats junk food");\n    }\n\n    @Override\n    void exercise() {\n        System.out.println("Lazy person avoids exercise");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Person athlete = new Athlete();\n        Person lazyPerson = new LazyPerson();\n        athlete.eat();  // Output: Athlete eats a balanced diet\n        athlete.exercise();  // Output: Athlete trains hard\n        lazyPerson.eat();  // Output: Lazy person eats junk food\n        lazyPerson.exercise();  // Output: Lazy person avoids exercise\n    }\n}',
  },
  {
    id: 308,
    category: "inheritance",
    question: "Abstract Class Instrument with Play and Tune Methods",
    answer:
      'abstract class Instrument {\n    abstract void play();\n    abstract void tune();\n}\n\nclass Glockenspiel extends Instrument {\n    @Override\n    void play() {\n        System.out.println("Playing the Glockenspiel");\n    }\n\n    @Override\n    void tune() {\n        System.out.println("Tuning the Glockenspiel");\n    }\n}\n\nclass Violin extends Instrument {\n    @Override\n    void play() {\n        System.out.println("Playing the Violin");\n    }\n\n    @Override\n    void tune() {\n        System.out.println("Tuning the Violin");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Instrument glockenspiel = new Glockenspiel();\n        Instrument violin = new Violin();\n        glockenspiel.play();  // Output: Playing the Glockenspiel\n        glockenspiel.tune();  // Output: Tuning the Glockenspiel\n        violin.play();  // Output: Playing the Violin\n        violin.tune();  // Output: Tuning the Violin\n    }\n}',
  },
  {
    id: 309,
    category: "inheritance",
    question: "Abstract Class Shape2D with Draw and Resize Methods",
    answer:
      'abstract class Shape2D {\n    abstract void draw();\n    abstract void resize(int newSize);\n}\n\nclass Rectangle extends Shape2D {\n    private int width, height;\n\n    Rectangle(int width, int height) {\n        this.width = width;\n        this.height = height;\n    }\n\n    @Override\n    void draw() {\n        System.out.println("Drawing Rectangle");\n    }\n\n    @Override\n    void resize(int newSize) {\n        this.width = newSize;\n        this.height = newSize;\n    }\n}\n\nclass Circle extends Shape2D {\n    private int radius;\n\n    Circle(int radius) {\n        this.radius = radius;\n    }\n\n    @Override\n    void draw() {\n        System.out.println("Drawing Circle");\n    }\n\n    @Override\n    void resize(int newSize) {\n        this.radius = newSize;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Shape2D rectangle = new Rectangle(5, 10);\n        Shape2D circle = new Circle(7);\n        rectangle.draw();  // Output: Drawing Rectangle\n        rectangle.resize(8);\n        circle.draw();  // Output: Drawing Circle\n        circle.resize(10);\n    }\n}',
  },
  {
    id: 310,
    category: "inheritance",
    question: "Abstract Class Bird with Fly and MakeSound Methods",
    answer:
      'abstract class Bird {\n    abstract void fly();\n    abstract void makeSound();\n}\n\nclass Eagle extends Bird {\n    @Override\n    void fly() {\n        System.out.println("Eagle soars high");\n    }\n\n    @Override\n    void makeSound() {\n        System.out.println("Eagle screeches");\n    }\n}\n\nclass Hawk extends Bird {\n    @Override\n    void fly() {\n        System.out.println("Hawk glides smoothly");\n    }\n\n    @Override\n    void makeSound() {\n        System.out.println("Hawk calls");\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Bird eagle = new Eagle();\n        Bird hawk = new Hawk();\n        eagle.fly();  // Output: Eagle soars high\n        eagle.makeSound();  // Output: Eagle screeches\n        hawk.fly();  // Output: Hawk glides smoothly\n        hawk.makeSound();  // Output: Hawk calls\n    }\n}',
  },
  {
    id: 311,
    category: "packages",
    question:
      "Access java.util.Date Class Through Import Keyword and Print the Current Date",
    answer:
      'import java.util.Date;\n\npublic class CurrentDateImport {\n    public static void main(String[] args) {\n        Date date = new Date();\n        System.out.println("Current date and time: " + date);\n    }\n}',
  },
  {
    id: 312,
    category: "packages",
    question:
      "Access java.util.Date Class Through Qualified Way and Print the Current Date",
    answer:
      'public class CurrentDateQualified {\n    public static void main(String[] args) {\n        java.util.Date date = new java.util.Date();\n        System.out.println("Current date and time: " + date);\n    }\n}',
  },
  {
    id: 313,
    category: "packages",
    question:
      "Access java.util.Date Class Through Import Keyword and Print the Current Date but Inherit the Date Class",
    answer:
      'import java.util.Date;\n\nclass CustomDate extends Date {\n    // CustomDate class inherits from Date\n}\n\npublic class InheritedDate {\n    public static void main(String[] args) {\n        CustomDate customDate = new CustomDate();\n        System.out.println("Current date and time: " + customDate);\n    }\n}',
  },
  {
    id: 314,
    category: "packages",
    question:
      "Access java.util.Date Class Through Qualified Way and Print the Current Date but Inherit the Date Class",
    answer:
      'public class InheritedDateQualified {\n    public static void main(String[] args) {\n        class CustomDate extends java.util.Date {\n            // CustomDate class inherits from Date\n        }\n\n        CustomDate customDate = new CustomDate();\n        System.out.println("Current date and time: " + customDate);\n    }\n}',
  },
  {
    id: 315,
    category: "packages",
    question: "Create a Package with Multiple Default Classes",
    answer:
      'package mypackage;\n\nclass ClassA {\n    public void display() {\n        System.out.println("ClassA in mypackage");\n    }\n}\n\nclass ClassB {\n    public void display() {\n        System.out.println("ClassB in mypackage");\n    }\n}\n\npublic class PackageExample {\n    public static void main(String[] args) {\n        ClassA a = new ClassA();\n        ClassB b = new ClassB();\n        a.display();\n        b.display();\n    }\n}',
  },
  {
    id: 316,
    category: "packages",
    question:
      "Create a Package with 4 Public Classes, Create the Object in Another File and Call the Function Created in Those Classes",
    answer:
      'package mypackage;\n\npublic class ClassA {\n    public void display() {\n        System.out.println("ClassA");\n    }\n}\n\npublic class ClassB {\n    public void display() {\n        System.out.println("ClassB");\n    }\n}\n\npublic class ClassC {\n    public void display() {\n        System.out.println("ClassC");\n    }\n}\n\npublic class ClassD {\n    public void display() {\n        System.out.println("ClassD");\n    }\n}',
  },
  {
    id: 317,
    category: "packages",
    question: "Perform Employee Payroll Processing Using Packages",
    answer:
      'package employee;\n\npublic class Emp {\n    String name;\n    int empid;\n    String category;\n    double bpay, hra, da, npay, pf, grosspay, incometax, allowance;\n\n    public void calculatePay() {\n        // Example calculations\n        grosspay = bpay + hra + da;\n        npay = grosspay - (pf + incometax);\n    }\n\n    public void printValues() {\n        System.out.println("Name: " + name);\n        System.out.println("Net Pay: " + npay);\n    }\n}\n\npackage employee;\n\nimport employee.Emp;\n\npublic class Emppay {\n    public static void main(String[] args) {\n        Emp e = new Emp();\n        e.name = "John Doe";\n        e.bpay = 50000;\n        e.hra = 10000;\n        e.da = 5000;\n        e.pf = 2000;\n        e.incometax = 5000;\n        e.calculatePay();\n        e.printValues();\n    }\n}',
  },
  {
    id: 318,
    category: "packages",
    question:
      "Create a Package with Public Class and Protected Members to Be Accessed in Another Class",
    answer:
      'package mypackage;\n\npublic class PublicClass {\n    protected int protectedVar = 10;\n    public void display() {\n        System.out.println("Public Class");\n    }\n}\n\npackage anotherpackage;\n\nimport mypackage.PublicClass;\n\npublic class AccessProtected {\n    public static void main(String[] args) {\n        PublicClass pc = new PublicClass();\n        System.out.println("Protected Variable: " + pc.protectedVar);\n    }\n}',
  },
  {
    id: 319,
    category: "packages",
    question:
      "Create a Nested Package i.e. c4.sample with Public Class and Protected Members to Be Accessed in Another Class",
    answer:
      'package c4.sample;\n\npublic class NestedClass {\n    protected int protectedVar = 20;\n    public void display() {\n        System.out.println("Nested Class");\n    }\n}\n\npackage c4.sample;\n\nimport c4.sample.NestedClass;\n\npublic class AccessNested {\n    public static void main(String[] args) {\n        NestedClass nc = new NestedClass();\n        System.out.println("Protected Variable: " + nc.protectedVar);\n    }\n}',
  },
  {
    id: 320,
    category: "packages",
    question:
      "Create a Package with Public Class and Public Members to Be Accessed in Another Class",
    answer:
      'package mypackage;\n\npublic class PublicClass {\n    public int publicVar = 30;\n    public void display() {\n        System.out.println("Public Class");\n    }\n}\n\npackage anotherpackage;\n\nimport mypackage.PublicClass;\n\npublic class AccessPublic {\n    public static void main(String[] args) {\n        PublicClass pc = new PublicClass();\n        System.out.println("Public Variable: " + pc.publicVar);\n    }\n}',
  },
  {
    id: 321,
    category: "input output",

    question: "Enter the Character from User Using InputStreamReader",
    answer:
      'import java.io.BufferedReader;\nimport java.io.InputStreamReader;\nimport java.io.IOException;\n\npublic class InputStreamReaderExample {\n    public static void main(String[] args) {\n        try (BufferedReader reader = new BufferedReader(new InputStreamReader(System.in))) {\n            System.out.print("Enter a character: ");\n            char character = (char) reader.read();\n            System.out.println("You entered: " + character);\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}',
  },
  {
    id: 322,
    category: "input output",
    question: "Enter the String from User Using BufferedReader",
    answer:
      'import java.io.BufferedReader;\nimport java.io.InputStreamReader;\nimport java.io.IOException;\n\npublic class BufferedReaderExample {\n    public static void main(String[] args) {\n        try (BufferedReader reader = new BufferedReader(new InputStreamReader(System.in))) {\n            System.out.print("Enter a string: ");\n            String str = reader.readLine();\n            System.out.println("You entered: " + str);\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}',
  },
  {
    id: 323,
    category: "input output",
    question: "Enter the Integer from User Using Scanner Class",
    answer:
      'import java.util.Scanner;\n\npublic class ScannerIntegerExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        System.out.print("Enter an integer: ");\n        int num = scanner.nextInt();\n        System.out.println("You entered: " + num);\n        scanner.close();\n    }\n}',
  },
  {
    id: 324,
    category: "input output",
    question: "Enter the Float from User Using Scanner Class",
    answer:
      'import java.util.Scanner;\n\npublic class ScannerFloatExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        System.out.print("Enter a float: ");\n        float num = scanner.nextFloat();\n        System.out.println("You entered: " + num);\n        scanner.close();\n    }\n}',
  },
  {
    id: 325,
    category: "input output",
    question: "Enter the Double from User Using Scanner Class",
    answer:
      'import java.util.Scanner;\n\npublic class ScannerDoubleExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        System.out.print("Enter a double: ");\n        double num = scanner.nextDouble();\n        System.out.println("You entered: " + num);\n        scanner.close();\n    }\n}',
  },
  {
    id: 326,
    category: "input output",
    question: "Enter the Boolean from User Using Scanner Class",
    answer:
      'import java.util.Scanner;\n\npublic class ScannerBooleanExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        System.out.print("Enter a boolean: ");\n        boolean bool = scanner.nextBoolean();\n        System.out.println("You entered: " + bool);\n        scanner.close();\n    }\n}',
  },
  {
    id: 327,
    category: "input output",
    question: "Enter the Short Integer from User Using Scanner Class",
    answer:
      'import java.util.Scanner;\n\npublic class ScannerShortExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        System.out.print("Enter a short integer: ");\n        short num = scanner.nextShort();\n        System.out.println("You entered: " + num);\n        scanner.close();\n    }\n}',
  },
  {
    id: 328,
    category: "input output",
    question: "Enter the Long Integer from User Using Scanner Class",
    answer:
      'import java.util.Scanner;\n\npublic class ScannerLongExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        System.out.print("Enter a long integer: ");\n        long num = scanner.nextLong();\n        System.out.println("You entered: " + num);\n        scanner.close();\n    }\n}',
  },
  {
    id: 329,
    category: "input output",
    question: "Get All Characters from the File and Display on the Screen",
    answer:
      'import java.io.BufferedReader;\nimport java.io.FileReader;\nimport java.io.IOException;\n\npublic class FileReadExample {\n    public static void main(String[] args) {\n        try (BufferedReader reader = new BufferedReader(new FileReader("example.txt"))) {\n            String line;\n            while ((line = reader.readLine()) != null) {\n                System.out.println(line);\n            }\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}',
  },
  {
    id: 330,
    category: "input output",
    question:
      "Get All Characters from the File, Count Number of Lines, Words, Characters and Display on the Screen",
    answer:
      'import java.io.BufferedReader;\nimport java.io.FileReader;\nimport java.io.IOException;\n\npublic class FileStatisticsExample {\n    public static void main(String[] args) {\n        try (BufferedReader reader = new BufferedReader(new FileReader("example.txt"))) {\n            String line;\n            int lineCount = 0, wordCount = 0, charCount = 0;\n            while ((line = reader.readLine()) != null) {\n                lineCount++;\n                charCount += line.length();\n                wordCount += line.split("\\s+").length;\n            }\n            System.out.println("Number of lines: " + lineCount);\n            System.out.println("Number of words: " + wordCount);\n            System.out.println("Number of characters: " + charCount);\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}',
  },
  {
    id: 331,
    category: "exception handling",
    question:
      "Write a Java Program that Throws an Exception and Catches It Using a Try-Catch Block",
    answer:
      'public class TryCatchExample {\n    public static void main(String[] args) {\n        try {\n            throw new Exception("This is an exception");\n        } catch (Exception e) {\n            System.out.println("Caught exception: " + e.getMessage());\n        }\n    }\n}',
  },
  {
    id: 332,
    category: "exception handling",
    question:
      "Write a Java Program to Create a Method that Takes an Integer as a Parameter and Throws an Exception if the Number is Odd",
    answer:
      'public class OddNumberException {\n    public static void checkEven(int number) throws Exception {\n        if (number % 2 != 0) {\n            throw new Exception("The number is odd");\n        } else {\n            System.out.println("The number is even");\n        }\n    }\n\n    public static void main(String[] args) {\n        try {\n            checkEven(7);\n        } catch (Exception e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}',
  },
  {
    id: 333,
    category: "exception handling",
    question:
      "Write a Java Program to Create a Method that Reads a File and Throws an Exception if the File is Not Found",
    answer:
      'import java.io.File;\nimport java.io.FileNotFoundException;\nimport java.util.Scanner;\n\npublic class FileReadException {\n    public static void readFile(String fileName) throws FileNotFoundException {\n        File file = new File(fileName);\n        Scanner scanner = new Scanner(file);\n        while (scanner.hasNextLine()) {\n            System.out.println(scanner.nextLine());\n        }\n        scanner.close();\n    }\n\n    public static void main(String[] args) {\n        try {\n            readFile("nonexistentfile.txt");\n        } catch (FileNotFoundException e) {\n            System.out.println("File not found: " + e.getMessage());\n        }\n    }\n}',
  },
  {
    id: 334,
    category: "exception handling",
    question:
      "Write a Java Program that Reads a List of Numbers from a File and Throws an Exception if Any of the Numbers are Positive",
    answer:
      'import java.io.File;\nimport java.io.FileNotFoundException;\nimport java.util.Scanner;\n\npublic class PositiveNumberException {\n    public static void readNumbers(String fileName) throws FileNotFoundException, Exception {\n        File file = new File(fileName);\n        Scanner scanner = new Scanner(file);\n        while (scanner.hasNextInt()) {\n            int number = scanner.nextInt();\n            if (number > 0) {\n                throw new Exception("Found a positive number: " + number);\n            }\n        }\n        scanner.close();\n    }\n\n    public static void main(String[] args) {\n        try {\n            readNumbers("numbers.txt");\n        } catch (Exception e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}',
  },
  {
    id: 335,
    category: "exception handling",
    question:
      "Write a Java Program that Reads a File and Throws an Exception if the File is Empty",
    answer:
      'import java.io.File;\nimport java.io.FileNotFoundException;\nimport java.util.Scanner;\n\npublic class EmptyFileException {\n    public static void checkFileEmpty(String fileName) throws FileNotFoundException, Exception {\n        File file = new File(fileName);\n        Scanner scanner = new Scanner(file);\n        if (!scanner.hasNextLine()) {\n            throw new Exception("The file is empty");\n        }\n        scanner.close();\n    }\n\n    public static void main(String[] args) {\n        try {\n            checkFileEmpty("emptyfile.txt");\n        } catch (Exception e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}',
  },
  {
    id: 336,
    category: "exception handling",
    question:
      "Write a Java Program that Reads a List of Integers from the User and Throws an Exception if Any Numbers are Duplicates",
    answer:
      'import java.util.HashSet;\nimport java.util.InputMismatchException;\nimport java.util.Scanner;\n\npublic class DuplicateNumberException {\n    public static void checkForDuplicates(int[] numbers) throws Exception {\n        HashSet<Integer> set = new HashSet<>();\n        for (int number : numbers) {\n            if (!set.add(number)) {\n                throw new Exception("Duplicate number found: " + number);\n            }\n        }\n    }\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        System.out.print("Enter the number of integers: ");\n        int count = scanner.nextInt();\n        int[] numbers = new int[count];\n        System.out.println("Enter the integers:");\n        try {\n            for (int i = 0; i < count; i++) {\n                numbers[i] = scanner.nextInt();\n            }\n            checkForDuplicates(numbers);\n        } catch (Exception e) {\n            System.out.println(e.getMessage());\n        }\n        scanner.close();\n    }\n}',
  },
  {
    id: 337,
    category: "exception handling",
    question:
      "Write a Java Program to Create a Method that Takes a String as Input and Throws an Exception if the String Does Not Contain Vowels",
    answer:
      'public class VowelException {\n    public static void checkVowels(String str) throws Exception {\n        if (!str.matches(".*[aeiouAEIOU].*")) {\n            throw new Exception("The string does not contain any vowels");\n        }\n    }\n\n    public static void main(String[] args) {\n        try {\n            checkVowels("bcdf");\n        } catch (Exception e) {\n            System.out.println(e.getMessage());\n        }\n    }\n}',
  },
  {
    id: 338,
    category: "exception handling",
    question:
      "Write a Java Program to Connect the Java API to Database, if Connection Not Successful Then Throw an Exception",
    answer:
      'import java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.SQLException;\n\npublic class DatabaseConnectionException {\n    public static Connection connectToDatabase() throws SQLException {\n        String url = "jdbc:mysql://localhost:3306/mydatabase";\n        String user = "root";\n        String password = "password";\n        Connection connection = DriverManager.getConnection(url, user, password);\n        return connection;\n    }\n\n    public static void main(String[] args) {\n        try {\n            Connection connection = connectToDatabase();\n            System.out.println("Connected to the database");\n            connection.close();\n        } catch (SQLException e) {\n            System.out.println("Database connection failed: " + e.getMessage());\n        }\n    }\n}',
  },
  {
    id: 339,
    category: "exception handling",
    question:
      "Write a Java Program to Manage the Driver with Path, Username, and Password, if Not Successful Then Throw an Exception",
    answer:
      'import java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.SQLException;\n\npublic class DriverManagerException {\n    public static Connection manageDriver(String url, String user, String password) throws SQLException {\n        Connection connection = DriverManager.getConnection(url, user, password);\n        return connection;\n    }\n\n    public static void main(String[] args) {\n        String url = "jdbc:mysql://localhost:3306/mydatabase";\n        String user = "root";\n        String password = "password";\n        try {\n            Connection connection = manageDriver(url, user, password);\n            System.out.println("Driver management successful");\n            connection.close();\n        } catch (SQLException e) {\n            System.out.println("Driver management failed: " + e.getMessage());\n        }\n    }\n}',
  },
  {
    id: 340,
    category: "exception handling",
    question:
      "Write a Java Program to Throw the SQL Query, Insert, Delete, Update, if Not Successful Then Throw an Exception",
    answer:
      'import java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.SQLException;\nimport java.sql.Statement;\n\npublic class SQLQueryException {\n    public static void executeUpdate(String query) throws SQLException {\n        String url = "jdbc:mysql://localhost:3306/mydatabase";\n        String user = "root";\n        String password = "password";\n        try (Connection connection = DriverManager.getConnection(url, user, password);\n             Statement statement = connection.createStatement()) {\n            int result = statement.executeUpdate(query);\n            System.out.println("Query executed, rows affected: " + result);\n        }\n    }\n\n    public static void main(String[] args) {\n        String query = "INSERT INTO table_name (column1, column2) VALUES (\'value1\', \'value2\')";\n        try {\n            executeUpdate(query);\n        } catch (SQLException e) {\n            System.out.println("SQL query failed: " + e.getMessage());\n        }\n    }\n}',
  },
  {
    id: 341,
    category: "exception handling",
    question: "Write a Java Program to Show an Example of Throws Keyword",
    answer:
      'public class ThrowsKeywordExample {\n    public static void riskyMethod() throws Exception {\n        throw new Exception("This is a risky method");\n    }\n\n    public static void main(String[] args) {\n        try {\n            riskyMethod();\n        } catch (Exception e) {\n            System.out.println("Caught exception: " + e.getMessage());\n        }\n    }\n}',
  },
  {
    id: 342,
    category: "exception handling",
    question: "Write a Java Program to Show an Example of Multiple Catch",
    answer:
      'public class MultipleCatchExample {\n    public static void main(String[] args) {\n        try {\n            int[] arr = new int[2];\n            System.out.println(arr[5]);\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println("ArrayIndexOutOfBoundsException caught: " + e.getMessage());\n        } catch (Exception e) {\n            System.out.println("Exception caught: " + e.getMessage());\n        }\n    }\n}',
  },
  {
    id: 343,
    category: "exception handling",
    question: "Write a Java Program to Show an Example of Nested Try Block",
    answer:
      'public class NestedTryBlockExample {\n    public static void main(String[] args) {\n        try {\n            try {\n                int[] arr = new int[2];\n                System.out.println(arr[5]);\n            } catch (ArrayIndexOutOfBoundsException e) {\n                System.out.println("Inner catch block: " + e.getMessage());\n            }\n            System.out.println("Outside inner try block");\n        } catch (Exception e) {\n            System.out.println("Outer catch block: " + e.getMessage());\n        }\n    }\n}',
  },
];

export const categories = [
  "All",
  "Basic",
  "String",
  "Inheritance",
  "OOPS",
  "Array",
  "Packages",
  "Exception Handling",
  "Input Output",
  "2d Array",
  "Interfaces",
];

export default questions;
