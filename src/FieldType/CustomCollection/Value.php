<?php

/**
 * @copyright Copyright (C) Ibexa AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace App\FieldType\CustomCollection;

use App\FieldType\CustomCollection\Value\RowsCollection;
use eZ\Publish\Core\FieldType\Value as BaseValue;

class Value extends BaseValue
{
    protected RowsCollection $rows;

    public function __construct(array $rows = [])
    {
        $this->rows = new RowsCollection($rows);
    }

    public function getRows(): RowsCollection
    {
        return $this->rows;
    }

    public function setRows(RowsCollection $rows): void
    {
        $this->rows = $rows;
    }

    public function __toString(): string
    {
        return '';
    }
}
