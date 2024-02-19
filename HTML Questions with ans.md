### 1. How to import css in HTML

<Details>
    <Summary>Answer</Summary>
    ```txt

        a. inline: <h1 style="color:blue;">A Blue Heading</h1>
        b. Internal CSS

                <!DOCTYPE html>
                    <html>
                     <head>
                        <style>
                            body {background-color: powderblue;}
                            h1 {color: blue;}
                            p {color: red;}
                        </style>
                    </head>
                <body>

                    <h1>This is a heading</h1>
                    <p>This is a paragraph.</p>

                </body>
        </html>


    c. External:
    <head>
        <link rel="stylesheet" href="styles.css">
    </head>
    ```

</Details>

2.  How to import javascript?
<script src="myscripts.js"></script>

### 3. How a HTML file renders in browser? Critical Rendering Path Flow.

<details>
<summary>Answer</summary>

The process of rendering an HTML file in a browser involves several steps, converting the raw HTML, CSS, and JavaScript code into the visual and interactive web page you see on your screen. Understanding this process is crucial for web developers aiming to optimize performance and ensure compatibility across different browsers.

#### 1. Parsing the HTML Document

- The browser starts by parsing the raw HTML file into a Document Object Model (DOM) tree. The DOM tree represents the structure of the document as a hierarchy of objects.
- Each element (tags like `<html>`, `<body>`, `<div>`, etc.) becomes a node in the DOM tree.

#### 2. Processing CSS

- While the DOM is being constructed, the browser also parses any linked or embedded CSS into the CSS Object Model (CSSOM) tree. This tree represents the styling information for the page.
- External CSS files and styles within `<style>` tags are processed to understand how elements should be displayed.

#### 3. Combining DOM and CSSOM to Construct the Render Tree

- The browser then combines the DOM and CSSOM into a Render Tree, which contains only the objects that will be visible on the page, along with their computed styles.
- The Render Tree is crucial for the next steps, as it informs the browser exactly how to display the page's content.

#### 4. Layout Calculation (Reflow)

- Once the Render Tree is constructed, the browser performs a "layout" process, where it calculates the exact position and size of each object on the screen. This process is often referred to as Reflow.
- The layout takes into account the viewport size, elements' dimensions, and how they interact with each other (e.g., margins, padding).

#### 5. Painting (Repaint)

- Painting is the process where the layout's visual information (colors, images, borders) is actually drawn on the screen.
- The browser goes through the Render Tree and paints each node using the UI backend layer.

#### 6. Compositing

- Complex pages might require layers that need to be painted separately and then composited together. This step is especially important for elements that overlap or for operations like CSS animations.
- Compositing ensures that the page is rendered efficiently, and animations or transitions are smooth.

#### Real Scenario Example

Imagine loading a simple blog page. Here's a simplified view of how it renders:

1. **Parsing HTML**: The browser reads the HTML code, creating a DOM tree structure representing the page's layout.
2. **Processing CSS**: Simultaneously, CSS files are parsed to understand how the elements should look, resulting in the CSSOM tree.
3. **Render Tree Construction**: The DOM and CSSOM are combined to form the Render Tree, determining visible elements and their styles.
4. **Layout/Reflow**: The browser calculates where each element should appear on the screen and their sizes.
5. **Painting/Repaint**: Each element's visual styles are applied, coloring and shaping the blog page.
6. **Compositing**: Elements are layered correctly to ensure proper display and interaction, including any dynamic effects or animations.

#### Summary

- Rendering an HTML file in a browser is a complex process that transforms code into a visual and interactive experience.
- This process includes parsing the HTML and CSS, constructing the DOM and CSSOM, combining them into the Render Tree, calculating layout, painting the elements, and compositing layers for final display.
- Understanding these steps helps developers optimize for performance and ensure their web pages render correctly across different devices and browsers.

</details>

4.  Best place to import a script file in HTML

5.  script async vs defer?

6.  Difference between HTML5 vs HTML4?

7.  <meta name="viewport" content="width=device-width, initial-scale=1.0">

    HTML5 introduced a method to let web designers take control over the viewport, through the <meta> tag.

    You should include the following <meta> viewport element in all your web pages:

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    This gives the browser instructions on how to control the page's dimensions and scaling.

    The width=device-width part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).

    The initial-scale=1.0 part sets the initial zoom level when the page is first loaded by the browser.

    Here is an example of a web page without the viewport meta tag, and the same web page with the viewport meta tag:

    Without meta
    <!DOCTYPE html>
    <html>
    <body>
    <p><b>To understand this example, you should open this page on a phone or a tablet.</b></p>

    <img src="img_chania.jpg" alt="Chania" width="460" height="345">

    <p>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
    Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
    </p>

    </body>
    </html>

8.  Mobile first design
    /_ For mobile phones: _/
    [class*="col-"] {
    width: 100%;
    }

    @media only screen and (min-width: 768px) {
    /_ For desktop: _/
    .col-1 {width: 8.33%;}
    .col-2 {width: 16.66%;}
    .col-3 {width: 25%;}
    .col-4 {width: 33.33%;}
    .col-5 {width: 41.66%;}
    .col-6 {width: 50%;}
    .col-7 {width: 58.33%;}
    .col-8 {width: 66.66%;}
    .col-9 {width: 75%;}
    .col-10 {width: 83.33%;}
    .col-11 {width: 91.66%;}
    .col-12 {width: 100%;}
    }

9.  How DNS Lookup works? https://www.javatpoint.com/dns-lookup
    Users open a web browser, enter com in the address bar, and presses Enter button.
    The request, for example.com is routed to a DNS resolver, which manages by the user's Internet service provider.
    The DNS resolver forwards the request, for example.com to a root DNS server.
    The DNS resolver again forwards the request, for example.com, this time to one of the TLD name servers for .com domains. The name server for .com domains responds to the request with the 2 or 4 name servers associated with the example.com domain.
    The DNS resolver chooses an example.com, the authoritative name server, and forwards the request for example.com to that name server.
    The website's name server looks in the example.com hosted zone for the example.com a record, to get the associated value, such as the IP address for a web server, 34.72.102.28, and returns the IP address to the DNS resolver.
    Finally, The DNS resolver for the ISP has the IP address that the user needs. The resolver returns that value to the web browser. The DNS resolver can store the IP address, for example.com.
    The web browser sends a request, for example.com using the IP address that it got from the DNS resolver. This is where the actual content is.
    The web server or other resource at 34.72.102.28 returns the web page, for example.com to the web browser, and the web browser displays the page.

10. Benefits of using semantic HTML

11. Atomic design pattern

12. How to make images responsive

```

```
