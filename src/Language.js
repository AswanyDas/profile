
function Languages(props) {

    return (
        <div>
            <p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b></p>
            {props.lang.map(l => <span><p>{l}</p>
                <div class="w3-light-grey w3-round-xlarge">
                    <div class="w3-round-xlarge w3-teal" ></div>
                </div></span>)}

        </div>
    )
}

export default Languages;