const createCard = (data) => `
  <div class="flex items-center justify-between px-4 py-5 pb-8 -mt-4 -ml-4 border-b border-gray-200 sm:px-6">
    <div class="mt-4 ml-4">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <img class="w-12 h-12 rounded-full" src="${data.avatar_url}" alt="User avatar" />
        </div>
        <div class="ml-4">
          <h3 class="text-lg font-medium leading-6 text-zinc-900">
            ${data.name}
            <span class="text-sm leading-5 text-zinc-500">
                @${data.login}
            </span>
          </h3>
          <p class="text-sm leading-5 text-zinc-500">
            ${
              data.public_repos
            } repositories. User since ${data.created_at.slice(0, 4)}
          </p>
          <p class="text-sm leading-5 text-zinc-500">
            ${data.location || ''}
          </p>
          <p class="mt-1 text-sm leading-5 text-zinc-500">
            ${data.bio}
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-shrink-0 mt-4 ml-4">
      <span class="inline-flex ml-3">
        <a href="${
          data.html_url
        }"><button type="button" class="relative inline-flex items-center px-4 py-2 mr-2 text-sm font-medium leading-5 text-zinc-700 bg-white border border-gray-300 rounded-md hover:text-zinc-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-zinc-50 active:text-zinc-800">
          <span>
            Profile
          </span>
        </button>
        </a>
        <a href="${
          data.blog
        }"><button type="button" class="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-zinc-700 bg-white border border-gray-300 rounded-md hover:text-zinc-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-zinc-50 active:text-zinc-800">
          <span>
            Website
          </span>
        </button>
        </a>
      </span>
    </div>
  </div>
`

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form')
    form.addEventListener("submit", async (event) => {
        event.preventDefault()
        const username = document.querySelector("input").value

        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json()
        console.log(data)

        const card = createCard(data)
        document.querySelector("#container").insertAdjacentHTML("beforeend", card)
    })
})