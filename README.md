# Customer-Frontend-Project3

<h1 style="font-size:300%;"><img width="30" alt="Screenshot 2565-11-16 at 14 05 55" src="https://cdn-icons-png.flaticon.com/512/2727/2727313.png"> Point of Sales System (POS)</h1>


  Point of sale (POS) refers to the location where a retail transaction is completed. This can be a physical location, such as a store or restaurant, or an online platform. A POS system is a combination of hardware and software that enables businesses to process customer transactions, track inventory, and manage other aspects of their operations
  
  

<h3>Feature</h3>

      1. Transaction processing: The ability to process sales transactions

      2. Inventory management: The ability to track and manage inventory levels

      3. Customer management: The ability to store and access customer information, including contact details and purchase history.

      4. Employee management: The ability to track employee hours and schedule, as well as manage employee permissions and access to the POS system.

      5. Reporting and analytics: The ability to generate reports on sales, inventory, and employee performance.

      6. Mobile POS: The ability to process transactions using a mobile device, such as a smartphone or tablet.

      7. Security: The ability to protect sensitive customer and financial data with secure login credentials and data encryption.



<h3>Function</h3>

<div>User-Frontend 
  <p>Frontend repo : https://github.com/son1122/Fronted-Project-3</p>
  <p>Netlify Deploy URL : https://fronted-tda-sei-project3.netlify.app/login</p>
</div>
  
<div>User-backend
  <p>Backend repo : https://github.com/son1122/Backend-Project-3</p>
   <p>Netlify Deploy URL : https://backend-sei-project-3.cyclic.app</p>
</div>
  
<div>Bonus
  <p>Customer repo : https://github.com/son1122/Customer-Frontend-Project3</p>
  <p>Netlify Deploy URL : https://customer-pos.netlify.app/login</p>
</div>


<h2>My Planing Step</h2>

<h3>1. List All requirement and draw a Wireframe</h3>
Let's thingking about what user want from POS throught User Stories 

<h3> User Stories </h3>

<ul>
  <li>As a User I want to have an account for my store *Note User repersent shop owner who use POS system</li>
  <li>As a User I want my app to have two main page such as order page and table page or more</li>
  <li>As a User I want to have  a menu page to select and create order for my custommer.</li>
  <li>As a User I want my menu page able to edit and delete my order detail.</li>
  <li>As a User I want my menu page able select Table number</li>
  <li>As a User I want to view all menu that sent from database.</li>
  <li>As a User I want my menu filtered by cattagory.</li>
  <li>As a User I want my table page to be click able and show order detail for each table</li>
  <li>As a user I want to check out my app can update status to data base </li>
  <li>As a POS App I want ability to search by menu name.</li> 
  <li>As a POS App I want ability to create and update data from database </li>  
</ul>

<h3> Wireframe </h3>
  We sperate in two part for wire frame
  
  <p>part 1 Frontend wire frame, For login page, Order Page, Table Page. We use the same design for both order and Table </p>
<img width="784" alt="Screenshot_2565-12-24_at_10 31 50" src="https://user-images.githubusercontent.com/114508614/210405103-96da9479-fa9e-4994-a661-3ac4bc347836.png">


![Screenshot_2565-12-24_at_10 40 49](https://user-images.githubusercontent.com/114508614/210404838-3faa060b-846b-4155-8514-83004a4a8801.png)

  
  part 2 Database wire frame, we use ERd to draw main table first and add more deatil for dash board and so on

  <img width="4348" alt="SECRET_NSA_Project_Planning" src="https://user-images.githubusercontent.com/114508614/210402356-8691bee3-7a3c-4129-838f-f516c18f965b.png">


<h3>2. make a List of technical difficulties and study all of them</h3>

<ul>
  <li>sequelize</li>
  <li>node js</li>
  <li>git comman</li>
  <li>html, css,  java script</li>
  <li>react</li>
  <li>react ant design</li>
  <li>react spinner</li>
  <li>psql</li>
  <li>figma</li>
  <li>bootstrap</li>
</ul>


<h3>3. make a simple step plan</h3>

Spilt to three part frontend, database in bit.io, sequelize in backend. To see how data is flow we create flow chart and sequence diagram you can see in this pdf
[sequence_diagram_Order.pdf](https://github.com/son1122/Customer-Frontend-Project3/files/10338837/sequence_diagram_Order.pdf)


<h4>Front POS react app</h4>
<ol>
  <li>Order page
  <ul>
    <li>Create component by use react.</li>
    <li>Have useState and,useEffect.</li>
    <li>Have Axios to get API from database.</li>
    <li>The page have ability to send Post an delete data page to database.</li>
    <li>Creat a NAV bar to able to switch to other page.</li>
  </ul>
  </li>
  
  <li>Table page
  <ul>
    <li>Have Table components</li>
    <li>Onclick at each Table component, Order detail will show at side of the page.</li>
    <li>On click at check out button the page can Put data to database</li>
  </ul>
  </li>
    
  <li>Login page
  <ul>
    <li>The page have ability to send Post data page to database.</li>
    <li>Have authentication</li>
  </ul>
  </li>
</ol>

<ol>Bonus
  <li>dashboard page
    <ul>
    <li>Get data from data base to do a presentation</li>
  </ul>
  </li>
  
  <li>customer page
    <ul>
    <li>Able to register</li>
    <li>Able to sign up</li>
    <li>Able to post data to database</li>
    <li>Have authentication</li>
    <li>Get data from database to dash board</li>
  </ul>
  </li>
</ol>


<h4>Backend database</h4>
<ul>
  <li>Make a local data base in psql to test.</li>
  <li>make relation to database as er diagram.</li>
  <li>create a data in bit.io.</li>
  <li>connect data base in bit.io to real react page.</li>
</ul>

<h4>Bonus</h4>
<ul>
  <li>Do an authen.</li>
  <li>create dashboard for POS app.</li>
</ul>


<h2>Code Explain</h2>
All code we write we all so hava psudo code to explain insid but here is some of them

![image](https://user-images.githubusercontent.com/114508614/210401496-17988c38-f4f4-45c9-894b-e61066cd7050.png)


![image](https://user-images.githubusercontent.com/114508614/210402550-21bd5380-6baf-4b86-a3d9-bac50d6051c7.png)



<h3>What would you do differently?</h3>

<p>The most interesting thing in my team decise to pay attion to is dev too : "react ant design". It is an React UI library antd that contains a set of high quality components and demos for building rich, interactive user interfaces.
 what ant design present is
  <div>✨ Features
     <p>🌈 Enterprise-class UI designed for web applications.</p>
     <p>📦 A set of high-quality React components out of the box.</p>
     <p>🛡 Written in TypeScript with predictable static types.</p>
     <p>⚙️ Whole package of design resources and development tools.</p>
     <p>🌍 Internationalization support for dozens of languages.</p>
     <p>🎨 Powerful theme customization in every detail.</p>
  </div>

check out for more in <a> https://ant.design/ </a>
</p>
<h3>What are you most proud of?</h3>

  
   

<h3>What did you learn?</h3>
<ul>
  <li>team work planing</li>
  <li>react ant design</li>
  <li>connect database to react app</li>
<ul>

