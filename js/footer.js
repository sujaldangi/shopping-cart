
const div_main = document.getElementById('footer');
//  <!-- <div class="container">
const div_container_2 = document.createElement('div');
div_container_2.classList.add("container");

//          <div class="footer_location_text">
const div_footer_location = document.createElement('div');
div_footer_location.classList.add("footer_location_text");

const ul_list_data_1 = [
    { 'src': "images/map-icon.png", 'text': 'Loram Ipusm hostingweb' },
    { 'src': "images/call-icon.png", 'text': 'Call : +7586656566' },
    { 'src': "images/mail-icon.png", 'text': 'demo@gmail.com' }
];

//             <ul>
//                <li><img src="images/map-icon.png"><span class="padding_left_10"><a href="#">Loram Ipusm hosting
//                         web</a></span></li>
//                <li><img src="images/call-icon.png"><span class="padding_left_10"><a href="#">Call :
//                         +7586656566</a></span></li>
//                <li><img src="images/mail-icon.png"><span class="padding_left_10"><a href="#">demo@gmail.com</a></span>

const ul_list_1 = document.createElement('ul');
for (i = 0; i < ul_list_data_1.length; i++) {
    const li_element = document.createElement('li');
    const li_img = document.createElement('img');
    li_img.src = ul_list_data_1[i].src;
    const ul_list_1_span = document.createElement('span');
    ul_list_1_span.classList.add('padding_left_10');
    const ul_list_1_anchor = document.createElement('a');
    ul_list_1_anchor.href = '#';
    ul_list_1_anchor.textContent = ul_list_data_1[i].text;
    li_element.appendChild(li_img);
    li_element.appendChild(ul_list_1_span);
    li_element.appendChild(ul_list_1_anchor);
    ul_list_1.appendChild(li_element);
}
div_footer_location.appendChild(ul_list_1);






//          <div class="row">
const div_row = document.createElement('div');
div_row.classList.add("row");

//             <div class="col-lg-3 col-sm-6">
const div_col36 = document.createElement('div');
div_col36.classList.add('col-lg-3', 'col-sm-6');

//                <h2 class="useful_text">Useful link </h2>
const h2_1 = document.createElement('h2');
h2_1.classList.add("useful_text");
h2_1.textContent = 'Useful link ';

//                <div class="footer_menu">
const div_footer_menu = document.createElement('div');
div_footer_menu.classList.add("footer_menu");

const page_address_2 = [
    { 'link': 'index.html', 'name': 'Home' },
    { 'link': 'about.html', 'name': 'About' },
    { 'link': 'design.html', 'name': 'Our Design' },
    { 'link': 'shop.html', 'name': 'Shop' },
    { 'link': 'contact.html', 'name': 'Contact Us' },
]

//                   <ul>
const ul_list2_2 = document.createElement('ul');

//                      <li><a href="index.html">Home</a></li>
//                      <li><a href="about.html">About</a></li>
//                      <li><a href="design.html">Our Designe</a></li>
//                      <li><a href="contact.html">Contact Us</a></li>
for (i = 0; i < page_address_2.length; i++) {
    const li_element_2 = document.createElement('li');
    const li_element_2_anchor = document.createElement('a');
    li_element_2_anchor.href = page_address_2[i].link;
    li_element_2_anchor.textContent = page_address_2[i].name;
    li_element_2.appendChild(li_element_2_anchor);
    ul_list2_2.appendChild(li_element_2);
}
div_footer_menu.appendChild(ul_list2_2);
div_col36.appendChild(h2_1);
div_col36.appendChild(div_footer_menu);


//             <div class="col-lg-3 col-sm-6">
const div_col36_2 = document.createElement('div');
div_col36_2.classList.add("col-lg-3", "col-sm-6");

//                <h2 class="useful_text">Repair</h2>
const h2_2 = document.createElement('h2');
h2_2.classList.add("useful_text");
h2_2.textContent = 'Repair';

//                <p class="lorem_text">Lorem ipsum dolor sit amet, consectetur adipiscinaliqua Loreadipiscing </p>
const para_1 = document.createElement('p');
para_1.classList.add("lorem_text");
para_1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscinaliqua Loreadipiscing '; 

div_col36_2.appendChild(h2_2);
div_col36_2.appendChild(para_1);




//             <div class="col-lg-3 col-sm-6">
const div_col36_3 = document.createElement('div');
div_col36_3.classList.add("col-lg-3", "col-sm-6");

//                <h2 class="useful_text">Social Media</h2>
const h2_3 = document.createElement('h2');
h2_3.classList.add("useful_text");
h2_3.textContent = 'Social Media';

//                <div id="social">
const div_with_id2 = document.createElement('div');
div_with_id2.id = "social";

//                   <a class="facebookBtn smGlobalBtn active" href="#"></a>
const a1 = document.createElement('a');
a1.classList.add("facebookBtn", "smGlobalBtn", "active");
a1.href = "#";
//                   <a class="twitterBtn smGlobalBtn" href="#"></a>
const a2 = document.createElement('a');
a2.classList.add("twitterBtn", "smGlobalBtn");
a2.href = "#";

//                   <a class="googleplusBtn smGlobalBtn" href="#"></a>
const a3 = document.createElement('a');
a3.classList.add("googleplusBtn", "smGlobalBtn");
a3.href = "#";

//                   <a class="linkedinBtn smGlobalBtn" href="#"></a>
const a4 = document.createElement('a');
a4.classList.add("linkedinBtn", "smGlobalBtn");
a4.href = "#";
div_with_id2.appendChild(a1);
div_with_id2.appendChild(a2);
div_with_id2.appendChild(a3);
div_with_id2.appendChild(a4);

div_col36_3.appendChild(h2_3);
div_col36_3.appendChild(div_with_id2);



//             <div class="col-sm-6 col-lg-3">
const div_col36_4 = document.createElement('div');
div_col36_4.classList.add("col-sm-6", "col-lg-3");

//                <h1 class="useful_text">Our Repair center</h1>
const h1 = document.createElement('h1');
h1.classList.add("useful_text");
h1.textContent = 'Our Repair center';

//                <p class="footer_text">Lorem ipsum dolor sit amet, consectetur adipiscinaliquaLoreadipiscing </p>
const para_2 = document.createElement('p');
para_2.classList.add("footer_text");
para_2.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscinaliquaLoreadipiscing ';  
div_col36_4.appendChild(h1);
div_col36_4.appendChild(para_2);


div_row.appendChild(div_col36);
div_row.appendChild(div_col36_2);
div_row.appendChild(div_col36_3);
div_row.appendChild(div_col36_4);

div_container_2.appendChild(div_footer_location);
div_container_2.appendChild(div_row);

div_main.appendChild(div_container_2);

{/* <div class="container">
<p class="copyright_text">2020 All Rights Reserved. Design by <a href="https://html.design">Free html
      Templates</a></p>
</div> */}
const copyright_main = document.getElementById('copyright_section');
div_container_copyright_section = document.createElement('div');
div_container_copyright_section.classList.add("container");

const para_copyright_section = document.createElement('p');
para_copyright_section.classList.add("copyright_text");
para_copyright_section.textContent='2020 All Rights Reserved. Design by ';

const link_html = document.createElement('a');
link_html.href="https://html.design";
link_html.textContent='Free html Templates';
para_copyright_section.appendChild(link_html);
div_container_copyright_section.appendChild(para_copyright_section);
copyright_main.appendChild(div_container_copyright_section);
