/**
 * Generated Tool: searchTool_0764
 * Domain: Search
 * ID: 0764
 */
exports.searchTool_0764 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0764:', error);
    throw error;
  }
};
