
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
            // {
            //     path: "/professionalTeam",
            //     name: "professional Team",
            //     icon: <HomeOutlined />,
            //     component: professionalTeam,
            // },
            // {
            //     path: "/ClientReview",
            //     name: "Client Review",
            //     icon: <HomeOutlined />,
            //     component: ClientReview,
            // }
        ]

    },
    {
        name: "About",
        icon: <BookOutlined />,
        subRoutes: [
            {
                path: "/whychooseus",
                name: "why choose us",
                icon: <ProfileOutlined />,
                component:Whychooseus,
            },
            {
                path: "/clientreview",
                name: "client review",
                icon: <ProfileOutlined />,
                component:ClientReivews,
            },
            {
                path: "/AchievementsandPressRelease",
                name: "Achievements & Press Release",
                icon: <ProfileOutlined />,
                component:AchievementsandPressRelease,
            },
            // {
            //     path: "/AddProduct",
            //     name: "Add Product",
            //     icon: <BorderInnerOutlined />,
            //     component: AddProduct,
            // },

            // {
            //     path: "/Attributes",
            //     name: "Attributes",
            //     icon: <FileSearchOutlined />,
            //     component: Attributes,
            // },
            // {
            //     path: "/Categories",
            //     name: "Categories",
            //     icon: <AppstoreAddOutlined />,
            //     component: Categories,
            // },
            // {
            //     path: "/Request",
            //     name: "Request",
            //     icon: <PullRequestOutlined />,
            //     component: Request,
            // },
            // {
            //     path: "/Tags",
            //     name: "Tags",
            //     icon: <TagsOutlined />,
            //     component: Tags,
            // },
        ]

    },
    {

        name: "Our Works",
        icon: <AreaChartOutlined />,
        subRoutes: [
            {
                path: "/Overview",
                name: "Overview",
                icon: <AimOutlined />,
                component: Overview,
            },
            {
                path: "/Products",
                name: "Products",
                icon: <SkinOutlined />,
                component: Products,
            },
            {
                path: "/Stocks",
                name: "Stocks",
                icon: <StockOutlined />,
                component: Stocks,
            },
            {
                path: "/Analytics/Orders",
                name: "Order ",
                icon: <OrderedListOutlined />,
                component: GCommerceOrders,
            },
        ]

    },
    {

        name: "Our Team",
        icon: <ThunderboltOutlined />,
        subRoutes: [
            {
                path: "/GCommerce/Customers",
                name: "Customers",
                icon: <TeamOutlined />,
                component: Customers,

            },
            {
                path: "/GCommerce/Memberships",
                name: "Memberships",
                icon: <UserSwitchOutlined />,
                component: Memberships,

            },
            {
                path: "/GCommerce/Orders",
                name: "Orders",
                icon: <SelectOutlined />,
                component: Orders,

            },
            {
                path: "/GCommerce/PointsAndRewards",
                name: "P&R",
                icon: <TrophyOutlined />,
                component: PointsAndRewards,

            },
            {
                path: "/GCommerce/Reports",
                name: "Reports",
                icon: <ReconciliationOutlined />,
                component: Reports,

            },
            {
                path: "/GCommerce/Settings",
                name: "Settings",
                icon: <SettingOutlined />,
                component: Settings,

            },
        ]

    },
    {

        name: "Gellary",
        icon: <NotificationOutlined />,
        subRoutes: [
            {
                path: "/Coupons",
                name: "Coupons",
                icon: <GiftOutlined />,
                component: Coupons,

            }
        ]

    },
    {

        name: "Package",
        icon: <ContactsOutlined />,
        subRoutes: [
            {
                path: "/ContactForm",
                name: "ContactForm",
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

        name: "Contact",
        icon: <ContactsOutlined />,
        subRoutes: [
            {
                path: "/ContactForm",
                name: "ContactForm",
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
                name: "ContactForm",
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