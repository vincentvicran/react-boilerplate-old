import {useNavigation} from 'react-auth-navigation'
import {
  Table as MaterialTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  styled
} from '@mui/material'
import {MdEdit} from 'react-icons/md'
import {FaClipboardList} from 'react-icons/fa'

import {Tooltip} from 'src/common/tooltip'

const StyledTableRow = styled<any>(TableRow)(({theme}) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  '&:hover': {
    backgroundColor: theme.palette.action.selected
  }
}))

interface CommonTableProps {
  columns?: any
  data?: any
  actions?: any
  dataLoader?: any
  totalCount?: any
  deleteLoader?: any
  onDeleteHandler?: any
  onEditHandler?: any
  onViewHandler?: any
  // viewBug?: any;
}
export const Table = ({
  columns,
  data,
  actions,
  dataLoader,
  totalCount,
  deleteLoader,
  onDeleteHandler,
  onEditHandler,
  onViewHandler
}: CommonTableProps) => {
  const {location, navigation} = useNavigation()
  const {navigate} = navigation
  // const [visible, setVisible] = useState(false);
  // const [activeRow, setActiveRow] = useState();
  let query = useQuery()

  const pageNumber = query.get('page') || 1

  function useQuery() {
    return new URLSearchParams(location?.search)
  }

  const page = async (event: any, newPage = 1) => {
    event.preventDefault()
    navigate(location.pathname + `?page=` + Number(newPage))
  }

  return (
    <div className="custom-table">
      <TableContainer
        component={Paper}
        elevation={0}
        variant="outlined"
        style={{border: '1px solid #f1f1f1', paddingBottom: 8}}
      >
        <MaterialTable aria-label="customized table">
          <TableHead>
            <TableRow>
              {columns.map((item: any, i: number) => {
                if (item.name) {
                  return (
                    <TableCell key={i} align={`${i === 0 ? 'left' : 'center'}`}>
                      {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                    </TableCell>
                  )
                } else {
                  return (
                    <TableCell key={i} align={`${i === 0 ? 'left' : 'center'}`}>
                      {item.field.charAt(0).toUpperCase() + item.field.slice(1)}
                    </TableCell>
                  )
                }
              })}
              {actions ? <TableCell align="center">Actions</TableCell> : null}
            </TableRow>
          </TableHead>
          {data?.length ? (
            <TableBody>
              {data.map((item: any, index: number) => {
                return (
                  <StyledTableRow key={index}>
                    {columns.map((col: any, i: number) => {
                      if (col.render) {
                        return (
                          <TableCell
                            key={i}
                            align={`${i === 0 ? 'left' : 'center'}`}
                          >
                            <p>{col.render(item[col.field], item.id)}</p>
                          </TableCell>
                        )
                      } else {
                        return (
                          <TableCell
                            key={i}
                            align={`${i === 0 ? 'left' : 'center'}`}
                          >
                            <p>{item[col.field]}</p>
                          </TableCell>
                        )
                      }
                    })}
                    {actions ? (
                      <TableCell align="center" width={50}>
                        <div style={{display: 'flex'}}>
                          {onViewHandler && (
                            <div
                              onClick={() => {
                                return onViewHandler(item)
                              }}
                            >
                              <Tooltip title="View">
                                <FaClipboardList size={18} />
                              </Tooltip>
                            </div>
                          )}
                          {onEditHandler && (
                            <div
                              onClick={() => {
                                return onViewHandler(item)
                              }}
                            >
                              <Tooltip title="Edit">
                                <MdEdit size={20} />
                              </Tooltip>
                            </div>
                          )}
                        </div>
                      </TableCell>
                    ) : null}
                  </StyledTableRow>
                )
              })}
            </TableBody>
          ) : null}
        </MaterialTable>
        {!dataLoader && !data?.length ? (
          <p style={{textAlign: 'center', paddingTop: 20, paddingBottom: 20}}>
            No Data
          </p>
        ) : null}
        {dataLoader ? <div>Loading</div> : null}
      </TableContainer>

      {!dataLoader && data?.length && totalCount ? (
        <div style={{width: '100%', display: 'flex'}}>
          <Pagination
            style={{
              marginLeft: 'auto',
              marginTop: 20,
              display: 'inline-block'
            }}
            count={Math.ceil(totalCount / 10)}
            boundaryCount={1}
            page={Number(pageNumber)}
            variant="outlined"
            shape="rounded"
            onChange={page}
          />
        </div>
      ) : null}
    </div>
  )
}
