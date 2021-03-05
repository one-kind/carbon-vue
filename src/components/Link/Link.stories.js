export default {
  title: 'Components/Link',
}

export const Default = () => ({
  template: `
    <div>
      <Link href="#" >
        Link
      </Link>
      <Link nuxt to="/" >
        Nuxt Link
      </Link>
    </div>`
})
