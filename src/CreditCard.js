function CreditCard(props) {

    return (
        <div className="CrCardInfo">
            <ul>
                <li className="idInfo">{props.type}</li>
                <li className="idInfo">{props.number}</li>
                <li className="idInfo">{props.expirationMonth}</li>
                <li className="idInfo">{props.expirationYear}</li>
                <li className="idInfo">{props.bank}</li>
                <li className="idInfo">{props.owner}</li>
                <li className="idInfo">{props.bgColor}</li>
                <li className="idInfo">{props.color}</li>
            </ul>
        </div>
    )
}
export default CreditCard