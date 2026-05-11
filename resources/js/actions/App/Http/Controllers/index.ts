import DashboardController from './DashboardController'
import Pos from './Pos'
import Settings from './Settings'
const Controllers = {
    DashboardController: Object.assign(DashboardController, DashboardController),
Pos: Object.assign(Pos, Pos),
Settings: Object.assign(Settings, Settings),
}

export default Controllers