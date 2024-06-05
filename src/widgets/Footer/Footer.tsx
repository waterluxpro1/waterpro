import { Container } from '@/shared/ui/Container'
import styles from './Footer.module.scss'
import Link from 'next/link'
import { Button } from '@/shared/ui/Button'
import clsx from 'clsx'
import { Contacts } from '@/features/Contacts'
import { Card } from '@/shared/ui/Card/Card'
import { wordpress } from '@/shared/api/wordpress.service'

export const Footer = async ({ lang }: { lang: string }) => {
	try {
		const translations = await wordpress.getTranslations('footer', lang)

		return (
			<article className={styles.footer}>
				<Container className={styles.container}>
					<div className={styles.column}>
						<svg width="280" height="50" viewBox="0 0 280 50" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M264.087 27.9176C261.46 27.9176 259.21 27.3459 257.336 26.2024C255.463 25.0468 254.021 23.4411 253.012 21.3854C252.014 19.3296 251.516 16.9454 251.516 14.2327C251.516 11.5201 252.014 9.13588 253.012 7.0801C254.021 5.02433 255.463 3.42472 257.336 2.28127C259.21 1.12566 261.46 0.547852 264.087 0.547852C266.715 0.547852 268.965 1.12566 270.839 2.28127C272.724 3.42472 274.166 5.02433 275.163 7.0801C276.173 9.13588 276.678 11.5201 276.678 14.2327C276.678 16.9454 276.173 19.3296 275.163 21.3854C274.166 23.4411 272.724 25.0468 270.839 26.2024C268.965 27.3459 266.715 27.9176 264.087 27.9176ZM264.087 23.7757C265.851 23.7878 267.317 23.3986 268.485 22.6079C269.665 21.8172 270.547 20.7042 271.131 19.2688C271.727 17.8334 272.025 16.1547 272.025 14.2327C272.025 12.3108 271.727 10.6443 271.131 9.23319C270.547 7.80996 269.665 6.70301 268.485 5.91233C267.317 5.12164 265.851 4.71414 264.087 4.68981C262.324 4.67764 260.858 5.0669 259.69 5.85759C258.522 6.64827 257.64 7.7613 257.044 9.1967C256.46 10.6321 256.168 12.3108 256.168 14.2327C256.168 16.1547 256.46 17.8273 257.044 19.2505C257.628 20.6616 258.504 21.7625 259.672 22.5531C260.852 23.3438 262.324 23.7513 264.087 23.7757Z" fill="white" />
							<path d="M228.887 27.3707V1.0957H239.743C239.999 1.0957 240.327 1.10787 240.729 1.1322C241.13 1.14436 241.501 1.18085 241.842 1.24168C243.362 1.4728 244.615 1.97762 245.601 2.75613C246.598 3.53465 247.334 4.51997 247.808 5.71207C248.295 6.89201 248.538 8.20576 248.538 9.65332C248.538 11.7942 247.997 13.6371 246.914 15.182C245.832 16.7147 244.171 17.6635 241.933 18.0285L240.054 18.1927H233.284V27.3707H228.887ZM243.977 27.3707L238.795 16.6782L243.265 15.6929L248.958 27.3707H243.977ZM233.284 14.0872H239.561C239.804 14.0872 240.078 14.0751 240.382 14.0507C240.686 14.0264 240.966 13.9777 241.221 13.9048C241.951 13.7223 242.523 13.3999 242.937 12.9377C243.362 12.4754 243.66 11.9524 243.831 11.3685C244.013 10.7846 244.104 10.2129 244.104 9.65332C244.104 9.09376 244.013 8.52203 243.831 7.93815C243.66 7.34209 243.362 6.81294 242.937 6.3507C242.523 5.88845 241.951 5.5661 241.221 5.38363C240.966 5.31065 240.686 5.26807 240.382 5.25591C240.078 5.23158 239.804 5.21941 239.561 5.21941H233.284V14.0872Z" fill="white" />
							<path d="M205.578 27.3707V1.0957H216.435C216.69 1.0957 217.019 1.10787 217.42 1.1322C217.822 1.14436 218.193 1.18085 218.533 1.24168C220.054 1.4728 221.307 1.97762 222.292 2.75613C223.289 3.53465 224.025 4.51997 224.5 5.71207C224.986 6.89201 225.23 8.20576 225.23 9.65332C225.23 11.0887 224.986 12.4025 224.5 13.5946C224.013 14.7745 223.271 15.7537 222.274 16.5323C221.288 17.3108 220.042 17.8156 218.533 18.0467C218.193 18.0954 217.815 18.1319 217.402 18.1562C217 18.1805 216.678 18.1927 216.435 18.1927H209.976V27.3707H205.578ZM209.976 14.0872H216.252C216.496 14.0872 216.769 14.0751 217.073 14.0507C217.378 14.0264 217.657 13.9777 217.913 13.9048C218.643 13.7223 219.214 13.3999 219.628 12.9377C220.054 12.4754 220.352 11.9524 220.522 11.3685C220.704 10.7846 220.796 10.2129 220.796 9.65332C220.796 9.09376 220.704 8.52203 220.522 7.93815C220.352 7.34209 220.054 6.81294 219.628 6.3507C219.214 5.88845 218.643 5.5661 217.913 5.38363C217.657 5.31065 217.378 5.26807 217.073 5.25591C216.769 5.23158 216.496 5.21941 216.252 5.21941H209.976V14.0872Z" fill="white" />
							<path d="M180.992 27.3707V1.0957H191.849C192.104 1.0957 192.433 1.10787 192.834 1.1322C193.236 1.14436 193.607 1.18085 193.947 1.24168C195.468 1.4728 196.721 1.97762 197.706 2.75613C198.703 3.53465 199.439 4.51997 199.914 5.71207C200.4 6.89201 200.644 8.20576 200.644 9.65332C200.644 11.7942 200.102 13.6371 199.02 15.182C197.937 16.7147 196.277 17.6635 194.038 18.0285L192.159 18.1927H185.39V27.3707H180.992ZM196.082 27.3707L190.9 16.6782L195.37 15.6929L201.063 27.3707H196.082ZM185.39 14.0872H191.666C191.91 14.0872 192.183 14.0751 192.487 14.0507C192.792 14.0264 193.071 13.9777 193.327 13.9048C194.057 13.7223 194.628 13.3999 195.042 12.9377C195.468 12.4754 195.766 11.9524 195.936 11.3685C196.119 10.7846 196.21 10.2129 196.21 9.65332C196.21 9.09376 196.119 8.52203 195.936 7.93815C195.766 7.34209 195.468 6.81294 195.042 6.3507C194.628 5.88845 194.057 5.5661 193.327 5.38363C193.071 5.31065 192.792 5.26807 192.487 5.25591C192.183 5.23158 191.91 5.21941 191.666 5.21941H185.39V14.0872Z" fill="white" />
							<path d="M159.648 27.3707V1.0957H176.618V5.21941H164.046V11.6969H174.428V15.8206H164.046V23.247H176.618V27.3707H159.648Z" fill="white" />
							<path d="M143.831 27.3707V5.21941H135.328V1.0957H156.731V5.21941H148.228V27.3707H143.831Z" fill="white" />
							<path d="M113.383 27.3707L121.667 1.0957H128.108L136.392 27.3707H131.867L124.349 3.79619H125.334L117.908 27.3707H113.383ZM117.999 21.6778V17.5723H131.794V21.6778H117.999Z" fill="white" />
							<path d="M87.7169 27.3707L80.0352 1.0957H84.6515L89.8883 20.0721L95.1068 1.1322L99.7231 1.0957L104.96 20.0721L110.178 1.0957H114.795L107.131 27.3707H102.789L97.4058 8.68625L92.0596 27.3707H87.7169Z" fill="white" />
							<path d="M277.246 46.1838C276.427 46.1838 275.753 46.0072 275.223 45.6539C274.698 45.3006 274.375 44.8095 274.254 44.1805L275.223 44.0189C275.327 44.4153 275.561 44.7319 275.928 44.9689C276.298 45.2015 276.755 45.3179 277.298 45.3179C277.828 45.3179 278.245 45.208 278.551 44.9883C278.857 44.7643 279.01 44.4605 279.01 44.0771C279.01 43.8617 278.961 43.6872 278.862 43.5537C278.767 43.4158 278.571 43.2887 278.273 43.1724C277.976 43.0561 277.532 42.9182 276.942 42.7588C276.309 42.5865 275.813 42.4141 275.456 42.2418C275.098 42.0695 274.844 41.8713 274.693 41.6473C274.543 41.4189 274.467 41.1411 274.467 40.8136C274.467 40.4173 274.579 40.0705 274.803 39.7732C275.027 39.4716 275.337 39.239 275.734 39.0753C276.13 38.9073 276.591 38.8232 277.117 38.8232C277.642 38.8232 278.112 38.9094 278.525 39.0817C278.943 39.2498 279.279 39.4867 279.534 39.7926C279.788 40.0985 279.939 40.4539 279.986 40.8589L279.017 41.0334C278.952 40.6241 278.747 40.301 278.403 40.064C278.062 39.8227 277.629 39.6978 277.104 39.6892C276.608 39.6763 276.206 39.771 275.895 39.9735C275.585 40.1717 275.43 40.4367 275.43 40.7684C275.43 40.9536 275.486 41.1131 275.598 41.2466C275.71 41.3759 275.913 41.4986 276.206 41.615C276.503 41.7313 276.925 41.8584 277.472 41.9962C278.114 42.1599 278.618 42.3323 278.984 42.5132C279.351 42.6942 279.611 42.9074 279.766 43.153C279.921 43.3986 279.999 43.7023 279.999 44.0642C279.999 44.7233 279.753 45.2425 279.262 45.6216C278.775 45.9964 278.103 46.1838 277.246 46.1838Z" fill="white" />
							<path d="M271.754 37.6923V36.626H272.704V37.6923H271.754ZM271.754 45.9963V39.017H272.704V45.9963H271.754Z" fill="white" />
							<path d="M267.437 46.1838C266.619 46.1838 265.945 46.0072 265.415 45.6539C264.889 45.3006 264.566 44.8095 264.445 44.1805L265.415 44.0189C265.518 44.4153 265.753 44.7319 266.119 44.9689C266.49 45.2015 266.946 45.3179 267.489 45.3179C268.019 45.3179 268.437 45.208 268.743 44.9883C269.049 44.7643 269.202 44.4605 269.202 44.0771C269.202 43.8617 269.152 43.6872 269.053 43.5537C268.958 43.4158 268.762 43.2887 268.465 43.1724C268.168 43.0561 267.724 42.9182 267.134 42.7588C266.5 42.5865 266.005 42.4141 265.647 42.2418C265.29 42.0695 265.036 41.8713 264.885 41.6473C264.734 41.4189 264.659 41.1411 264.659 40.8136C264.659 40.4173 264.771 40.0705 264.995 39.7732C265.219 39.4716 265.529 39.239 265.925 39.0753C266.322 38.9073 266.783 38.8232 267.308 38.8232C267.834 38.8232 268.303 38.9094 268.717 39.0817C269.135 39.2498 269.471 39.4867 269.725 39.7926C269.979 40.0985 270.13 40.4539 270.177 40.8589L269.208 41.0334C269.143 40.6241 268.939 40.301 268.594 40.064C268.254 39.8227 267.821 39.6978 267.295 39.6892C266.8 39.6763 266.397 39.771 266.087 39.9735C265.777 40.1717 265.621 40.4367 265.621 40.7684C265.621 40.9536 265.677 41.1131 265.789 41.2466C265.901 41.3759 266.104 41.4986 266.397 41.615C266.694 41.7313 267.116 41.8584 267.664 41.9962C268.305 42.1599 268.81 42.3323 269.176 42.5132C269.542 42.6942 269.803 42.9074 269.958 43.153C270.113 43.3986 270.19 43.7023 270.19 44.0642C270.19 44.7233 269.945 45.2425 269.454 45.6216C268.967 45.9964 268.295 46.1838 267.437 46.1838Z" fill="white" />
							<path d="M260.162 46.1903C259.468 46.1903 258.876 46.033 258.384 45.7185C257.893 45.404 257.516 44.9689 257.254 44.4131C256.991 43.8574 256.859 43.2198 256.859 42.5003C256.859 41.7679 256.993 41.126 257.26 40.5745C257.527 40.0231 257.906 39.5944 258.397 39.2885C258.893 38.9783 259.481 38.8232 260.162 38.8232C260.86 38.8232 261.454 38.9805 261.945 39.295C262.441 39.6052 262.818 40.0382 263.076 40.5939C263.339 41.1454 263.47 41.7808 263.47 42.5003C263.47 43.2327 263.339 43.8768 263.076 44.4325C262.813 44.984 262.434 45.4148 261.939 45.725C261.443 46.0352 260.851 46.1903 260.162 46.1903ZM260.162 45.2791C260.937 45.2791 261.514 45.0227 261.894 44.5101C262.273 43.9931 262.462 43.3232 262.462 42.5003C262.462 41.6559 262.27 40.9838 261.887 40.4841C261.508 39.9843 260.933 39.7344 260.162 39.7344C259.64 39.7344 259.21 39.8529 258.869 40.0899C258.533 40.3225 258.281 40.6478 258.113 41.0657C257.949 41.4793 257.867 41.9575 257.867 42.5003C257.867 43.3404 258.061 44.0146 258.449 44.523C258.837 45.0271 259.408 45.2791 260.162 45.2791Z" fill="white" />
							<path d="M254.654 45.9968L254.661 41.415C254.661 40.8765 254.51 40.4543 254.208 40.1484C253.911 39.8382 253.532 39.6831 253.071 39.6831C252.808 39.6831 252.552 39.7434 252.302 39.864C252.052 39.9847 251.845 40.1785 251.681 40.4457C251.522 40.7128 251.442 41.0617 251.442 41.4925L250.88 41.331C250.867 40.8312 250.964 40.394 251.171 40.0191C251.382 39.6443 251.671 39.3535 252.037 39.1467C252.407 38.9356 252.825 38.8301 253.291 38.8301C253.993 38.8301 254.555 39.0476 254.977 39.4828C255.399 39.9136 255.611 40.4974 255.611 41.2341L255.604 45.9968H254.654ZM246.324 45.9968V39.0175H247.177V40.7365H247.281V45.9968H246.324ZM250.499 45.9968L250.505 41.4796C250.505 40.9239 250.357 40.4866 250.059 40.1678C249.766 39.8447 249.379 39.6831 248.896 39.6831C248.414 39.6831 248.024 39.849 247.727 40.1807C247.429 40.5081 247.281 40.9454 247.281 41.4925L246.712 41.1824C246.712 40.7343 246.818 40.3336 247.029 39.9804C247.24 39.6228 247.528 39.3428 247.895 39.1403C248.261 38.9335 248.676 38.8301 249.142 38.8301C249.586 38.8301 249.98 38.9249 250.324 39.1144C250.673 39.304 250.947 39.5797 251.145 39.9416C251.343 40.3035 251.442 40.7429 251.442 41.2599L251.436 45.9968H250.499Z" fill="white" />
							<path d="M242.144 46.1838C241.326 46.1838 240.652 46.0072 240.122 45.6539C239.596 45.3006 239.273 44.8095 239.152 44.1805L240.122 44.0189C240.225 44.4153 240.46 44.7319 240.826 44.9689C241.197 45.2015 241.653 45.3179 242.196 45.3179C242.726 45.3179 243.144 45.208 243.45 44.9883C243.756 44.7643 243.909 44.4605 243.909 44.0771C243.909 43.8617 243.859 43.6872 243.76 43.5537C243.665 43.4158 243.469 43.2887 243.172 43.1724C242.875 43.0561 242.431 42.9182 241.841 42.7588C241.207 42.5865 240.712 42.4141 240.354 42.2418C239.997 42.0695 239.743 41.8713 239.592 41.6473C239.441 41.4189 239.366 41.1411 239.366 40.8136C239.366 40.4173 239.478 40.0705 239.702 39.7732C239.926 39.4716 240.236 39.239 240.632 39.0753C241.029 38.9073 241.49 38.8232 242.015 38.8232C242.541 38.8232 243.01 38.9094 243.424 39.0817C243.842 39.2498 244.178 39.4867 244.432 39.7926C244.686 40.0985 244.837 40.4539 244.884 40.8589L243.915 41.0334C243.85 40.6241 243.646 40.301 243.301 40.064C242.961 39.8227 242.528 39.6978 242.002 39.6892C241.507 39.6763 241.104 39.771 240.794 39.9735C240.484 40.1717 240.328 40.4367 240.328 40.7684C240.328 40.9536 240.384 41.1131 240.497 41.2466C240.609 41.3759 240.811 41.4986 241.104 41.615C241.401 41.7313 241.823 41.8584 242.371 41.9962C243.012 42.1599 243.517 42.3323 243.883 42.5132C244.249 42.6942 244.51 42.9074 244.665 43.153C244.82 43.3986 244.897 43.7023 244.897 44.0642C244.897 44.7233 244.652 45.2425 244.161 45.6216C243.674 45.9964 243.002 46.1838 242.144 46.1838Z" fill="white" />
							<path d="M234.869 46.1903C234.175 46.1903 233.583 46.033 233.092 45.7185C232.6 45.404 232.223 44.9689 231.961 44.4131C231.698 43.8574 231.566 43.2198 231.566 42.5003C231.566 41.7679 231.7 41.126 231.967 40.5745C232.234 40.0231 232.613 39.5944 233.104 39.2885C233.6 38.9783 234.188 38.8232 234.869 38.8232C235.567 38.8232 236.161 38.9805 236.652 39.295C237.148 39.6052 237.525 40.0382 237.783 40.5939C238.046 41.1454 238.177 41.7808 238.177 42.5003C238.177 43.2327 238.046 43.8768 237.783 44.4325C237.52 44.984 237.141 45.4148 236.646 45.725C236.15 46.0352 235.558 46.1903 234.869 46.1903ZM234.869 45.2791C235.644 45.2791 236.221 45.0227 236.601 44.5101C236.98 43.9931 237.169 43.3232 237.169 42.5003C237.169 41.6559 236.978 40.9838 236.594 40.4841C236.215 39.9843 235.64 39.7344 234.869 39.7344C234.347 39.7344 233.917 39.8529 233.576 40.0899C233.24 40.3225 232.988 40.6478 232.82 41.0657C232.656 41.4793 232.575 41.9575 232.575 42.5003C232.575 43.3404 232.768 44.0146 233.156 44.523C233.544 45.0271 234.115 45.2791 234.869 45.2791Z" fill="white" />
							<path d="M224.759 46.1903C224.078 46.1903 223.488 46.0395 222.988 45.7379C222.493 45.4363 222.107 45.012 221.832 44.4648C221.556 43.9177 221.418 43.2758 221.418 42.5391C221.418 41.7765 221.554 41.1174 221.825 40.5616C222.097 40.0058 222.478 39.5772 222.969 39.2756C223.464 38.974 224.048 38.8232 224.72 38.8232C225.41 38.8232 225.998 38.9826 226.484 39.3015C226.971 39.616 227.34 40.0683 227.589 40.6585C227.839 41.2488 227.954 41.9532 227.932 42.7717H226.963V42.4357C226.945 41.5309 226.749 40.8481 226.375 40.3871C226.004 39.9261 225.461 39.6957 224.746 39.6957C223.996 39.6957 223.421 39.9391 223.021 40.4259C222.624 40.9127 222.426 41.6063 222.426 42.5068C222.426 43.3856 222.624 44.0685 223.021 44.5553C223.421 45.0378 223.988 45.2791 224.72 45.2791C225.22 45.2791 225.655 45.1649 226.026 44.9366C226.4 44.7039 226.696 44.3701 226.911 43.9349L227.796 44.2774C227.521 44.8849 227.113 45.3566 226.575 45.6927C226.041 46.0244 225.435 46.1903 224.759 46.1903ZM222.09 42.7717V41.9768H227.421V42.7717H222.09Z" fill="white" />
							<path d="M217.621 46.1838C216.802 46.1838 216.128 46.0072 215.598 45.6539C215.073 45.3006 214.75 44.8095 214.629 44.1805L215.598 44.0189C215.702 44.4153 215.936 44.7319 216.303 44.9689C216.673 45.2015 217.13 45.3179 217.673 45.3179C218.203 45.3179 218.62 45.208 218.926 44.9883C219.232 44.7643 219.385 44.4605 219.385 44.0771C219.385 43.8617 219.336 43.6872 219.237 43.5537C219.142 43.4158 218.946 43.2887 218.648 43.1724C218.351 43.0561 217.907 42.9182 217.317 42.7588C216.684 42.5865 216.188 42.4141 215.831 42.2418C215.473 42.0695 215.219 41.8713 215.068 41.6473C214.918 41.4189 214.842 41.1411 214.842 40.8136C214.842 40.4173 214.954 40.0705 215.178 39.7732C215.402 39.4716 215.712 39.239 216.109 39.0753C216.505 38.9073 216.966 38.8232 217.492 38.8232C218.017 38.8232 218.487 38.9094 218.901 39.0817C219.318 39.2498 219.654 39.4867 219.909 39.7926C220.163 40.0985 220.314 40.4539 220.361 40.8589L219.392 41.0334C219.327 40.6241 219.122 40.301 218.778 40.064C218.437 39.8227 218.004 39.6978 217.479 39.6892C216.983 39.6763 216.581 39.771 216.27 39.9735C215.96 40.1717 215.805 40.4367 215.805 40.7684C215.805 40.9536 215.861 41.1131 215.973 41.2466C216.085 41.3759 216.288 41.4986 216.581 41.615C216.878 41.7313 217.3 41.8584 217.847 41.9962C218.489 42.1599 218.993 42.3323 219.359 42.5132C219.726 42.6942 219.986 42.9074 220.141 43.153C220.296 43.3986 220.374 43.7023 220.374 44.0642C220.374 44.7233 220.128 45.2425 219.637 45.6216C219.15 45.9964 218.478 46.1838 217.621 46.1838Z" fill="white" />
							<path d="M210.609 45.9964V39.0171H211.462V40.6973L211.294 40.4776C211.372 40.2708 211.473 40.0813 211.598 39.9089C211.723 39.7323 211.859 39.588 212.005 39.476C212.186 39.3166 212.397 39.1959 212.639 39.1141C212.88 39.0279 213.123 38.9784 213.369 38.9654C213.614 38.9482 213.838 38.9654 214.041 39.0171V39.9089C213.787 39.8443 213.509 39.8292 213.207 39.8637C212.906 39.8982 212.628 40.0188 212.374 40.2256C212.141 40.4065 211.966 40.6241 211.85 40.8783C211.734 41.1282 211.656 41.3953 211.617 41.6796C211.579 41.9596 211.559 42.2375 211.559 42.5133V45.9964H210.609Z" fill="white" />
							<path d="M206.005 46.1903C205.324 46.1903 204.734 46.0395 204.234 45.7379C203.739 45.4363 203.353 45.012 203.078 44.4648C202.802 43.9177 202.664 43.2758 202.664 42.5391C202.664 41.7765 202.8 41.1174 203.071 40.5616C203.343 40.0058 203.724 39.5772 204.215 39.2756C204.71 38.974 205.294 38.8232 205.966 38.8232C206.656 38.8232 207.244 38.9826 207.731 39.3015C208.217 39.616 208.586 40.0683 208.836 40.6585C209.085 41.2488 209.2 41.9532 209.178 42.7717H208.209V42.4357C208.192 41.5309 207.995 40.8481 207.621 40.3871C207.25 39.9261 206.707 39.6957 205.992 39.6957C205.243 39.6957 204.667 39.9391 204.267 40.4259C203.87 40.9127 203.672 41.6063 203.672 42.5068C203.672 43.3856 203.87 44.0685 204.267 44.5553C204.667 45.0378 205.234 45.2791 205.966 45.2791C206.466 45.2791 206.901 45.1649 207.272 44.9366C207.647 44.7039 207.942 44.3701 208.157 43.9349L209.042 44.2774C208.767 44.8849 208.36 45.3566 207.821 45.6927C207.287 46.0244 206.681 46.1903 206.005 46.1903ZM203.336 42.7717V41.9768H208.668V42.7717H203.336Z" fill="white" />
							<path d="M198.627 45.9959L196.094 39.0166H197.057L199.118 44.7551L201.167 39.0166H202.142L199.609 45.9959H198.627Z" fill="white" />
							<path d="M192.384 46.1903C191.703 46.1903 191.113 46.0395 190.613 45.7379C190.118 45.4363 189.732 45.012 189.457 44.4648C189.181 43.9177 189.043 43.2758 189.043 42.5391C189.043 41.7765 189.179 41.1174 189.45 40.5616C189.722 40.0058 190.103 39.5772 190.594 39.2756C191.089 38.974 191.673 38.8232 192.345 38.8232C193.035 38.8232 193.623 38.9826 194.109 39.3015C194.596 39.616 194.965 40.0683 195.214 40.6585C195.464 41.2488 195.579 41.9532 195.557 42.7717H194.588V42.4357C194.57 41.5309 194.374 40.8481 194 40.3871C193.629 39.9261 193.086 39.6957 192.371 39.6957C191.621 39.6957 191.046 39.9391 190.646 40.4259C190.249 40.9127 190.051 41.6063 190.051 42.5068C190.051 43.3856 190.249 44.0685 190.646 44.5553C191.046 45.0378 191.613 45.2791 192.345 45.2791C192.845 45.2791 193.28 45.1649 193.651 44.9366C194.025 44.7039 194.321 44.3701 194.536 43.9349L195.421 44.2774C195.146 44.8849 194.738 45.3566 194.2 45.6927C193.666 46.0244 193.06 46.1903 192.384 46.1903ZM189.715 42.7717V41.9768H195.046V42.7717H189.715Z" fill="white" />
							<path d="M184.898 45.9964V39.0171H185.751V40.6973L185.583 40.4776C185.661 40.2708 185.762 40.0813 185.887 39.9089C186.012 39.7323 186.148 39.588 186.294 39.476C186.475 39.3166 186.686 39.1959 186.928 39.1141C187.169 39.0279 187.412 38.9784 187.658 38.9654C187.903 38.9482 188.127 38.9654 188.33 39.0171V39.9089C188.076 39.8443 187.798 39.8292 187.496 39.8637C187.195 39.8982 186.917 40.0188 186.663 40.2256C186.43 40.4065 186.256 40.6241 186.139 40.8783C186.023 41.1282 185.945 41.3953 185.907 41.6796C185.868 41.9596 185.848 42.2375 185.848 42.5133V45.9964H184.898Z" fill="white" />
							<path d="M179.68 45.9965V42.4358C179.68 42.0481 179.643 41.6927 179.57 41.3695C179.497 41.0421 179.378 40.7578 179.215 40.5165C179.055 40.2709 178.846 40.0814 178.588 39.9478C178.334 39.8143 178.023 39.7475 177.657 39.7475C177.321 39.7475 177.024 39.8057 176.765 39.922C176.511 40.0383 176.296 40.2063 176.119 40.426C175.947 40.6414 175.815 40.9042 175.725 41.2144C175.634 41.5246 175.589 41.8779 175.589 42.2743L174.917 42.1256C174.917 41.4105 175.042 40.8095 175.292 40.3226C175.542 39.8358 175.886 39.4675 176.326 39.2176C176.765 38.9677 177.269 38.8428 177.838 38.8428C178.256 38.8428 178.62 38.9074 178.93 39.0366C179.245 39.1659 179.51 39.3404 179.725 39.5601C179.945 39.7798 180.121 40.0318 180.255 40.3162C180.389 40.5962 180.486 40.8956 180.546 41.2144C180.606 41.5289 180.636 41.8434 180.636 42.1579V45.9965H179.68ZM174.633 45.9965V39.0173H175.492V40.7362H175.589V45.9965H174.633Z" fill="white" />
							<path d="M169.904 46.1903C169.21 46.1903 168.618 46.033 168.127 45.7185C167.636 45.404 167.259 44.9689 166.996 44.4131C166.733 43.8574 166.602 43.2198 166.602 42.5003C166.602 41.7679 166.735 41.126 167.002 40.5745C167.269 40.0231 167.648 39.5944 168.14 39.2885C168.635 38.9783 169.223 38.8232 169.904 38.8232C170.602 38.8232 171.196 38.9805 171.687 39.295C172.183 39.6052 172.56 40.0382 172.818 40.5939C173.081 41.1454 173.213 41.7808 173.213 42.5003C173.213 43.2327 173.081 43.8768 172.818 44.4325C172.556 44.984 172.176 45.4148 171.681 45.725C171.185 46.0352 170.593 46.1903 169.904 46.1903ZM169.904 45.2791C170.679 45.2791 171.257 45.0227 171.636 44.5101C172.015 43.9931 172.204 43.3232 172.204 42.5003C172.204 41.6559 172.013 40.9838 171.629 40.4841C171.25 39.9843 170.675 39.7344 169.904 39.7344C169.383 39.7344 168.952 39.8529 168.611 40.0899C168.275 40.3225 168.023 40.6478 167.855 41.0657C167.692 41.4793 167.61 41.9575 167.61 42.5003C167.61 43.3404 167.804 44.0146 168.191 44.523C168.579 45.0271 169.15 45.2791 169.904 45.2791Z" fill="white" />
							<path d="M164.102 37.6923V36.626H165.052V37.6923H164.102ZM164.102 45.9963V39.017H165.052V45.9963H164.102Z" fill="white" />
							<path d="M162.599 45.9961C162.207 46.078 161.819 46.1103 161.436 46.093C161.056 46.0758 160.716 45.994 160.414 45.8475C160.117 45.701 159.891 45.4727 159.736 45.1625C159.611 44.904 159.542 44.6433 159.529 44.3805C159.521 44.1134 159.516 43.8097 159.516 43.4693V37.0781H160.46V43.4306C160.46 43.7235 160.462 43.9691 160.466 44.1673C160.475 44.3611 160.52 44.5335 160.602 44.6843C160.757 44.9729 161.003 45.1452 161.339 45.2012C161.679 45.2573 162.099 45.2443 162.599 45.1625V45.9961ZM158.023 39.8311V39.0168H162.599V39.8311H158.023Z" fill="white" />
							<path d="M153.615 46.1903C153.089 46.1903 152.648 46.0955 152.29 45.9059C151.937 45.7164 151.672 45.4643 151.495 45.1498C151.319 44.8353 151.23 44.4928 151.23 44.1223C151.23 43.7432 151.306 43.4201 151.457 43.153C151.612 42.8816 151.821 42.6597 152.083 42.4874C152.351 42.315 152.659 42.1836 153.008 42.0932C153.361 42.007 153.751 41.9316 154.177 41.867C154.608 41.7981 155.028 41.7399 155.437 41.6925C155.851 41.6408 156.213 41.5913 156.523 41.5439L156.187 41.7507C156.2 41.0614 156.066 40.5508 155.786 40.2191C155.506 39.8874 155.02 39.7215 154.326 39.7215C153.848 39.7215 153.443 39.8292 153.111 40.0446C152.784 40.26 152.553 40.6004 152.42 41.0657L151.495 40.7942C151.655 40.1696 151.976 39.6849 152.458 39.3402C152.941 38.9956 153.568 38.8232 154.339 38.8232C154.976 38.8232 155.517 38.9439 155.961 39.1851C156.409 39.4221 156.726 39.7667 156.911 40.2191C156.997 40.4216 157.053 40.6478 157.079 40.8976C157.105 41.1475 157.118 41.4017 157.118 41.6602V45.9964H156.271V44.2451L156.517 44.3485C156.28 44.9474 155.911 45.404 155.412 45.7185C154.912 46.033 154.313 46.1903 153.615 46.1903ZM153.725 45.3696C154.169 45.3696 154.556 45.2899 154.888 45.1305C155.22 44.9711 155.487 44.7535 155.689 44.4778C155.892 44.1977 156.023 43.8832 156.084 43.5343C156.135 43.3102 156.163 43.0647 156.168 42.7976C156.172 42.5261 156.174 42.3237 156.174 42.1901L156.536 42.3775C156.213 42.4206 155.862 42.4637 155.483 42.5068C155.108 42.5498 154.737 42.5994 154.371 42.6554C154.009 42.7114 153.682 42.7782 153.389 42.8557C153.191 42.9117 152.999 42.9914 152.814 43.0948C152.628 43.1939 152.476 43.3275 152.355 43.4955C152.239 43.6635 152.18 43.8725 152.18 44.1223C152.18 44.3248 152.23 44.5208 152.329 44.7104C152.432 44.9 152.596 45.0572 152.82 45.1822C153.049 45.3071 153.35 45.3696 153.725 45.3696Z" fill="white" />
							<path d="M147.396 46.1903C146.694 46.1903 146.099 46.033 145.613 45.7185C145.126 45.404 144.755 44.9711 144.501 44.4196C144.251 43.8638 144.122 43.2262 144.113 42.5068C144.122 41.7744 144.255 41.1324 144.514 40.581C144.772 40.0252 145.145 39.5944 145.632 39.2885C146.119 38.9783 146.709 38.8232 147.403 38.8232C148.109 38.8232 148.723 38.9956 149.244 39.3402C149.77 39.6849 150.13 40.1566 150.324 40.7555L149.393 41.0527C149.229 40.6348 148.969 40.3117 148.611 40.0834C148.258 39.8507 147.853 39.7344 147.396 39.7344C146.883 39.7344 146.459 39.8529 146.123 40.0899C145.787 40.3225 145.537 40.6478 145.373 41.0657C145.21 41.4836 145.126 41.9639 145.121 42.5068C145.13 43.3425 145.324 44.0146 145.703 44.523C146.082 45.0271 146.647 45.2791 147.396 45.2791C147.87 45.2791 148.273 45.1714 148.605 44.956C148.941 44.7363 149.195 44.4174 149.367 43.9996L150.324 44.2839C150.065 44.9043 149.686 45.3782 149.186 45.7056C148.686 46.0287 148.09 46.1903 147.396 46.1903Z" fill="white" />
							<path d="M137.404 45.9967V38.5004C137.404 38.3194 137.412 38.1407 137.43 37.964C137.451 37.7874 137.492 37.6194 137.552 37.46C137.613 37.2962 137.707 37.1455 137.837 37.0076C137.979 36.8525 138.134 36.7405 138.302 36.6716C138.47 36.5983 138.645 36.5509 138.825 36.5294C139.011 36.5078 139.192 36.4971 139.368 36.4971H140.26V37.2984H139.433C139.071 37.2984 138.8 37.3867 138.619 37.5634C138.442 37.74 138.354 38.0179 138.354 38.397V45.9967H137.404ZM136.195 39.8316V39.0174H140.26V39.8316H136.195ZM141.617 37.6926V36.6263H142.567V37.6926H141.617ZM141.617 45.9967V39.0174H142.567V45.9967H141.617Z" fill="white" />
							<path d="M133.824 37.6923V36.626H134.774V37.6923H133.824ZM133.824 45.9963V39.017H134.774V45.9963H133.824Z" fill="white" />
							<path d="M129.035 45.9964V39.0171H129.888V40.6973L129.72 40.4776C129.798 40.2708 129.899 40.0813 130.024 39.9089C130.149 39.7323 130.285 39.588 130.431 39.476C130.612 39.3166 130.823 39.1959 131.064 39.1141C131.306 39.0279 131.549 38.9784 131.795 38.9654C132.04 38.9482 132.264 38.9654 132.467 39.0171V39.9089C132.212 39.8443 131.935 39.8292 131.633 39.8637C131.331 39.8982 131.054 40.0188 130.799 40.2256C130.567 40.4065 130.392 40.6241 130.276 40.8783C130.16 41.1282 130.082 41.3953 130.043 41.6796C130.004 41.9596 129.985 42.2375 129.985 42.5133V45.9964H129.035Z" fill="white" />
							<path d="M124.033 46.1704C123.615 46.1704 123.248 46.1058 122.934 45.9765C122.624 45.8473 122.359 45.6728 122.139 45.4531C121.924 45.2333 121.749 44.9835 121.616 44.7034C121.482 44.4191 121.385 44.1197 121.325 43.8052C121.265 43.4864 121.234 43.1697 121.234 42.8552V39.0166H122.191V42.5773C122.191 42.9608 122.227 43.3162 122.301 43.6436C122.374 43.971 122.49 44.2575 122.65 44.5031C122.813 44.7444 123.022 44.9318 123.276 45.0653C123.535 45.1989 123.847 45.2657 124.213 45.2657C124.55 45.2657 124.845 45.2075 125.099 45.0912C125.357 44.9748 125.573 44.809 125.745 44.5936C125.922 44.3739 126.055 44.1089 126.146 43.7987C126.236 43.4842 126.281 43.1309 126.281 42.7389L126.954 42.8875C126.954 43.6027 126.829 44.2037 126.579 44.6905C126.329 45.1773 125.984 45.5457 125.545 45.7956C125.105 46.0454 124.601 46.1704 124.033 46.1704ZM126.378 45.9959V44.2769H126.281V39.0166H127.231V45.9959H126.378Z" fill="white" />
							<path d="M116.848 46.1903C116.206 46.1903 115.663 46.0287 115.219 45.7056C114.775 45.3782 114.439 44.9366 114.211 44.3808C113.983 43.8208 113.869 43.1939 113.869 42.5003C113.869 41.7937 113.983 41.1648 114.211 40.6133C114.444 40.0575 114.784 39.6203 115.232 39.3015C115.68 38.9826 116.232 38.8232 116.886 38.8232C117.524 38.8232 118.071 38.9848 118.528 39.3079C118.985 39.631 119.334 40.0705 119.575 40.6262C119.82 41.182 119.943 41.8067 119.943 42.5003C119.943 43.1982 119.82 43.8251 119.575 44.3808C119.329 44.9366 118.976 45.3782 118.515 45.7056C118.054 46.0287 117.498 46.1903 116.848 46.1903ZM113.707 49.0983V39.0171H114.56V44.271H114.663V49.0983H113.707ZM116.751 45.3049C117.238 45.3049 117.643 45.1822 117.966 44.9366C118.289 44.691 118.53 44.3571 118.689 43.9349C118.853 43.5084 118.935 43.0302 118.935 42.5003C118.935 41.9747 118.855 41.5008 118.696 41.0786C118.537 40.6564 118.293 40.3225 117.966 40.0769C117.643 39.8314 117.231 39.7086 116.731 39.7086C116.245 39.7086 115.84 39.8271 115.516 40.064C115.198 40.301 114.959 40.6305 114.799 41.0527C114.64 41.4706 114.56 41.9532 114.56 42.5003C114.56 43.0388 114.64 43.5213 114.799 43.9479C114.959 44.3701 115.2 44.7018 115.523 44.943C115.846 45.1843 116.255 45.3049 116.751 45.3049Z" fill="white" />
							<path d="M106.469 45.9964V39.0171H107.322V40.6973L107.154 40.4776C107.231 40.2708 107.333 40.0813 107.457 39.9089C107.582 39.7323 107.718 39.588 107.865 39.476C108.046 39.3166 108.257 39.1959 108.498 39.1141C108.739 39.0279 108.983 38.9784 109.228 38.9654C109.474 38.9482 109.698 38.9654 109.9 39.0171V39.9089C109.646 39.8443 109.368 39.8292 109.067 39.8637C108.765 39.8982 108.487 40.0188 108.233 40.2256C108 40.4065 107.826 40.6241 107.71 40.8783C107.593 41.1282 107.516 41.3953 107.477 41.6796C107.438 41.9596 107.419 42.2375 107.419 42.5133V45.9964H106.469Z" fill="white" />
							<path d="M101.861 46.1903C101.18 46.1903 100.59 46.0395 100.09 45.7379C99.5944 45.4363 99.2088 45.012 98.9331 44.4648C98.6574 43.9177 98.5195 43.2758 98.5195 42.5391C98.5195 41.7765 98.6552 41.1174 98.9267 40.5616C99.1981 40.0058 99.5793 39.5772 100.07 39.2756C100.566 38.974 101.15 38.8232 101.822 38.8232C102.511 38.8232 103.099 38.9826 103.586 39.3015C104.073 39.616 104.441 40.0683 104.691 40.6585C104.941 41.2488 105.055 41.9532 105.034 42.7717H104.064V42.4357C104.047 41.5309 103.851 40.8481 103.476 40.3871C103.106 39.9261 102.563 39.6957 101.848 39.6957C101.098 39.6957 100.523 39.9391 100.122 40.4259C99.7258 40.9127 99.5277 41.6063 99.5277 42.5068C99.5277 43.3856 99.7258 44.0685 100.122 44.5553C100.523 45.0378 101.089 45.2791 101.822 45.2791C102.322 45.2791 102.757 45.1649 103.127 44.9366C103.502 44.7039 103.797 44.3701 104.012 43.9349L104.898 44.2774C104.622 44.8849 104.215 45.3566 103.676 45.6927C103.142 46.0244 102.537 46.1903 101.861 46.1903ZM99.1916 42.7717V41.9768H104.523V42.7717H99.1916Z" fill="white" />
							<path d="M97.7862 45.9961C97.3942 46.078 97.0065 46.1103 96.623 46.093C96.2439 46.0758 95.9036 45.994 95.602 45.8475C95.3047 45.701 95.0785 45.4727 94.9234 45.1625C94.7985 44.904 94.7296 44.6433 94.7167 44.3805C94.708 44.1134 94.7037 43.8097 94.7037 43.4693V37.0781H95.6472V43.4306C95.6472 43.7235 95.6494 43.9691 95.6537 44.1673C95.6623 44.3611 95.7075 44.5335 95.7894 44.6843C95.9445 44.9729 96.1901 45.1452 96.5261 45.2012C96.8664 45.2573 97.2865 45.2443 97.7862 45.1625V45.9961ZM93.2109 39.8311V39.0168H97.7862V39.8311H93.2109Z" fill="white" />
							<path d="M88.8026 46.1903C88.277 46.1903 87.8354 46.0955 87.4778 45.9059C87.1245 45.7164 86.8596 45.4643 86.6829 45.1498C86.5063 44.8353 86.418 44.4928 86.418 44.1223C86.418 43.7432 86.4934 43.4201 86.6441 43.153C86.7992 42.8816 87.0082 42.6597 87.271 42.4874C87.5381 42.315 87.8461 42.1836 88.1951 42.0932C88.5484 42.007 88.9383 41.9316 89.3648 41.867C89.7956 41.7981 90.2157 41.7399 90.6249 41.6925C91.0385 41.6408 91.4004 41.5913 91.7106 41.5439L91.3746 41.7507C91.3875 41.0614 91.2539 40.5508 90.9739 40.2191C90.6939 39.8874 90.207 39.7215 89.5134 39.7215C89.0352 39.7215 88.6302 39.8292 88.2985 40.0446C87.9711 40.26 87.7406 40.6004 87.607 41.0657L86.6829 40.7942C86.8423 40.1696 87.1633 39.6849 87.6458 39.3402C88.1283 38.9956 88.7552 38.8232 89.5263 38.8232C90.164 38.8232 90.7046 38.9439 91.1484 39.1851C91.5964 39.4221 91.9131 39.7667 92.0983 40.2191C92.1845 40.4216 92.2405 40.6478 92.2664 40.8976C92.2922 41.1475 92.3051 41.4017 92.3051 41.6602V45.9964H91.4586V44.2451L91.7041 44.3485C91.4672 44.9474 91.0988 45.404 90.5991 45.7185C90.0993 46.033 89.5005 46.1903 88.8026 46.1903ZM88.9124 45.3696C89.3562 45.3696 89.7439 45.2899 90.0756 45.1305C90.4074 44.9711 90.6745 44.7535 90.877 44.4778C91.0794 44.1977 91.2108 43.8832 91.2712 43.5343C91.3229 43.3102 91.3509 43.0647 91.3552 42.7976C91.3595 42.5261 91.3616 42.3237 91.3616 42.1901L91.7235 42.3775C91.4004 42.4206 91.0493 42.4637 90.6702 42.5068C90.2954 42.5498 89.9248 42.5994 89.5587 42.6554C89.1968 42.7114 88.8693 42.7782 88.5764 42.8557C88.3782 42.9117 88.1865 42.9914 88.0012 43.0948C87.816 43.1939 87.663 43.3275 87.5424 43.4955C87.4261 43.6635 87.3679 43.8725 87.3679 44.1223C87.3679 44.3248 87.4175 44.5208 87.5166 44.7104C87.62 44.9 87.7837 45.0572 88.0077 45.1822C88.236 45.3071 88.5376 45.3696 88.9124 45.3696Z" fill="white" />
							<path d="M78.7615 45.9965L76.6289 39.0107L77.5789 39.0172L79.2332 44.4391L80.894 39.0172H81.76L83.4208 44.4391L85.0881 39.0172H86.0316L83.899 45.9965H83.0718L81.327 40.4389L79.5886 45.9965H78.7615Z" fill="white" />
							<path d="M11.7414 17.2394C14.785 10.9537 23.4837 10.7131 27.3532 11.3921C22.5733 11.1822 15.8619 13.0024 13.2086 19.4434C10.5552 25.8843 16.3952 30.7927 19.6468 32.4417C13.5012 30.7927 7.93701 25.0966 11.7414 17.2394Z" fill="white" />
							<path d="M6.12792 28.4402C10.632 38.4277 23.7848 37.318 29.26 35.0006C24.3031 35.686 14.0005 36.6652 9.04372 27.6569C4.37998 19.1812 11.2792 11.7945 15.3613 8.26953C11.2792 9.34661 1.118 17.3312 6.12792 28.4402Z" fill="white" />
							<path d="M41.988 41.9906C55.4752 34.2672 67.538 34.7913 71.8834 36.0189C54.1422 37.3127 50.1235 42.6873 40.5177 45.6732C32.8331 48.0619 27.0566 47.8628 25.1289 47.4647C30.3043 47.2258 38.5247 43.7158 41.988 41.9906Z" fill="white" />
							<path d="M43.3287 32.0264C56.6077 27.2393 67.2609 30.5637 70.9277 32.8243C53.1504 31.4281 44.2127 37.2125 37.3375 40.404C31.6835 43.0285 26.2717 43.7284 24.3728 43.9943C14.5511 45.3507 5.94075 39.9718 2.86328 37.1128C18.9709 44.6925 26.73 38.0104 43.3287 32.0264Z" fill="white" />
							<path d="M3.61017 8.76503C-4.89966 22.2404 3.61017 32.0727 8.92881 35.3044C4.89058 32.4644 -2.39792 18.2644 10.5047 7.58985C20.8268 -0.94977 34.3073 2.79121 39.7573 5.72915C21.5557 -5.94427 8.07521 2.88914 3.61017 8.76503Z" fill="white" />
						</svg>
						<div className={styles.legals}>
							<span>
								WaterPro OÜ
							</span>
							<span>
								Reg.nr.14608633
							</span>
							<span>
								Swedbank&nbsp;nr.EE402200221070576725
							</span>
						</div>
					</div>
					<div className={styles.column}>
						<ul className={styles.menuList}>
							{translations.menu?.map((item: any) =>
								<li key={JSON.stringify(item)} className={styles.menuItem}><Link href={item.link}>{item.name}</Link></li>
							)}
						</ul>
					</div>
					<div className={clsx(styles.column, styles.last)}>
						<Button className={styles.button} appearance="light">
							{translations.contact}
						</Button>

						<Contacts className={styles.contacts} />

						<ul className={styles.socials}>
							<li className={styles.social}>
								<Link href="https://www.instagram.com/waterpro_ou/?hl=ru" target="_blank"><svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="41" height="41" rx="20.5" fill="#E41CB3" />
									<path d="M19.9995 17.3386C17.9725 17.3386 16.3382 18.9886 16.3382 21C16.3382 23.0114 17.9882 24.6614 19.9995 24.6614C22.0108 24.6614 23.6608 23.0114 23.6608 21C23.6608 18.9886 22.0108 17.3386 19.9995 17.3386ZM30.999 21C30.999 19.4757 30.999 17.9829 30.9205 16.4586C30.8419 14.6986 30.4333 13.1271 29.1448 11.8543C27.8563 10.5657 26.3007 10.1571 24.5407 10.0786C23.0165 10 21.5237 10 19.9995 10C18.4753 10 16.9825 10 15.4583 10.0786C13.6984 10.1571 12.127 10.5657 10.8542 11.8543C9.56569 13.1429 9.15714 14.6986 9.07857 16.4586C9 17.9829 9 19.4757 9 21C9 22.5243 9 24.0171 9.07857 25.5414C9.15714 27.3014 9.56569 28.8729 10.8542 30.1457C12.1427 31.4343 13.6984 31.8429 15.4583 31.9214C16.9825 32 18.4753 32 19.9995 32C21.5237 32 23.0165 32 24.5407 31.9214C26.3007 31.8429 27.872 31.4343 29.1448 30.1457C30.4333 28.8571 30.8419 27.3014 30.9205 25.5414C31.0147 24.0329 30.999 22.5243 30.999 21ZM19.9995 26.6414C16.8725 26.6414 14.3583 24.1271 14.3583 21C14.3583 17.8729 16.8725 15.3586 19.9995 15.3586C23.1265 15.3586 25.6407 17.8729 25.6407 21C25.6407 24.1271 23.1265 26.6414 19.9995 26.6414ZM25.8764 16.4429C25.1536 16.4429 24.5564 15.8614 24.5564 15.1229C24.5564 14.3843 25.1379 13.8029 25.8764 13.8029C26.6149 13.8029 27.1963 14.3843 27.1963 15.1229C27.2003 15.295 27.1689 15.4661 27.104 15.6256C27.0391 15.7851 26.9422 15.9295 26.8192 16.05C26.6987 16.173 26.5543 16.2699 26.3948 16.3348C26.2353 16.3997 26.0642 16.4311 25.8921 16.4271L25.8764 16.4429Z" fill="white" />
								</svg>
								</Link>
							</li>
							<li className={styles.social}>
								<Link href="">
									<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect width="41" height="41" rx="20.5" fill="#1978F6" />
										<path d="M23 22.65H25.8571L27 18.25H23V16.05C23 14.917 23 13.85 25.2857 13.85H27V10.154C26.6274 10.1067 25.2206 10 23.7349 10C20.632 10 18.4286 11.8227 18.4286 15.17V18.25H15V22.65H18.4286V32H23V22.65Z" fill="white" />
									</svg>
								</Link>
							</li>
						</ul>
					</div>
				</Container>
			</article>
		)
	}
	catch {
		return (
			<Container>
				<Card>Footer not loaded. Contact the site administrators</Card>
			</Container>
		)
	}
}