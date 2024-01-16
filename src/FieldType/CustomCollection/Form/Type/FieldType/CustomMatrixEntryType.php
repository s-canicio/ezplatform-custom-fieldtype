<?php
/**
 * @copyright Copyright (C) Ibexa AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
declare(strict_types=1);

namespace App\FieldType\CustomCollection\Form\Type\FieldType;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\FormView;
use Symfony\Component\Form\FormInterface;

class CustomMatrixEntryType extends AbstractType
{
    public function getName(): string {
        return $this->getBlockPrefix();
    }

    public function getBlockPrefix(): string {
        return 'custom_fieldtype_matrix_entry';
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver): void {
        $resolver->setDefined(['columns']);
        $resolver->addAllowedTypes('columns', 'array');
        $resolver->setDefaults([
            'label' => false,
        ]);
        parent::configureOptions($resolver);
    }

    /**
     * @param FormView $view
     * @param FormInterface $form
     * @param array $options
     */
    public function buildView(FormView $view, FormInterface $form, array $options): void
    {
//        $view->vars['columns'] = $options['columns'];
    }

    /**
     * @param FormBuilderInterface $builder
     * @param array<string, mixed> $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void {
        $builder
            ->add('first', ChoiceType::class, [
                'label' => 'First',
                'choices' => [
                    'Maybe' => "Maybe",
                    'Yes' => "Yes",
                    'No' => "No",
                ],
                'block_name' => 'cell',
            ])
            ->add('second', TextType::class, [
                'label' => 'Second',
            ])
            ->add('third', TextType::class, [
                'label' => 'third',
            ]);
        parent::buildForm($builder, $options);
    }
}
