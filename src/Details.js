function Details(props) {
    return (
        <div>
            {props.data.map(d => <span><p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>{d}</p></span>)}
        </div>
    )
}

export default Details;