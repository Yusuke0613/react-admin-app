import * as React from 'react';

import Typography from '@material-ui/core/Typography';
import {
    Theme,
    createStyles,
    withStyles,
    Grid,
    IconButton,
    Button,
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { Alert, PageHeader, Panel, MiniCard, Tag } from 'app/ui';
import ChartExample from './ChartExample';

const styles = (theme: Theme) =>
    createStyles({
        contentHeader: {
            display: 'flex',
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2),
            marginBottom: theme.spacing(),
            '& h2': {
                flex: 1,
            },
        },
        breadcrumb: {
            display: 'flex',
            '& > *': {
                alignSelf: 'flex-end',
                textDecoration: 'none',
            },
            '& > *:not(:last-child):after': {
                content: '">"',
                display: 'inline-block',
                marginLeft: 5,
                marginRight: 5,
            },
        },
        chartContainer: {},
    });

const renderCard = props => {
    return (
        <Grid item={true} md={3} xs={6}>
            <MiniCard
                title="150"
                description="New Orders"
                {...props}
                links={{ Home: '/', 'More info': '/admin/dashboard' }}
                icon={<ShoppingCartIcon />}
            />
        </Grid>
    );
};

class Dashboard extends React.Component<
    {
        classes: any;
    },
    {}
> {
    public render() {
        const { classes } = this.props;
        return (
            <div data-name="top">
                <PageHeader
                    title="Dashboard"
                    navigation={{
                        Home: '/',
                        Dashboard: null,
                    }}
                />
                <Grid container={true} spacing={2}>
                    {renderCard({ variant: 'info' })}
                    {renderCard({ variant: 'success' })}
                    {renderCard({ variant: 'warning' })}
                    {renderCard({})}
                </Grid>

                <PageHeader title="Chart" />
                <Typography component="div" className={classes.chartContainer}>
                    <ChartExample />
                </Typography>
            </div>
        );
    }
}

export default withStyles(styles)(Dashboard);
