function Experience(props) {

    return (
        <div class="w3-container w3-card w3-white w3-margin-bottom">
            <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
            {props.Exp.map(e => <div class="w3-container">
                <h5 class="w3-opacity"><b>{e.jobTitle}</b></h5>
                <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>{e.date} <span class="w3-tag w3-teal w3-round"></span></h6>
                <p>{e.role}</p>

            </div>)}

        </div>
    )
}
export default Experience;