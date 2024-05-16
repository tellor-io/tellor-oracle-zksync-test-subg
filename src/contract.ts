import {
  NewReport as NewReportEvent,
  NewStakeAmount as NewStakeAmountEvent,
  NewStaker as NewStakerEvent,
  ReporterSlashed as ReporterSlashedEvent,
  StakeWithdrawRequested as StakeWithdrawRequestedEvent,
  StakeWithdrawn as StakeWithdrawnEvent,
  ValueRemoved as ValueRemovedEvent
} from "../generated/Contract/Contract"
import {
  NewReport,
  NewStakeAmount,
  NewStaker,
  ReporterSlashed,
  StakeWithdrawRequested,
  StakeWithdrawn,
  ValueRemoved
} from "../generated/schema"

export function handleNewReport(event: NewReportEvent): void {
  let entity = new NewReport(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._queryId = event.params._queryId
  entity._time = event.params._time
  entity._value = event.params._value
  entity._nonce = event.params._nonce
  entity._queryData = event.params._queryData
  entity._reporter = event.params._reporter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewStakeAmount(event: NewStakeAmountEvent): void {
  let entity = new NewStakeAmount(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._newStakeAmount = event.params._newStakeAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewStaker(event: NewStakerEvent): void {
  let entity = new NewStaker(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._staker = event.params._staker
  entity._amount = event.params._amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReporterSlashed(event: ReporterSlashedEvent): void {
  let entity = new ReporterSlashed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._reporter = event.params._reporter
  entity._recipient = event.params._recipient
  entity._slashAmount = event.params._slashAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStakeWithdrawRequested(
  event: StakeWithdrawRequestedEvent
): void {
  let entity = new StakeWithdrawRequested(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._staker = event.params._staker
  entity._amount = event.params._amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStakeWithdrawn(event: StakeWithdrawnEvent): void {
  let entity = new StakeWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._staker = event.params._staker

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleValueRemoved(event: ValueRemovedEvent): void {
  let entity = new ValueRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._queryId = event.params._queryId
  entity._timestamp = event.params._timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
