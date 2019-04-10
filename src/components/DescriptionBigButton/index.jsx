import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'



export default function DescriptionBigButton({title}){
    return (
        <Card>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                       {title}
                    </Typography>
                    <Typography component="p">
                        На выполнение теста отводится 10 минут. В тесте 15 вопросов. Максимальный балл за тест - 100. Удачи!
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Начать тест
                </Button>
                <Button size="small" color="primary">
                    Узнать больше
                </Button>
            </CardActions>
        </Card>
    )
}