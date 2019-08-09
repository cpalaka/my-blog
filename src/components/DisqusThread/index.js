import React, { useEffect } from 'react'

const SHORTNAME = 'chaipalaka'

function renderDisqus() {
    if (window.DISQUS === undefined) {
        var script = document.createElement('script');
        script.async = true;
        script.src = 'https://' + SHORTNAME + '.disqus.com/embed.js';
        document.getElementsByTagName('head')[0].appendChild(script);
    } else {
        window.DISQUS.reset({ reload: true });
    }
}

const DisqusThread = ({ id, title, path, url, ...other }) => {
    if (process.env.BROWSER) {
        window.disqus_shortname = SHORTNAME;
        window.disqus_identifier = path;
        window.disqus_title = title;
        window.disqus_url = window.location.href;
    }
    useEffect(()=>{
        renderDisqus()
    }, [id, title, path])

    return <div {...other} id="disqus_thread" />
}

export default DisqusThread