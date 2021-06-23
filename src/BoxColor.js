function BoxColor({ r, g, b }) {
    return (
        <div className="color" style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
            <p className="text">
                rgb({r},{g},{b})
            </p>
        </div>
    );

}

export default BoxColor;