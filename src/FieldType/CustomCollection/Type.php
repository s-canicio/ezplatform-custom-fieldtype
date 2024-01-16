<?php

/**
 * @copyright Copyright (C) Ibexa AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace App\FieldType\CustomCollection;

use eZ\Publish\SPI\FieldType\Value as SPIValue;
use eZ\Publish\API\Repository\Values\ContentType\FieldDefinition;
use eZ\Publish\Core\FieldType\FieldType;
use eZ\Publish\Core\FieldType\ValidationError;
use App\FieldType\CustomCollection\Value\Row;

class Type extends FieldType
{
    protected $settingsSchema = [
        'minimum_rows' => [
            'type' => 'integer',
            'default' => 1,
        ],
        'columns' => [
            'type' => 'hash',
            'default' => []
        ]
    ];

    protected function createValueFromInput($inputValue)
    {
        if (is_array($inputValue)) {
            $inputValue = new Value($inputValue);
        }

        return $inputValue;
    }

    /**
     * {@inheritdoc}
     */
    public function getFieldTypeIdentifier(): string
    {
        return 'custom_matrix';
    }

    public function getEmptyValue(): SPIValue
    {
        return new Value([]);
    }

    public function fromHash($hash): SPIValue
    {
        $entries = $hash['entries'] ?? [];

        foreach ($entries as $row) {
            $rows[] = new Row($row);
        }

        return new Value($rows ?? []);
    }

    /**
     * {@inheritdoc}
     */
    public function isEmptyValue(SPIValue $value): bool
    {
        /** @var Value $value */
        return $value->getRows()->count() === 0;
    }

    /**
     * {@inheritdoc}
     */
    public function validate(FieldDefinition $fieldDefinition, SPIValue $value)
    {
        if ($this->isEmptyValue($value)) {
            return [];
        }

        $countNonEmptyRows = 0;

        /** @var Value $value */
        foreach ($value->getRows() as $row) {
            if (!$row->isEmpty()) {
                ++$countNonEmptyRows;
            }
        }

        if ($countNonEmptyRows < $fieldDefinition->fieldSettings['minimum_rows']) {
            $validationErrors[] = new ValidationError(
                'Custom Matrix must contain at least %minimum_rows% non-empty rows.',
                null,
                [
                    '%minimum_rows%' => $fieldDefinition->fieldSettings['minimum_rows'],
                ],
                $fieldDefinition->getName()
            );
        }

        return $validationErrors ?? [];
    }

    /**
     * {@inheritdoc}
     */
    public function toHash(SPIValue $value)
    {
        /** @var Value $value */
        $rows = $value->getRows();

        $hash['entries'] = [];

        foreach ($rows as $row) {
            $hash['entries'][] = $row->getCells();
        }

        return $hash;
    }

    public function isSearchable(): bool
    {
        return true;
    }

    public function getName(SPIValue $value, FieldDefinition $fieldDefinition, string $languageCode): string {
       return '';
    }

    protected function checkValueStructure(SPIValue $value) {
        // TODO: Implement checkValueStructure() method.
    }

    public function validateFieldSettings($fieldSettings): array
    {
        $minimumRows = $fieldSettings['minimum_rows'];

        if (!is_numeric($minimumRows) || $minimumRows < 0) {
            $errors[] = new ValidationError(
                'Value must be numeric positive numeric.',
                null,
                [],
                'minimum_rows'
            );
        }

        return $errors ?? [];
    }
}
