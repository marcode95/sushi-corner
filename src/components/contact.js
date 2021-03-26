export default function contact() {
  const content = document.getElementById("content");
  const contact = document.createElement('div');
  contact.setAttribute('id', 'contact-page')
  contact.innerHTML = `
  <p class="single-contact-item">
    <span class="contact-value">Street</span>
    <span class="contact-key">2261  Oak Street</span>
  </p>
  <p class="single-contact-item">
    <span class="contact-value">City</span>
    <span class="contact-key">Old Forge</span>
  </p>    
  <p class="single-contact-item">
    <span class="contact-value">State Full</span>
    <span class="contact-key">New York</span>
  </p>    
  <p class="single-contact-item">
    <span class="contact-value">Zip Code</span>
    <span class="contact-key">13420</span>
  </p>    
  <p class="single-contact-item">
    <span class="contact-value">Phone Number</span>
    <span class="contact-key">315-369-5652</span>
  </p>
  <p class="single-contact-item">
    <span class="contact-value">Temporary Mail</span>
    <span class="contact-key">sushicorner@doesntexist.com</span>
  </p>`
  content.appendChild(contact);
;
}