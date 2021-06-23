function Greetings(props) {

    const gret = {
        de: "Holla",
        fr: "Bonjour"
    };

    function classnameRender() {
        let className = "";
        for (let key in gret) {

            if (props.lang === key) {
                className = gret[key];
            }
        }
        return className
    }

    return (
        <p className="lang IdCard d-flex flex-row bd-highlight mb-3">
            {` ${classnameRender()} ${props.children} `}

        </p>
    );

}
export default Greetings;
