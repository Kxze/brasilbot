import { getCovidData } from '../functions/get-covid'
import { CommandHandler } from '../command-handler'

export const covidCommandHandler: CommandHandler = async (message, countryName) => {
    const cName = countryName.join(' ')
    const countryData = await getCovidData(cName || 'Brasil')
    message.channel.send(countryData)
}
