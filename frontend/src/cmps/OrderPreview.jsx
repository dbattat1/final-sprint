import React from "react";
import { Link } from "react-router-dom";
import { Header, Image, Table } from 'semantic-ui-react'

export function OrderPreview(props) {
    const { order } = props;

    return (
                <Table.Row>
                    <Table.Cell>
                        <Header as='h4' image>
                            <Image src={order.buyer.imgUrl} circular size='mini' />
                            <Header.Content>
                                {order.buyer.name.first + ' ' + order.buyer.name.last}
                            </Header.Content>
                        </Header>
                    </Table.Cell>
                    <Table.Cell>
                        <Header as='h4' image>
                            <Image src={order.seller.imgUrl} circular size='mini' />
                            <Header.Content>
                                {order.seller.name.first + ' ' + order.seller.name.last}
                            </Header.Content>
                        </Header>
                    </Table.Cell>
                    <Table.Cell>{order.status}</Table.Cell>
                    <Table.Cell>{new Date(order.dueDate).toDateString()}</Table.Cell>
                    <Table.Cell>{order.quantity}</Table.Cell>
                    <Table.Cell>{order.totalPrice}</Table.Cell>
                    <Table.Cell>{new Date(order.createdAt).toDateString()}</Table.Cell>
                </Table.Row>
         
    );
}
