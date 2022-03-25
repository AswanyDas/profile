function Skills(props) {

    return (
        <div>
            <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b></p>
            {props.skill.map(s => <span><p>{s}</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                    <div class="w3-container w3-center w3-round-xlarge w3-teal">90%</div>
                </div></span>)}

        </div>
    )
}
export default Skills;