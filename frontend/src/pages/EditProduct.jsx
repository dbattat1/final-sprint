import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateProduct } from '../actions/productActions.js';
import productService from '../services/productService.js';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { Dropdown } from 'semantic-ui-react'

class EditProduct extends Component {
    state = {
        title: '',
        price: '',
        description: '',
        tags: []
    };

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        const { id } = this.props.match.params;
        if (!id) return;

        productService.get(id).then(user => {
            console.log(user.tags)
            // const tags = _makeSemantic(user.tags)
            this.setState({ ...user.product });
        })
    }

    handleChange = (ev) => {
        let { name, value } = ev.target;
        value = ev.target.type === 'number' ? parseInt(value) : value;
        this.setState({ [name]: value });
    };

    handleSubmit = (ev) => {
        ev.preventDefault();
        const { id } = this.props.match.params;
        if (!id) return;
        productService.get(id)
            .then(user => {
                user.product = this.state;
                this.props.updateProduct(user);
            })
    };

    handleChange1 = (e, { value }) => {
        console.log(value)
    }

    _makeSemantic() {
        return this.state.tags.map(tag => {
            return { value: tag, text: tag }
        })
    }

    handleChangeMultiple = (event) => {
        console.log('multiple', event)
        const { options } = event.target;
        const values = [];
        if (options) {
            for (let i = 0, l = options.length; i < l; i += 1) {
                if (options[i].selected) {
                    values.push(options[i].value);
                }
            }
            this.setState(prevState => ({ ...prevState, tags: values }));
        }
        console.log('state from multiple', this.state);
    };

    render() {
        console.log('This is the state', this.state);
        const { id } = this.props.match.params;
        const { title, price, description } = this.state;
        return (
            <div>
                BBBB
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            title:
                            <input
                                value={title}
                                type="text"
                                name="title"
                                required
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Price:
                            <input
                                value={price}
                                type="number"
                                name="price"
                                required
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Description:
                            <textarea
                                value={description}
                                type="text"
                                name="description"
                                required
                                onChange={this.handleChange}
                            >
                            </textarea>

                        </label>
                    </div>
                    <Dropdown multiple fluid placeholder='Tags' options={this._makeSemantic()} onChange={this.handleChange1.bind(this)} />
                    <Button>Save</Button>
                    {/* <Link to={`/user/${id}`}></Link> */}
                </form>
            </div >
        )
    }
}




const mapStateToProps = (state) => {
    return {
        user: state.product.product,
    };
};

const mapDispatchToProps = {
    updateProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct)


