//select the ul from the DOM
const blogOutput = document.querySelector('ul')
document.addEventListener('DOMContentLoaded', function () {
    //grab the rawData
    const rawName = localStorage.getItem('rawNames')
    const rawTitle = localStorage.getItem('rawTitles')
    const rawContent = localStorage.getItem('rawContents')

    const usernames = JSON.parse(rawName) || []
    const titles = JSON.parse(rawTitle) || []
    const contents = JSON.parse(rawContent) || []


    const blogPosts = document.getElementById('blogPosts')

    //loop through each stored data and create html elements to display them
    for (let i = 0; i < titles.length; i++) {
        //create elements for title, content , username
        const postBox = document.createElement('li')


        const titleElement = document.createElement('h2')
        titleElement.textContent = titles[i]


        const contentElement = document.createElement('p')
        contentElement.textContent = contents[i]


        const usernameElement = document.createElement('p')
        usernameElement.textContent = 'By: ' + usernames[i]

       


        //Append the elements to the postBox
        postBox.appendChild(titleElement)
        postBox.appendChild(contentElement)
        postBox.appendChild(usernameElement)

        //append the postbox to the blogoutput

        blogPosts.appendChild(postBox)
    }
});





