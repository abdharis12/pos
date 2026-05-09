<?php

namespace App\Enums;

enum OrderTypeEnum: string
{
    case TAKE_AWAY = 'takeaway';

    case DINE_IN = 'dining';
}
