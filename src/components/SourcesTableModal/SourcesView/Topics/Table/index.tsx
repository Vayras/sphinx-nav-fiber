import { IconButton, Table as MaterialTable, Popover, TableRow } from '@mui/material'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import AddCircleIcon from '~/components/Icons/AddCircleIcon'
import CheckIcon from '~/components/Icons/CheckIcon'
import ClearIcon from '~/components/Icons/ClearIcon'
import EditTopicIcon from '~/components/Icons/EditTopicIcon'
import FilterOffIcon from '~/components/Icons/FilterOffIcon'
import MergeIcon from '~/components/Icons/MergeIcon'
import SortFilterIcon from '~/components/Icons/SortFilterIcon'
import VisibilityOff from '~/components/Icons/VisibilityOff'
import VisibilityOn from '~/components/Icons/VisibilityOn'
import { ALPHABETICALLY, DATE, EDGE_COUNT } from '~/components/SourcesTableModal/SourcesView/constants'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { putNodeData } from '~/network/fetchSourcesData'
import { useAppStore } from '~/stores/useAppStore'
import { useModal } from '~/stores/useModalStore'
import { useTopicsStore } from '~/stores/useTopicsStore'
import { colors } from '~/utils/colors'
import { StyledTableCell, StyledTableHead } from '../../common'
import { TopicTableProps } from '../../types'
import { TopicRow } from './TableRow'
import { ClipLoader } from 'react-spinners'

interface CheckboxIconProps {
  checked?: boolean
}

export const Table: React.FC<TopicTableProps> = ({
  setShowMuteUnmute,
  showMuted,
  onTopicEdit,
  onChangeFilter,
  checkedStates,
  setCheckedStates,
}) => {
  const { close } = useModal('sourcesTable')
  const [loading, setLoading] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [selectedRefId, setSelectedRefId] = React.useState<string>('')

  const checkedCount = Object.values(checkedStates).filter((isChecked) => isChecked).length

  const [setSearchFormValue, setCurrentSearch] = useAppStore((s) => [s.setSearchFormValue, s.setCurrentSearch])

  const [data, ids, total] = useTopicsStore((s) => [s.data, s.ids, s.total])

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>, refId: string) => {
    setAnchorEl(event.currentTarget)
    setSelectedRefId(refId)
  }, [])

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSearch = (search: string) => {
    setSearchFormValue(search)
    setCurrentSearch(search)
    close()
  }

  const handlePopoverAction = (action: string) => {
    onTopicEdit(selectedRefId, action)
    handleClose()
  }

  const handleChange = (option: string) => {
    onChangeFilter(option)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const handleSelectedMuteUnmute = async () => {
    setLoading(true)

    const promises: Promise<unknown>[] = []

    try {
      Object.keys(checkedStates).forEach((index) => {
        const value = checkedStates[index]

        if (value) {
          const promise = putNodeData(index, { muted_topic: showMuted })

          useTopicsStore.setState({
            ids: ids.filter((i) => i !== index),
            total: total - 1,
          })

          promises.push(promise)
        }
      })

      await Promise.all(promises)

      setLoading(false)
    } catch (error) {
      console.error('Error:', error)
      setLoading(false)
    }
  }

  return !data ? (
    <Flex>
      <Text>There is not any results for selected filters</Text>
      <FilterOffIcon />
    </Flex>
  ) : (
    <>
      {!Object.keys(data).length ? (
        <Flex>
          <Text>There is not any results for selected filters</Text>
          <FilterOffIcon />
        </Flex>
      ) : (
        <TableInnerWrapper align="center" justify={loading ? 'center' : 'flex-start'}>
          {loading ? (
            <ClipLoader color={colors.white} />
          ) : (
            <>
              <MaterialTable component="table">
                <StyledTableHead>
                  <TableRow component="tr">
                    <StyledTableCell className="empty" />
                    <StyledTableCell>
                      <SortedIcon onClick={() => handleChange(ALPHABETICALLY)}>
                        Name <SortFilterIcon />
                      </SortedIcon>
                    </StyledTableCell>
                    <StyledTableCell>
                      <SortedIcon onClick={() => handleChange(EDGE_COUNT)}>
                        Count <SortFilterIcon />
                      </SortedIcon>
                    </StyledTableCell>
                    <StyledTableCell>Edge list</StyledTableCell>
                    <StyledTableCell>
                      <SortedIcon onClick={() => handleChange(DATE)}>
                        Date <SortFilterIcon />
                      </SortedIcon>
                    </StyledTableCell>
                    <StyledTableCell>
                      <Flex px={8}>
                        <CheckboxSection onClick={setShowMuteUnmute}>
                          <CheckboxIcon checked={showMuted}>
                            <Checkmark>{showMuted && <CheckIcon />}</Checkmark>
                          </CheckboxIcon>
                          Muted
                        </CheckboxSection>
                      </Flex>
                    </StyledTableCell>
                  </TableRow>
                </StyledTableHead>
                {checkedCount > 0 && (
                  <TableRow component="tr">
                    <StyledTableCell>
                      <IconButton onClick={() => setCheckedStates({})}>
                        <ClearIcon />
                      </IconButton>
                    </StyledTableCell>
                    <StyledTableCell>
                      <StatusBarSection>
                        <CheckCountBoxSection>
                          <CheckedCount>{checkedCount}</CheckedCount>
                          selected
                        </CheckCountBoxSection>
                        <MuteStatusSection onClick={handleSelectedMuteUnmute} role="button">
                          {showMuted ? (
                            <>
                              <VisibilityOn /> Unmute All
                            </>
                          ) : (
                            <>
                              <VisibilityOff /> Mute All
                            </>
                          )}
                        </MuteStatusSection>
                      </StatusBarSection>
                    </StyledTableCell>
                  </TableRow>
                )}

                {data && (
                  <tbody>
                    {ids?.map((i: string) => (
                      <TopicRow
                        key={i}
                        checkedStates={checkedStates}
                        onClick={handleClick}
                        onSearch={handleSearch}
                        setCheckedStates={setCheckedStates}
                        topic={data[i]}
                      />
                    ))}
                  </tbody>
                )}
              </MaterialTable>
              {selectedRefId ? (
                <PopoverWrapper
                  anchorEl={anchorEl}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  id={id}
                  onClose={handleClose}
                  open={open}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                  {showMuted ? (
                    <PopoverOption onClick={() => handlePopoverAction('unMute')}>
                      {' '}
                      <VisibilityOn data-testid="" /> Unmute
                    </PopoverOption>
                  ) : (
                    <PopoverOption onClick={() => handlePopoverAction('mute')}>
                      {' '}
                      <VisibilityOff data-testid="VisibilityOff" /> Mute
                    </PopoverOption>
                  )}
                  <PopoverOption onClick={() => handlePopoverAction('editTopic')}>
                    <EditTopicIcon data-testid="EditTopicIcon" /> Rename
                  </PopoverOption>

                  <PopoverOption onClick={() => handlePopoverAction('mergeTopic')}>
                    <MergeIcon data-testid="MergeIcon" /> Merge
                  </PopoverOption>
                  <PopoverOption onClick={() => handlePopoverAction('addEdge')}>
                    <AddCircleIcon data-testid="AddCircleIcon" /> Add edge
                  </PopoverOption>
                </PopoverWrapper>
              ) : null}
            </>
          )}
        </TableInnerWrapper>
      )}
    </>
  )
}

const CheckboxSection = styled.td`
  cursor: pointer;
  display: flex;
  align-items: center;
`

const CheckboxIcon = styled.div<CheckboxIconProps>`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: ${({ checked }) => (checked ? '#618AFF' : '2px solid #CCCCCC')};
  background-color: ${({ checked }) => (checked ? '#618AFF' : 'transparent')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`

const Checkmark = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: transparent;
`

const SortedIcon = styled.span`
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;
`

const PopoverOption = styled(Flex).attrs({
  direction: 'row',
  px: 12,
  py: 8,
})`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  cursor: pointer;
  background: ${colors.BUTTON1};
  color: ${colors.white};

  &:hover {
    background: ${colors.BUTTON1_HOVER};
    color: ${colors.GRAY3};
  }
`

const PopoverWrapper = styled(Popover)`
  && {
    z-index: 9999;
  }
  .MuiPaper-root {
    min-width: 149px;
    color: ${colors.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    z-index: 1;
    font-family: Barlow;
    font-size: 14px;
    font-weight: 500;
  }
`

const CheckedCount = styled.span`
  font-family: Barlow;
  font-size: 13px;
  font-weight: 500;
  margin-right: 3px;
`

const MuteStatusSection = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  padding: 1px 8px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 1px 8px;
    border-radius: 4px;
  }
`

const CheckCountBoxSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`

const StatusBarSection = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TableInnerWrapper = styled(Flex)`
  min-height: 0;
  overflow: auto;
  flex: 1;
  width: 100%;
`
