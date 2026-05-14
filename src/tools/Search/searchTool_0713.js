/**
 * Generated Tool: searchTool_0713
 * Domain: Search
 * ID: 0713
 */
exports.searchTool_0713 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0713:', error);
    throw error;
  }
};
