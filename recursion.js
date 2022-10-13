
recursion1 = n => {
    if (n >=100) {
        return true
    }
    const num = n + 1
    console.log(num)
    return recursion1(num)
}
recursion1(1)
    

