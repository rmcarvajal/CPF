class tile extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot!.innerHTML = `
            <div class="blank">wawa</div>

            <style> 
            .blank{
    height: 40px;
    width: 40px;
    background-color: white;
    border-color: darkgrey;
    border-style: solid;
    border-radius: 5px;
}
            </style>

            
        `
    }
}

export default tile