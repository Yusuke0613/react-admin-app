import * as React from 'react';
import BuildIcon from '@material-ui/icons/Build';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DnsIcon from '@material-ui/icons/Dns';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import { MenuItem } from 'app/types';

const menus: MenuItem[] = [
    {
        icon: 'fa fa-tachometer',
        text: 'Dashboard',
        description: '',
        link: '/admin/dashboard',
    },
    {
        icon: 'fa fa-table',
        text: 'DataTable',
        description: '',
        link: '/admin/examples/datatable',
    },
    {
        icon: <DashboardIcon />,
        text: 'Others',
        description: '',
        link: '',
        children: [
            {
                icon: <PeopleIcon />,
                text: 'Users',
                description: '',
                link: '',
            },
            {
                icon: <BarChartIcon />,
                text: 'Reports',
                description: '',
                children: [
                    {
                        icon: <BarChartIcon />,
                        text: 'Menu 3-1',
                    },
                    {
                        icon: <BarChartIcon />,
                        text: 'Menu 3-2',
                    },
                    {
                        icon: <BarChartIcon />,
                        text: 'Menu 3-3',
                    },
                ],
            },
            {
                icon: <LayersIcon />,
                text: 'Integrations',
                description: '',
                link: '',
            },
        ],
    },
];

export default menus;
