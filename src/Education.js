function Education(props) {
    return (
        <div class="w3-container w3-card w3-white">
            <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
            {props.edu.map(u => <div class="w3-container">
                <h5 class="w3-opacity"><b>{u.Qualification}</b></h5>
                <h6 class="w3-text-teal">{u.date}<i class="fa fa-calendar fa-fw w3-margin-right"></i></h6>
            </div>)}
        </div>

    )
}
export default Education;