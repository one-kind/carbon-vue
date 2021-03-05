export default {
  title: 'Components/Breadcrumb',
}

export const Default = () => ({
  template: `
    <Breadcrumb>
      <BreadcrumbItem><Link href="/#">Breadcrumb 1</Link></BreadcrumbItem>
      <BreadcrumbItem><Link href="#">Breadcrumb 2</Link></BreadcrumbItem>
      <BreadcrumbItem><Link href="#">Breadcrumb 3</Link></BreadcrumbItem>
    </Breadcrumb>`
})

export const Skeleton = () => ({
  template: `
    <Breadcrumb skeleton>
      <BreadcrumbItem><Link href="#"></Link></BreadcrumbItem>
      <BreadcrumbItem><Link href="#"></Link></BreadcrumbItem>
      <BreadcrumbItem><Link href="#"></Link></BreadcrumbItem>
    </Breadcrumb>`
})
