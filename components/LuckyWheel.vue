<template>
    <div class="contenedor-ruleta">
        <div
            class="ruleta relative mx-auto w-72 h-72 sm:w-96 sm:h-96"
            ref="ruleta"
        >
            <div
                v-for="i in numeroCasillas"
                :key="i"
                class="opcion"
                :class="'opcion-' + i"
                :style="{
                    transform: 'rotate(' + anguloCasillas * i + 'deg)',
                    borderBottomWidth: alturaCasilla + 'px',
                    borderRightWidth: tamanyoRuleta / 2 + 'px',
                    borderLeftWidth: tamanyoRuleta / 2 + 'px',
                }"
                :data-content="i"
                :data-ancho="tamanyoRuleta / 2 + 'px'"
                :data-line="tamanyoRuleta / 2 + 'px'"
            >
                <div
                    class="opcion-numero"
                    :style="{
                        transform: 'rotate(' + -anguloCasillas * i + 'deg)',
                    }"
                >
                    <!-- {{ i }} -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tamanyoRuleta: 360,
            numeroCasillas: 12,
            anguloCasillas: 30, // calculated from 360 / numeroCasillas
            grados: 75, // calculated from (180 - anguloCasillas) / 2
            alturaCasilla: 129.9038105676658, // calculated from Math.tan((grados * Math.PI) / 180) * (tamanyoRuleta / 2)
        };
    },
    mounted() {
        this.$refs.ruleta.addEventListener('click', () => {
            let numID = 'number-';
            const num =
                1 + Math.round(Math.random() * (this.numeroCasillas - 1));
            numID += num;

            const animacionRuletaEl =
                document.getElementById('animacionRuleta');
            if (animacionRuletaEl) {
                animacionRuletaEl.remove();
            }

            const styleEl = document.createElement('style');
            styleEl.id = 'animacionRuleta';
            styleEl.textContent = `#number-${num} { animation-name: number-${num}; } 
        @keyframes number-${num} {
          from { transform: rotate(0); } 
          to { transform: rotate(${
              360 * (this.numeroCasillas - 1) - this.anguloCasillas * num
          }deg); }
        }`;
            document.head.appendChild(styleEl);

            this.$refs.ruleta.removeAttribute('id');
            this.$refs.ruleta.setAttribute('id', numID);
        });
    },
    methods: {
        getRandomColor() {
            let color = '#';
            const letters = '0123456789ABCDEF';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        },
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

.ruleta {
    background-image: url('/imgs/wheel/wheel_current.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.contenedor-ruleta {
    transform: rotate(180deg);
}

.ruleta {
    /*background-color: #303030;*/
    border-radius: 360px;
    position: relative;
    overflow: hidden;

    animation-timing-function: cubic-bezier(0, 0.4, 0.4, 1.04);
    animation-duration: 5.8s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
}

.ruleta::before {
    height: 100px;
    content: '';
    width: 100px;
    position: absolute;
    z-index: 9999;
    border-radius: 360px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
}

.opcion {
    border: 0 solid transparent;
    position: absolute;
    transform-origin: top center;
    top: 50%;
}

.opcion-numero {
    position: absolute;
    display: block;
    text-align: center;
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    font-family: sans-serif;
    width: 40px;
    line-height: 40px;
    left: -20px;
    margin-top: 125px;
    transform: rotate(180deg);
}
</style>
