+++
date = "2015-10-21T16:40:50+08:00"
title = "Python Tutorial"
authors = ["dominic"]

+++

# Python

## How to Download

For the purposes of this tutorial, we will be using Python 3. To download the installer for Python, visit https://www.python.org/downloads/release/python-343/ and scroll to the bottom of the page.

For Windows and Mac OS users simply identify if your OS is 32 or 64 bit and download the appropriate installer. For Linux users, click on the XZ compressed source tarball, as that is the one that has installation instructions in this document.

## How to Install
	
For Windows users, simply run the executable file and just keep on clicking “Next”, then wait for it to finish installing. After installing, we have to set the PATH of your OS to be able to run Python from the command prompt.

### Setting Path on Windows
Taken from https://java.com/en/download/help/path.xml
	
#### Windows 8

> 1. Drag the Mouse pointer to the Right bottom corner of the screen 
> 2. Click on the Search icon and type: Control Panel 
> 3. Click on -> Control Panel -> System -> Advanced 
> 4. Click on Environment Variables, under System Variables, find PATH, and click on it. 
> 5. In the Edit windows, modify PATH by adding the directory of your Python installation, which is C:\Python34 by default. 

#### Windows 7

> 1. Select Computer from the Start menu 
> 2. Choose System Properties from the context menu 
> 3. Click Advanced system settings > Advanced tab 
> 4. Click on Environment Variables, under System Variables, find PATH, and click on it. 
> 5. In the Edit windows, modify PATH by adding the directory of your Python installation, which is C:\Python34 by default. 

#### Windows XP

> 1. Start -> Control Panel -> System -> Advanced 
> 2. Click on Environment Variables, under System Variables, find PATH, and click on it. 
> 3. In the Edit windows, modify PATH by adding the directory of your Python installation, which is C:\Python34 by default. 
 
#### Windows Vista

> 1. Right click My Computer icon 
> 2. Choose Properties from the context menu 
> 3. Click Advanced tab (Advanced system settings link in Vista) 
> 4. In the Edit windows, modify PATH by adding the directory of your Python installation, which is C:\Python34 by default. 
	
#### Linux

For Linux users, simply extract the tarball to a folder, then run the following in the terminal:

{{< highlight bash "linenos=table" >}}
./configure

make

make test

sudo make install
{{< /highlight >}}

Afterwards, open the command prompt/terminal and type “python”. You should see something like this.

{{< highlight bash >}}
Python 3.4.3 (default, Jul 28 2015, 18:20:59) 
[GCC 4.8.4] on linux
Type "help", "copyright", "credits" or "license" for more information.
\>>>
{{< /highlight >}}

If so, then congratulations. You have successfully installed Python in your computer.

## Basics

Now that we have Python in our computer, we can get started with the actual coding. Let us start off with the most basic of basics, printing to the command prompt. Open up any text editor and type

{{< highlight python "linenos=table" >}}
  print(“Hello World”)
{{< /highlight >}}

Now save it as sample.py. 

To run python code, we must type “python filename” in the command prompt, where “filename” is the name of the file containing python code, which in this case is “sample.py”. Thus, let us type “python sample.py”. It should display

  Hello World

Congratulations, you have just made your first python program.

Now let us make things a little bit harder.

Let's say I wish to make it so that it will print “Hello World” how many times the user wants. This would involve multiple things: reading input, storing that value in a variable, and looping the print statement that number of times. 

Frist things first, getting input from the user. To do this, we can use the input() function like so.

{{< highlight python "linenos=table" >}}
  iter = input(“How many times to print? “)
{{< /highlight >}}

This shall prompt the user to input a number, which would be stored in the iter variable. But wait, there's something wrong here. The input function returns a string, which is different from a number. So we must first convert the string inputted by the user to a number before doing anything else.

{{< highlight python "linenos=table" >}}
  iter = int(input(“How many times to print? “))
{{< /highlight >}}

Now we are sure that whatever the user inputs, Python will convert it into an integer. You may have noticed that, unlike in C, we have not initialized the iter variable. This is because in Python, variable types are not explicitly determined, meaning the variable will be whatever data it contains be it an integer, string, float, and the like. So something like this in C

  int iter = 0;

Is equal to this in Python

  iter = 0

Now let us do the looping part. We can use the for loop to loop a variable in a certain range, usually specified by the range() function.

{{< highlight python "linenos=table" >}}
  for x in range(0,iter):
    print(“Hello World”)
{{< /highlight >}}

As you can see, the range started from 0, and not 1. This is because, in the range function, the lower boundary, in this case 0, is inclusive, while the upper boundary, iter, is exclusive. We can see this by printing the current value of x alongside “Hello World”. 

{{< highlight python "linenos=table" >}}
  for x in range(0,iter):
    print(“Hello World ”, x)
{{< /highlight >}}

Note that indentation in Python is not optional. This code will not work if we do not use proper indentations. Here, we can see that in for loops, everything inside the for loop must be indented. In addition to this, for loops also end in “:” to identify that the next line should be indented.

Now, run the program like we did previously and now it should prompt you for an input

{{< highlight bash "linenos=table" >}}
  How many times to print?
{{< /highlight >}}

Let us print “Hello World” five times.

{{< highlight bash "linenos=table" >}}
  How many times to print? 5
{{< /highlight >}}

And it will display this

Hello World 0

Hello World 1

Hello World 2

Hello World 3

Hello World 4

Ok. Now let us say that instead of printing “Hello World” each time, I wish to alternately print “Hello” and “Hi”. To do this, we must, at every iteration, check if the current iteration is even or odd, since obviously even and odd numbers alternate.

{{< highlight python "linenos=table" >}}
  for x in range(0,iter):
    if(x % 2 == 0): //% is called modulo, which takes the remainder of division of the two numbers
      print(“Hello”)
    elif(x % 2 != 0):
      print(“Hi”)
{{< /highlight >}}

We have encountered a lot of new stuff here, so let us take them one by one.


{{< highlight bash "linenos=table" >}}
   if(x % 2 == 0):
{{< /highlight >}}

This is called the if statement. This evaluates whatever condition is inside its parentheses and proceeds to do the lines underneath it if it evaluates to True, while skipping all other elifs which you will see later. If the condition does not evaluate to True, then it simply skips the indented block and finds the next line that matches its indentation.

{{< highlight bash "linenos=table" >}}
    elif(x % 2 != 0):
{{< /highlight >}}

This is also an if statement, but the difference between “elif” and  “if” is that elif requires a previous if statement; the program will not run otherwise. Aside from that, however, it functions identically to if statements as discussed above.

Now to start with arrays. In Python we call “arrays” “lists”, which are just basically heterogeneous arrays. These are defined by

{{< highlight python "linenos=table" >}}
arr = [1, 2, “Hello World”]
{{< /highlight >}}

Here, we defined a list called arr which contains the integers 1 and 2, and the string “Hello World”. To access an element in the list, we simply use its index, like so.

{{< highlight python "linenos=table" >}}
arr[0]
{{< /highlight >}}

Which returns

{{< highlight python "linenos=table" >}}
  1
{{< /highlight >}}

Do take note that lists in Python use zero-based numbering. This means that the index of the first element in a list is 0, then the index of the second element is 1, and so on. This also works the other way around, with

	arr[-1]

Returning

	“Hello World”

It basically is shorthand for

	arr[len(arr) – 1]

Where len(x) returns the length of x, whether it be a list, string, tuple, etc. One could also return sub-arrays of the list by defining a range of indexes instead. For example

{{< highlight python "linenos=table" >}}
  arr[1:2]
{{< /highlight >}}

Would result in

{{< highlight bash "lineos=table" >}}
  [2, “Hello World”]
{{< /highlight >}}

As you can see, the range is inclusive, with all indexes between 1 and 2 inclusive being outputted. 

There are numerous built-in functions for list manipulation in Python, but we shall only tackle the basics.

To append to lists

{{< highlight python "linenos=table" >}}
  arr.append(element)
{{< /highlight >}}

Inserting

{{< highlight python "linenos=table" >}}
  arr.insert(index, element)
{{< /highlight >}}

Which would move all other elements to the right

Deletion

{{< highlight python "linenos=table" >}}
  del arr[index]
{{< /highlight >}}

Would remove the element with that index from the list

{{< highlight python "linenos=table" >}}
  arr.pop(index)
{{< /highlight >}}

Would remove the element with that index and return it. If no index is given, it would automatically remove the last element in the list and returns it.

{{< highlight python "linenos=table" >}}
  arr.remove(element)
{{< /highlight >}}

Would remove the first element that corresponds to that element

For further information about these, visit https://docs.python.org/3.4/tutorial/datastructures.html

Now let us tackle functions. All Python functions follow the following syntax

{{< highlight python "linenos=table" >}}
def name(parameters):
  function code
  function code
  function code
not part of the function
{{< /highlight >}}

As you can see, similar to if statements and for loops, function declarations need a colon at the end. In addition to this, all lines of code belonging to that function are indented at the same level, with the first line with less than the required indentation marking the end of the function.

To call this function, simply put

{{< highlight python "linenos=table" >}}
  name(parameters)
{{< /highlight >}}

Which would now call the function, passing the parameters to the function. Note that the parameters are passed by reference. Meaning that any changes made to the parameter passed inside the function would also affect the same variable outside it, even if the variable's value was not explicitly returned.

Lastly, before we move on to actual examples of code, let us briefly tackle how to import in Python. To import other Python files, the following line

{{< highlight python "linenos=table" >}}
  import file.py
{{< /highlight >}}

Where file.py is whatever file you wish to import. Using this, you can use functionalities that can be found in the provided Python modules to make life easier. One could also import their own files, allowing them the option to neatly package their functions into files for possibly future use.

With these in mind, you can now start coding in Python. Good for you.
