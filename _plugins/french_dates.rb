module Jekyll
  module FrenchDates
    MONTHS = %w(janvier février mars avril mai juin juillet août septembre octobre novembre décembre)

    def french_date(date)
      day = date.strftime('%-d')
      month = MONTHS[date.month - 1]
      year = date.strftime('%Y')
      "#{day} #{month} #{year}"
    end
  end
end

Liquid::Template.register_filter(Jekyll::FrenchDates)