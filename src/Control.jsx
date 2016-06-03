/**
 * @file 所有组件基类
 * @author guoyao(wuguoyao@baidu.com)
 **/

import React from 'react';

export default class Control extends React.Component {
    static propTypes = {
        ...React.Component.propTypes,
        label: React.PropTypes.string
    }

    static defaultProps = {
        ...React.Component.defaultProps,
        label: ''
    }

    renderLabel() {
        return (
            <label>
                {this.props.label}
            </label>
        );
    }

    renderControl() {
        return (
            <div className="eui-ctrl">
                {this.props.children}
            </div>
        );
    }

    render() {
        let children = this.renderControl();

        if (this.props.label) {
            children = (
                <div className="eui-ctrl-wrapper">
                    {this.renderLabel()}
                    {children}
                </div>
            );
        }

        return children;
    }
}
