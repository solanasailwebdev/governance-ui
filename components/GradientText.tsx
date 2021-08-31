const GradientText = (props) => (
  <span
    className={`${props.className} text-transparent bg-clip-text bg-gradient-to-br from-solanasail-red via-solanasail-yellow to-solanasail-green`}
  >
    {props.children}
  </span>
)

export default GradientText
