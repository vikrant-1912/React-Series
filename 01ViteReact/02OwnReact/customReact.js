// Version 1 of this Code - yha 2 attributes the , in case sief 1 or 3 hote then , it will be a problem hence , version 2 of this code is ---

function CustomRender (reactElement , container) {
    /*  Version 1 Code / not Good version to use 

    const domElement = document.createElement (reactElement.type)
    domElement.innerHTML = reactElement.Children
    domElement.setAttribute ('href' , reactElement.props.href)
    domElement.setAttribute ('target' , reactElement.props.target)

    container.appendChild (domElement)
    */

    // Version 2 of this Code ( Loop based )  --/Imp. version

    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.Children

    for ( const prop in reactElement.props) {
        domElement.setAttribute ( prop , reactElement.props[prop])
        
    }
    container.appendChild (domElement)
    }

const reactElement = {
     type: 'a',
     props: {
        href: 'https://google.com',
        target: '_blank'
     },
     Children: 'click me to visit google'

}


const rootContainer = document.querySelector("#root")

CustomRender ( reactElement , rootContainer)






