import { ApolloQueryResult } from '@apollo/client';

import { MenuType } from 'shared/types';

import api from 'api';

import { FETCH_MENU_QUERY } from '../queries';
import { FormattersHelper } from 'shared/helpers';

const getItems = async ():Promise<ApolloQueryResult<MenuType>> => {
    const result = await api.client.query<MenuType>({ query: FETCH_MENU_QUERY });

    if(result.data && result.data.menuItems.data.length) {
        const formattedList = result.data.menuItems.data.map(item => ({...item, ...{ attributes: { url: FormattersHelper.checkLinkUrl(item.attributes.url), title: item.attributes.title }}}))
        result.data = {
            ...result.data,
            ...{
                menuItems: {
                    data: formattedList
                }
            }
        }
    }

    return result;
};

export const menu = {
    getItems
}