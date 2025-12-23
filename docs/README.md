# Jekyll Academic Website for GitHub Pages

This folder contains everything you need to deploy your academic website on GitHub Pages using Jekyll.

## Quick Setup

1. **Create a new GitHub repository** named `username.github.io` (replace `username` with your GitHub username)

2. **Copy all files** from this `jekyll` folder to your repository root:
   - `_config.yml`
   - `_layouts/default.html`
   - `index.md`
   - `publications.md`
   - `projects.md`

3. **Update `_config.yml`**:
   - Change `title` to your name
   - Update `url` to `https://username.github.io`
   - Update author information

4. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose `main` branch and `/ (root)` folder
   - Click Save

5. **Your site will be live** at `https://username.github.io` within a few minutes!

## File Structure

```
your-repo/
├── _config.yml          # Site configuration
├── _layouts/
│   └── default.html     # Main layout template
├── index.md             # About page (homepage)
├── publications.md      # Publications page
├── projects.md          # Projects page
└── README.md            # This file
```

## Customization

### Adding New Pages

Create a new `.md` file with front matter:

```markdown
---
layout: default
title: Teaching
---

# Teaching

Your content here...
```

Then add it to the navigation in `_config.yml`:

```yaml
navigation:
  - title: About
    url: /
  - title: Publications
    url: /publications/
  - title: Projects
    url: /projects/
  - title: Teaching
    url: /teaching/
```

### Changing Colors

Edit the CSS variables in `_layouts/default.html`:

```css
:root {
  --color-primary: #1e293b;
  --color-accent: #7c3aed;  /* Change this for link colors */
  --color-background: #faf8f5;
}
```

### Adding a Profile Photo

Add an image to your repo and reference it in `index.md`:

```markdown
![Profile Photo](/images/profile.jpg)
```

## Local Development

To preview locally before pushing:

```bash
# Install Jekyll
gem install bundler jekyll

# Run local server
bundle exec jekyll serve

# Visit http://localhost:4000
```

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
