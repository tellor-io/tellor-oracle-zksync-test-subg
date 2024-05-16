import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import { NewReport } from "../generated/schema"
import { NewReport as NewReportEvent } from "../generated/Contract/Contract"
import { handleNewReport } from "../src/contract"
import { createNewReportEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _queryId = Bytes.fromI32(1234567890)
    let _time = BigInt.fromI32(234)
    let _value = Bytes.fromI32(1234567890)
    let _nonce = BigInt.fromI32(234)
    let _queryData = Bytes.fromI32(1234567890)
    let _reporter = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newNewReportEvent = createNewReportEvent(
      _queryId,
      _time,
      _value,
      _nonce,
      _queryData,
      _reporter
    )
    handleNewReport(newNewReportEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("NewReport created and stored", () => {
    assert.entityCount("NewReport", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "NewReport",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_queryId",
      "1234567890"
    )
    assert.fieldEquals(
      "NewReport",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_time",
      "234"
    )
    assert.fieldEquals(
      "NewReport",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_value",
      "1234567890"
    )
    assert.fieldEquals(
      "NewReport",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_nonce",
      "234"
    )
    assert.fieldEquals(
      "NewReport",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_queryData",
      "1234567890"
    )
    assert.fieldEquals(
      "NewReport",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_reporter",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
