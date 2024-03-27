// select the blogform
const blogForm = document.querySelector('#blogForm')

//create a function that triggers when Submit event occurs

function addBlog(eventObj){
    //stop/prevent the page from refreshing during eventListener aka preventDefault
    eventObj.preventDefault()

    // grab the input value from our blog input
    const blogUsernameValue = blogForm.username.value
    const blogTitleValue = blogForm.blogTitle.value
    const blogContentValue = blogForm.blogContent.value

    // console.log(blogUsernameValue) Checking if it works( ofc its is)

    //grab all the contnet stored in local storage and PARSE IT
    const rawName = localStorage.getItem('rawNames')
    const rawTitle = localStorage.getItem('rawTitles')
    const rawContent = localStorage.getItem('rawContents')

    const usernames = JSON.parse(rawName) || []
    const titles = JSON.parse(rawTitle) || []
    const contents = JSON.parse(rawContent) || []

    // Add the new input to the parsed boxes
    usernames.push(blogUsernameValue)
    titles.push(blogTitleValue)
    contents.push(blogContentValue)

    // overWrite the old value in local storage with newly updated ones
    localStorage.setItem('rawNames', JSON.stringify(usernames))
    localStorage.setItem('rawTitles', JSON.stringify(titles))
    localStorage.setItem('rawContents', JSON.stringify(contents))


    //GET REDIRECTED TO POSTS LIST
    window.location = 'posts.html'
}




// event listener for submit + function(addBlog)

function submitListen(){
    blogForm.addEventListener('submit', addBlog)
}

//initialize the submitListen
submitListen()