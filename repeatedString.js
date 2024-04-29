function name(s, n) {
    let f = new Set(s.split(''))

    if (f.has('a') && f.size === 1) {
        return n
    } else {
        let lengths = s.length
        let sum = parseInt(n/s.length) * (s.split('a').length-1)
        let mod = s.slice(0, n % lengths).split('a').length-1

        return sum + mod
    }
}

export default name

// console.log(name("aba", 10))