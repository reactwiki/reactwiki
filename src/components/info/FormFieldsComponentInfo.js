import React, {Component} from 'react';
import '../../styling/ComponentStyling.css';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import Prism from "prismjs";
import {
    fieldContainerWidthCode,
    formFieldsCode,
    formFieldsDataCode, formFieldsHandlerCode,
    formFieldsSampleCode, requiredFieldsCode
} from "../../utilities/constants/FormFieldsCodeConstants";

class FormFieldsComponentInfo extends Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return (
            <div>
                <div>
                    <h1 className="display-4" style={{textAlign: "center"}}>Form Fields Component</h1>

                    <section data-aos={"fade-right"} data-aos-delay={"300"}>
                        <h3 style={{textAlign: "left", paddingLeft: 50}}> Glossary </h3>

                        <div style={{textAlign: "left", paddingLeft: 30}}>
                            <ol>
                                <li><a className="nav-link glossary" href="#implementation">Sample Implementation</a>
                                </li>
                                <li><a className="nav-link glossary" href="#api">Props</a></li>
                            </ol>
                        </div>
                    </section>

                    {/*=======================================================
                    ====================== Next Section ======================
                    =======================================================*/}
                    <section id={"implementation"} data-aos={"fade-right"} data-aos-delay={"300"}>
                        <hr/>
                        <h3 style={{textAlign: "left", paddingLeft: 50}}> Sample Implementation </h3>

                        <section className={"codeSampleImplementation"}>
                            <pre className="language-javascript">
                                <code>
                                    {formFieldsSampleCode}
                                </code>
                            </pre>
                        </section>
                    </section>

                    {/*=======================================================
                    ====================== Next Section ======================
                    =======================================================*/}
                    <hr/>
                    <section id={"api"} data-aos={"fade-right"} data-aos-delay={"300"}>
                        <h3 style={{textAlign: "left", paddingLeft: 50}}> Props </h3>

                        <h5 style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Required </h5>

                        <dl className="row">
                            <dt className="col-sm-3"> Name</dt>
                            <dd className="col-sm-9" style={{fontStyle: "italic"}}> formFields
                            </dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9"> The list of form fields to be
                                generated.
                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9">
                                <p> A JSON object whose keys are the key/id for the fields, and values are objects with
                                    properties "label" and "type". They follow the given format: </p>
                                <p style={{marginLeft: "40px"}}>&lt;<i>key/id of field</i>&gt;: &#123; label: &lt;
                                    <i>label</i>&gt;,
                                    type: &lt;<i>type of field</i>&gt; &#125;</p>

                                <p>The different types supported are:</p>
                                <ul>
                                    <li><b>"number"</b> = restricts input to number only</li>
                                    <li><b>"double"</b> = restricts input to double only (&lt;number&gt;.&lt;digits
                                        only&gt;); will append decimal if it is missing from the user's input.
                                    </li>
                                    <li><b>"date"</b> = shows a datepicker, and saves the selection in "mm/dd/yyyy"
                                        format
                                    </li>
                                    <li><b>"text"</b> = allows any input</li>
                                    <li><b>"textarea"</b> = shows a textarea that allows for any input</li>
                                    <li><b>"boolean"</b> = shows a dropdown field with two options: "Yes" or "No", whose values are boolean "true" and "false", respectively.</li>
                                    <li><b>"data"</b> = does not render an input field; only displays data</li>
                                    <li><b>"multilineData"</b> = same as above, but shows a button which, upon clicking,
                                        opens a popup that shows the multi-line data; if value is empty, then the button
                                        is not shown.
                                    </li>
                                    <li><b>"currencyData"</b> = converts a double value (not a string) to currency
                                        format, along with dollar sign ($)
                                    </li>

                                    <li><b>&#123;dropdown: &lt; <i>dropdown values</i> &gt;&#125;</b> = displays a
                                        select field
                                        <ul>
                                            <li><i>dropdown values</i> can be one of the following</li>
                                            <ul>
                                                <li>an array of objects in this format:
                                                    <ul>
                                                        <li>
                                                            &#123;label: &lt;label&gt;,
                                                            value: &lt;value&gt;, color: &lt;color&gt;&#125;
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>a hook callback function that handles the asynchronous retrieval of
                                                    dropdown options, and returns a &lt;Select/&gt; object
                                                </li>
                                            </ul>

                                            <br/>
                                            <li>There are three optional properties available for added features:
                                                <ul>
                                                    <li><b>"menuWidth"</b> = the width that the dropdown options will
                                                        expand
                                                        to. Ideally, this property should be set wide enough where the
                                                        options are readable in one line. By default, the width expands
                                                        to the same width as the select field.
                                                    </li>
                                                    <li><b>"multiselect"</b> = boolean that allows for multiple
                                                        selection of values; is false by default if unspecified
                                                    </li>
                                                    <li><b>"isClearable"</b> = boolean that allows for the "x" symbol to
                                                        appear on the select box allowing it to be clearable upon button
                                                        click; is false by default
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <br/>

                                    <li><b>&#123;lookupValue: &#123; <i>specified properties</i> &#125;&#125;</b> =
                                        displays a text field with a green search button to its right that triggers a
                                        lookup popup to show. The popup contains a SearchFormComponent for looking up
                                        a value, and will pre-populate the FormComponent's field once a selection is
                                        made from the popup.
                                        <ul>
                                            <li><i>specified properties</i> is a JSON object that includes the following
                                                properties:
                                                <ul>
                                                    <li><b>searchFormFields</b> = similar to
                                                        SearchFormComponent/searchFormFields
                                                    </li>
                                                    <li><b>searchGridColumns</b> = similar to
                                                        SearchFormComponent/searchGridColumns
                                                    </li>
                                                    <li><b>reducerID</b> = similar to SearchFormComponent/reducerID</li>
                                                    <li><b>searchID</b> = similar to SearchFormComponent/searchID</li>
                                                    <li><b>searchHandler</b> = similar to
                                                        SearchFormComponent/searchHandler
                                                    </li>
                                                </ul>
                                            </li>
                                            <br/>

                                            <li>There are three optional properties available for added features:
                                                <ul>
                                                    <li><b>additionalFieldsToPopulate</b> = an string array whose
                                                        elements correspond to the keys of the <i>formFields</i> object.
                                                        When a selection is made from the lookup popup result grid,
                                                        these additional fields will be populated based on the selected
                                                        row data.

                                                    </li>
                                                    <li><b>popupClassName</b> = the CSS classname for this popup. It can
                                                        be used to alter its width, and other CSS-related styling.
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </dd>

                            <dt className="col-sm-3"> Example</dt>
                            <dd className="col-sm-9">
                                <section className={"codeSample"}>
                                    <pre className="language-javascript">
                                        <code>
                                            {formFieldsCode}
                                        </code>
                                    </pre>
                                </section>
                            </dd>
                        </dl>

                        {/*-----Next Entry-----*/}
                        <hr width={"85%"}/>

                        <dl className="row">
                            <dt className="col-sm-3"> Name</dt>
                            <dd className="col-sm-9" style={{fontStyle: "italic"}}> formFieldsData
                            </dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9"> The current values for each form
                                field.
                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9"> A JSON object whose keys correspond to
                                keys/ids of formFields, and values are the current values for those fields.
                            </dd>

                            <dt className="col-sm-3"> Example</dt>
                            <dd className="col-sm-9">
                                <section className={"codeSample"}>
                                    <pre className="language-javascript">
                                        <code>
                                            {formFieldsDataCode}
                                        </code>
                                    </pre>
                                </section>
                            </dd>
                        </dl>

                        {/*-----Next Entry-----*/}
                        <hr width={"85%"}/>

                        <dl className="row">
                            <dt className="col-sm-3"> Name</dt>
                            <dd className="col-sm-9" style={{fontStyle: "italic"}}> handlerFunction
                            </dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9">
                                <p>The callback function where the user's input are passed in as they revise a field.
                                    Must have the following parameters for proper flow: </p>
                                <p style={{marginLeft: "40px"}}> (e, &#123;name, value&#125;) </p>
                                <ul>
                                    <li><i>e</i> is the event object</li>
                                    <li><i>name</i> corresponds to the key of the form field</li>
                                    <li><i>value</i> is the user's input.</li>
                                </ul>
                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9"> A callback function</dd>

                            <dt className="col-sm-3"> Example</dt>
                            <dd className="col-sm-9">
                                <section className={"codeSample"}>
                                    <pre className="language-javascript">
                                        <code>
                                            {formFieldsHandlerCode}
                                        </code>
                                    </pre>
                                </section>
                            </dd>
                        </dl>

                        {/*====================== Additional Section ======================*/}

                        <hr width={"95%"}/>
                        <h5 style={{textAlign: "left", paddingLeft: 50, color: "#63b4cf"}}> Additional
                            Customizations </h5>

                        {/*-----Next Entry-----*/}
                        <dl className="row">
                            <dt className="col-sm-3"> Name</dt>
                            <dd className="col-sm-9" style={{fontStyle: "italic"}}> requiredFields
                            </dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9"> Specifies which fields to add a red
                                asterisk (*) after the form label to indicate a required field.
                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9"> An array of strings where each string
                                corresponds to a key/id in formFields.
                            </dd>

                            <dt className="col-sm-3"> Example</dt>
                            <dd className="col-sm-9">
                                <section className={"codeSample"}>
                                    <pre className="language-javascript">
                                        <code>
                                            {requiredFieldsCode}
                                        </code>
                                    </pre>
                                </section>
                            </dd>
                        </dl>

                        {/*-----Next Entry-----*/}
                        <hr width={"85%"}/>

                        <dl className="row">
                            <dt className="col-sm-3"> Name</dt>
                            <dd className="col-sm-9" style={{fontStyle: "italic"}}> onFormSubmit</dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9">
                                The function that gets called whenever the user submits the form by clicking "Enter".
                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9">A callback function</dd>
                        </dl>

                        {/*-----Next Entry-----*/}
                        <hr width={"85%"}/>

                        <dl className="row">
                            <dt className="col-sm-3"> Name</dt>
                            <dd className="col-sm-9" style={{fontStyle: "italic"}}> columnCount</dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9">
                                Specifies the number of columns to divide the formFields.
                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9"> A number of either 2, 3, or 4.</dd>

                            <dt className="col-sm-3"> Default</dt>
                            <dd className="col-sm-9"> 2</dd>
                        </dl>

                        {/*-----Next Entry-----*/}
                        <hr width={"85%"}/>

                        <dl className="row">
                            <dt className="col-sm-3"> Name</dt>
                            <dd className="col-sm-9"
                                style={{fontStyle: "italic"}}> fieldContainerWidth
                            </dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9">
                                Specifies the width to span the form fields by.
                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9"> A string that can either be some
                                length unit (px, cm, etc.), percentage (%), or any CSS-supported width value.
                            </dd>

                            <dt className="col-sm-3"> Example</dt>
                            <dd className="col-sm-9">
                                <section className={"codeSample"}>
                                    <pre className="language-javascript">
                                        <code>
                                            {fieldContainerWidthCode}
                                        </code>
                                    </pre>
                                </section>
                            </dd>
                        </dl>

                        {/*-----Next Entry-----*/}
                        <hr width={"85%"}/>

                        <dl className="row">
                            <dt className="col-sm-3"> Name</dt>
                            <dd className="col-sm-9" style={{fontStyle: "italic"}}> formClassName
                            </dd>

                            <dt className="col-sm-3"> Description</dt>
                            <dd className="col-sm-9">
                                Specifies a CSS class to wrap the FormFieldsComponent by for external CSS styling.
                            </dd>

                            <dt className="col-sm-3"> Value</dt>
                            <dd className="col-sm-9"> A string</dd>
                        </dl>

                    </section>

                </div>

                <ScrollUpButton showAtPosition={500}/>
            </div>
        );
    }
}

export default FormFieldsComponentInfo;