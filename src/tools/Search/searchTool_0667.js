/**
 * Generated Tool: searchTool_0667
 * Domain: Search
 * ID: 0667
 */
exports.searchTool_0667 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0667:', error);
    throw error;
  }
};
