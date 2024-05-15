
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PreviewIcon from '@mui/icons-material/Preview';
import HomeIcon from '@mui/icons-material/Home';

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
    }
]