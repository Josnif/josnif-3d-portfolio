import { motion } from "framer-motion"
import { styles } from "../styles"
import { staggerContainer } from "../utils/motion"


const SectionWrapper = (Component, idName) => function HOC() {
    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            // A fractional `amount` never triggers for sections taller than
            // the screen (e.g. stacked projects on mobile), so trigger on entry.
            viewport={{ once: true, amount: "some", margin: "0px 0px -100px 0px" }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            {/* Anchor must come first so #links land on the top of the section */}
            <span className="hash-span" id={idName}>
                {/* &nbsps; */}
            </span>
            <Component />
        </motion.section>
    )
}

export default SectionWrapper