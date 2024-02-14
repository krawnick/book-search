const url = 'https://dummyjson.com/auth/login'

async function main() {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: 'kminchelle',
      password: '0lelplR',
      // expiresInMins: 60, // optional
    }),
  })
  const data = await res.json()
  console.log(data)
}
main()
