import React from 'react'
import './index.css'

export default function Main() {
    return (
        <div className='main__div-main-container'>
            <div className='main__div-container-center-position'>
                <div className='main__div-container-title'>
                    <h1 className='main__h1-title'>
                        Тестирование знаний
                    </h1>
                </div>
                <div className='main__div-subtitle'> 
                    В этом приложении вы можете протестировать свои знания в области
                    HTML, CSS и JavaScript, выбрав один из тестов.
                </div>
            </div>
            <div className='main__div-description-test'>
                <h3>Описание теста</h3>
                <ul className='main__ul-right-padding'>
                    <li>Возможность пройти тест по HTML, CSS и JavaScript</li>
                    <li>На тест отводится 10 минут</li>
                    <li>В тесте 15 вопросов</li>
                    <li>Вопросы делятся на 3 группы сложности</li>
                    <li>Вопросы на зеленом фоне относятся к легким</li>
                    <li>Вопросы на желтом фоне относятся к средним</li>
                    <li>Вопросы на красном фоне относятся к трудным</li>
                </ul>
            </div>
            <div className='main__div-container-bottom-content'>
                Если у вас не получилось ответить на многие вопросы – не расстраивайтесь.
                Его цель – не только проверить знания, но и помочь заполнить пробелы в них.
                Многие вопросы неочевидны и требуют не только знаний, но и опыта. Удачи!
            </div>
        </div>
    )
}