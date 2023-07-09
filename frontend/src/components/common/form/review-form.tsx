import { useState } from 'react';
import Input from '@components/ui/form/input';
import Button from '@components/ui/button';
import { useForm } from 'react-hook-form';
import TextArea from '@components/ui/form/text-area';
import Heading from '@components/ui/heading';
import Text from '@components/ui/text';
import cn from 'classnames';
import Rate from '@components/ui/rate';
import { useTranslation } from 'src/app/i18n/client';

interface ReviewFormProps {
  className?: string;
  lang: string;
}
interface ReviewFormValues {
  name: string;
  email: string;
  cookie: string;
  message: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ lang, className = '' }) => {
  const { t } = useTranslation(lang);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewFormValues>();
  const [rating_custom_icon, set_rating_custom_icon] = useState(1);
  function onSubmit(values: ReviewFormValues) {
    console.log(values, 'review');
  }

  return (
    <div className={cn(className)}>
      <Heading className="mb-2">Write your review</Heading>
      <Text>
        Your email address will not be published. Required fields are marked*
      </Text>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center w-full mx-auto mt-5 lg:mt-7 xl:mt-9"
        noValidate
      >
        <div className="flex flex-col space-y-5 md:space-y-6 lg:space-y-7">
          <div className="pb-1.5 flex items-center">
            <label className="block text-sm leading-none cursor-pointer shrink-0 text-brand-dark md:text-15px ltr:pr-3 rtl:pl-3">
              {t('forms:label-your-rating')}
            </label>
            <Rate
              size="lg"
              defaultValue={1}
              value={rating_custom_icon}
              className="-mb-2"
              onChange={(value) => set_rating_custom_icon(value)}
            />
          </div>
          <Input
            label={t('forms:label-name-star') as string}
            {...register('name', { required: 'Name is required' })}
            error={errors.name?.message}
            variant="solid"
            lang={lang}
          />
          <TextArea
            variant="solid"
            label="forms:label-message-star"
            {...register('message', { required: 'Message is required' })}
            error={errors.message?.message}
            lang={lang}
          />
          <div className="flex flex-col space-y-5 md:flex-row md:space-y-0">
            <Input
              label={t('forms:label-name-star') as string}
              {...register('name', { required: 'Name is required' })}
              className="w-full md:w-1/2 "
              error={errors.name?.message}
              variant="solid"
              lang={lang}
            />
            <Input
              label={t('forms:label-email-star') as string}
              type="email"
              {...register('email', {
                required: 'forms:email-required',
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'forms:email-error',
                },
              })}
              className="w-full md:w-1/2 md:ltr:ml-2.5 md:rtl:mr-2.5 lg:ltr:ml-5 lg:rtl:mr-5 mt-2 md:mt-0"
              error={errors.email?.message}
              variant="solid"
              lang={lang}
            />
          </div>
          <div className="pt-1">
            <Button
              type="submit"
              className="w-full h-12 text-sm md:mt-1 lg:text-base sm:w-auto"
            >
              {t('common:button-submit')}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
