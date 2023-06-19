import classes from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>React Food Delivery Cart Demo</h2>
            <p>
                Select quantity and add meals below to the cart.
            </p>
            <p>
                Pop-up cart allows modification of quantities and removal<br></br>(order button is for visual reference only).
            </p>
        </section>
    )
};

export default MealsSummary;