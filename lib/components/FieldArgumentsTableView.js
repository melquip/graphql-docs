'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FieldArgumentsTableView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _model = require('../model');

var _TypeRefView = require('./TypeRefView');

var _DescriptionView = require('./DescriptionView');

var _FieldArgumentsTableView = require('./FieldArgumentsTableView.css');

var StyleSheet = _interopRequireWildcard(_FieldArgumentsTableView);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FieldArgumentsTableView = exports.FieldArgumentsTableView = function (_React$Component) {
    _inherits(FieldArgumentsTableView, _React$Component);

    function FieldArgumentsTableView() {
        _classCallCheck(this, FieldArgumentsTableView);

        return _possibleConstructorReturn(this, (FieldArgumentsTableView.__proto__ || Object.getPrototypeOf(FieldArgumentsTableView)).apply(this, arguments));
    }

    _createClass(FieldArgumentsTableView, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var withDescription = this.props.args.filter(function (a) {
                return a.description;
            });

            if (!withDescription.length) {
                return null;
            }

            return _react2.default.createElement(
                'table',
                { className: StyleSheet.table },
                _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                        'tr',
                        null,
                        _react2.default.createElement(
                            'th',
                            {
                                colSpan: '2',
                                className: StyleSheet.header
                            },
                            'Arguments'
                        )
                    )
                ),
                _react2.default.createElement(
                    'tbody',
                    null,
                    withDescription.map(function (a) {
                        return _this2.renderRow(a);
                    })
                )
            );
        }
    }, {
        key: 'renderRow',
        value: function renderRow(arg) {
            return _react2.default.createElement(
                'tr',
                { key: arg.name, className: StyleSheet.row },
                _react2.default.createElement(
                    'td',
                    {
                        className: StyleSheet.key
                    },
                    _react2.default.createElement(
                        'span',
                        { className: StyleSheet.argumentName },
                        arg.name
                    ),
                    ': ',
                    _react2.default.createElement(_TypeRefView.TypeRefView, { typeRef: arg.type })
                ),
                _react2.default.createElement(
                    'td',
                    {
                        className: StyleSheet.value
                    },
                    arg.description && _react2.default.createElement(_DescriptionView.DescriptionView, { description: arg.description })
                )
            );
        }
    }]);

    return FieldArgumentsTableView;
}(_react2.default.Component);