<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FAQ Dropdown</title>
    <style>
        /* Style the FAQ container */
        .faq {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        /* Style the question headers */
        .question {
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        /* Style for the question header */
        .question h3 {
            background-color: #f1f1f1;
            margin: 0;
            padding: 10px;
            cursor: pointer;
            font-size: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        /* Style the answer content */
        .answer {
            display: none;
            padding: 10px;
            background-color: #f9f9f9;
            border-top: 1px solid #ddd;
        }

        /* Add some hover effect for the question */
        .question h3:hover {
            background-color: #e2e2e2;
        }

        /* Style for the icon */
        .icon {
            font-size: 18px;
            transition: transform 0.3s ease;
        }

        /* Rotated icon when the answer is visible */
        .rotated {
            transform: rotate(180deg); /* Rotate 180 degrees */
        }

        /* Style for the header */
        header {
            background-color: #2D92E0; /* Header background color */
            color: white; /* Text color for the header */
            padding: 10px 20px; /* Reduced padding */
            text-align: center;
        }

        header h1 {
            margin: 0;
            font-size: 20px; /* Reduced font size */
        }

        header p {
            margin: 5px 0 0 0; /* Reduced space for paragraph */
            font-size: 14px; /* Smaller font size */
        }

        /* Style for the FAQ wrapper */
        .new-faq {
            margin-top: 1px;
        }

        /* Style for the expand/collapse icon */
        .toggle-icon {
            font-size: 20px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 15px;
        }

        .toggle-icon:hover {
            background-color: #e2e2e2;
        }

        .icon-horizontal {
            font-size: 24px;
        }

        .toggle-content {
            display: none;
            margin-top: 10px;
        }
    </style>
</head>
<body>

    <!-- Smaller header with new background color -->
    <header>
        <h1>Welcome to MYDGP FAQs</h1>
        <p>Click on the questions to reveal the answers!</p>
    </header>

    <div class="faq">
        <h2>FAQ</h2>

        <!-- New FAQ Container (MYDGPP) -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FAQ Dropdown</title>
    <style>
        /* Style the FAQ container */
        .faq {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        /* Style the question headers */
        .question {
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        /* Style for the question header */
        .question h3 {
            background-color: #f1f1f1;
            margin: 0;
            padding: 10px;
            cursor: pointer;
            font-size: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        /* Style the answer content */
        .answer {
            display: none;
            padding: 10px;
            background-color: #f9f9f9;
            border-top: 1px solid #ddd;
        }

        /* Add some hover effect for the question */
        .question h3:hover {
            background-color: #e2e2e2;
        }

        /* Style for the icon */
        .icon {
            font-size: 18px;
            transition: transform 0.3s ease;
        }

        /* Rotated icon when the answer is visible */
        .rotated {
            transform: rotate(180deg); /* Rotate 180 degrees */
        }

        /* Style for the header */
        header {
            background-color: #2D92E0; /* Header background color */
            color: white; /* Text color for the header */
            padding: 10px 20px; /* Reduced padding */
            text-align: center;
        }

        header h1 {
            margin: 0;
            font-size: 20px; /* Reduced font size */
        }

        header p {
            margin: 5px 0 0 0; /* Reduced space for paragraph */
            font-size: 14px; /* Smaller font size */
        }

        /* Style for the FAQ wrapper */
        .new-faq {
            margin-top: 1px;
        }

        /* Style for the expand/collapse icon */
        .toggle-icon {
            font-size: 20px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 15px;
        }

        .toggle-icon:hover {
            background-color: #e2e2e2;
        }

        .icon-horizontal {
            font-size: 24px;
        }

        .toggle-content {
            display: none;
            margin-top: 10px;
        }
    </style>
</head>
<body>
  
  
  
  
  
  
       <!-- New FAQ Container 1 (MYDGPP) -->
        <div class="new-faq">
            <div class="toggle-icon" onclick="toggleFaq('faqContentMYDGPP', this)">
                <h3>MYDGPP <span class="icon-horizontal">⯆</span></h3>
            </div>
            <div class="toggle-content" id="faqContentMYDGPP">
                <!-- Adding all the FAQ questions and answers for MYDGPP -->
                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: What is MYDGPP?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: MYDGPP stands for My Digital Government Payment Platform. It is a new system for handling online payments for government services.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: How do I book a photographer?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: To book a photographer through MYDGP, visit our website at mydgp.in or use the MYDGP app. After signing in, select the photographer's service, choose a package, and pick your desired date and time for the shoot.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: How do I contact MYDGP?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: You can contact MYDGP through email at info@mydgp.in or reach our customer support at +91 78273 43931 for any inquiries or assistance.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: What services does MYDGP provide?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: MYDGP offers a range of services including digital solutions, photography, and other personalized offerings designed to empower businesses and individuals by facilitating seamless interaction and communication.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: What is the mission and vision of MYDGP?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: Our mission is to make digital services affordable and easily accessible to everyone, helping users grow and engage through user-friendly, innovative technology solutions. Our vision is to create an inclusive digital platform that connects people and businesses effectively.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: How does MYDGP collect personal information?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: MYDGP collects personal information such as your full name, email address, phone number, and mailing address for service personalization, communication, account management, and billing. Additionally, we may collect social media data and device-related information like location and phonebook access to enhance your experience.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: Why should I trust MYDGP?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: MYDGP prioritizes user security and privacy. We employ state-of-the-art technology to protect your personal data. We ensure transparency in our data collection practices, giving you control over your information, and we are committed to safeguarding your privacy.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: What kind of data does MYDGP collect?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: MYDGP collects personal data (such as email, phone number, and address) for communication and service provision, social media data for easy sign-ins, and device information (location data, phonebook access) to offer more personalized services.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: How does MYDGP ensure privacy and security?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: MYDGP adheres to strict data protection practices to keep your personal information safe and confidential. We aim to foster trust by offering clear guidelines on managing your data and providing the necessary support to address any privacy concerns.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: How can I manage my data with MYDGP?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: MYDGP provides full transparency in how we collect and use your personal data. You can always contact us at info@mydgp.in for any queries related to your information, or to make informed decisions about your privacy.</p>
                    </div>
                </div>

                <!-- New questions and answers to be added here -->
                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: How do I download the MYDGP app?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: You can download the MYDGP app from the Google Play Store or Apple App Store by searching for "MYDGP". Once downloaded, create an account or sign in to access our services.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: What payment methods does MYDGP support?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: MYDGP supports a variety of payment methods including credit/debit cards, UPI, online wallets, and bank transfers. You can select your preferred payment method during the checkout process.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: Is MYDGP available worldwide?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: Currently, MYDGP operates within India, with services available in specific regions. We are expanding our reach and may soon offer our services in more locations.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: Can I modify my booking after confirming it?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: Yes, you can modify your booking, such as changing the date or time, through the MYDGP app or website. Please ensure to make changes well in advance to avoid any cancellation fees.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: How can I cancel my booking with MYDGP?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: To cancel a booking, simply log in to the MYDGP app or website, go to your bookings, and select the cancellation option. Please note that cancellation policies may apply depending on the service booked.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: How do I track my booking status?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: You can easily track your booking status in real-time through the MYDGP app or website. Once you log in, go to your dashboard and click on the specific booking to view its progress and details.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: What should I do if I have an issue with a service provider?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: If you encounter any issues with a service provider, you can contact MYDGP’s customer support team at info@mydgp.in or reach us at +91 78273 43931. We are here to resolve any issues and ensure a smooth experience.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: Are MYDGP services available 24/7?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: Yes, MYDGP services are available around the clock. You can book services or make inquiries at any time through our app or website. However, some services may be subject to availability based on the provider’s schedule.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: How do I contact customer support?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: You can reach our customer support team by emailing info@mydgp.in or calling us at +91 78273 43931. Our support team is ready to assist you with any questions or issues.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: What types of services are offered by MYDGP?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: MYDGP offers a wide range of digital services, including photography, digital marketing solutions, IT support, and much more. We aim to provide affordable and accessible services to businesses and individuals.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: How do I update my account information?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: You can update your account information by logging into your account on the MYDGP app or website. Go to your profile settings, and you can edit details like your name, email, phone number, and password.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: Is MYDGP a secure platform for transactions?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: Yes, MYDGP uses secure encryption and advanced technology to protect your personal and payment information. We are committed to ensuring the safety and security of all transactions on our platform.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: How do I report a bug or technical issue with the app?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: If you experience any issues with the MYDGP app or website, please report them by emailing support@mydgp.in or contacting customer support. Our technical team will investigate and resolve the issue promptly.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: Can I use MYDGP for business services?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: Yes, MYDGP provides a range of services tailored for businesses, including marketing solutions, IT services, and more. Businesses can benefit from our user-friendly platform to manage operations and connect with customers.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: How do I delete my MYDGP account?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: To delete your MYDGP account, please contact our support team at info@mydgp.in. We will guide you through the account deletion process.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: Do I need to create an account to use MYDGP services?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: Yes, you need to create an account on the MYDGP platform to access services and make bookings. Signing up ensures that your information is securely stored and enables easy management of your bookings.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: What if I forget my password?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: If you forget your password, you can reset it by clicking the "Forgot Password" link on the MYDGP login page. We’ll send you instructions on how to create a new password.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: Can I leave feedback for a service provider?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: Yes, you can leave feedback for any service provider through the MYDGP app or website after completing your booking. We value your feedback and use it to improve the quality of our services.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: How does MYDGP ensure data privacy?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: At MYDGP, we adhere to strict privacy policies to ensure the protection of your personal data. We are committed to keeping your information safe and give you full control over how your data is used.</p>
                    </div>
                </div>

                <div class="question">
                    <h3 onclick="toggleAnswer(this)">
                        Question: What is MYDGP’s refund policy?
                        <span class="icon">⯆</span>
                    </h3>
                    <div class="answer">
                        <p>Answer: Refund policies vary depending on the service. If you are eligible for a refund, it will be processed as per the terms outlined at the time of booking. For more details, please refer to our refund policy or contact customer support.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <script>
        function toggleAnswer(questionElement) {
            const answerElement = questionElement.nextElementSibling;
            const icon = questionElement.querySelector('.icon');
            answerElement.style.display = answerElement.style.display === 'block' ? 'none' : 'block';
            icon.classList.toggle('rotated');
        }

        function toggleFaq(faqContentId, toggleIconElement) {
            const content = document.getElementById(faqContentId);
            const icon = toggleIconElement.querySelector('.icon-horizontal');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            icon.innerHTML = content.style.display === 'block' ? '⯆' : '⯅';  // Toggle between down and up arrows
        }
    </script>

</body>
</html>
  
  

  
  
  
  
  
  
 
  <!-- New FAQ Container 2 (Fares, Charges & Transaction FAQs) -->
        <div class="new-faq">
            <div class="toggle-icon" onclick="toggleFaq('faqContent2', this)">
                <h3>Fares, Charges & Transaction<span class="icon-horizontal">⯆</span></h3>
            </div>
            <div class="toggle-content" id="faqContent2">
<!-- Fares, Charges & Transaction FAQs -->
<div class="faq-section">       
            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: What are the charges for using MYDGP services?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: The charges for MYDGP services vary depending on the specific service you choose. You can view the pricing details before making any bookings or purchases on the MYDGP app or website. Please check each service for more information on the applicable charges.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: How can I make a payment for MYDGP services?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: You can make payments using a variety of methods, including credit/debit cards, UPI, online wallets, and bank transfers. The available payment options will be displayed during the checkout process.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: Are there any hidden charges in MYDGP services?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: No, we are committed to complete transparency. All charges will be clearly displayed at the time of booking or before completing any transaction. There are no hidden charges.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: Is it safe to make transactions through the MYDGP app?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: Yes, MYDGP uses secure encryption and advanced technology to protect your personal and payment information during transactions. We take your security seriously to ensure your data is kept safe.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: Can I get a refund for a cancelled service?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: Refunds are available based on our refund policy, which varies by service type. If eligible, the refund will be processed according to the terms and conditions applicable to your booking. Please refer to our refund policy for more details.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: What payment methods are supported by MYDGP?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: MYDGP supports various payment methods, including credit cards, debit cards, UPI payments, online wallets (such as Paytm, Google Pay), and direct bank transfers. You can choose your preferred payment option at checkout.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: Are there any additional service fees?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: Service fees are clearly mentioned for specific services and may vary depending on the type of service or location. The applicable fees will be displayed before the payment process is completed.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: How will I receive a receipt for my payment?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: After a successful payment, you will receive a confirmation receipt via email. You can also access payment details and receipts through your MYDGP account.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: Do you offer subscription plans?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: Yes, MYDGP offers subscription-based services for certain features. If you are interested in a subscription plan, you can review the available plans on our app or website and choose the one that best fits your needs.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: Can I split the payment for a service?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: Currently, MYDGP does not support splitting payments directly within the platform. However, you can use your preferred payment method (such as credit cards or wallets) to complete the full payment in a single transaction.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: Is there a transaction limit?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: While there is no set transaction limit, some payment providers may have limits depending on their policies. For larger payments, please check with your bank or payment provider to ensure the transaction goes through smoothly.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: Can I apply promo codes or discounts?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: Yes, MYDGP occasionally offers promo codes or discounts on specific services. If you have a promo code, you can apply it during the checkout process to receive a discount on your transaction.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: How do I view my transaction history?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: You can view your transaction history in the “Transaction History” section of the MYDGP app or website. It will show all completed payments and service bookings.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: Will I be charged if I don’t use a booked service?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: If you cancel a service within the allowed timeframe, you may not be charged or you may be eligible for a partial refund. However, if the service is not cancelled within the specified time or if you don’t show up, you might be charged as per the cancellation policy.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: How do I update my payment details?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: To update your payment details, go to your profile section in the MYDGP app or website, and you can modify your payment methods under the “Payment Settings” option.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: What happens if my payment fails?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: If your payment fails, you will be notified, and you can try again using a different payment method. If the issue persists, please contact customer support at info@mydgp.in for assistance.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: Do I need to pay upfront for services?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: Yes, most services require payment upfront to confirm the booking. You can complete the payment through the available methods during the booking process.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: How do I request a refund?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: If you're eligible for a refund, you can request it by contacting MYDGP customer support at info@mydgp.in. Our team will process your request in accordance with our refund policy.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: Can I get a refund if I change my mind after making a payment?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: Refunds due to change of mind are subject to the terms and conditions of the service provider and MYDGP's refund policy. If eligible, refunds will be processed within the stipulated time frame.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: Are there any taxes added to my bill?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: Taxes, if applicable, will be added to the final bill during the payment process. The exact tax amount will be clearly displayed before you complete your transaction.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: Are there any transaction fees for using my credit card or wallet?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: Transaction fees may apply depending on your payment method or bank. These fees are not set by MYDGP and will be handled by your payment provider. Please check with them for specific charges.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: How can I cancel a service or transaction?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: To cancel a service, go to your "Bookings" section in the MYDGP app or website, where you will find options to cancel the service before the cutoff time. If cancellation is possible, you will also be informed of any applicable fees or refunds.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: Can I get a receipt for my canceled or refunded transaction?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: Yes, if you cancel a service or request a refund, you will receive an updated receipt or confirmation of the cancellation or refund. You can access this via your email or your MYDGP account.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: Do I get a discount for using multiple services at once?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: Currently, MYDGP does not offer automatic discounts for multiple service bookings. However, we do offer periodic promotions and discounts that you can take advantage of while booking services. Keep an eye on our announcements for any special deals.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: How do I know if my payment went through successfully?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: Once the payment is completed successfully, you will receive a confirmation email with the transaction details. Additionally, you can verify your payment status by checking the "Transaction History" section in your MYDGP account.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <script>
        function toggleAnswer(questionElement) {
            const answerElement = questionElement.nextElementSibling;
            const icon = questionElement.querySelector('.icon');
            answerElement.style.display = answerElement.style.display === 'block' ? 'none' : 'block';
            icon.classList.toggle('rotated');
        }

        function toggleFaq(faqContentId, toggleIconElement) {
            const content = document.getElementById(faqContentId);
            const icon = toggleIconElement.querySelector('.icon-horizontal');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            icon.innerHTML = content.style.display === 'block' ? '⯆' : '⯅';  // Toggle between down and up arrows
        }
    </script>                    </div>
                </div>
            </div>
        </div>










<!-- New FAQ Container 3 (Service Related) -->
             <div class="new-faq">
            <div class="toggle-icon" onclick="toggleFaq('faqContent3', this)">
                <h3>Service Related <span class="icon-horizontal">⯆</span></h3>
            </div>
            <div class="toggle-content" id="faqContent3">
<!-- Service Related FAQs -->
<div class="faq-section">       
            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: How can I contact customer service?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: You can contact customer service by visiting the <a href="https://mydgp.in/contact" target="_blank">Contact Us</a> page on our website.</p>
                </div>
            </div>

            <!-- New Q&A Section -->
            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: What services does MYDGP offer?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: MYDGP provides a wide range of digital services, including communication solutions, technology services, and business solutions. For detailed information, please visit our website or app to explore our service offerings.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: How do I request a service from MYDGP?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: To request a service, simply visit our website or app, choose the service you need, and follow the instructions to complete your request.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: Are the services customizable to my needs?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: Yes, we offer customizable solutions to meet your specific needs. Whether it’s business services or communication solutions, you can tailor them to your preferences through our platform.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: How can I track the status of my service request?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: You can easily track the status of your service request by logging into your MYDGP account on our website or app. You’ll find real-time updates and details on your service.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: What should I do if I’m not satisfied with the service?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: If you are unsatisfied with the service, please reach out to our customer support team at info@mydgp.in or call +91 78273 43931. We are committed to resolving any issues as quickly as possible.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: How can I cancel a service request?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: If you need to cancel a service request, you can do so directly through our website or app before the service is processed. If the service has already been completed, please contact customer support for assistance.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: Is customer support available for help with services?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: Yes, our customer support team is available to assist you with any questions or issues regarding services. You can contact us via email at info@mydgp.in or call +91 78273 43931.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: Can I modify my service after it has been requested?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: Depending on the type of service, modifications may be possible before the service is finalized. Contact customer support to discuss changes to an existing service request.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: How do I get more information about a specific service?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: For more information, visit the service page on our website or app, where you’ll find detailed descriptions, pricing, and FAQs about each service.</p>
                </div>
            </div>

            <div class="question">
                <h3 onclick="toggleAnswer(this)">
                    Question: Do you offer any free services?
                    <span class="icon">⯆</span>
                </h3>
                <div class="answer">
                    <p>Answer: MYDGP occasionally provides free trials or offers for select services. Please check our website or app for any current offers or promotions.</p>
    <script>
        function toggleAnswer(questionElement) {
            const answerElement = questionElement.nextElementSibling;
            const icon = questionElement.querySelector('.icon');
            answerElement.style.display = answerElement.style.display === 'block' ? 'none' : 'block';
            icon.classList.toggle('rotated');
        }

        function toggleFaq(faqContentId, toggleIconElement) {
            const content = document.getElementById(faqContentId);
            const icon = toggleIconElement.querySelector('.icon-horizontal');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            icon.innerHTML = content.style.display === 'block' ? '⯆' : '⯅';  // Toggle between down and up arrows
        }
    </script>                    </div>
                </div>
            </div>
        </div>










          
 <!-- New FAQ Container 4 (Delivery's) -->
<div class="new-faq">
    <div class="toggle-icon" onclick="toggleFaq('faqContent6', this)">
        <h3>Delivery's <span class="icon-horizontal">⯆</span></h3>
    </div>
    <div class="toggle-content" id="faqContent6">
        <!-- New Delivery Related Questions -->
        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: How will I receive my photos or videos after the service?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: Your photos and videos will be delivered directly through the MYDGP platform. You will receive a notification via email and WhatsApp when your content is ready for download. You can then access and download your media from your MYDGP account or through a download link sent to your email or WhatsApp.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: What formats are my photos and videos available in for download?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: Your photos will be delivered in commonly used formats such as JPEG or PNG, while videos will be provided in MP4, MOV, or AVI formats. These formats are compatible with most devices and platforms for easy viewing and sharing.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: Can I download my photos or videos immediately after the service?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: Once the service is complete and your media is processed, you will be able to download your photos or videos. Depending on the service, it may take a few hours to a few days for the media to be ready for download.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: How long will it take to receive my photos or videos after the service?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: The delivery time for photos and videos depends on the type of service you selected. Typically, photos and videos are delivered within 24 to 48 hours. However, complex services may take longer. You will be notified of the estimated delivery time when booking the service.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: Can I get a preview of my photos or videos before final delivery?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: In some cases, you may be provided with a preview of your photos or videos before the final delivery. This preview allows you to review the content before it's finalized and delivered. Please check with customer support or the service page for more details.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: What happens if I lose access to my photos or videos?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: If you lose access to your photos or videos due to any technical issue, please contact our customer support team at info@mydgp.in. We will assist you in retrieving your content as quickly as possible.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: Can I request a re-delivery of my photos or videos?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: Yes, if you encounter any issues with the delivery of your photos or videos (e.g., broken links, file corruption), you can request a re-delivery. Please reach out to customer support with the details of your issue, and we will resend your media.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: Are there any additional charges for re-delivery or extra copies of photos/videos?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: In most cases, there are no additional charges for re-delivery of media due to technical issues or mistakes. However, if you request extra copies of the photos or videos, additional fees may apply. Please check with the customer support team for more details.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: Can I download my photos or videos in high resolution?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: Yes, MYDGP provides the option to download your photos and videos in high resolution. When your media is ready for download, you will be able to select the resolution that best suits your needs.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: Can I edit my photos or videos after receiving them?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: Once your photos or videos are delivered, they are yours to use as you wish. You can edit, crop, or modify the media using photo or video editing software of your choice. MYDGP does not provide direct editing tools after delivery, but you are free to use third-party apps or tools.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: What should I do if the photos or videos delivered are not what I expected?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: If the photos or videos delivered do not meet your expectations, please contact our customer support team at info@mydgp.in. We will review the situation and work with you to resolve the issue, which may include offering re-editing or re-delivery of content as needed.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: Will I be notified when my photos or videos are ready for download?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: Yes, you will receive an email or in-app notification once your photos or videos are ready for download. A download link or instructions on how to access the media will be provided in the notification.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: Can I download my photos or videos on multiple devices?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: Yes, you can download your photos and videos on multiple devices as long as you are logged into your MYDGP account. You can access and download your media on any compatible device, including smartphones, tablets, and computers.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: What do I do if I am having trouble downloading my photos or videos?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: If you're experiencing issues downloading your photos or videos, try the following:<br>
                - Check your internet connection.<br>
                - Ensure you are logged into your MYDGP account.<br>
                - Try using a different browser or device.<br>
                If the problem persists, please contact customer support at info@mydgp.in for assistance.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: Are there any restrictions on sharing the photos or videos after download?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: There are no restrictions on sharing the photos or videos after you download them. You are free to share the content on social media, via email, or any other platform. However, please ensure that you respect copyright laws and avoid using content inappropriately.    
                   <script>
        function toggleAnswer(questionElement) {
            const answerElement = questionElement.nextElementSibling;
            const icon = questionElement.querySelector('.icon');
            answerElement.style.display = answerElement.style.display === 'block' ? 'none' : 'block';
            icon.classList.toggle('rotated');
        }

        function toggleFaq(faqContentId, toggleIconElement) {
            const content = document.getElementById(faqContentId);
            const icon = toggleIconElement.querySelector('.icon-horizontal');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            icon.innerHTML = content.style.display === 'block' ? '⯆' : '⯅';  // Toggle between down and up arrows
        }
    </script>                  
          </div>
                </div>
            </div>
        </div>

               
               
               
               
      
               
               
               
               
<!-- New FAQ Container 5 (A Guide to MYDGP) -->
<div class="new-faq">
    <div class="toggle-icon" onclick="toggleFaq('faqContent4', this)">
        <h3>A Guide to MYDGP <span class="icon-horizontal">⯆</span></h3>
    </div>
    <div class="toggle-content" id="faqContent4">
        <!-- New Questions and Answers for A Guide to MYDGP -->
        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: What is MYDGP?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: MYDGP is a comprehensive digital platform offering a variety of services and solutions for individuals and businesses. We aim to empower users by providing easy access to communication, technology, and business services in an affordable and user-friendly way.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: How can I get started with MYDGP?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: To get started, simply visit our website or download the MYDGP app. Create an account using your email and personal details, and start exploring the wide range of services we offer.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: Is MYDGP available on all devices?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: Yes, MYDGP is accessible on both desktop and mobile devices. You can access our services via our website on a desktop or use the MYDGP app on your smartphone (available on Android and iOS).</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: How do I create an account on MYDGP?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: Creating an account on MYDGP is easy. Go to our website or open the MYDGP app, click on the "Sign Up" button, and provide the necessary details such as your name, email address, phone number, and a password. Once completed, verify your account via the email or phone number you provided.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: Can I access MYDGP services without an account?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: No, you need to create an account to access MYDGP's services. This helps us personalize your experience and ensure secure transactions.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: How do I reset my password?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: If you’ve forgotten your password, click on the "Forgot Password" link on the login page. Enter your registered email address, and you will receive instructions to reset your password.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: Are there any tutorials or guides available for new users?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: Yes, we offer tutorials and guides within the MYDGP app and on our website. You can find step-by-step instructions on how to use our services, make transactions, and navigate the platform.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: How can I access customer support?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: For any assistance, you can contact our customer support team via email at info@mydgp.in or call +91 78273 43931. Our support team is available to help you with any questions or issues you may have.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: What are the benefits of using MYDGP?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: MYDGP offers a user-friendly interface, affordable services, and personalized solutions. We provide a seamless digital experience, allowing users to access a variety of services with just a few clicks, saving time and enhancing productivity.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: How can I manage my account settings?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: You can manage your account settings by logging into your MYDGP account on the website or app. From there, you can update your personal details, change your password, manage privacy settings, and more.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: Can I access MYDGP services in any country?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: MYDGP is primarily available in India, but we are working on expanding our services to other countries. Please check our website for the latest updates on international availability.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: How can I update my personal information?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: To update your personal information, log into your MYDGP account and go to the account settings section. You can edit your details such as name, email address, phone number, and mailing address.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: Does MYDGP offer any discounts or promotions?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: Yes, we frequently offer discounts and promotions on various services. Keep an eye on our website and app for the latest offers, or subscribe to our newsletter for updates.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: How do I navigate through the MYDGP platform?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: Our platform is designed to be intuitive and easy to navigate. You can use the menu to explore different services, access your account, and manage your settings. If you need assistance, refer to the in-app guides or contact customer support.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: How can I provide feedback on MYDGP?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: We value your feedback! You can submit your feedback directly through the MYDGP app or website by filling out a feedback form. You can also contact us via email at info@mydgp.in.</p>
                  <script>
        function toggleAnswer(questionElement) {
            const answerElement = questionElement.nextElementSibling;
            const icon = questionElement.querySelector('.icon');
            answerElement.style.display = answerElement.style.display === 'block' ? 'none' : 'block';
            icon.classList.toggle('rotated');
        }

        function toggleFaq(faqContentId, toggleIconElement) {
            const content = document.getElementById(faqContentId);
            const icon = toggleIconElement.querySelector('.icon-horizontal');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            icon.innerHTML = content.style.display === 'block' ? '⯆' : '⯅';  // Toggle between down and up arrows
        }
    </script>                  
          </div>
                </div>
            </div>
        </div>
                  <script>
        function toggleAnswer(questionElement) {
            const answerElement = questionElement.nextElementSibling;
            const icon = questionElement.querySelector('.icon');
            answerElement.style.display = answerElement.style.display === 'block' ? 'none' : 'block';
            icon.classList.toggle('rotated');
        }

        function toggleFaq(faqContentId, toggleIconElement) {
            const content = document.getElementById(faqContentId);
            const icon = toggleIconElement.querySelector('.icon-horizontal');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            icon.innerHTML = content.style.display === 'block' ? '⯆' : '⯅';  // Toggle between down and up arrows
        }
    </script>                  
          </div>
    <script>
        function toggleAnswer(questionElement) {
            const answerElement = questionElement.nextElementSibling;
            const icon = questionElement.querySelector('.icon');
            answerElement.style.display = answerElement.style.display === 'block' ? 'none' : 'block';
            icon.classList.toggle('rotated');
        }

        function toggleFaq(faqContentId, toggleIconElement) {
            const content = document.getElementById(faqContentId);
            const icon = toggleIconElement.querySelector('.icon-horizontal');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            icon.innerHTML = content.style.display === 'block' ? '⯆' : '⯅';  // Toggle between down and up arrows
        }
    </script>                    </div>
                </div>
            </div>
        </div>
               
               
               
               
      
               
               
               
               
<!-- New FAQ Container 6 (Troubleshooting) -->
<div class="new-faq">
    <div class="toggle-icon" onclick="toggleFaq('faqContent5', this)">
        <h3>Troubleshooting <span class="icon-horizontal">⯆</span></h3>
    </div>
    <div class="toggle-content" id="faqContent5">
        <!-- New Questions and Answers for Troubleshooting -->
        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: I am unable to log into my MYDGP account. What should I do?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: If you are unable to log in, please check the following:</p>
                <ul>
                    <li>Make sure you are entering the correct email and password.</li>
                    <li>If you've forgotten your password, click on the "Forgot Password" link and follow the instructions to reset it.</li>
                    <li>Ensure your internet connection is stable.</li>
                    <li>If the issue persists, please contact our customer support team at info@mydgp.in or call +91 78273 43931.</li>
                </ul>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: Why is the MYDGP app not opening on my phone?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: This issue could be caused by:</p>
                <ul>
                    <li>Insufficient memory or storage on your device. Try clearing some space and restarting your phone.</li>
                    <li>Outdated app version. Visit the App Store (for iOS) or Google Play Store (for Android) and check for updates.</li>
                    <li>Poor internet connection. Ensure you're connected to a reliable network.</li>
                </ul>
                <p>If none of these solve the issue, reinstall the app and try again.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: The MYDGP website is loading very slowly. What can I do?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: Try the following steps to improve loading speed:</p>
                <ul>
                    <li>Clear your browser cache and cookies.</li>
                    <li>Check your internet connection for speed and stability.</li>
                    <li>Try accessing the website from a different browser or device.</li>
                </ul>
                <p>If the issue persists, our technical team is available to assist you. Please reach out to us via email at info@mydgp.in.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: I made a payment, but I haven't received confirmation. What should I do?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: If you have made a payment but have not received confirmation:</p>
                <ul>
                    <li>Check your internet connection to ensure the transaction was successfully processed.</li>
                    <li>Look for any confirmation emails or SMS that may have been sent.</li>
                    <li>Check your bank or payment service provider to confirm if the transaction was completed.</li>
                </ul>
                <p>If you still haven’t received confirmation, please contact customer support immediately with the transaction details.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: My account is showing incorrect billing information. How can I fix this?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: To resolve any incorrect billing information:</p>
                <ul>
                    <li>Log in to your MYDGP account and review your billing details under the "Account Settings" section.</li>
                    <li>Update your payment information or billing address if necessary.</li>
                </ul>
                <p>If the issue persists, contact our support team at info@mydgp.in for assistance.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: How do I fix the “Network Error” message when using the MYDGP app?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: Network errors can be caused by:</p>
                <ul>
                    <li>Poor or unstable internet connection. Try switching between Wi-Fi and mobile data to see if that resolves the issue.</li>
                    <li>The app may require an update. Check the App Store or Google Play Store for the latest version.</li>
                </ul>
                <p>If the problem continues, reinstall the app or contact support at info@mydgp.in.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: I am facing issues with notifications. Why am I not receiving them?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: If you’re not receiving notifications from MYDGP, try these steps:</p>
                <ul>
                    <li>Ensure that notifications are enabled for the MYDGP app in your phone settings.</li>
                    <li>Check if "Do Not Disturb" mode is turned on or if any battery-saving settings are blocking notifications.</li>
                    <li>Reinstall the app to ensure proper notification settings.</li>
                </ul>
                <p>If notifications still don’t work, please reach out to customer support.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: My device is not compatible with MYDGP app. What can I do?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: MYDGP app is available on both Android and iOS. However, if your device doesn’t meet the system requirements:</p>
                <ul>
                    <li>Ensure that you’re running the latest version of the operating system.</li>
                    <li>Check the app store for your device to see if the app is compatible with your current version.</li>
                </ul>
                <p>If your device is still incompatible, you may access MYDGP services via our website.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: The MYDGP app keeps crashing. How can I fix it?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: App crashes can occur for several reasons. Here's what you can do:</p>
                <ul>
                    <li>Ensure your app is updated to the latest version.</li>
                    <li>Clear the app's cache (in settings on your device).</li>
                    <li>Restart your device to resolve any temporary glitches.</li>
                </ul>
                <p>If the app continues to crash, try reinstalling it, or contact support for further assistance.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: How do I resolve issues with uploading documents on MYDGP?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: If you’re unable to upload documents:</p>
                <ul>
                    <li>Ensure the file size doesn’t exceed the limit specified on the platform.</li>
                    <li>Check that the file format is supported (e.g., PDF, JPEG).</li>
                    <li>Try uploading the document from a different browser or device.</li>
                </ul>
                <p>If you're still facing issues, reach out to our customer service team with your problem details.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: Why is my payment being declined?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: Payment declines can happen due to:</p>
                <ul>
                    <li>Insufficient funds in your account or issues with your payment method.</li>
                    <li>Incorrect card or payment details entered.</li>
                    <li>Your bank or payment provider rejecting the transaction.</li>
                </ul>
                <p>Check your payment details and try again. If the issue persists, contact your payment provider or reach out to MYDGP support for further assistance.</p>
            </div>
        </div>

        <div class="question">
            <h3 onclick="toggleAnswer(this)">
                Question: I am unable to find a service I’m looking for on MYDGP. How can I get help?
                <span class="icon">⯆</span>
            </h3>
            <div class="answer">
                <p>Answer: If you can’t find a service on MYDGP:</p>
                <ul>
                    <li>Check the "Services" section for a list of available options.</li>
                    <li>If the service is unavailable, please contact our support team for further guidance or suggestions.</li>
                </ul>
            </div>
        </div>
    </div>
</div>
                  <script>
        function toggleAnswer(questionElement) {
            const answerElement = questionElement.nextElementSibling;
            const icon = questionElement.querySelector('.icon');
            answerElement.style.display = answerElement.style.display === 'block' ? 'none' : 'block';
            icon.classList.toggle('rotated');
        }

        function toggleFaq(faqContentId, toggleIconElement) {
            const content = document.getElementById(faqContentId);
            const icon = toggleIconElement.querySelector('.icon-horizontal');
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            icon.innerHTML = content.style.display === 'block' ? '⯆' : '⯅';  // Toggle between down and up arrows
        }
    </script>                  
          </div>
                </div>
            </div>
        </div>

               
               
               
               
      
               
               
               
               
               <script>
        // Variable to keep track of the currently open FAQ
        let currentFaqOpen = null;

        // Function to toggle the visibility of each FAQ container dynamically
        function toggleFaq(faqContentId, iconElement) {
            var faqContent = document.getElementById(faqContentId);
            
            // If there's an open FAQ, close it
            if (currentFaqOpen && currentFaqOpen !== faqContent) {
                currentFaqOpen.style.display = 'none';
                // Reset icon direction for the closed FAQ
                currentFaqOpen.previousElementSibling.querySelector('.icon-horizontal').textContent = '⯆';
            }

            // Toggle the clicked FAQ section
            if (faqContent.style.display === 'none' || faqContent.style.display === '') {
                faqContent.style.display = 'block';
                // Change icon direction to down
                iconElement.querySelector('.icon-horizontal').textContent = '⯅';
                currentFaqOpen = faqContent;  // Update the currently open FAQ
            } else {
                faqContent.style.display = 'none';
                // Change icon direction to up
                iconElement.querySelector('.icon-horizontal').textContent = '⯆';
                currentFaqOpen = null;  // Reset if no FAQ is open
            }
        }

        // Function to toggle the answer visibility and rotate the icon
        function toggleAnswer(question) {
            var answer = question.nextElementSibling;  // Get the next sibling element (answer)
            var icon = question.querySelector('.icon');  // Get the icon in the clicked question

            // Toggle answer visibility and icon rotation
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.classList.remove('rotated');
            } else {
                answer.style.display = 'block';
                icon.classList.add('rotated');
            }
        }
    </script>

</body>
</html>










<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MYDGP Web App</title>
    <style>
        /* Basic Styling */
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }

        /* Main content area styling */
        .content {
            flex: 1;
        }

        /* Footer Styling */
        footer {
            background-color: #2D92E0; /* Updated footer color */
            color: #fff;
            padding: 10px 0; /* Reduced padding for an even smaller footer */
            text-align: center;
            position: relative;
            bottom: 0;
            width: 100%;
        }

        footer div {
            margin-bottom: 3px; /* Reduced margin for compactness */
        }

        footer a {
            color: #fff;
            text-decoration: none;
            margin: 0 10px; /* Reduced space between links */
            font-size: 15px; /* Increased font size for social links */
        }

        footer a:hover {
            text-decoration: underline;
        }

        /* Social links section */
        .social-links {
            display: flex;
            justify-content: center;
            gap: 15px; /* Space between the social icons */
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            footer {
                padding: 4px 0; /* Further reduced padding on medium screens */
            }

            .social-links {
                gap: 10px; /* Reduced gap on medium screens */
            }

            footer a {
                font-size: 11px; /* Slightly smaller text for medium screens */
            }
        }

        @media (max-width: 480px) {
            footer {
                padding: 2px 0; /* Minimal padding on smaller screens */
            }

            .social-links {
                gap: 5px; /* Smaller gap between social icons */
            }

            footer a {
                font-size: 10px; /* Slightly larger text for mobile screens */
            }
        }
    </style>
</head>
<body>

    <!-- Main Content -->
    <div class="content">
        <!-- Your website content goes here -->
    </div>

    <!-- Footer Section -->
    <footer>
        <div>
            <p>&copy; 2024 MYDGP | All Rights Reserved</p>
        </div>
        <div class="social-links">
            <!-- Updated Facebook link -->
            <a href="https://www.facebook.com/people/MYDGP/61569345298664/" target="_blank">Facebook</a>
            <!-- Updated Twitter link -->
            <a href="https://x.com/home" target="_blank">Twitter</a>
            <!-- Updated Instagram link -->
            <a href="https://www.instagram.com/mydgp.in/" target="_blank">Instagram</a>
            <!-- Updated LinkedIn link -->
            <a href="https://www.linkedin.com/in/my-dgp-a23880341/" target="_blank">LinkedIn</a>
        </div>
    </footer>

</body>
</html>
