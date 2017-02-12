require 'spec_helper'
describe 'JEE' do

  context 'with defaults for all parameters' do
    it { should contain_class('JEE') }
  end
end
