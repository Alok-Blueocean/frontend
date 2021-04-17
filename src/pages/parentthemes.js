import { useState } from 'react';
import useHttp from '../hooks/use-http';
import { getParentThemes } from '../lib/api';

const ParentThemes = () => {
    
        const [parentthemes,setParenttheme]  = useState({"parentthemes":[]})
   
        fetch(`http://localhost:8000/parent/theme`)
            .then((response) => response.json())
            .then((questionList) => questionList['results'])
            .then(
                loadedQuotes => {
                    // console.log(loadedQuotes)
                    setParenttheme({"parentthemes":loadedQuotes})
                    console.log(parentthemes)
                }
            )
            ;
 

            return(
                <div>
    {
    parentthemes.map(element =>(
        
        <div class="thumbnail">
            <img src="http://placehold.it/500x300" alt="image" />
              <div class="caption">
                <h4>"theme"</h4>
            </div>
          </div>
        )
    )
       
    
    }
     </div>       )
};


export default ParentThemes;