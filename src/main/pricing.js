import freeversion from '../assets/icon-free.svg'
import paidversion from '../assets/icon-paid.svg'
import Card from './card'
const Pricing = () => {
    return (
        <section className="pricing__cards">
            <div className="pricing">
                <h2 className="pricing__title">
                    Our pricing plans
                </h2>
                <p className="pricing__description">
                    We only make money when our creators make money. Our plans are always affordable, and
                    it’s completely free to get started.
                </p>
            </div>
            <div className="cards">
                <Card src={freeversion} alt="free version" title="Dip your toe"
                    description="Just getting started? No problem at all! Our free plan will take you a long way."
                    subtitle="Free" item1="Unlimited products" item2="Basic analytics"
                    item3="Limited marketplace exposure" item4="10% fee per transaction"
                />

                <Card src={paidversion} alt="paid version" title="Dive right in" limebg={true}
                    description="Ready for the big time? Our paid plan will help you take your business to the next level."
                    subtitle="$25.00" subtitle2=" /month" item1="Custom domain" item2="Advanced analytics and reports"
                    item3="High marketplace visibility" item4=" 5% fee per transaction"
                />


            </div>
        </section>
    )
}
export default Pricing