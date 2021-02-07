
import Home from '../containers/Dashboard/home';
import Content from '../containers/Content/Content';


import AllProducts from '../containers/Products/AllProducts/allProducts';
import AddProduct from '../containers/Products/AddProduct/addProduct';
import Attributes from '../containers/Products/Attributes/attributes';
import Categories from '../containers/Products/Categories/categories';
import Request from '../containers/Products/Request/request';
import Tags from '../containers/Products/Tags/tags';

import Orders from '../containers/Analytics/Orders/Order'
import Overview from '../containers/Analytics/Overview/Overview'
import Products from '../containers/Analytics/Products/Products'
import Stocks from '../containers/Analytics/Stocks/Stocks'

import Customers from '../containers/GCommerce/Customers/Customers'
import Memberships from '../containers/GCommerce/Memberships/Memberships'
import GCommerceOrders from '../containers/GCommerce/Orders/Order'
import PointsAndRewards from '../containers/GCommerce/Points&Rewards/Points&Rewards'
import Reports from '../containers/GCommerce/Reports/Reports'
import Settings from '../containers/GCommerce/Settings/Settings'
import Whychooseus from '../containers/whychooseus/whychooseus'
import ClientReivews from '../containers/ClientReivews/ClientReivews'
import AchievementsandPressRelease from '../containers/AchievementsandPressRelease/AchievementsandPressRelease'

import EventHistory from '../containers/Event/EventHistory/EventHistory'
import UpcomingEvents from '../containers/Event/UpcomingEvents/UpcomingEvents'
import CompletedEvent from '../containers/Event/CompletedEvent/CompletedEvent'
import Package from '../containers/Package/Package'
import teamMembers from '../containers/teamMembers/teamMembers'
import Gellary from '../containers/Gellary/Gellary'

import Coupons from '../containers/Marketing/Coupons/Coupon'

import ContactForm from '../containers/Contact/ContactForm/ContactForm'
import Supports from '../containers/Contact/Supports/Supports'

import {
    SelectOutlined,
    TeamOutlined,
    AimOutlined,
    UserSwitchOutlined,
    DashboardOutlined,
    StockOutlined,
    TrophyOutlined,
    OrderedListOutlined,
    FileSearchOutlined,
    PullRequestOutlined,
    TagsOutlined,
    BorderInnerOutlined,
    HomeOutlined,
    ProfileOutlined,
    AppstoreAddOutlined,
    AreaChartOutlined,
    ContactsOutlined,
    ReconciliationOutlined,
    SettingOutlined,
    BookOutlined,
    SkinOutlined,
    ThunderboltOutlined,
    GiftOutlined,
    MedicineBoxOutlined,
    NotificationOutlined,
} from "@ant-design/icons";

const routes = [
    {

        name: "Dashboard",
        path: "/",
        icon: <DashboardOutlined />,
        subRoutes: [
            {
                path: "/",
                name: "Home",
                icon: <HomeOutlined />,
                component: Home,
            },
            {
                path: "/Content",
                name: "Content",
                icon: <HomeOutlined />,
                component: Content,
            },
          
        ]

    },
    {
        name: "About",
        icon: <BookOutlined />,
        subRoutes: [
            {
                path: "/whychooseus",
                name: "Why Choose US",
                icon: <ProfileOutlined />,
                component:Whychooseus,
            },
            {
                path: "/clientreview",
                name: "Client Review",
                icon: <ProfileOutlined />,
                component:ClientReivews,
            },
            {
                path: "/AchievementsandPressRelease",
                name: "Achievements",
                icon: <ProfileOutlined />,
                component:AchievementsandPressRelease,
            },
           
        ]

    },
    {

        name: "Our Works",
        icon: <AreaChartOutlined />,
        subRoutes: [
            {
                path: "/EventHistory",
                name: "Event History",
                icon: <AimOutlined />,
                component: EventHistory,
            },
            {
                path: "/UpcomingEvents",
                name: "Manage Events",
                icon: <SkinOutlined />,
                component: UpcomingEvents,
            },
            {
                path: "/completedEvent",
                name: "Completed Event",
                icon: <StockOutlined />,
                component: CompletedEvent,
            },
            
        ]

    },
    {

        name: "Our Team",
        icon: <ThunderboltOutlined />,
        subRoutes: [
            {
                path: "/teamMembers",
                name: "Team Members",
                icon: <TeamOutlined />,
                component: teamMembers,

            }
         
        ]

    },
    {

        name: "Gallery",
        icon: <NotificationOutlined />,
        subRoutes: [
            {
                path: "/Gellary",
                name: "Gallery",
                icon: <GiftOutlined />,
                component: Gellary,

            }
        ]

    },
    {

        name: "Package",
        icon: <ContactsOutlined />,
        subRoutes: [
            {
                path: "/Package",
                name: "Package",
                icon: <ContactsOutlined />,
                component: Package,

            },
            
        ]

    },
    {

        name: "Contact",
        icon: <ContactsOutlined />,
        subRoutes: [
            {
                path: "/ContactForm",
                name: "Contact Form",
                icon: <ContactsOutlined />,
                component: ContactForm,

            },
            {
                path: "/Supports",
                name: "Supports",
                icon: <MedicineBoxOutlined />,
                component: Supports,

            }
        ]

    },
    {

        name: "Social Work",
        icon: <ContactsOutlined />,
        subRoutes: [
            {
                path: "/ContactForm",
                name: "Contact Form",
                icon: <ContactsOutlined />,
                component: ContactForm,

            },
            {
                path: "/Supports",
                name: "Supports",
                icon: <MedicineBoxOutlined />,
                component: Supports,

            }
        ]

    },
]

export default routes;