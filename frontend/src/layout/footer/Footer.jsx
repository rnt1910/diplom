import { useState } from 'react'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import styles from './Footer.module.sass'

function Footer() {

    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: ''
    })


    return (
        <footer className={styles.footer}>
            <div className={styles.form}>
                <div style={{ flex: 1 }}>
                    <h1>Поможем вы выборе</h1>
                    <span>Если у вас есть вопросы о формате или вы не знаете, что выбрать, оставьте свой номер — мы позвоним, чтобы ответить на все ваши вопросы</span>
                </div>
                <div style={{ flex: 1 }}>
                    <Input
                        placeholder={'Имя'}
                        type={'text'}
                        value={form.name}
                        button={false}
                        action={(e) => setForm({ ...form, name: e.target.value })}
                    />
                    <Input
                        placeholder={'Телефон'}
                        type={'text'}
                        value={form.phone}
                        button={false}
                        action={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                    <Input
                        placeholder={'Почта'}
                        type={'email'}
                        value={form.email}
                        button={false}
                        action={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    <Button type={'colored'}>Отправить</Button>
                </div>
            </div>
        </footer>
    )
}

export default Footer