
import utils from 'web3-utils'
import bs58 from 'bs58'

const received_proof = {
	"block_header_lite": {
		"inner_lite": {
			"block_merkle_root": "DXwsg52H98LVjJaRNHipGqyScQZr9GBdjXrDAwTbo9Ar",
			"epoch_id": "7XciHBpUitLPSu8QBrsWp6sghvVhwXj7nzjm5FxNZbjn",
			"height": 75223751,
			"next_bp_hash": "B62QReKtyUvh4duB3TDo67m3zXAGARbdsnKCMdi1axSy",
			"next_epoch_id": "FhsQS1zgTLpZjYitRKevStmzJfUgweUTjQA1rUeNW6QR",
			"outcome_root": "HgStP57nwXYqZHBFddDE3NXqAvH3a7vijsm2mnxp1Cf4",
			"prev_state_root": "BT7kcqciJ4XXUg3GkBWyP3dNP5AJvRNLhsDP9gpJYfnR",
			"timestamp": 1664536739395278310,
			"timestamp_nanosec": "1664536739395278310"
		},
		"inner_rest_hash": "DL1JyE7MDLWLX19STzm5FE4vF1ZFz6SrchnftUNCSKnu",
		"prev_block_hash": "BV8izL1Wzsm3dXeYT3EeNSS4RcTkARfZRuQK8nnsFDby"
	},
	"block_proof": [
		{
			"direction": "Right",
			"hash": "2vmLpEDxDGajt1ZniUWcZaiyJBXVTHFGn3RyGP1wXAqd"
		}, {
			"direction": "Right",
			"hash": "AXdwYoSeiL73qf4nCLyW1tv8REB7ESSgbTW6fW6vUgJ8"
		}, {
			"direction": "Right",
			"hash": "B44Xg3fqNtZLWUpkGwajgndmzaXGqbdUi3vWonM1nnMT"
		}, {
			"direction": "Right",
			"hash": "AoTUBSmpBAbpcXXNHZKBEkS2H6ZRnwYqwVpEs7QLEKmP"
		}, {
			"direction": "Left",
			"hash": "C6qgLFLtrjreHtj49FppHNp215YBr1RNMQavJhZ8tLpY"
		}, {
			"direction": "Right",
			"hash": "H67ZLsB8weNQiaSEVV2ycohvnvTAezVgVpSWYoyKAXYS"
		}, {
			"direction": "Left",
			"hash": "B4yGpWf175LvBXG9Kf7CWHGxTwc8kuGuLTUcCdSGTdBo"
		}, {
			"direction": "Right",
			"hash": "CSoopqigLzPQXa5ocbenYthwAjYDKn22WFN6NzguZz2H"
		}, {
			"direction": "Right",
			"hash": "5s96aZ9C2ACxssTbpqQsiRTwNFGnd5ijVk72ASLmozAe"
		}, {
			"direction": "Left",
			"hash": "56MPXHDiJt59MT7zCWaAGcxUpBCbCH7FHupU2KYQ6W9i"
		}, {
			"direction": "Right",
			"hash": "AJh8n2Bwy7n59oUiwbUsTjRgzUM8Pj37sHDziTTscQb4"
		}, {
			"direction": "Right",
			"hash": "8CprRsyDEWLFs7YJJwTg53BxGVm1RXiuThKGGXU2RJuu"
		}, {
			"direction": "Left",
			"hash": "FF7r7X45NKdutx3zfmc7nErRijnir8JbfNX6Yz1rgrai"
		}, {
			"direction": "Left",
			"hash": "BxEhtZHjmVFrZLejKgm7sSrJbGdRfaaefVRRL3vXFaCk"
		}, {
			"direction": "Left",
			"hash": "9frRyVEKbBXapTib97PJSw6v6qSVqZKQ1Tqj217vZNta"
		}, {
			"direction": "Left",
			"hash": "FELV2SGpdj4EfTj4Af9k4mghzA83twVeseEDxpaMpa9H"
		}, {
			"direction": "Right",
			"hash": "4eK5CikLDjXRDro9NgDdV8miDW43qmHxckmF9XDw3KUC"
		}, {
			"direction": "Left",
			"hash": "GcQYHEaPSqZrPu6dyiJm4f7ECLztLtaAQgznfsnA2nHM"
		}, {
			"direction": "Right",
			"hash": "C9gEmRwzDswiCk7phXDJhCfGjVtfkHFZGnTtN86vc325"
		}, {
			"direction": "Right",
			"hash": "6Kj1k1pBwA7Z63PMViWhiMkgZ1maGEuBkK8tQcPLp8TD"
		}, {
			"direction": "Right",
			"hash": "4d73MhTJDv2AC25F75uZTV6oWEUfChETzytWfcZNFjW4"
		}, {
			"direction": "Left",
			"hash": "Cb5LzegmpJsy1hwgjzHZHcS6fD5UBMCWdXvQgAsosVAT"
		}, {
			"direction": "Left",
			"hash": "BYk65Mexkx71QChUVbXXVv12S9KP1jrosHPQmEctQ4Ri"
		}, {
			"direction": "Left",
			"hash": "9UVUdykWvaFvh3PnfSthmAbBWmSdmftvCfZdDdGUioq"
		}, {
			"direction": "Left",
			"hash": "59rbk8LwGtgMcZMB6PDnPkcBmicVK1ft9gitzcKpmPck"
		}, {
			"direction": "Left",
			"hash": "CFRnvW612Du9TfKRMxMyvwvghtN1SzQwKRRCAFWKwkL3"
		}
	],
	"outcome_proof": {
		"block_hash": "BYoXhvY8NQFmkEs1SGj6CQ22pHNDHSjBid9gRdSfgpMT",
		"id": "BvPMjevVZuuAa7jpvZobRMEEMzemukenKYhYoVJocsFz",
		"outcome": {
			"executor_id": "5d02ba77bee81ac7d8aaef3094a1e1c632eb7ee04ca4158f99663f66ae6897cb",
			"gas_burnt": 2428131177796,
			"logs": [],
			"metadata": {
				"gas_profile": null,
				"version": 1
			},
			"receipt_ids": ["6JJMwN9X178uH4mCmfWMacjLp4J3xNDbL9qDJJvQb69g"],
			"status": {
				"SuccessReceiptId": "6JJMwN9X178uH4mCmfWMacjLp4J3xNDbL9qDJJvQb69g"
			},
			"tokens_burnt": "242813117779600000000"
		},
		"proof": [
			{
				"direction": "Left",
				"hash": "EGLbvT6aFX7e3d78c8dr3JLZf9nZD7MYewMTBK94Zp1f"
			}, {
				"direction": "Right",
				"hash": "2RRZG1hPdLPpkwaBdievNWRNwDCvbu5cc5atr1BAnh6Z"
			}, {
				"direction": "Right",
				"hash": "PJQEQbej24AoyXARpdZVHJY8HWGwKGFcDuBfWZSo3jm"
			}, {
				"direction": "Right",
				"hash": "9Dhp4ME6CvCMmgYSN2mv73VyKTmoHvBMtFyduH7fdfyo"
			}
		]
	},
	"outcome_root_proof": [
		{
			"direction": "Right",
			"hash": "GGoCfa3CPzYtKxGKK9JagKWybcimawswmjQiioSSEHWb"
		}, {
			"direction": "Right",
			"hash": "C2soiyighq8kiJ52vzAmGBYLFNUhsAL6PcFJ3JaktQvM"
		}
	]
}

export function borshifyOutcomeProof (proof: any): Buffer {
    const statusToBuffer = (status: any): Buffer => {
      if ('SuccessValue' in status) {
        const data = Buffer.from(status.SuccessValue, 'base64')
        return Buffer.concat([
          Buffer.from([2]),
          utils.toBN(data.length).toBuffer('le', 4),
          data
        ])
      } else if ('SuccessReceiptId' in status) {
        return Buffer.concat([
          Buffer.from([3]),
          bs58.decode(status.SuccessReceiptId)
        ])
      } else {
        throw new Error('status not supported')
      }
    }

    console.log("Check #1", utils.toBN(proof.outcome_proof.proof.length).toBuffer('le', 4))
    console.log("Check #2", Buffer.concat(
        proof.outcome_proof.proof.map((p: any) =>
          Buffer.concat([
            bs58.decode(p.hash),
            Buffer.from([p.direction === 'Right' ? 1 : 0])
          ])
        )
      ))


    return Buffer.concat([
      utils.toBN(proof.outcome_proof.proof.length).toBuffer('le', 4),
      Buffer.concat(
        proof.outcome_proof.proof.map((p: any) =>
          Buffer.concat([
            bs58.decode(p.hash),
            Buffer.from([p.direction === 'Right' ? 1 : 0])
          ])
        )
      ),
  
      bs58.decode(proof.outcome_proof.block_hash),
  
      bs58.decode(proof.outcome_proof.id),
  
      Buffer.concat([
        utils
          .toBN(proof.outcome_proof.outcome.logs.length)
          .toBuffer('le', 4),
  
        utils
          .toBN(proof.outcome_proof.outcome.receipt_ids.length)
          .toBuffer('le', 4),
        Buffer.concat(
          proof.outcome_proof.outcome.receipt_ids.map((r: any) => bs58.decode(r))
        ),
  
        utils.toBN(proof.outcome_proof.outcome.gas_burnt).toBuffer('le', 8),
        utils
          .toBN(proof.outcome_proof.outcome.tokens_burnt)
          .toBuffer('le', 16),
        utils
          .toBN(proof.outcome_proof.outcome.executor_id.length)
          .toBuffer('le', 4),
        Buffer.from(proof.outcome_proof.outcome.executor_id, 'utf8'),
  
        statusToBuffer(proof.outcome_proof.outcome.status),
  
        utils.toBN(proof.outcome_root_proof.length).toBuffer('le', 4),
        Buffer.concat(
          proof.outcome_root_proof.map((orp: any) =>
            Buffer.concat([
              bs58.decode(orp.hash),
              Buffer.from([orp.direction === 'Right' ? 1 : 0])
            ])
          )
        ),
  
        bs58.decode(proof.block_header_lite.prev_block_hash),
        bs58.decode(proof.block_header_lite.inner_rest_hash),
        utils
          .toBN(proof.block_header_lite.inner_lite.height)
          .toBuffer('le', 8),
        bs58.decode(proof.block_header_lite.inner_lite.epoch_id),
        bs58.decode(proof.block_header_lite.inner_lite.next_epoch_id),
        bs58.decode(proof.block_header_lite.inner_lite.prev_state_root),
        bs58.decode(proof.block_header_lite.inner_lite.outcome_root),
        // for backward compatible in tests with old dumps
        utils
          .toBN(
            proof.block_header_lite.inner_lite.timestamp_nanosec ||
              proof.block_header_lite.inner_lite.timestamp
          )
          .toBuffer('le', 8),
        bs58.decode(proof.block_header_lite.inner_lite.next_bp_hash),
        bs58.decode(proof.block_header_lite.inner_lite.block_merkle_root),
  
        utils.toBN(proof.block_proof.length).toBuffer('le', 4),
        Buffer.concat(
          proof.block_proof.map((bp: any) =>
            Buffer.concat([
              bs58.decode(bp.hash),
              Buffer.from([bp.direction === 'Right' ? 1 : 0])
            ])
          )
        )
      ])
    ])
  }

const result = borshifyOutcomeProof(received_proof)
const stringifiedResult = JSON.stringify(result)

// console.log("Check #2", Buffer.from([p.direction === 'Right' ? 1 : 0]))
console.log("Check #2", Buffer.from([1]))
