/**
 * Generated Tool: searchTool_0710
 * Domain: Search
 * ID: 0710
 */
exports.searchTool_0710 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0710:', error);
    throw error;
  }
};
