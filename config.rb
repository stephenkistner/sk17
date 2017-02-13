###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end


helpers do
  def get_page_by_place(place)
    sitemap.resources.select do |resource|
      resource.data.place == place
    end
  end

  def get_page(title)
    sitemap.resources.select do |resource|
      resource.data.title == title
    end
  end
end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript


end

activate :directory_indexes

activate :blog do |blog|
  blog.name = "projects"
  blog.prefix = "projects"
  blog.permalink = '{pathname}.html'
  blog.sources = '{place}.html'
end

#activate :blog do |blog|
#  blog.name = "writing"
#  blog.prefix = "writing"
#  blog.layout = "article"
#end

activate :autoprefixer
