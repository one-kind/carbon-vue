export default {
  title: 'Extras/UIShell',
  argTypes: {
    alignLabel: { control: { type: 'text' }},
    areLeftPanels: { control: { type: 'boolean' }},
    areRightPanels: { control: { type: 'boolean' }},
  },
  args: {
    areLeftPanels: true,
    areRightPanels: true,
  }
}

export const HeaderBase = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Header aria-label="Carbon header">
      <SkipToContent href="#main-content">
        Skip to content
      </SkipToContent>
      <HeaderName href="javascript:void(0)" prefix="IBM">
        [Platform]
      </HeaderName>
      <template slot="left-panels" v-if="$props.areLeftPanels">

      </template>
      <template slot="right-panels" v-if="$props.areRightPanels">

      </template>
    </Header>
  `
})

export const HeaderBaseWithNavigation = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Header aria-label="Carbon header">
      <HeaderMenuButton aria-label="Header menu" aria-controls="side-nav" />
      <SkipToContent href="#main-content">
        Skip to content
      </SkipToContent>
      <HeaderName href="javascript:void(0)" prefix="IBM">
        [Platform]
      </HeaderName>
      <HeaderNav aria-label="Carbon nav">
        <HeaderMenuItem href="javascript:void(0)">
          Link 1
        </HeaderMenuItem>
        <HeaderMenuItem href="javascript:void(0)">
          Link 2
        </HeaderMenuItem>
        <HeaderMenuItem href="javascript:void(0)">
          Link 3
        </HeaderMenuItem>
        <HeaderMenu aria-label="Link 4" title="Link 4">
          <HeaderMenuItem href="javascript:void(0)">
            Submenu Link 1
          </HeaderMenuItem>
          <HeaderMenuItem href="javascript:void(0)">
            Submenu Link 2
          </HeaderMenuItem>
          <HeaderMenuItem href="javascript:void(0)">
            Submenu Link 3
          </HeaderMenuItem>
        </HeaderMenu>
      </HeaderNav>
      <template slot="left-panels" v-if="areLeftPanels">
        <SideNav id="side-nav" fixed>
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="javascript:void(0)">
              Link 1
              </HeaderMenuItem>
              <HeaderMenuItem href="javascript:void(0)">
                Link 2
              </HeaderMenuItem>
              <HeaderMenuItem href="javascript:void(0)">
                Link 3
              </HeaderMenuItem>
              <HeaderMenu aria-label="Link 4" title="Link 4" :hover-toggle="false">
                <HeaderMenuItem href="javascript:void(0)">
                  Submenu Link 1
                </HeaderMenuItem>
                <HeaderMenuItem href="javascript:void(0)">
                  Submenu Link 2
                </HeaderMenuItem>
                <HeaderMenuItem href="javascript:void(0)">
                  Submenu Link 3
                </HeaderMenuItem>
              </HeaderMenu>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
      </template>
      <template slot="right-panels" v-if="areRightPanels">

      </template>
    </Header>
  `
})

export const HeaderBaseWithActions = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Header aria-label="Carbon header">
      <SkipToContent href="#main-content">
        Skip to content
      </SkipToContent>
      <HeaderName href="javascript:void(0)" prefix="IBM">
        [Platform]
      </HeaderName>
      <template slot="header-global">
        <HeaderGlobalAction
          aria-label="Notifications"
          aria-controls="notifications-panel"
          @click="actionNotifications" >
          <Icon icon="Notification" :size="20" />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="User avatar" @click="actionUserAvatar" aria-controls="user-panel">
          <Icon icon="UserAvatar" :size="20" />
        </HeaderGlobalAction>
        <HeaderGlobalAction
          aria-label="App switcher"
          aria-controls="switcher-panel"
          @click="actionAppSwitcher">
          <Icon icon="AppSwitcher" :size="20" />
        </HeaderGlobalAction>
      </template>
      <template slot="left-panels" v-if="areLeftPanels">

      </template>
      <template slot="right-panels" v-if="areRightPanels">

      </template>
    </Header>
  `
})
HeaderBaseWithActions.argTypes = {
  actionNotifications: { action: 'actionNotifications' },
  actionUserAvatar: { action: 'actionUserAvatar' },
  actionAppSwitcher: { action: 'actionAppSwitcher' },
}

export const HeaderBaseWithNavigationAndActions = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Header aria-label="Carbon header">
      <HeaderMenuButton aria-label="Header menu" aria-controls="side-nav" />
      <SkipToContent href="#main-content">
        Skip to content
      </SkipToContent>
      <HeaderName href="javascript:void(0)" prefix="IBM">
        [Platform]
      </HeaderName>
      <HeaderNav aria-label="Carbon nav">
        <HeaderMenuItem href="javascript:void(0)">
          Link 1
        </HeaderMenuItem>
        <HeaderMenuItem href="javascript:void(0)">
          Link 2
        </HeaderMenuItem>
        <HeaderMenuItem href="javascript:void(0)">
          Link 3
        </HeaderMenuItem>
        <HeaderMenu aria-label="Link 4" title="Link 4">
          <HeaderMenuItem href="javascript:void(0)">
            Submenu Link 1
          </HeaderMenuItem>
          <HeaderMenuItem href="javascript:void(0)">
            Submenu Link 2
          </HeaderMenuItem>
          <HeaderMenuItem href="javascript:void(0)">
            Submenu Link 3
          </HeaderMenuItem>
        </HeaderMenu>
      </HeaderNav>
      <template slot="header-global">
        <HeaderGlobalAction
          aria-label="Notifications"
          aria-controls="notifications-panel"
          @click="actionNotifications" >
          <Icon icon="Notification" :size="20" />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="User avatar" @click="actionUserAvatar" aria-controls="user-panel">
          <Icon icon="UserAvatar" :size="20" />
        </HeaderGlobalAction>
        <HeaderGlobalAction
          aria-label="App switcher"
          aria-controls="switcher-panel"
          @click="actionAppSwitcher">
          <Icon icon="AppSwitcher" :size="20" />
        </HeaderGlobalAction>
      </template>
      <template slot="left-panels" v-if="areLeftPanels">
        <SideNav id="side-nav" fixed>
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="javascript:void(0)">
                Link 1
              </HeaderMenuItem>
              <HeaderMenuItem href="javascript:void(0)">
                Link 2
              </HeaderMenuItem>
              <HeaderMenuItem href="javascript:void(0)">
                Link 3
              </HeaderMenuItem>
              <HeaderMenu aria-label="Link 4" title="Link 4" :hover-toggle="false">
                <HeaderMenuItem href="javascript:void(0)">
                  Submenu Link 1
                </HeaderMenuItem>
                <HeaderMenuItem href="javascript:void(0)">
                  Submenu Link 2
                </HeaderMenuItem>
                <HeaderMenuItem href="javascript:void(0)">
                  Submenu Link 3
                </HeaderMenuItem>
              </HeaderMenu>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
      </template>
      <template slot="right-panels" v-if="areRightPanels">

      </template>
    </Header>
  `
})
HeaderBaseWithNavigationAndActions.argTypes = {
  actionNotifications: { action: 'actionNotifications' },
  actionUserAvatar: { action: 'actionUserAvatar' },
  actionAppSwitcher: { action: 'actionAppSwitcher' },
}

export const HeaderBaseWithActionsAndRightPanels = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Header aria-label="Carbon header">
      <SkipToContent href="#main-content">
        Skip to content
      </SkipToContent>
      <HeaderName href="javascript:void(0)" prefix="IBM">
        [Platform]
      </HeaderName>
      <template slot="header-global">
        <HeaderGlobalAction
          aria-label="Notifications"
          aria-controls="notifications-panel"
          @click="actionNotifications" >
          <Icon icon="Notification" :size="20" />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="User avatar" @click="actionUserAvatar" aria-controls="user-panel">
          <Icon icon="UserAvatar" :size="20" />
        </HeaderGlobalAction>
        <HeaderGlobalAction
          aria-label="App switcher"
          aria-controls="switcher-panel"
          @click="actionAppSwitcher">
          <Icon icon="AppSwitcher" :size="20" />
        </HeaderGlobalAction>
      </template>
      <template slot="left-panels" v-if="areLeftPanels">

      </template>
      <template slot="right-panels" v-if="areRightPanels">
        <HeaderPanel  id="user-panel">
          An empty user panel
        </HeaderPanel>
        <HeaderPanel  id="notifications-panel">
          An empty panel
        </HeaderPanel>
        <HeaderPanel id="switcher-panel">
          <Switcher>
            <SwitcherItem>
              <SwitcherItemLink href="javascript:void(0)" selected>
                Selected app
              </SwitcherItemLink>
            </SwitcherItem>
            <SwitcherItem>
              <SwitcherItemLink href="javascript:void(0)">
                Other app
              </SwitcherItemLink>
            </SwitcherItem>
            <SwitcherItem>
              <SwitcherItemLink href="javascript:void(0)">
                Other app
              </SwitcherItemLink>
            </SwitcherItem>
            <SwitcherItem>
              <SwitcherItemLink href="javascript:void(0)">
                Other app
              </SwitcherItemLink>
            </SwitcherItem>
            <SwitcherItem>
              <SwitcherItemLink href="javascript:void(0)">
                Other app
              </SwitcherItemLink>
            </SwitcherItem>
            <SwitcherItem>
              <SwitcherItemLink href="javascript:void(0)">
                Other app
              </SwitcherItemLink>
            </SwitcherItem>
          </Switcher>
        </HeaderPanel>
      </template>
    </Header>
  `
})
HeaderBaseWithActionsAndRightPanels.argTypes = {
  actionNotifications: { action: 'actionNotifications' },
  actionUserAvatar: { action: 'actionUserAvatar' },
  actionAppSwitcher: { action: 'actionAppSwitcher' },
}

export const FixedSideNav = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  template: `
    <div>
      <Header aria-label="Carbon header">
        <SkipToContent href="#main-content">
          Skip to content
        </SkipToContent>
        <HeaderName href="javascript:void(0)" prefix="IBM">
          [Platform]
        </HeaderName>
        <template slot="left-panels" v-if="$props.areLeftPanels">

        </template>
        <template slot="right-panels" v-if="$props.areRightPanels">

        </template>
      </Header>

      <SideNav id="side-nav" fixed expanded>
        <SideNavItems>
          <SideNavMenu title="L1 menu">
            <SideNavMenuItem href="javascript:void(0)" active>
              L2 menu item
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">
              L2 menu item
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">
              L2 menu item
            </SideNavMenuItem>
          </SideNavMenu>
          <SideNavMenu title="L1 menu">
            <SideNavMenuItem href="javascript:void(0)">
              L2 menu item
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)" aria-current="page">
              L2 menu item
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">
              L2 menu item
            </SideNavMenuItem>
          </SideNavMenu>
          <SideNavLink href="javascript:void(0)">
            L1 link
          </SideNavLink>
          <SideNavLink href="javascript:void(0)">
            L1 link
          </SideNavLink>
        </SideNavItems>
      </SideNav>
    </div>
  `
})

export const FixedSideNavWithIcons = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  template: `
  <div>
    <Header aria-label="Carbon header">
      <SkipToContent href="#main-content">
        Skip to content
      </SkipToContent>
      <HeaderName href="javascript:void(0)" prefix="IBM">
        [Platform]
      </HeaderName>
        <template slot="left-panels" v-if="$props.areLeftPanels">

        </template>
        <template slot="right-panels" v-if="$props.areRightPanels">

      </template>
    </Header>

    <SideNav id="side-nav" fixed expanded>
      <SideNavItems>
        <SideNavMenu title="L1 menu">
          <template slot="nav-icon"><Icon icon="Fade" /></template>
          <SideNavMenuItem href="javascript:void(0)" active>
            L2 menu item
          </SideNavMenuItem>
          <SideNavMenuItem href="javascript:void(0)">
            L2 menu item
          </SideNavMenuItem>
          <SideNavMenuItem href="javascript:void(0)">
            L2 menu item
          </SideNavMenuItem>
        </SideNavMenu>
        <SideNavMenu title="L1 menu">
          <template slot="nav-icon"><Icon icon="Fade" /></template>
          <SideNavMenuItem href="javascript:void(0)">
            L2 menu item
          </SideNavMenuItem>
          <SideNavMenuItem href="javascript:void(0)" aria-current="page">
            L2 menu item
          </SideNavMenuItem>
          <SideNavMenuItem href="javascript:void(0)">
            L2 menu item
          </SideNavMenuItem>
        </SideNavMenu>
        <SideNavLink href="javascript:void(0)">
          <template slot="nav-icon"><Icon icon="Fade" /></template>
          L1 link
        </SideNavLink>
        <SideNavLink href="javascript:void(0)">
          <template slot="nav-icon"><Icon icon="Fade" /></template>
          L1 link
        </SideNavLink>
      </SideNavItems>
    </SideNav>
  </div>
  `
})

export const SideNavRail = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Header aria-label="Carbon header">
      <template slot="left-panels" v-if="$props.areLeftPanels">
        <SideNav id="side-nav" rail>
          <SideNavItems>
            <SideNavMenu title="L1 menu">
              <template slot="nav-icon"><Icon icon="Fade" /></template>
              <SideNavMenuItem href="javascript:void(0)" active>
                L2 menu item
              </SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)">
                L2 menu item
              </SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)">
                L2 menu item
              </SideNavMenuItem>
            </SideNavMenu>
            <SideNavMenu title="L1 menu">
              <template slot="nav-icon"><Icon icon="Fade" /></template>
              <SideNavMenuItem href="javascript:void(0)">
                L2 menu item
              </SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)" aria-current="page">
                L2 menu item
              </SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)">
                L2 menu item
              </SideNavMenuItem>
            </SideNavMenu>
            <SideNavLink href="javascript:void(0)">
              <template slot="nav-icon"><Icon icon="Fade" /></template>
              L1 link
            </SideNavLink>
            <SideNavLink href="javascript:void(0)">
              <template slot="nav-icon"><Icon icon="Fade" /></template>
              L1 link
            </SideNavLink>
          </SideNavItems>
        </SideNav>
      </template>
      <template slot="right-panels" v-if="$props.areRightPanels">

      </template>
    </Header>`
})

export const SideNavRailWithHeader = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
  <Header aria-label="Carbon header">
    <HeaderMenuButton aria-label="Header menu" aria-controls="side-nav" />
    <SkipToContent href="#main-content">
      Skip to content
    </SkipToContent>
    <HeaderName href="javascript:void(0)" prefix="IBM">
      [Platform]
    </HeaderName>
      <template slot="left-panels" v-if="$props.areLeftPanels">

        <SideNav id="side-nav" rail>
          <SideNavItems>
            <SideNavMenu title="L1 menu">
              <template slot="nav-icon"><Icon icon="Fade" /></template>
              <SideNavMenuItem href="javascript:void(0)" active>
                L2 menu item
              </SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)">
                L2 menu item
              </SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)">
                L2 menu item
              </SideNavMenuItem>
            </SideNavMenu>
            <SideNavMenu title="L1 menu">
              <template slot="nav-icon"><Icon icon="Fade" /></template>
              <SideNavMenuItem href="javascript:void(0)">
                L2 menu item
              </SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)" aria-current="page">
                L2 menu item
              </SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)">
                L2 menu item
              </SideNavMenuItem>
            </SideNavMenu>
            <SideNavLink href="javascript:void(0)">
              <template slot="nav-icon"><Icon icon="Fade" /></template>
              L1 link
            </SideNavLink>
            <SideNavLink href="javascript:void(0)">
              <template slot="nav-icon"><Icon icon="Fade" /></template>
              L1 link
            </SideNavLink>
          </SideNavItems>
        </SideNav>
      </template>
      <template slot="right-panels" v-if="$props.areRightPanels">
    </template>
  </Header>`
})

export const HeaderBaseWithSideNav = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Header aria-label="Carbon header">
      <HeaderMenuButton aria-label="Header menu" aria-controls="side-nav" />
      <SkipToContent href="#main-content">
        Skip to content
      </SkipToContent>
      <HeaderName href="javascript:void(0)" prefix="IBM">
        [Platform]
      </HeaderName>
        <template slot="left-panels" v-if="$props.areLeftPanels">

          <SideNav id="side-nav">
            <SideNavItems>
              <SideNavMenu title="L1 menu">
                <SideNavMenuItem href="javascript:void(0)" active>
                  L2 menu item
                </SideNavMenuItem>
                <SideNavMenuItem href="javascript:void(0)">
                  L2 menu item
                </SideNavMenuItem>
                <SideNavMenuItem href="javascript:void(0)">
                  L2 menu item
                </SideNavMenuItem>
              </SideNavMenu>
              <SideNavMenu title="L1 menu" expanded>
                <SideNavMenuItem href="javascript:void(0)">
                  L2 menu item
                </SideNavMenuItem>
                <SideNavMenuItem href="javascript:void(0)" aria-current="page">
                  L2 menu item
                </SideNavMenuItem>
                <SideNavMenuItem href="javascript:void(0)">
                  L2 menu item
                </SideNavMenuItem>
              </SideNavMenu>
              <SideNavLink href="javascript:void(0)">
                L1 link
              </SideNavLink>
              <SideNavLink href="javascript:void(0)">
                L1 link
              </SideNavLink>
            </SideNavItems>
          </SideNav>
        </template>
        <template slot="right-panels" v-if="$props.areRightPanels">
      </template>
    </Header>`
})

export const HeaderBaseWithSideNavAndIcons = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <Header aria-label="Carbon header">
      <HeaderMenuButton aria-label="Header menu" aria-controls="side-nav" />
      <SkipToContent href="#main-content">
        Skip to content
      </SkipToContent>
      <HeaderName href="javascript:void(0)" prefix="IBM">
        [Platform]
      </HeaderName>
      <template slot="left-panels" v-if="areLeftPanels">
        <SideNav id="side-nav">
          <SideNavItems>
            <SideNavMenu title="L1 menu">
              <template slot="nav-icon"><Icon icon="Fade" /></template>
              <SideNavMenuItem href="javascript:void(0)" active>
                L2 menu item
              </SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)">
                L2 menu item
              </SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)">
                L2 menu item
              </SideNavMenuItem>
            </SideNavMenu>
            <SideNavMenu title="L1 menu">
              <template slot="nav-icon"><Icon icon="Fade" /></template>
              <SideNavMenuItem href="javascript:void(0)">
                L2 menu item
              </SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)" aria-current="page">
                L2 menu item
              </SideNavMenuItem>
              <SideNavMenuItem href="javascript:void(0)">
                L2 menu item
              </SideNavMenuItem>
            </SideNavMenu>
            <SideNavLink href="javascript:void(0)">
              <template slot="nav-icon"><Icon icon="Fade" /></template>
              L1 link
            </SideNavLink>
            <SideNavLink href="javascript:void(0)">
              <template slot="nav-icon"><Icon icon="Fade" /></template>
              L1 link
            </SideNavLink>
          </SideNavItems>
        </SideNav>
      </template>
      <template slot="right-panels" v-if="areRightPanels">

      </template>
    </Header>
    `
})

export const HeaderBaseWithSeperateSideNav = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div>
      <Header aria-label="Carbon header">
        <SkipToContent href="#main-content">
          Skip to content
        </SkipToContent>
        <HeaderName href="javascript:void(0)" prefix="IBM">
          [Platform]
        </HeaderName>
        <template slot="left-panels" v-if="areLeftPanels">

        </template>
        <template slot="right-panels" v-if="areRightPanels">

        </template>
      </Header>

      <SideNav id="side-nav">
        <SideNavItems>
          <SideNavMenu title="L1 menu">
            <SideNavMenuItem href="javascript:void(0)" active>
              L2 menu item
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">
              L2 menu item
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">
              L2 menu item
            </SideNavMenuItem>
          </SideNavMenu>
          <SideNavMenu title="L1 menu">
            <SideNavMenuItem href="javascript:void(0)">
              L2 menu item
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)" aria-current="page">
              L2 menu item
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">
              L2 menu item
            </SideNavMenuItem>
          </SideNavMenu>
          <SideNavLink href="javascript:void(0)">
            L1 link
          </SideNavLink>
          <SideNavLink href="javascript:void(0)">
            L1 link
          </SideNavLink>
        </SideNavItems>
      </SideNav>
    </div>
    `
})

export const HeaderBaseWithSeperateSideNavAndIcons = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div>
      <Header aria-label="Carbon header">
        <SkipToContent href="#main-content">
          Skip to content
        </SkipToContent>
        <HeaderName href="javascript:void(0)" prefix="IBM">
          [Platform]
        </HeaderName>
        <template slot="left-panels" v-if="areLeftPanels">

        </template>
        <template slot="right-panels" v-if="areRightPanels">

        </template>
      </Header>

      <SideNav id="side-nav">
        <SideNavItems>
          <SideNavMenu title="L1 menu">
            <template slot="nav-icon"><Icon icon="Fade" /></template>
            <SideNavMenuItem href="javascript:void(0)" active>
              L2 menu item
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">
              L2 menu item
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">
              L2 menu item
            </SideNavMenuItem>
          </SideNavMenu>
          <SideNavMenu title="L1 menu">
            <template slot="nav-icon"><Icon icon="Fade" /></template>
            <SideNavMenuItem href="javascript:void(0)">
              L2 menu item
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)" aria-current="page">
              L2 menu item
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">
              L2 menu item
            </SideNavMenuItem>
          </SideNavMenu>
          <SideNavLink href="javascript:void(0)">
            <template slot="nav-icon"><Icon icon="Fade" /></template>
            L1 link
          </SideNavLink>
          <SideNavLink href="javascript:void(0)">
            <template slot="nav-icon"><Icon icon="Fade" /></template>
            L1 link
          </SideNavLink>
        </SideNavItems>
      </SideNav>
    </div>
    `
})
