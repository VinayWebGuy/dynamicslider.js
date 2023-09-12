let banner_info = {
    path: [ // path of the banners file; can be jpeg, jpg, png
        'banners/1.jpg', 
        'banners/2.jpg',
        'banners/3.jpg',
        'banners/4.jpg',
        'banners/5.jpg',
    ],
    content: [
        // Must the same no of elements as the path above
        {
            heading: "Banner 1 Heading", // Heading for the banner
            paragraph: "Banner 1 Paragraph", // Paragraph for the banner
            haveButton: true, // Bool value indicating whether the banner should contain a button or not
            buttonLink: "https://youtube.com", // Link of the button
            anotherPage: true, // Bool value indicating whether the button will redirect to another page or not
            buttonText : "Click here" // Text for the button
        },
        {
            heading: "Banner 2 Heading", // Heading for the banner
            paragraph: "Banner 2 Paragraph", // Paragraph for the banner
            haveButton: true, // Bool value indicating whether the banner should contain a button or not
            buttonLink: "https://gmail.com", // Link of the button
            anotherPage: false, // Bool value indicating whether the button will redirect to another page or not
            buttonText : "Proceed" // Text for the button
        },
        {
            heading: "Banner 3 Heading", // Heading for the banner
            paragraph: "", // Paragraph for the banner
            haveButton: false, // Bool value indicating whether the banner should contain a button or not
            buttonLink: "https://gmail.com", // Link of the button
            anotherPage: false, // Bool value indicating whether the button will redirect to another page or not
            buttonText : "Proceed" // Text for the button
        },
        {
            heading: "Banner 4 Heading", // Heading for the banner
            paragraph: "Banner 4 Paragraph", // Paragraph for the banner
            haveButton: true, // Bool value indicating whether the banner should contain a button or not
            buttonLink: "https://gmail.com", // Link of the button
            anotherPage: false, // Bool value indicating whether the button will redirect to another page or not
            buttonText : "Go" // Text for the button
        },
        {
            heading: "", // Heading for the banner
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloremque facilis quas nihil quisquam quasi officia, delectus natus odio totam.", // Paragraph for the banner
            haveButton: true, // Bool value indicating whether the banner should contain a button or not
            buttonLink: "https://twitter.com", // Link of the button
            anotherPage: false, // Bool value indicating whether the button will redirect to another page or not
            buttonText : "Twitter" // Text for the button
        },
    ],
    active: 1,
}
let slider_config = {
    sliderwidth: "100vw", // Width of the slider in the unit as it is written
    sliderheight: "100vh", // Height of the slider in the unit as it is written
    autoplay: false, // Bool value representing whether the slider should automatically slide or not
    delay: 3, // After how much time to slide the slider in autoplay
    showarrows: true, // Bool value representing whether the slider should contain left right arrows or not
    showdots: true, // Bool value representing whether the slider should contain the slider dots on the bottom or not
    arrowcolor: "#fff", // Color of the arrow can be in normal, hex or rgb format
    dotcolor: "#fff", // Color of the dot can be in normal, hex or rgb format
    headingcolor: "#fff", // Color of the heading can be in normal, hex or rgb format
    headingsize: 2, // Size of the heading in rem units
    headingopacity: 1, // Opacity of the heading between 0 and 1
    headingbg: "#000", // Heading background color can be in normal, hex or rgb format
    headingpadding: "10px 15px", // Heading padding in the unit as it is written
    paragraphcolor: "#fff", // Color of the paragraph can be in normal, hex or rgb format
    paragraphsize: 1, // Size of paragraph in rem units
    paragraphopacity: 0.8, // Opacity of paraprah between 0 and 1
    paragraphbg: "transparent", // Paragraph background color can be in normal, hex or rgb format
    paragraphpadding: "4px 7px", // Paragraph padding in the unit as it is written
    buttoncolor: "#fff", // Color of button can be in normal, hex or rgb format
    buttonbg : "#000", // Background color can be in normal, hex or rgb format
    buttonpadding: "4px 7px", // Button padding in the unit as it is written
    buttonsize: 1.2, // Size of button in rem unit
    sliderCustomStyle : {
    },
    headingCustomStyle : { // Can add custom style to the heading
        borderRadius: "15px",
        boxShadow: "0 0 5px rgba(0,0,0,0.5)",
    },
    paragraphCustomStyle : { // Can add custom style to the paragraph
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    buttonCustomStyle : { // Can add custom style to the button
        borderRadius: "7px",
        boxShadow: "0 0 5px rgba(0,0,0,0.5)",
    }
}