let linksSocialMedia = {
    github: 'Matheusfllps',
    youtube: 'channel/UCVPhC-7ilJ8uFKbaklMNPhg',
    instagram: 'matheus.segundo',
    facebook: 'profile.php?id=100003027475770',
    twitter: 'matheus66134359'
  }

  function changeSocialMediaLinks() {
    for( let li of socialLinks.children) {
        const social = li.getAttribute('class');
       li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`;
       // alert(li.children[0].href);
    }
  }
  changeSocialMediaLinks()  

  function getGitHubProfileInfos(){
      const url = `https://api.github.com/users/${linksSocialMedia.github}`

      fetch(url)
      .then(response => response.json())
      .then(data => {
       userName.textContent = data.name,
       userBio.textContent = data.bio,
       userLink.href = data.html_url,
       userPhoto.src = data.avatar_url,
       userLogin.textContent = data.login

      })
  }
  getGitHubProfileInfos()