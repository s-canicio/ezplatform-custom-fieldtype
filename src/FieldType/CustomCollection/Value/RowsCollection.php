<?php

/**
 * @copyright Copyright (C) Ibexa AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace App\FieldType\CustomCollection\Value;

use ArrayObject;
use eZ\Publish\Core\Base\Exceptions\InvalidArgumentType;

class RowsCollection extends ArrayObject
{
    /**
     * @param Row[] $elements
     *
     * @throws \Ibexa\Core\Base\Exceptions\InvalidArgumentType
     */
    public function __construct(array $elements = [])
    {
        parent::__construct();

        foreach ($elements as $index => $element) {
            $this->offsetSet($index, $element);
        }
    }

    /**
     * @param mixed $offset
     * @param mixed $value
     *
     * @throws \Ibexa\Core\Base\Exceptions\InvalidArgumentType
     */
    public function offsetSet($offset, $value): void
    {
        if (!$value instanceof Row) {
            throw new InvalidArgumentType(
                '$value',
                Row::class,
                $value
            );
        }

        parent::offsetSet($offset, $value);
    }
}
