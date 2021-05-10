import React from "react";
import settings from "./settings"
import axios from "axios";

import "./Article.css"

class Article extends React.Component{
    constructor(props){
        super(props)
        this.state={text:"", title:"", image_url:""}
    }

    getArticle(){
        console.log("Getting article " + this.props.id)
        axios
            .get(settings.GET_ARTICLE_FROM_ID_URL + this.props.id + "/")
            .then((response)=>{
                const d = response.data
                this.setState({title:d.title, text:d.text})
                this.forceUpdate()
            })
            .catch(err=>{console.log(err)})
    }
    
    componentDidMount(){
        this.getArticle()
    }

    render(){
        console.log("Article with id: " + this.props.id)
        return(
            <html class="wf-montserrat-n4-active wf-sourcesanspro-n2-active wf-active">
                <head>
                    <meta charset="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <script src="http://use.edgefonts.net/montserrat:n4:default;source-sans-pro:n2:default.js" type="text/javascript"/>
                </head>

                <body class="mybody" >
                
                    <header>
                        <div class="profileLogo"> 
                            <p class="logoPlaceholder"><img src="logoImage.png" alt="sample logo"/></p>
                        </div>
                    </header>
                    
                    <section class="mainContent"> 
                        <section class="section2">
                            <article class="section2Content">
                                <h2 class="sectionContentTitle">{this.state.title}</h2>
                                <h3 class="sectionContentSubTitle">Mar 05, 2020</h3>
                                <hr class="myhr"/>
                                <p class="sectionContent">{this.state.text}</p>
                            </article>
                            
                        </section>
                    </section>

                </body>
            </html>
        )
    }
}

export default Article;