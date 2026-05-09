<?php

namespace App\Enums;

enum OrderStatusEnum: string
{
    case PAID = 'paid';

    case PENDING = 'pending';

    case CANCELLED = 'cancelled';
}
