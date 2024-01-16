<?php

/**
 * @copyright Copyright (C) Ibexa AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace App\FieldType\CustomCollection\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ColumnType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('first', ChoiceType::class, [
                'label' => 'First',
                'choices' => [
                    'Maybe' => "Maybe",
                    'Yes' => "Yes",
                    'No' => "No",
                ],
            ])
            ->add('second', TextType::class, [
                'label' => 'Second',
            ])
            ->add('third', TextType::class, [
                'label' => 'third',
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefault('translation_domain', 'matrix_fieldtype');
    }
}
