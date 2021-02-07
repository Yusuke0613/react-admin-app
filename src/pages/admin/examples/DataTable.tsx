import * as React from 'react';
import * as intl from 'react-intl-universal';
import { alert, confirm, loading } from '@bndynet/dialog';

import { service as resourceService } from 'app/service/resource';
import {
    DataTable,
    PageHeader,
    DataTableRequestParameters,
    DataTablePageMeta,
} from 'app/ui';
import utils from 'app/helpers/utils';

class DataTableExample extends React.Component {
    public constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div>
                <PageHeader title="DataTable" />
                <DataTable
                    title="Remote Data"
                    dataPromise={this.tableDataPromise}
                    scrollable={true}
                    onRowClick={this.handleRowClick}
                    onRowsDelete={this.handleRowsDelete}
                />
            </div>
        );
    }

    private handleRowClick(rowData: any) {
        alert(JSON.stringify(rowData));
    }

    private handleRowsDelete() {
        return confirm(intl.get('deleteConfirmMessage')).then(() => {
            // TODO: here to call api
        });
    }

    private tableDataPromise(args: DataTableRequestParameters): Promise<any> {
        let url = '/datatable.json';
        if (args) {
            url += `?page=${args.page || 1}`;
            url += `&pageSize=${args.pageSize || 10}`;

            if (args.sort) {
                url += `&sort=${args.sort}&sortDirection=${args.sortDirection}`;
            }
            if (args.searchText) {
                url += `&search=${args.searchText}`;
            }
        }

        const ajax = resourceService.get(url).then((res: any) => {
            res.forEach(item => {
                item.name = item.name + ' for page #' + args.page;
            });
            const result: DataTablePageMeta = {
                data: res,
                page: (args && args.page) || 1,
                count: 132,
            };
            return result;
        });

        const promiseLoading = new Promise(resolve => {
            loading();
            setTimeout(() => {
                loading(false);
                resolve();
            }, 3000);
        });

        return utils
            .delay(3, ajax, promiseLoading)
            .then((values: any[]) => values[0]);
    }
}

export default DataTableExample;
