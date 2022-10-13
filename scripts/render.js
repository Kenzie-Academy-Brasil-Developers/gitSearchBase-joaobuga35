
function renderProfile(user){
    const divHead = document.getElementsByClassName('head-profile')
    const img = document.createElement('img')
    const divProfile = document.createElement('div')
    const h2 = document.createElement('h2')
    const span = document.createElement('span')

    img.src = user.avatar_url

    divProfile.classList = 'profile-description'
    h2.innerText = user.name
    span.innerText = user.bio

    divProfile.append(h2,span)

    divHead.append(img,divProfile)
    return divHead
}

function render(arr) {
    const listMain = document.getElementById('list-projects')
    console.log(listMain)
    listMain.innerHTML = ''
  
    arr.forEach(repos => {
      const card = renderRepository(repos)
  
      listMain.appendChild(card)
    })
    return listMain
}

function renderRepository(repository){
    const li = document.createElement('li')
    const h3Repo = document.createElement('h3')
    const pRepo = document.createElement('p')
    const divRepo = document.createElement('div')
    const buttonRepo = document.createElement('button')
    const a = document.createElement('a')
    const buttonDemo = document.createElement('button')

    h3Repo.innerText = repository.name
    pRepo.innerText = repository.description

    li.classList = 'list-repositories'
    divRepo.classList = 'div-btn-repo-demo'

    a.classList = 'repository'
    a.innerText = 'Repositório'
    a.href = repository.html_url

    buttonRepo.classList = 'btn-repository'
    buttonDemo.classList = 'btn-demo'

    buttonDemo.innerText = 'Demo'

    buttonRepo.append(a)
    divRepo.append(buttonRepo,buttonDemo)
    li.append(h3Repo,pRepo,divRepo)

    return li
}

// <div class="head-profile">
//     <img src="/assets/img/imgProfile.svg" alt="">
//         <div class="profile-description">
//             <h2>Samuel Leão</h2>
//             <span>UI developer</span>
//         </div>
// </div>

{/* <li class="list-repositories">
    <h3>Project Module 2 - Kenzie...</h3>
    <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like</p>

    <div class="div-btn-repo-demo">
        <button class="btn-repository"><a class="repository" href="#">Repositório</a></button>
        <button class="btn-demo">Demo</button>
    </div>
</li> */}