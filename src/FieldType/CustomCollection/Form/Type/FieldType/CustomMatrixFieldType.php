<?php

/**
 * @copyright Copyright (C) Ibexa AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace App\FieldType\CustomCollection\Form\Type\FieldType;

use App\FieldType\CustomCollection\Form\Transformer\FieldTypeModelTransformer;
use App\FieldType\CustomCollection\Value\Row;
use App\FieldType\CustomCollection\Value\RowsCollection;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;

class CustomMatrixFieldType extends AbstractType
{
    public function getName(): string
    {
        return $this->getBlockPrefix();
    }

    public function getBlockPrefix(): string
    {
        return 'custom_fieldtype_matrix';
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefined(['columns','minimum_rows']);
        $resolver->addAllowedTypes('columns', 'array');
        $resolver->addAllowedTypes('minimum_rows', 'integer');
        $resolver->setDefault('translation_domain', 'matrix_fieldtype');
    }

    /**
     * @param FormView $view
     * @param FormInterface $form
     * @param array<string,mixed> $options
     */
    public function buildView(FormView $view, FormInterface $form, array $options): void
    {
        $view->vars['minimum_rows'] = $options['minimum_rows'];
    }

    /**
     * @param FormBuilderInterface $builder
     * @param array<string,mixed> $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('entries', CustomMatrixCollectionType::class, [
                'minimum_rows' => $options['minimum_rows'],
                'columns' => $options['columns'],
                'entry_options' => [
                    'columns' => $options['columns'],
                ],
            ]);
        $columnsByIdentifier = array_flip(array_column($options['columns'], 'identifier'));

        // Filter out unnecessary/obsolete columns data
        $builder->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event) use ($columnsByIdentifier) {
            $value = $event->getData();

            /** @var \EzSystems\EzPlatformMatrixFieldtype\FieldType\Value\Row $originalRow */
            foreach ($value->getRows() as $originalRow) {
                $cells = $originalRow->getCells();
                $rows[] = new Row(array_intersect_key($cells, $columnsByIdentifier));
            }

            $value->setRows(new RowsCollection($rows ?? []));
        });
        $builder->addModelTransformer(new FieldTypeModelTransformer());
    }
}
