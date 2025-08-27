# 🗄️ Database Setup for Mutuchem Enterprises

This guide will help you set up a database and content management system for your agricultural website, allowing you to update content without redesigning.

## 🎯 **What You'll Get:**

- **Dynamic Content Management**: Update products, agronomists, and services without coding
- **Real-time Updates**: Changes appear instantly on your website
- **Admin Panel**: Easy-to-use interface for content management
- **Database Backup**: Your data is safely stored and backed up
- **Scalable**: Handle thousands of products and users

---

## 🚀 **Option 1: Supabase (Recommended)**

### Step 1: Create Supabase Account
1. Go to [supabase.com](https://supabase.com)
2. Sign up for a free account
3. Create a new project
4. Note down your project URL and API key

### Step 2: Set Up Database
1. In your Supabase dashboard, go to **SQL Editor**
2. Copy and paste the contents of `database/schema.sql`
3. Click **Run** to create all tables

### Step 3: Configure Environment
1. Copy `.env.example` to `.env`
2. Add your Supabase credentials:
```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

### Step 4: Install Dependencies
```bash
npm install @supabase/supabase-js
```

### Step 5: Migrate Your Data
1. Edit `scripts/migrate-data.ts` with your actual data
2. Add your Supabase service key
3. Run the migration script

### Step 6: Access Admin Panel
- Go to `/admin` on your website
- Start managing your content!

---

## 🎨 **Option 2: Builder.io CMS**

### Why Choose Builder.io CMS?
- **Visual Content Editing**: Edit content directly on your site
- **No Database Setup**: Everything is managed for you
- **Preview Changes**: See changes before publishing
- **Team Collaboration**: Multiple people can edit content

### Setup Steps:
1. [Connect Builder.io CMS MCP](#open-mcp-popover) in your project
2. Create content models for Products, Agronomists, Services
3. Import your existing data
4. Start editing visually!

---

## 📊 **Admin Panel Features**

### Dashboard
- **Overview Statistics**: Total products, agronomists, services
- **Quick Actions**: Add new content with one click
- **System Status**: Monitor database connection and performance

### Product Management
- ✅ Add/Edit/Delete products
- ✅ Manage categories (Insecticides, Fungicides, etc.)
- ✅ Upload product images
- ✅ Set stock availability
- ✅ Update pricing and features

### Agronomist Management
- ✅ Add/Edit agricultural experts
- ✅ Manage availability status
- ✅ Update contact information
- ✅ Set specializations and locations

### Services Management
- ✅ Add/Edit services offered
- ✅ Upload service images
- ✅ Manage service features and pricing
- ✅ Set service availability

---

## 🔄 **How to Update Content**

### Adding a New Product:
1. Go to `/admin/products`
2. Click "Add New Product"
3. Fill in the details:
   - Name, description, category
   - Active ingredients, usage instructions
   - Pack sizes, features
   - Upload product image
4. Click "Save" - appears on website instantly!

### Updating Agronomist Availability:
1. Go to `/admin/agronomists`
2. Find the agronomist
3. Toggle availability status
4. Changes appear immediately on the website

### Adding a New Service:
1. Go to `/admin/services`
2. Click "Add New Service"
3. Add title, description, features
4. Upload service image
5. Save - available on services page instantly!

---

## 📱 **Real-time Updates**

Your website will automatically update when you:
- Add new products
- Change agronomist availability
- Update service information
- Modify any content

**No website restart needed!** Changes appear instantly.

---

## 🛡️ **Security & Backup**

### Supabase Security:
- **Row Level Security**: Data access controls
- **API Key Protection**: Secure API access
- **Automatic Backups**: Daily database backups
- **SSL Encryption**: All data encrypted in transit

### Access Control:
- **Admin-only Access**: Only authorized users can edit content
- **Role-based Permissions**: Different access levels for team members
- **Audit Trail**: Track who made what changes

---

## 🚀 **Available MCP Integrations**

For even better content management, you can connect:

- **[Supabase MCP](#open-mcp-popover)**: Full database management
- **[Builder.io CMS MCP](#open-mcp-popover)**: Visual content editing
- **[Figma MCP](#open-mcp-popover)**: Design to code conversion

---

## 💡 **Best Practices**

### Content Organization:
1. **Use Categories**: Organize products by type (insecticides, fungicides, etc.)
2. **Consistent Naming**: Use standard naming conventions
3. **Quality Images**: Use high-resolution product images
4. **Complete Information**: Fill in all product details

### Performance:
1. **Optimize Images**: Compress images before uploading
2. **Regular Updates**: Keep agronomist availability current
3. **Monitor Stats**: Use admin dashboard to track content

### Security:
1. **Strong Passwords**: Use secure passwords for admin access
2. **Regular Backups**: Download data backups regularly
3. **Limited Access**: Only give admin access to trusted team members

---

## 🆘 **Need Help?**

### Common Issues:
1. **Database Connection Errors**: Check your environment variables
2. **Images Not Loading**: Verify image URLs and file permissions
3. **Slow Performance**: Optimize images and check internet connection

### Support:
- Check the admin dashboard for system status
- Review the migration script for data import issues
- Test the connection in the admin panel

---

## 🎉 **You're All Set!**

Once configured, you can:
- ✅ Update products without coding
- ✅ Manage agronomist profiles easily
- ✅ Add new services instantly
- ✅ Upload images and content
- ✅ See changes immediately on your website

**Your agricultural website now has a professional content management system!** 🌱✨
