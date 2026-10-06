

// generate a 6 character long unique code for URLs on A-Z ,a-z,0-9


const generateCode = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let shortcode = "";
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        shortcode += characters[randomIndex];
    }
    return shortcode;
};

export default generateCode;