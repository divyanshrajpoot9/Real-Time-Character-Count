# Real-Time-Character-Count
### Hosted Link: https://divyanshrajpoot9.github.io/Real-Time-Character-Count/
### Java Script DOM Manipulation:
The Document Object Model (DOM) is a programming interface for web documents. It provides a structured representation of a web page, allowing you to access and manipulate its elements and content using JavaScript. Here are some basic DOM properties and methods.
document: The document object represents the entire HTML document and serves as the entry point to the DOM. It provides properties and methods to access and modify the document's structure, content, and style.

### Element Selection and Traversal:

  ### getElementById(id): Retrieves an element by its unique id attribute.
  #### getElementsByClassName(className): Returns a collection of elements with a specific class name.
  ####  getElementsByTagName(tagName): Returns a collection of elements with a specific tag name.
  ####  querySelector(selector): Returns the first element that matches the CSS selector.
  ####  querySelectorAll(selector): Returns a list of all elements that match the CSS selector.
  
This code is written in JavaScript and it is used for monitoring and displaying character count in a text area element within an HTML document. I down the code step by step:

1. It starts by selecting three HTML elements using the `getElementById` method and assigns them to JavaScript variables:
   - `textAreaReference`: This variable is used to reference the `<textarea>` element with the `id` attribute set to 'textarea'.
   - `totalCounterReference`: This variable is used to reference an element with the `id` attribute set to 'totalcounter'.
   - `remainingCounterReference`: This variable is used to reference an element with the `id` attribute set to 'remainingcounter'.

2. The code sets up an event listener on the `textAreaReference` element for the 'keyup' event. This means that the code inside the event listener will be executed whenever a key is released in the `<textarea>` element.

3. Inside the event listener, the following actions are performed:

   a. It retrieves the current value of the `<textarea>` element and assigns it to the `inputText` variable. This is done using `e.target.value`, where `e` is the event object and `e.target` represents the element that triggered the event (in this case, the `<textarea>`).

   b. It retrieves the maximum character length (or "maxlength") that is allowed in the `<textarea>` element using `textAreaReference.getAttribute('maxlength')` and assigns it to the `maxLength` variable.

   c. It calculates the length of the `inputText` using `inputText.length` and assigns it to the `inputTextLength` variable. This represents the current number of characters in the text area.

   d. It calculates the remaining characters by subtracting the `inputTextLength` from the `maxLength`, and stores the result in the `remainingCharacter` variable. This represents the number of characters that can still be entered before reaching the character limit.

   e. Finally, the code updates the text content of the `totalCounterReference` and `remainingCounterReference` elements to display the current character count and remaining characters using `innerText`. These elements are presumably used to display character count information to the user.

In summary, this code listens for keyup events in a text area, calculates and updates the character count and remaining characters, and displays this information on the web page in designated elements. It's a common technique used for implementing character counters in text input fields, such as those found in social media platforms or comment sections.
