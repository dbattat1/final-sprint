import React from "react";
import { Link } from "react-router-dom";
import { Header, Image, Table } from 'semantic-ui-react'

export function OrderPreview(props) {
    const { order } = props;
    console.log('in order prev', order);

    return (
        <Table basic='very' celled collapsing>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Buyer</Table.HeaderCell>
                    <Table.HeaderCell>Seller</Table.HeaderCell>
                    <Table.HeaderCell>Status</Table.HeaderCell>
                    <Table.HeaderCell>Due Date</Table.HeaderCell>
                    <Table.HeaderCell>Quantity</Table.HeaderCell>
                    <Table.HeaderCell>Total Amount</Table.HeaderCell>
                    <Table.HeaderCell>Created At</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Cell>
                        <Header as='h4' image>
                            <Image src={order.buyer.imgUrl} rounded size='mini' />
                            <Header.Content>
                                {order.buyer.name.first + ' ' + order.buyer.name.last}
                            </Header.Content>
                        </Header>
                    </Table.Cell>
                    <Table.Cell>
                        <Header as='h4' image>
                            <Image src={order.seller.imgUrl} rounded size='mini' />
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
            </Table.Body>
        </Table>
    );
}
