/**
 * Generated Tool: searchTool_0184
 * Domain: Search
 * ID: 0184
 */
exports.searchTool_0184 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0184:', error);
    throw error;
  }
};
