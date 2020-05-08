import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Soma = props => {
    const {min, max} = props
    return (
        <Card title="Soma dos Numeros" blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{min + max}</strong>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapStateToProps)(Soma)