import {useEffect} from 'react'
import {useLocation,useParams} from 'react-router-dom'

export const DynamicTitle = () => {
    const location = useLocation();

    const appName = "SAROJeats";

    useEffect(()=>{
        if(location.pathname === '/'){
            document.title = `The Official ${appName} Online Shopping`;
        }else if(location.pathname === '/corporate-gifting'){
            document.title = "Personalised Corporate Gifting"
        }else if(location.pathname === '/about-us'){
            document.title = `About | ${appName} `
        }else if(location.pathname === '/contact-us'){
            document.title = `Contact Us | ${appName}`
        }
    },[location])

}