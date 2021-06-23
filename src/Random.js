function Random(probs) {
    return (
        <p className="IdCard d-flex flex-row bd-highlight mb-3">
            {`Random value between ${probs.min} and ${probs.max} => ${parseInt(Math.random() * (probs.max) + probs.min)}`}
        </p>
    );
}
export default Random;