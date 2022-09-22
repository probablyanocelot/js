let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('success')
    } else {
        reject('Failed')
    }

})

p
    .then((message) => {
    console.log(`this is the then ${message}`)
    })
    .catch((message) => {
        console.log(`this is the catch ${message}`)
    })

// BELOW IS CALLBACK, PROMISES REPLACED THEM

const userLeft = false
const userWatchingCatMeme = false

function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: 'User Left',
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'Tutorial Channel < Cat'
        })
    } else {
        callback('Thumbs up and Subscribe to Tutorial Channel')
    }
}

watchTutorialCallback((message) => {
    console.log(`Success: ${message}`)
}, (error) => {
    console.log(`${error.name} ${error.message}`)
})


// PROMISE BELOW


function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'Tutorial Channel < Cat'
            })
        } else {
            resolve('Thumbs up and Subscribe to Tutorial Channel')
        }
    })
}


watchTutorialPromise()
    .then((message) => {
        console.log(`Success: ${message}`)
}).
    catch((error) => {
        console.log(`${error.name} ${error.message}`)
})


// EXECUTE ALL PROMISES AT ONCE

const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})
const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})
const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})

Promise
    // .all will return array of all messages
    .all([
        recordVideoOne,
        recordVideoTwo,
        recordVideoThree,
    ])
    .then((messages) => {
        console.log(messages)
    })

Promise
    // .all will return only the first message to resolve
    .race([
        recordVideoOne,
        recordVideoTwo,
        recordVideoThree,
    ])
    .then((message) => {
        console.log(message)
})