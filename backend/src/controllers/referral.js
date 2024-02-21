import { create, findById, list, remove, update } from "../repositories/referral"

export const getReferralList = async (req, res) => {
  try {
    const referrals = await list()
    res.status(200).send(
      {
        title: "OK",
        message: "OK",
        data: referrals
      }
    )
  } catch (error) {
    res.status(500).send(
      {
        title: "Internal Server Error",
        message: "Internal Server Error",
        data: {}
      }
    )
  }
}

export const createReferral = async (req, res) => {
  try {
    const response = await create(req.body)
    res.status(201).send(
      {
        title: "CREATED",
        message: "CREATED",
        data: response
      }
    )
  } catch (error) {
    res.status(500).send(
      {
        title: "Internal Server Error",
        message: "Internal Server Error",
        data: {}
      }
    )
  }
}

export const updateReferral = async (req, res) => {
  try {
    const response = await update(req.params.id, req.body)
    res.status(200).send(
      {
        title: "OK",
        message: "OK",
        data: response
      }
    )
  } catch (error) {
    console.log(error)
    res.status(500).send(
      {
        title: "Internal Server Error",
        message: "Internal Server Error",
        data: {}
      }
    )
  }
}

export const removeReferral = async (req, res) => {
  try {
    const response = await remove(req.params.id)
    res.status(200).send(
      {
        title: "OK",
        message: "OK",
        data: response
      }
    )
  } catch (error) {
    res.status(500).send(
      {
        title: "Internal Server Error",
        message: "Internal Server Error",
        data: {}
      }
    )
  }
}

export const getReferral = async (req, res) => {
  try {
    const response = await findById(req.params.id)
    res.status(200).send(
      {
        title: "OK",
        message: "OK",
        data: response
      }
    )
  } catch (error) {
    res.status(500).send(
      {
        title: "Internal Server Error",
        message: "Internal Server Error",
        data: {}
      }
    )
  }
}