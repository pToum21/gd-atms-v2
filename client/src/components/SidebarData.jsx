
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PreviewIcon from '@mui/icons-material/Preview';
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export const SidebarData = [
    {
        title: "Support Hub",
        icon: <HomeIcon />,
        link: "/reviews"
    },
    {
        title: "Create A Ticket",
        icon: <ConfirmationNumberIcon />,
        link: "/create-a-ticket"
    },

    {
        title: "View Your Tickets",
        icon: <PreviewIcon />,
        link: "/view-your-tickets"
    },
    {
        title: "Terminal Map",
        icon: <NewspaperIcon/>,
        link: "/terminal-news"
    },
    {
        title: "Phone Support",
        icon: <ContactPhoneIcon/>,
        link: "/phone-support"
    }
]