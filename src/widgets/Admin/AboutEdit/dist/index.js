"use strict";
exports.__esModule = true;
var react_admin_1 = require("react-admin");
var Markdown_1 = require("features/Markdown");
function AboutEdit() {
    return (React.createElement(react_admin_1.Edit, null,
        React.createElement(react_admin_1.SimpleForm, null,
            React.createElement(react_admin_1.TextInput, { source: "id" }),
            React.createElement(Markdown_1["default"], { value: "content" }),
            React.createElement(react_admin_1.TextInput, { source: "menu" }),
            React.createElement(react_admin_1.TextInput, { source: "route" }),
            React.createElement(react_admin_1.NumberInput, { source: "topBar" }),
            React.createElement(react_admin_1.DateInput, { source: "created_at" }),
            React.createElement(react_admin_1.DateInput, { source: "updated_at" }))));
}
exports["default"] = AboutEdit;
;
