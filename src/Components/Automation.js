import React, { Component } from 'react';
import {Grid, Cell, Tab, Tabs} from 'react-mdl';
import './Automation.css';

const createGithubSteps = [
    'Click the following link: https://github.com/',
    'Enter a unique Username (i.e javayporterAL)',
    'Enter AL email in Email field',
    'Enter Password ',
    'Click Sign up for GitHub'

]
const listCreateGitHubSteps = createGithubSteps.map((createGithubSteps) =>
  <li>{createGithubSteps}</li>
)
;

class Automation extends Component {
    render() {
        return(

            
<div style ={{width: '100%', margin: 'auto'}}>

<div className="demo-tabs">
    <Tabs>
        <Tab>Front End</Tab>
        <Tab>Backend</Tab>
        <Tab>Mobile</Tab>
    </Tabs>
</div>      


<Grid className="demo-grid-1">
    <Cell className="rounded-border" col={6}><h5>Creating an AL GitHub account</h5>
        <h6><ul>{listCreateGitHubSteps}</ul></h6>
    </Cell>

    <Cell className="rounded-border" col={6}><h5>Locating AL_PY_AUTOMATION Repo</h5>
        <h6><ul>{listCreateGitHubSteps}</ul></h6>
    </Cell>

    <Cell className="rounded-border" col={6}><h5>Cloning the AL_PY_AUTOMATION Repo</h5>
        <h6><ul>{listCreateGitHubSteps}</ul></h6>
    </Cell>

    <Cell className="rounded-border" col={6}><h5>Download VS Studio Code</h5>
        <h6><ul>{listCreateGitHubSteps}</ul></h6>
    </Cell>

    <Cell className="rounded-border" col={6}><h5>Switching Branches</h5>
        <h6><ul>{listCreateGitHubSteps}</ul></h6>
    </Cell>

    <Cell className="rounded-border"  col={6}><h5>Installing NPM and Homebrew</h5>
        <h6><ul>{listCreateGitHubSteps}</ul></h6>
    </Cell>

</Grid>
    
  
</div>

                
            
        )
    }
}

export default Automation;


