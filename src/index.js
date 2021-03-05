// imports
import Accordion from './components/Accordion/Accordion.js'
import AccordionItem from './components/Accordion/AccordionItem'
import Breadcrumb from './components/Breadcrumbs/Breadcrumb'
import BreadcrumbItem from './components/Breadcrumbs/BreadcrumbItem'
import Button from './components/Button/Button.js'
import ButtonSet from './components/Button/ButtonSet'
import Checkbox from './components/Checkbox/Checkbox'

import CodeSnippet from './components/CodeSnippet/CodeSnippet'

import ComboBox from './components/ComboBox/ComboBox'

import DataTable from './components/DataTable/DataTable'
import DataTableAction from './components/DataTable/DataTableAction'
import DataTableCell from './components/DataTable/DataTableCell'
import DataTableHeading from './components/DataTable/DataTableHeading'
import DataTableRow from './components/DataTable/DataTableRow'

import Dropdown from './components/Dropdown/Dropdown'
import DropdownItem from './components/Dropdown/DropdownItem'
import FeedbackButton from './components/FeedbackButton/FeedbackButton'
import Fieldset from './components/Fieldset/Fieldset'
import Form from './components/Form/Form'
import FormGroup from './components/Form/FormGroup'
import FormItem from './components/Form/FormItem'
import Grid from './components/Grid/Grid'
import Header from './components/UIShell/Header'
import HeaderGlobalAction from './components/UIShell/HeaderGlobalAction'
import HeaderMenu from './components/UIShell/HeaderMenu'
import HeaderMenuButton from './components/UIShell/HeaderMenuButton'
import HeaderMenuItem from './components/UIShell/HeaderMenuItem'
import HeaderName from './components/UIShell/HeaderName'
import HeaderNav from './components/UIShell/HeaderNav'
import HeaderPanel from './components/UIShell/HeaderPanel'
import HeaderSideNavItems from './components/UIShell/HeaderSideNavItems'
import Icon from './components/Icon/Icon'
import Legend from './components/Legend/Legend'
import Loading from './components/Loading/Loading'
import Link from './components/Link/Link.js'
import Modal from './components/Modal/Modal'
import ModalApi from './components/Modal/_ModalApi.js';
import NumberInput from './components/NumberInput/NumberInput';
import OverflowMenu from './components/OverflowMenu/OverflowMenu';
import OverflowMenuItem from './components/OverflowMenu/OverflowMenuItem';
import Pagination from './components/Pagination/Pagination';
import Progress from './components/Progress/Progress';
import ProgressStep from './components/Progress/ProgressStep';
import RadioButton from './components/RadioButton/RadioButton'
import RadioGroup from './components/RadioButton/RadioGroup'
import Select from './components/Select/Select'
import SelectOption from './components/Select/SelectOption'
import SelectOptionGroup from './components/Select/SelectOptionGroup'
import SideNav from './components/UIShell/SideNav'
import SideNavFooter from './components/UIShell/SideNavFooter'
import SideNavIcon from './components/UIShell/SideNavIcon'
import SideNavItems from './components/UIShell/SideNavItems'
import SideNavLink from './components/UIShell/SideNavLink'
import SideNavLinkText from './components/UIShell/SideNavLinkText'
import SideNavMenu from './components/UIShell/SideNavMenu'
import SideNavMenuItem from './components/UIShell/SideNavMenuItem'
import Slider from './components/Slider/Slider'
import SkipToContent from './components/UIShell/SkipToContent'
import Switcher from './components/UIShell/Switcher'
import SwitcherItem from './components/UIShell/SwitcherItem'
import SwitcherItemLink from './components/UIShell/SwitcherItemLink'
import Tab from './components/Tabs/Tab'
import Tag from './components/Tag/Tag'
import Tabs from './components/Tabs/Tabs'
import TextArea from './components/TextArea/TextArea'
import TextInput from './components/TextInput/TextInput'
import Tile from './components/Tile/Tile'
import TimePicker from './components/TimePicker/TimePicker'
import ToastApi from './components/ToastNotification/_ToastApi.js';
import ToastNotification from './components/ToastNotification/ToastNotification';
import Toggle from './components/Toggle/Toggle';
import Tooltip from './components/Tooltip/Tooltip'
import TooltipDefinition from './components/Tooltip/TooltipDefinition';
import TooltipInteractive from './components/Tooltip/TooltipInteractive';
import Wrapper from './components/Wrapper/Wrapper'


const ctx = require.context('./components/', true, /^(?!.*(?:\/_|-|.stories\.js|_.+\.js|index\.js|Skeleton\.js)).*\.(vue|js)$/);
const components = ctx.keys().map(ctx);

// Export the components as a plugin
export default {
  // options is an array of components to be registered
  // e.g. ['c-button', 'c-modal']
  install(Vue, options) {
    if (typeof options === 'undefined') {
      for (let compItem of components) {
        Vue.component(compItem.default.name, compItem.default);

        let ModalMethods = ModalApi(Vue, options);
        Vue.$modal = ModalMethods;
        Vue.prototype.$modal = ModalMethods;

        let ToastMethods = ToastApi(Vue, options);
        Vue.$toaster = ToastMethods;
        Vue.prototype.$toaster = ToastMethods;
      }
    } else {
      if (!(options instanceof Array)) {
        throw new TypeError('options must be an array');
      }

      for (let compItem of components) {
        // register only components specified in the options
        if (options.includes(compItem.default.name)) {
          Vue.component(compItem.default.name, compItem.default);
          if(compItem.default.name === 'Modal') {
            let ModalMethods = ModalApi(Vue, options);
            Vue.$modal = ModalMethods;
            Vue.prototype.$modal = ModalMethods;
          }
          if(compItem.default.name === 'ToastNotifications') {
            let ToastMethods = ToastApi(Vue, options);
            Vue.$toaster = ToastMethods;
            Vue.prototype.$toaster = ToastMethods;
          }
        }
      }
    }
    let ModalMethods = ModalApi(Vue, options);
    Vue.$modal = ModalMethods;
    Vue.prototype.$modal = ModalMethods;

    let ToastMethods = ToastApi(Vue, options);
    Vue.$toaster = ToastMethods;
    Vue.prototype.$toaster = ToastMethods;
  },

};

// exports
export { Accordion, AccordionItem };
export { Breadcrumb, BreadcrumbItem };
export { Button, ButtonSet};
export { Checkbox };
export { CodeSnippet };
export { ComboBox };

export { DataTable, DataTableRow, DataTableCell, DataTableAction, DataTableHeading };

export { Dropdown, DropdownItem };
export { FeedbackButton };
export { Fieldset };
export { Form, FormItem, FormGroup };
export { Grid };

export { Icon }
export { Legend }
export { Loading }
export { SideNavFooter }
export { SideNavLinkText }
export { Link };


export { Modal };
export { NumberInput };
export { OverflowMenu, OverflowMenuItem };
export { Pagination };
export { Progress };
export { ProgressStep };

export { RadioGroup, RadioButton };

export { Select, SelectOption, SelectOptionGroup };
export { Slider };

export { Tab, Tabs };
export { Tag };

export { TextArea };
export { TextInput };
export { Tile };
export { TimePicker };

export { ToastNotification };
export { Wrapper };


export { Tooltip, TooltipInteractive, TooltipDefinition };
export {
  // Content,
  HeaderGlobalAction,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderMenu,
  HeaderName,
  HeaderPanel,
  HeaderNav,
  HeaderSideNavItems,
  Header,
  SideNav,
  SideNavIcon,
  SideNavItems,
  SideNavLink,
  SideNavMenuItem,
  SideNavMenu,
  SkipToContent,
  SwitcherItemLink,
  SwitcherItem,
  Switcher,
  Toggle,
};
