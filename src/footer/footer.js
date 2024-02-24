import { useState, useEffect } from 'react'
const Footer = () => {

    const [newdata, setNewdata] = useState('')

    const formValidation = () => {
        const inputfield = document.querySelector(".email__address")
        const errorDisplay = document.querySelector(".display__error")
        const label = document.querySelector("label")
        inputfield.addEventListener("invalid", () => {
            label.classList.add("red__border")
            errorDisplay.classList.add("show__error")
        })

        inputfield.addEventListener("input", function () {
            if (inputfield.validity.valid) {
                label.classList.remove("red__border")
                errorDisplay.classList.remove("show__error")
            }
        })
       // console.log(inputfield)
    }

    useEffect(() => {
        formValidation()
    }, [newdata])

    const submitHandler = (evt) => {
        //  console.log("form handler", evt.target)

        evt.preventDefault()
        alert("Thank you , form has been submitted")
        setNewdata("")
    }
    const onChangeHandler = (evt) => {
        //  console.log(evt.target.value)
        setNewdata(evt.target.value)
    }

    return (
        <footer>
            <div className="footer__heading">
                <h4 className="footer__title"> Get notified when we launch</h4>
            </div>

            <form onSubmit={submitHandler}>
                <div className="form__input">
                    <label htmlFor="emailAddress">
                        <input type="email" value={newdata} aria-required="true"
                            className="email__address" onChange={onChangeHandler}
                            id="emailAddress" placeholder="Email address"
                            required />
                    </label>
                    <p className="display__error">Oops! That doesn't look like an email address</p>
                </div>
                <button className="submitbtn" type="submit">Get notified</button>
            </form>

        </footer>
    )
}
export default Footer