function generateLogo(response) {
    const characters = response.characters
    const textColor = response.textColor
    const shape = response.shape
    const shapeColor = response.shapeColor
    if (shape == 'circle') {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="100" fill="${shapeColor}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${characters}</text>
                </svg>`
    }

    if (shape == 'square') {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
                <rect x="50" y="0" width="200" height="200" fill="${shapeColor}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${characters}</text>
                </svg>`
    }

    if (shape == 'triangle') {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points="150,0 25,200 275,200" fill="${shapeColor}" />
                <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${characters}</text>
                </svg>`
    }
}
module.exports = { generateLogo };