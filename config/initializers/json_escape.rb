class ActionView::Base
  def json_escape(s)
    result = s.to_s.gsub(/[&><]/) { |special| JSON_ESCAPE[special] }
    s.html_safe? ? result.html_safe : result
  end

  alias j json_escape
end