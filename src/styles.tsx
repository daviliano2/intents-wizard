import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardHeaderSelected: {
    backgroundColor: 'green',
  },
  cardContent: {
    height: 300,
  },
  contentKey: {
    fontWeight: 600,
  },
  intentDescription: {
    textAlign: 'center',
    alignItems: 'baseline',
  },
  withMarginBottom: {
    marginBottom: theme.spacing(2),
  },
  withMarginTop: {
    marginTop: theme.spacing(2),
  },
  bulkSelectionMargin: {
    marginTop: 30,
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}))
