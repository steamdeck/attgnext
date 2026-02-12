const fs = require('fs');
const path = require('path');

// Test the update function manually
async function testUpdate() {
  const filePath = 'src/app/(innerpage)/about/page.tsx';
  const fullPath = path.join(process.cwd(), filePath);
  
  try {
    let content = fs.readFileSync(fullPath, 'utf8');
    console.log('Original content excerpt:');
    console.log(content.substring(0, 500));
    
    // Test updating title
    const newTitle = 'DEBUG TEST - About Page Title Updated Successfully';
    const titlePattern = /(export const metadata:[^}]*?)title:\s*(['"`])((?:(?!\2).)*)\2/gs;
    
    if (titlePattern.test(content)) {
      console.log('Title pattern matched!');
      content = content.replace(titlePattern, `$1title: '${newTitle.replace(/'/g, "\\'")}'`);
      console.log('Title updated successfully');
    } else {
      console.log('Title pattern did not match');
    }
    
    // Write back to file
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log('File written successfully');
    
    // Verify the change
    const updatedContent = fs.readFileSync(fullPath, 'utf8');
    console.log('Updated content excerpt:');
    console.log(updatedContent.substring(0, 500));
    
  } catch (error) {
    console.error('Error:', error);
  }
}

testUpdate();