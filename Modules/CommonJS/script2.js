const harry  = 'potter'
const valdemort = 'He who must not be named'

function jump() {
}

export default function fight(char1, char2) {
    const attack1 = Math.floor(Math.random() * char1.length);
    const attack2 = Math.floor(Math.random() * char2.length);
    return attack1 > attack2 ? `${char1} wins` : `${char2} wins`
}