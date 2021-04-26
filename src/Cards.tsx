import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { Copyright, footers } from './footerData'
import intents from './intents.json'
import { useStyles } from './styles'

interface IntentType {
  selected: boolean
}

function initialState() {
  return intents.map(() => {
    return { selected: false }
  })
}

// updateState takes care of updating only the state of one item
function updateState({ items, index }: { items: IntentType[]; index: number }) {
  let tempItemArray: IntentType[] = [...items]
  const tempItem = {
    ...(tempItemArray[index]),
    selected: !tempItemArray[index].selected,
  }
  tempItemArray[index] = tempItem

  return tempItemArray
}

interface BulkSelectionType {
  allSelected: boolean,
  items: IntentType[],
  setAllSelected(T: boolean): void,
}

// bulkSelection updates the state of all items in the state
function bulkSelection({ allSelected, items, setAllSelected }: BulkSelectionType) {
  let tempItemArray = items.map(() => ({ selected: !allSelected }))

  setAllSelected(!allSelected)

  return tempItemArray
}

export default function Pricing() {
  const [selected, setSelected] = useState(initialState())
  const [allSelected, setAllSelected] = useState(false)
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      {/* Hero unit */}
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
          Step 2: Intents
        </Typography>
        <Typography variant="h5" align="center" component="p">
          Here you can select any pretrained intent. Our pretrained intents are ready to use without
          any extra configuration.
        </Typography>
        <Typography variant="h5" align="center" component="p">
          Each intent has a <strong>name</strong>, a <strong>description</strong>, a set of{' '}
          <strong>expressions</strong> and a <strong>reply</strong>. <br />
          An expression is a possible input from a customer, for example "Hello" or "Good morning",
          and if the input of the customer matches with an expression within the intent, the AI bot
          will be able to give the right reply.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {intents.map((intent, index) => (
            <Grid item xs={6} key={intent.id}>
              <Card>
                <CardHeader
                  title={intent.name}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  data-testid={`${
                    selected[index].selected ? 'selected' : 'not-selected'
                  }`}
                  className={`${
                    selected[index].selected ? classes.cardHeaderSelected : classes.cardHeader
                  }`}
                />
                <CardContent className={classes.cardContent}>
                  <div className={classes.intentDescription}>
                    <Typography className={classes.contentKey}>Description:</Typography>
                  </div>
                  <div className={`${classes.intentDescription} ${classes.withMarginBottom}`}>
                    <Typography color="textPrimary">{intent.description}</Typography>
                  </div>
                  <div className={classes.intentDescription}>
                    <Typography className={classes.contentKey}>Expressions:</Typography>
                  </div>
                  <ul>
                    {intent.trainingData.expressions.map((expression) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={expression.text}
                      >
                        - {expression.text}
                      </Typography>
                    ))}
                  </ul>
                  <div className={`${classes.intentDescription} ${classes.withMarginTop}`}>
                    <Typography className={classes.contentKey}>Reply:</Typography>
                  </div>
                  <div className={`${classes.intentDescription} ${classes.withMarginBottom}`}>
                    <Typography color="textPrimary">{intent.reply.text}</Typography>
                  </div>
                </CardContent>
                <CardActions>
                  <Button
                    data-testid={`button-${index}`}
                    fullWidth
                    color="primary"
                    variant="contained"
                    onClick={() => setSelected((items) => updateState({ items, index }))}
                  >
                    {selected[index].selected ? 'Uncheck this intent' : 'Select this intent'}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Button
          data-testid="bulk-button"
          fullWidth
          color="primary"
          variant="contained"
          className={classes.bulkSelectionMargin}
          onClick={() =>
            setSelected((items) => bulkSelection({ allSelected, items, setAllSelected }))
          }
        >
          {allSelected ? 'Uncheck all intents' : 'Select All intents'}
        </Button>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  )
}
