class SpecialHeader1 extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
        
    <section class="nav">

    <div class="ab-headImg">

    </div>

    <div class="header">

        <ul>
            <a href="index.html">
                <li>Home</li>
            </a>
            <a href="about.html">
                <li>About Us <i class="fa-solid fa-caret-down"></i></li>
            </a>
            <a href="hotal.html">
                <li>Hotel <i class="fa-solid fa-caret-down"></i></li>
            </a>
           
            <a href="gallery.html">
                <li>Gallery</li>
            </a>
          
            <a href="contect.html">
                <li>Contact</li>
            </a>

        </ul>
    </div>


</section>`
    }
}


customElements.define('special-header1', SpecialHeader1)
